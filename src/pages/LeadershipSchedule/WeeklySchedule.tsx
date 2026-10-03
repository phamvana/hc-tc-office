import Card from "../../components/Card/Card";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import type { Leader, ScheduleEvent, WeekDay } from "../../types/schedule";

type WeeklyScheduleProps = {
  leaders: Leader[];
  weekDays: WeekDay[];
  events: ScheduleEvent[];
};

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

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`size-2 rounded-full ${color}`} />
      {label}
    </span>
  );
}

function WeeklySchedule({ leaders, weekDays, events }: WeeklyScheduleProps) {
  function getEventsFor(leaderId: Leader["id"], date: WeekDay["date"]) {
    return events.filter(
      (event) => event.leaderId === leaderId && event.date === date,
    );
  }

  return (
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
          <caption className="sr-only">Lịch công tác mẫu của {leaders.length} lãnh đạo trong tuần đang xem</caption>
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
                const count = events.filter((event) => event.date === day.date).length;
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
                  const dayEvents = getEventsFor(leader.id, day.date);
                  return (
                    <td key={day.date} className={`h-28 border-b border-r border-slate-100 p-2 align-top last:border-r-0 group-last:border-b-0 ${index === 5 || index === 6 ? "bg-slate-50/50" : "bg-white"}`}>
                      {dayEvents.length > 0 ? (
                        <div className="space-y-2">
                          {dayEvents.map((event) => <EventCard key={event.id} event={event} />)}
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
        <span>Hiển thị {leaders.length} lãnh đạo · {events.length} sự kiện trong tuần</span>
        <span className="font-medium text-amber-700">Dữ liệu minh họa, không phải lịch công tác thực tế</span>
      </div>
    </Card>
  );
}

export default WeeklySchedule;
