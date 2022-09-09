import { TimeInput, TimeRangeInput } from "@mantine/dates";
import { IconBrandGithub } from "@tabler/icons";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const TimeExample = () => {
  const now = new Date();
  const then = dayjs(now).add(30, "minutes").toDate();
  const [value, setValue] = useState<[Date, Date]>([now, then]);
  const [timeInput, setTimeInput] = useState(new Date());
  useEffect(() => {
    console.log(timeInput);
  });
  return (
    <div className="TimeExample">
      <TimeInput
        icon={<IconBrandGithub />}
        value={timeInput}
        onChange={setTimeInput}
        label="some label"
        description="some description"
        styles={(theme) => ({
          icon: {
            color: theme.colors.orange[7],
          },
          input: {
            backgroundColor: theme.colors.blue[9],
          },
        })}
      />
      <TimeRangeInput
        value={value}
        onChange={setValue}
        styles={(theme) => ({
          icon: {
            color: theme.colors.orange[7],
          },
          input: {
            backgroundColor: theme.colors.blue[9],
          },
        })}
      />
    </div>
  );
};

export default TimeExample;
