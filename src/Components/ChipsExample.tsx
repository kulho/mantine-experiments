import { Chip } from "@mantine/core";
import { useEffect, useState } from "react";

const ChipsExample = () => {
  const [value, setValue] = useState(["react"]);
  useEffect(() => {
    console.log(value);
  });
  return (
    <div className="ChipsExample">
      <Chip.Group value={value} onChange={setValue} multiple>
        <Chip color="red" variant="filled" size="xl" radius="xs" value="react">
          React
        </Chip>
        <Chip value="ng">Angular</Chip>
        <Chip value="svelte">Svelte</Chip>
        <Chip value="vue">Vue</Chip>
      </Chip.Group>
    </div>
  );
};

export default ChipsExample;
