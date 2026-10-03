import Card from "../../components/Card/Card";
import { leaders, scheduleEvents, weekDays } from "../../data/scheduleMockData";
import WeeklySchedule from "./WeeklySchedule";

function formatDateRange() {
  return "05 – 11 tháng 10, 2026";
}

function LeadershipSchedulePage() {
  const eventCount = scheduleEvents.length;
  const daysWithEvents = new Set(scheduleEvents.map((event) => event.date)).size;

  return (
    <div className="mx-auto max-w-[1600px] space-y-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            Phòng Hành chính - Tổ chức
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Lịch công tác lãnh đạo
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Theo dõi lịch làm việc trong tuần của lãnh đạo cơ quan.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
            <span className="flex size-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.8">
                <rect x="3.5" y="5" width="17" height="15" rx="2" />
                <path d="M7.5 3.5v3M16.5 3.5v3M3.5 9.5h17" />
              </svg>
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Tuần mẫu</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-800">{formatDateRange()}</p>
            </div>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
            Tuần 41
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <SummaryCard label="Lãnh đạo" value={leaders.length.toString().padStart(2, "0")} detail="01 Giám đốc · 06 Phó Giám đốc" icon="users" />
        <SummaryCard label="Sự kiện trong tuần" value={eventCount.toString().padStart(2, "0")} detail="Tổng hợp từ dữ liệu minh họa" icon="calendar" />
        <SummaryCard label="Ngày có lịch" value={daysWithEvents.toString().padStart(2, "0")} detail="Trong 07 ngày của tuần mẫu" icon="clock" />
      </div>

      <WeeklySchedule leaders={leaders} weekDays={weekDays} events={scheduleEvents} />
      <p className="text-center text-xs text-slate-400">Bảng lịch có thể cuộn ngang trên màn hình nhỏ.</p>
    </div>
  );
}

function SummaryCard({ label, value, detail, icon }: { label: string; value: string; detail: string; icon: "users" | "calendar" | "clock" }) {
  const icons = {
    users: <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M14 3.13a4 4 0 0 1 0 7.75M10 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18m-13 4h2m3 0h2m-7 3h2" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  };

  return (
    <Card className="flex items-center gap-4 p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{icons[icon]}</svg>
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-500">{label}</p>
        <div className="mt-0.5 flex items-baseline gap-2">
          <p className="text-2xl font-bold tabular-nums tracking-tight text-slate-900">{value}</p>
          <p className="truncate text-[11px] text-slate-400">{detail}</p>
        </div>
      </div>
    </Card>
  );
}

export default LeadershipSchedulePage;
