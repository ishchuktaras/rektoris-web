import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export const filterByToday = (data: any[]): any[] => {
  const today = dayjs().startOf("day");
  return data.filter((item) => dayjs(item.createdAt).isSame(today, "day"));
};

export const filterByYesterday = (data: any[]): any[] => {
  const yesterday = dayjs().subtract(1, "day").startOf("day");
  return data.filter((item) => dayjs(item.createdAt).isSame(yesterday, "day"));
};

export const filterByThisWeek = (data: any[]): any[] => {
  const startOfWeek = dayjs().startOf("week");
  const endOfWeek = dayjs().endOf("week");
  return data.filter((item) => 
    dayjs(item.createdAt).isBetween(startOfWeek, endOfWeek, "day", "[]")
  );
};

export const filterByThisMonth = (data: any[]): any[] => {
  const startOfMonth = dayjs().startOf("month");
  const endOfMonth = dayjs().endOf("month");
  return data.filter((item) => 
    dayjs(item.createdAt).isBetween(startOfMonth, endOfMonth, "day", "[]")
  );
  
};
export const filterByLast7Days = (data: any[]): any[] => {
  const sevenDaysAgo = dayjs().subtract(7, "day").startOf("day");
  const today = dayjs().endOf("day");
  return data.filter((item) => 
    dayjs(item.createdAt).isBetween(sevenDaysAgo, today, "day", "[]")
  );
};

export const filterByThisYear = (data: any[]): any[] => {
  const startOfYear = dayjs().startOf("year");
  const endOfYear = dayjs().endOf("year");
  return data.filter((item) => 
    dayjs(item.createdAt).isBetween(startOfYear, endOfYear, "day", "[]")
  );
};
export const filterByDateRange = (
  data: any[], 
  startDate: Date | string | number,
  endDate: Date | string | number
): any[] => {
  const start = dayjs(startDate).startOf("day");
  const end = dayjs(endDate).endOf("day");
  
  return data.filter((item) => 
    dayjs(item.createdAt).isBetween(start, end, "day", "[]")
  );
};


