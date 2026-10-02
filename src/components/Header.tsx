function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-xl bg-blue-700 text-sm font-black text-white shadow-sm shadow-blue-900/20">H</span>
        <div>
          <p className="text-sm font-bold tracking-tight text-slate-900">HC-TC Office</p>
          <p className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:block">Hành chính · Tổ chức</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden text-xs font-medium text-slate-500 sm:block">Thứ Sáu, 02 tháng 10, 2026</span>
        <span className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600" aria-label="Tài khoản minh họa">HC</span>
      </div>
    </header>
  );
}

export default Header;
