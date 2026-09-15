import { useEffect, useState } from 'react';
import { Leaf, ShieldCheck } from 'lucide-react';

const STORAGE_KEY = 'kapow-age-verified';

export function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setShow(true);
    }
  }, []);

  const verify = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setShow(false);
  };

  const deny = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest-900/80 backdrop-blur-md">
      <div className="bg-cream-50 rounded-3xl shadow-2xl max-w-md w-full p-8 sm:p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-moss-100 text-moss-600 mb-6">
          <Leaf className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-forest-800 mb-3">Welcome to KAPOW</h2>
        <p className="text-forest-600 text-sm leading-relaxed mb-6">
          KAPOW is a premium vape brand intended for adults of legal age.
          Please confirm you are 21 years or older to enter.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={verify}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-moss-600 hover:bg-moss-700 text-cream-50 font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            I am 21 or older
          </button>
          <button
            onClick={deny}
            className="flex-1 bg-sage-100 hover:bg-sage-200 text-forest-700 font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            I am under 21
          </button>
        </div>
        <p className="mt-6 text-xs text-forest-400">
          Intended for adult use only. Keep out of reach of children.
        </p>
      </div>
    </div>
  );
}
