// src/components/WarningBanner.tsx

export function WarningBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white text-center text-sm py-2 px-4 font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="text-base">⚠️</span>
        <span>
          WARNING: This product contains nicotine. Nicotine is an addictive chemical.
        </span>
      </div>
    </div>
  );
}