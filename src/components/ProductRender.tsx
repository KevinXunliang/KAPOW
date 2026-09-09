import { motion } from 'framer-motion';

type ProductRenderProps = {
  accent?: string;
  gradient?: string;
  className?: string;
  floating?: boolean;
};

export function ProductRender({
  accent = '#357d57',
  gradient = 'linear-gradient(135deg, #86b99a 0%, #1f513a 100%)',
  className = '',
  floating = true,
}: ProductRenderProps) {
  const image = (
    <div className="relative flex h-[340px] w-[260px] items-center justify-center">
      <img
        src="/images/image.png"
        alt="KAPOW 85K device"
        className="relative z-10 h-full w-full object-contain mix-blend-multiply drop-shadow-[0_24px_24px_rgba(23,45,29,0.24)]"
      />
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      {floating ? (
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          {image}
        </motion.div>
      ) : (
        image
      )}

      <div
        className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-30"
        style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 68%)` }}
      />
      <div
        className="absolute bottom-1 left-1/2 h-8 w-40 -translate-x-1/2 rounded-full blur-xl opacity-25"
        style={{ background: gradient }}
      />
    </div>
  );
}
