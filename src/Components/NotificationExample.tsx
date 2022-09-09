import { Button, CheckIcon, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import axios from "axios";
import { useState } from "react";

const NotificationExample = () => {
  const [randomPlayer, setRandomPlayer] = useState({ first_name: "" });

  const getPlayer = () => {
    axios.get("https://www.balldontlie.io/api/v1/players/237").then((res) => {
      setRandomPlayer(res.data);
      showNotification({
        message: "we got the data",
        title: "here's the data",
        color: "green",
        icon: <CheckIcon />,
      });
    });
  };
  return (
    <div className="NotificationExample">
      <Button
        variant="outline"
        onClick={() => {
          showNotification({
            message: "we are getting your data",
          });
          getPlayer();
        }}
      >
        Show Data
      </Button>
      <Text>{randomPlayer.first_name}</Text>
    </div>
  );
};

export default NotificationExample;
