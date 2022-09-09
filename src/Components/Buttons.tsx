import { Button } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { useState } from "react";

function Buttons() {
  //   const [loading, setLoading] = useState(false);
  //   const handleClick = () => {
  //     setLoading(true);
  //   };
  return (
    <div className="App">
      <Button
        leftIcon={<IconSun />}
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan" }}
      >
        Indigo cyan
      </Button>
      <Button
        leftIcon={<IconMoonStars />}
        variant="gradient"
        gradient={{ from: "blue", to: "lime", deg: 180 }}
      >
        Lime green
      </Button>
      <Button
        // loading={true}
        variant="gradient"
        gradient={{ from: "teal", to: "red", deg: 90 }}
      >
        Teal blue
      </Button>
      <Button
        // loading={loading}
        // onClick={handleClick}
        variant="gradient"
        gradient={{ from: "orange", to: "red" }}
      >
        Orange red
      </Button>
      <Button
        component="a"
        href="https://www.google.com"
        target="_blank" // new page
        styles={(theme) => ({
          root: {
            backgroundColor: "#00acee",
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,

            "&:hover": {
              backgroundColor: theme.fn.darken("#00acee", 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
      >
        Peach
      </Button>
    </div>
  );
}

export default Buttons;
