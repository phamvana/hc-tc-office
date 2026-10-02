export type Leader = {
  id: string;
  name: string;
  title: string;
  initials: string;
  color: string;
};

export type ScheduleEvent = {
  id: string;
  leaderId: Leader["id"];
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  location: string;
  category: "meeting" | "fieldwork" | "internal";
};
