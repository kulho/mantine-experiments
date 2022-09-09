import { Calendar, RangeCalendar } from "@mantine/dates";
import { useEffect, useState } from "react";
import "dayjs/locale/uk";

const CalendarExample = () => {
  const [calendarVal, setCalendarVal] = useState<Date | null>(new Date());
  const [rangeVal, setRangeVal] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  useEffect(() => {
    console.log(calendarVal);
    console.log(rangeVal);
  });
  return (
    <div className="CalendarExample">
      <Calendar
        size="xl"
        styles={(theme) => ({
          cell: {
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.red[4]
                : theme.colors.blue[6]
            }`,
          },
          day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
          weekday: { fontSize: theme.fontSizes.lg },
          weekdayCell: {
            fontSize: theme.fontSizes.xl,
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[0],
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
            }`,
            height: 70,
          },
        })}
        locale="uk"
        value={calendarVal}
        onChange={setCalendarVal}
        amountOfMonths={2}
      />
      <RangeCalendar
        value={rangeVal}
        onChange={setRangeVal}
        amountOfMonths={3}
      />
    </div>
  );
};

export default CalendarExample;
