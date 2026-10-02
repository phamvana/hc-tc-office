import Card from "../../components/Card/Card";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { leaders, scheduleEvents, weekDays } from "../../data/scheduleMockData";
import type { ScheduleEvent } from "../../types/schedule";

const categoryStyles: Record<ScheduleEvent["category"], string> = {
  meeting: "border-blue-200 bg-blue-50 text-blue-900",
  fieldwork: "border-amber-200 bg-amber-50 text-amber-950",
  internal: "border-violet-200 bg-violet-50 text-violet-900",
};

const categoryDots: Record<ScheduleEvent["category"], string> = {
  meeting: "bg-blue-500",
  fieldwork: "bg-amber-500",
  internal: "bg-violet-500",
};

function getEventsFor(leaderId: string, date: string) {
  return scheduleEvents.filter(
    (event) => event.leaderId === leaderId && event.date === date,
  );
}

function formatDateRange() {
  return "05 – 11 tháng 10, 2026";
}

function EventCard({ event }: { event: ScheduleEvent }) {
  return (
    <article
      className={`rounded-lg border px-2.5 py-2 text-left ${categoryStyles[event.category]}`}
    >
      <div className="flex items-center gap-1.5 text-[11px] font-semibold tabular-nums">
        <span className={`size-1.5 rounded-full ${categoryDots[event.category]}`} />
        {event.startTime} – {event.endTime}
      </div>
      <p className="mt-1.5 text-xs font-semibold leading-4">{event.title}</p>
      <p className="mt-1 text-[11px] leading-4 opacity-75">{event.location}</p>
    </article>
  );
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

      <Card className="overflow-hidden p-0">
        <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <SectionHeader
            title="Lịch theo tuần"
            description="Mỗi hàng là một lãnh đạo; mỗi cột là một ngày."
          />
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500" aria-label="Chú giải loại lịch">
            <LegendItem color="bg-blue-500" label="Cuộc họp" />
            <LegendItem color="bg-amber-500" label="Công tác" />
            <LegendItem color="bg-violet-500" label="Nội bộ" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1120px] table-fixed border-separate border-spacing-0 text-left">
            <caption className="sr-only">Lịch công tác mẫu của 7 lãnh đạo từ ngày 5 đến ngày 11 tháng 10 năm 2026</caption>
            <colgroup>
              <col className="w-[205px]" />
              {weekDays.map((day) => <col key={day.date} />)}
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 z-20 border-b border-r border-slate-200 bg-slate-50 px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Lãnh đạo
                </th>
                {weekDays.map((day, index) => {
                  const count = scheduleEvents.filter((event) => event.date === day.date).length;
                  return (
                    <th key={day.date} scope="col" className={`border-b border-r border-slate-200 px-3 py-3 text-center last:border-r-0 ${index === 5 || index === 6 ? "bg-slate-50/80" : "bg-white"}`}>
                      <span className="block text-[11px] font-semibold text-slate-400">{day.day}</span>
                      <span className="mt-1 block text-lg font-bold tabular-nums text-slate-800">{day.dayNumber}</span>
                      <span className="mt-1 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">{count} lịch</span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader) => (
                <tr key={leader.id} className="group">
                  <th scope="row" className="sticky left-0 z-10 border-b border-r border-slate-200 bg-white px-4 py-3 text-left group-last:border-b-0">
                    <div className="flex items-center gap-3">
                      <span className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${leader.color}`}>{leader.initials}</span>
                      <span className="min-w-0">
                        <span className="block truncate text-xs font-semibold text-slate-800">{leader.name}</span>
                        <span className="mt-0.5 block text-[11px] font-medium text-slate-400">{leader.title}</span>
                      </span>
                    </div>
                  </th>
                  {weekDays.map((day, index) => {
                    const events = getEventsFor(leader.id, day.date);
                    return (
                      <td key={day.date} className={`h-28 border-b border-r border-slate-100 p-2 align-top last:border-r-0 group-last:border-b-0 ${index === 5 || index === 6 ? "bg-slate-50/50" : "bg-white"}`}>
                        {events.length > 0 ? (
                          <div className="space-y-2">
                            {events.map((event) => <EventCard key={event.id} event={event} />)}
                          </div>
                        ) : (
                          <span className="flex h-full min-h-20 items-center justify-center text-[11px] text-slate-300">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-1 border-t border-slate-100 bg-slate-50/70 px-5 py-3 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>Hiển thị {leaders.length} lãnh đạo · {eventCount} sự kiện trong tuần</span>
          <span className="font-medium text-amber-700">Dữ liệu minh họa, không phải lịch công tác thực tế</span>
        </div>
      </Card>
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

function LegendItem({ color, label }: { color: string; label: string }) {
  return <span className="inline-flex items-center gap-1.5"><span className={`size-2 rounded-full ${color}`} />{label}</span>;
}

export default LeadershipSchedulePage;
