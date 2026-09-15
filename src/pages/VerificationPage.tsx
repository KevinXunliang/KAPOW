// src/pages/VerificationPage.tsx

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  QrCode,
  Search,
  CheckCircle,
  XCircle,
  AlertCircle,
  X,
  Camera,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

// 验证结果类型
type VerifyResult = 'success' | 'invalid' | 'alreadyUsed' | null;

export function VerificationPage() {
  const [code, setCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<VerifyResult>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [scanOpen, setScanOpen] = useState(false);

  // 验证次数和首次验证时间
  const [verifyCount, setVerifyCount] = useState(0);
  const [firstVerifiedAt, setFirstVerifiedAt] = useState<Date | null>(null);

  // 格式化输入：大写，仅字母数字和连字符
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9-]/g, '');
    setCode(raw);
    if (errorMessage) setErrorMessage('');
  };

  // 验证防伪码
  const handleVerify = async () => {
  // 空值检查
  if (!code.trim()) {
    setErrorMessage('Please enter a verification code.');
    return;
  }

  // 长度检查
  if (code.replace(/-/g, '').length < 8) {
    setErrorMessage('Verification code must be at least 8 characters.');
    return;
  }

  setErrorMessage('');
  setIsVerifying(true);

  try {
    // 模拟 API 请求延迟
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (code.startsWith('KAPOW')) {
      // ====================================================
      // 使用 localStorage 模拟后端验证记录
      // 真实场景中，这些数据应来自后端接口
      // ====================================================
      const STORAGE_KEY = 'kapow-verification-history';
      const history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

      const now = new Date();

      if (history[code]) {
        // 已存在记录 → 次数累加，保留首次验证时间
        history[code].count += 1;
      } else {
        // 首次验证 → 创建记录，首次时间就是当前提交时间
        history[code] = {
          count: 1,
          firstVerifiedAt: now.toISOString(),
        };
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));

      setVerifyCount(history[code].count);
      setFirstVerifiedAt(new Date(history[code].firstVerifiedAt));
      setResult('success');
    } else if (code.startsWith('USED')) {
      setResult('alreadyUsed');
    } else {
      setResult('invalid');
    }
  } catch {
    setErrorMessage('Verification service is temporarily unavailable.');
  } finally {
    setIsVerifying(false);
  }
};

  // 重置状态
  const handleReset = () => {
    setCode('');
    setResult(null);
    setErrorMessage('');
    setVerifyCount(0);
    setFirstVerifiedAt(null);
  };

  // 扫码结果回调
  const handleScanResult = (scannedCode: string) => {
    setCode(scannedCode.toUpperCase().replace(/[^A-Z0-9-]/g, ''));
    setScanOpen(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-16 overflow-hidden gradient-mesh bg-cream-100">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-moss-200/30 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-terracotta-200/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-moss-100 text-moss-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            Product Authentication
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-bold text-forest-800 text-balance"
          >
            Verify Your <span className="text-moss-600">KAPOW</span> Product
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-forest-500 leading-relaxed max-w-2xl mx-auto"
          >
            Scan the QR code on your packaging or enter the 16-digit verification code
            below to confirm your product is authentic.
          </motion.p>
        </div>
      </section>

      {/* 验证卡片 */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative bg-white rounded-3xl shadow-xl shadow-forest-900/5 border border-sage-100 p-8 sm:p-10"
          >
            {/* 装饰 */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-moss-50 blur-2xl pointer-events-none" />

            <div className="relative">
              {/* 输入标签 */}
              <label className="block text-sm font-medium text-forest-700 mb-3">
                Verification Code
              </label>

              {/* 输入框 + 扫码按钮 */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-300 pointer-events-none" />
                  <input
                    type="text"
                    value={code}
                    onChange={handleCodeChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                    placeholder="e.g. KAPOW-XXXX-XXXX-XXXX"
                    maxLength={24}
                    disabled={isVerifying}
                    className={`
                      w-full pl-12 pr-4 py-3.5 rounded-xl border bg-cream-50/50
                      text-forest-800 placeholder-forest-300 tracking-wider font-mono text-sm
                      focus:outline-none focus:ring-2 focus:ring-moss-400 focus:border-transparent focus:bg-white
                      transition-all duration-200
                      ${errorMessage ? 'border-rose-400 focus:ring-rose-400/60' : 'border-sage-200'}
                      ${isVerifying ? 'opacity-70 cursor-not-allowed' : ''}
                    `}
                  />
                </div>

                {/* 扫码按钮 */}
                <button
                  onClick={() => setScanOpen(true)}
                  disabled={isVerifying}
                  className="
                    inline-flex items-center justify-center gap-2
                    bg-cream-100 hover:bg-cream-200 text-forest-700 font-semibold
                    py-3.5 px-5 rounded-xl border border-sage-200 transition-colors
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  <QrCode className="w-4 h-4" />
                  Scan
                </button>
              </div>

              {/* 错误提示 */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -4, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 flex items-center gap-2 text-sm text-rose-600">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 验证按钮 */}
              <button
                onClick={handleVerify}
                disabled={isVerifying}
                className="
                  mt-6 w-full inline-flex items-center justify-center gap-2
                  bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold
                  py-3.5 px-6 rounded-xl transition-all
                  shadow-lg shadow-moss-600/20 hover:shadow-xl hover:shadow-moss-600/30
                  disabled:opacity-70 disabled:cursor-not-allowed
                "
              >
                {isVerifying ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Verifying...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    Verify Product
                  </>
                )}
              </button>

              {/* 提示文字 */}
              <p className="mt-4 text-xs text-forest-400 text-center">
                Enter the code exactly as it appears on your packaging.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 操作指引 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How to Verify"
            title="Find Your Code"
            subtitle="Locate the QR code or verification code on your KAPOW packaging."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* 步骤 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-cream-100 aspect-[4/3] mb-5">
                <img
                  src="/images/verify_1.jpg"
                  alt="Locate the verification code"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <span className="w-5 h-5 rounded-full bg-moss-600 text-white flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <span className="text-xs font-semibold text-forest-700">Locate</span>
                </div>
              </div>
              <h3 className="font-bold text-lg text-forest-800 mb-2">
                Find the Code on Your Packaging
              </h3>
              <p className="text-sm text-forest-500 leading-relaxed">
                The verification code is printed on the back of your KAPOW box, usually located
                near the barcode or on the inside flap.
              </p>
            </motion.div>

            {/* 步骤 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-cream-100 aspect-[4/3] mb-5">
                <img
                  src="/images/verify_2.jpg"
                  alt="Scan or enter the code"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <span className="w-5 h-5 rounded-full bg-moss-600 text-white flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <span className="text-xs font-semibold text-forest-700">Verify</span>
                </div>
              </div>
              <h3 className="font-bold text-lg text-forest-800 mb-2">
                Scan or Type the Code
              </h3>
              <p className="text-sm text-forest-500 leading-relaxed">
                Use the <strong className="text-forest-700">Scan</strong> button to scan the QR
                code with your camera, or manually type the alphanumeric code into the field
                above.
              </p>
            </motion.div>
          </div>

          {/* 底部信任提示 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <div className="inline-flex items-start gap-3 bg-moss-50 border border-moss-200 rounded-2xl px-5 py-4 max-w-2xl">
              <Sparkles className="w-5 h-5 text-moss-500 shrink-0 mt-0.5" />
              <p className="text-sm text-forest-600 leading-relaxed">
                <strong className="text-forest-800">100% Authentic Guarantee.</strong> Every
                KAPOW product comes with a unique verification code. If your code doesn&apos;t
                verify, please contact our support team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 扫码弹窗 */}
      <AnimatePresence>
        {scanOpen && (
          <ScanModal onClose={() => setScanOpen(false)} onScan={handleScanResult} />
        )}
      </AnimatePresence>

      {/* 结果弹窗 */}
      <AnimatePresence>
        {result && (
          <ResultModal
            result={result}
            code={code}
            verifyCount={verifyCount}
            firstVerifiedAt={firstVerifiedAt}
            onClose={() => setResult(null)}
            onReset={handleReset}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================================
// 扫码弹窗
// ============================================================
function ScanModal({
  onClose,
  onScan,
}: {
  onClose: () => void;
  onScan: (code: string) => void;
}) {
  const scannerRef = useRef<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let mounted = true;

    const startScanner = async () => {
      try {
        const { Html5Qrcode } = await import('html5-qrcode');
        const scanner = new Html5Qrcode('qr-reader');
        scannerRef.current = scanner;

        await scanner.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText: string) => {
            if (mounted) {
              scanner.stop().catch(() => {});
              onScan(decodedText);
            }
          },
          () => {
            // 忽略每一帧的解析失败
          }
        );
      } catch (err) {
        if (mounted) {
          setError(
            'Camera access unavailable. Please type your verification code manually.'
          );
        }
      }
    };

    // 延迟启动，等待 DOM 渲染
    const timer = setTimeout(startScanner, 300);

    return () => {
      mounted = false;
      clearTimeout(timer);
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, [onScan]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest-900/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
      >
        {/* 头部 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sage-100">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-moss-600" />
            <h3 className="font-bold text-forest-800">Scan QR Code</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-sage-100 transition-colors text-forest-500"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 扫码区域 */}
        <div className="p-6">
          {error ? (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200">
              <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <p className="text-sm text-rose-700">{error}</p>
            </div>
          ) : (
            <>
              <div
                id="qr-reader"
                className="w-full rounded-2xl overflow-hidden bg-forest-900 aspect-square"
              />
              <p className="mt-4 text-xs text-forest-400 text-center">
                Point your camera at the QR code on your packaging.
              </p>
            </>
          )}
        </div>

        {/* 底部 */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-cream-100 hover:bg-cream-200 text-forest-700 font-medium text-sm transition-colors"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================
// 结果弹窗
// ============================================================
function ResultModal({
  result,
  code,
  verifyCount,
  firstVerifiedAt,
  onClose,
  onReset,
}: {
  result: VerifyResult;
  code: string;
  verifyCount: number;
  firstVerifiedAt: Date | null;
  onClose: () => void;
  onReset: () => void;
}) {
  const config = {
    success: {
      icon: CheckCircle,
      iconBg: 'bg-moss-100',
      iconColor: 'text-moss-600',
      accent: 'from-moss-50 to-sage-50',
      title: 'Authentic Product',
      subtitle: 'Verification successful',
      message:
        'Your product is verified as authentic. Thank you for choosing KAPOW — enjoy crafted flavour and premium performance.',
      primaryLabel: 'Done',
      showSecondary: false,
    },
    invalid: {
      icon: XCircle,
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      accent: 'from-rose-50 to-cream-50',
      title: 'Invalid Code',
      subtitle: 'Verification failed',
      message:
        'We could not find this code in our system. Please double-check the code on your packaging and try again. If the problem persists, contact our support team.',
      primaryLabel: 'Try Again',
      showSecondary: true,
    },
    alreadyUsed: {
      icon: AlertCircle,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      accent: 'from-amber-50 to-cream-50',
      title: 'Code Already Used',
      subtitle: 'Previously verified',
      message:
        'This code has already been used to verify a product. If you purchased this product as new, it may not be genuine. Please contact our support team.',
      primaryLabel: 'Try Another Code',
      showSecondary: true,
    },
  };

  const c = result ? config[result] : config.success;
  const Icon = c.icon;
  const isSuccess = result === 'success';
  const isRepeatVerification = isSuccess && verifyCount > 1;

  // 格式化首次验证时间（英文格式）
  const formattedFirstDate = firstVerifiedAt
    ? firstVerifiedAt.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Just now';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest-900/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
      >
        {/* 装饰背景 */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-50 pointer-events-none`}
        />

        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg hover:bg-white/60 transition-colors text-forest-500"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 内容 */}
        <div className="relative p-8 sm:p-10 text-center">
          {/* 图标 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: 'spring', damping: 15 }}
            className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${c.iconBg} mb-6`}
          >
            <Icon className={`w-10 h-10 ${c.iconColor}`} />
          </motion.div>

          {/* 标题 */}
          <h3 className="text-2xl font-bold text-forest-800 mb-1">{c.title}</h3>
          <p className="text-sm text-forest-400 mb-5">{c.subtitle}</p>

          {/* 信息 */}
          <p className="text-sm text-forest-600 leading-relaxed mb-6">{c.message}</p>

          {/* 验证码 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 border border-sage-200 mb-6">
            <span className="text-xs text-forest-400">Code:</span>
            <span className="font-mono text-sm font-semibold text-forest-700 tracking-wide">
              {code}
            </span>
          </div>

          {/* ============================================
              防伪提示 - 仅验证成功时显示
              ============================================ */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-left"
            >
              {/* 重复验证提醒 */}
              {isRepeatVerification && (
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50 border border-amber-200 mb-3">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700 leading-relaxed">
                    <strong className="font-semibold">
                      This code has been verified before.
                    </strong>{' '}
                    If you purchased this product as new, please contact support.
                  </p>
                </div>
              )}

              {/* 验证记录 */}
              <div className="rounded-2xl bg-white/80 border border-sage-200 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-sage-100">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-moss-600" />
                    <span className="text-xs font-medium text-forest-600">
                      Verification Count
                    </span>
                  </div>
                  <span className="text-sm font-bold text-forest-800">
                    {verifyCount === 1 ? 'First time' : `#${verifyCount}`}
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-moss-600" />
                    <span className="text-xs font-medium text-forest-600">
                      First Verified
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-forest-800 text-right">
                    {formattedFirstDate}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* 按钮 */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                onReset();
                onClose();
              }}
              className={`
                w-full py-3.5 rounded-xl font-semibold transition-all
                ${
                  result === 'success'
                    ? 'bg-moss-600 hover:bg-moss-700 text-white shadow-lg shadow-moss-600/20'
                    : 'bg-forest-800 hover:bg-forest-900 text-white'
                }
              `}
            >
              {c.primaryLabel}
            </button>

            {c.showSecondary && (
              <a
                href="/contact"
                className="w-full py-3.5 rounded-xl font-semibold bg-white/80 hover:bg-white text-forest-700 border border-sage-200 transition-colors text-center"
              >
                Contact Support
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}