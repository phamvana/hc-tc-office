import type { ReactNode } from "react";

type NavigationIconName = "grid" | "calendar" | "users";

const navigationItems = [
  { label: "Tổng quan", icon: "grid" as const },
  { label: "Lịch công tác", icon: "calendar" as const, active: true },
  { label: "Cán bộ", icon: "users" as const },
];

function Sidebar() {
  return (
    <aside className="border-b border-slate-200 bg-white px-3 py-3 md:min-h-[calc(100vh-4rem)] md:w-60 md:shrink-0 md:border-b-0 md:border-r md:px-4 md:py-6">
      <p className="hidden px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 md:block">Không gian làm việc</p>
      <nav aria-label="Điều hướng chính">
        <ul className="flex gap-2 overflow-x-auto md:flex-col">
          {navigationItems.map((item) => (
            <li key={item.label} className="shrink-0">
              <span
                aria-current={item.active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold md:text-sm ${item.active ? "bg-blue-50 text-blue-800" : "text-slate-500"}`}
              >
                <NavigationIcon name={item.icon} />
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 hidden rounded-xl bg-slate-50 p-4 md:block">
        <p className="text-xs font-semibold text-slate-700">Không gian nội bộ</p>
        <p className="mt-1 text-[11px] leading-5 text-slate-500">Công cụ hỗ trợ công tác hành chính và tổ chức.</p>
      </div>
    </aside>
  );
}

function NavigationIcon({ name }: { name: NavigationIconName }) {
  const paths: Record<NavigationIconName, ReactNode> = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M14 3.13a4 4 0 0 1 0 7.75" /><circle cx="10" cy="7" r="4" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4 shrink-0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default Sidebar;
