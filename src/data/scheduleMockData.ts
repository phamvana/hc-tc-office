import type { Leader, ScheduleEvent, WeekDay } from "../types/schedule";

export const leaders: Leader[] = [
  { id: "director", name: "Nguyễn Minh An", title: "Giám đốc", initials: "NA", color: "bg-indigo-100 text-indigo-700" },
  { id: "deputy-01", name: "Trần Thu Hà", title: "Phó Giám đốc", initials: "TH", color: "bg-rose-100 text-rose-700" },
  { id: "deputy-02", name: "Lê Quốc Bảo", title: "Phó Giám đốc", initials: "LB", color: "bg-amber-100 text-amber-700" },
  { id: "deputy-03", name: "Phạm Ngọc Mai", title: "Phó Giám đốc", initials: "NM", color: "bg-emerald-100 text-emerald-700" },
  { id: "deputy-04", name: "Hoàng Đức Long", title: "Phó Giám đốc", initials: "ĐL", color: "bg-sky-100 text-sky-700" },
  { id: "deputy-05", name: "Đỗ Thanh Tùng", title: "Phó Giám đốc", initials: "TT", color: "bg-violet-100 text-violet-700" },
  { id: "deputy-06", name: "Vũ Lan Phương", title: "Phó Giám đốc", initials: "LP", color: "bg-cyan-100 text-cyan-700" },
];

export const weekDays: WeekDay[] = [
  { date: "2026-10-05", day: "Thứ Hai", shortDay: "T2", dayNumber: "05" },
  { date: "2026-10-06", day: "Thứ Ba", shortDay: "T3", dayNumber: "06" },
  { date: "2026-10-07", day: "Thứ Tư", shortDay: "T4", dayNumber: "07" },
  { date: "2026-10-08", day: "Thứ Năm", shortDay: "T5", dayNumber: "08" },
  { date: "2026-10-09", day: "Thứ Sáu", shortDay: "T6", dayNumber: "09" },
  { date: "2026-10-10", day: "Thứ Bảy", shortDay: "T7", dayNumber: "10" },
  { date: "2026-10-11", day: "Chủ Nhật", shortDay: "CN", dayNumber: "11" },
];

export const scheduleEvents: ScheduleEvent[] = [
  { id: "event-01", leaderId: "director", date: "2026-10-05", startTime: "08:00", endTime: "09:30", title: "Họp giao ban đầu tuần", location: "Phòng họp A", category: "meeting" },
  { id: "event-02", leaderId: "director", date: "2026-10-06", startTime: "14:00", endTime: "16:00", title: "Làm việc với đoàn công tác", location: "Phòng tiếp khách", category: "meeting" },
  { id: "event-03", leaderId: "director", date: "2026-10-08", startTime: "09:00", endTime: "11:00", title: "Họp rà soát kế hoạch quý IV", location: "Phòng họp A", category: "internal" },
  { id: "event-04", leaderId: "deputy-01", date: "2026-10-05", startTime: "09:00", endTime: "11:00", title: "Làm việc với các đơn vị", location: "Phòng họp B", category: "meeting" },
  { id: "event-05", leaderId: "deputy-01", date: "2026-10-07", startTime: "13:30", endTime: "15:00", title: "Kiểm tra công tác chuyên môn", location: "Đơn vị X", category: "fieldwork" },
  { id: "event-06", leaderId: "deputy-01", date: "2026-10-09", startTime: "08:30", endTime: "10:00", title: "Trao đổi công tác cán bộ", location: "Phòng họp C", category: "internal" },
  { id: "event-07", leaderId: "deputy-02", date: "2026-10-06", startTime: "08:30", endTime: "10:00", title: "Họp triển khai nhiệm vụ", location: "Phòng họp B", category: "meeting" },
  { id: "event-08", leaderId: "deputy-02", date: "2026-10-08", startTime: "14:00", endTime: "16:30", title: "Khảo sát cơ sở vật chất", location: "Cơ sở 2", category: "fieldwork" },
  { id: "event-09", leaderId: "deputy-03", date: "2026-10-05", startTime: "14:00", endTime: "15:30", title: "Họp tổ công tác", location: "Phòng họp C", category: "internal" },
  { id: "event-10", leaderId: "deputy-03", date: "2026-10-07", startTime: "08:00", endTime: "11:30", title: "Làm việc tại cơ sở", location: "Cơ sở 1", category: "fieldwork" },
  { id: "event-11", leaderId: "deputy-04", date: "2026-10-06", startTime: "10:00", endTime: "11:30", title: "Tiếp và làm việc với khách", location: "Phòng tiếp khách", category: "meeting" },
  { id: "event-12", leaderId: "deputy-04", date: "2026-10-09", startTime: "14:00", endTime: "16:00", title: "Họp đánh giá tiến độ", location: "Phòng họp A", category: "internal" },
  { id: "event-13", leaderId: "deputy-05", date: "2026-10-07", startTime: "09:00", endTime: "10:30", title: "Họp chuyên đề", location: "Phòng họp B", category: "meeting" },
  { id: "event-14", leaderId: "deputy-05", date: "2026-10-08", startTime: "08:00", endTime: "12:00", title: "Kiểm tra tại đơn vị", location: "Đơn vị Y", category: "fieldwork" },
  { id: "event-15", leaderId: "deputy-06", date: "2026-10-05", startTime: "10:00", endTime: "11:00", title: "Trao đổi với phòng chuyên môn", location: "Phòng làm việc", category: "internal" },
  { id: "event-16", leaderId: "deputy-06", date: "2026-10-09", startTime: "09:00", endTime: "11:00", title: "Làm việc với đơn vị phối hợp", location: "Phòng họp C", category: "meeting" },
];
