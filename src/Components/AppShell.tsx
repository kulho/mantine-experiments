import { useContext, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
} from "@mantine/core";
import LightDarkButton from "./LightDarkButton";
import TableExample from "./TableExample";
import ChipsExample from "./ChipsExample";
import InputExample from "./InputExample";
import TextExample from "./TextExample";
import NotificationExample from "./NotificationExample";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CalendarExample from "./CalendarExample";
import TimeExample from "./TimeExample";
import ConnectButton from "./ConnectButton";
import { Web3Context } from "../Context/Web3Context";
import Cards from "./Cards";

export default function AppShellExample() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { connectWallet, connectedAccount, web3 } = useContext(Web3Context);
  console.log(web3);
  return (
    <Router>
      <AppShell
        styles={{
          main: {
            // background:
            //   theme.colorScheme === "dark"
            //     ? // ? theme.colors.dark[8]
            //       //  ? theme.fn.radialGradient(
            //       //     "blue",
            //       //     "red",
            //       //     "orange",
            //       //     "cyan",
            //       //     "white"
            //       //   )
            //       theme.fn.linearGradient(
            //         270,
            //         "#042c54",
            //         "#042c54",
            //         "#073B6E",
            //         "#105599",
            //         "#1b78de"
            //       )
            //     : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
            styles={{
              root: {
                background: "transparent",
              },
            }}
          >
            <Navbar.Section>
              <Text>some title</Text>
            </Navbar.Section>
            <Navbar.Section grow mt="lg">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text component={Link} variant="link" to="/">
                  Home Page
                </Text>
                <Text component={Link} variant="link" to="/input">
                  Input Page
                </Text>
                <Text component={Link} variant="link" to="/title">
                  Title Page
                </Text>
                <Text component={Link} variant="link" to="/table">
                  Table Page
                </Text>
                <Text component={Link} variant="link" to="/calendar">
                  Calendar Page
                </Text>
                <Text component={Link} variant="link" to="/time">
                  Time Page
                </Text>
                <Text component={Link} variant="link" to="/notify">
                  Notification Page
                </Text>
                <Text component={Link} variant="link" to="/cards">
                  Cards Page
                </Text>
              </div>
            </Navbar.Section>
            <Navbar.Section>
              <Text>some footer</Text>
            </Navbar.Section>
          </Navbar>
        }
        //   aside={
        //     <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        //       <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        //         <Text>Application sidebar</Text>
        //       </Aside>
        //     </MediaQuery>
        //   }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={70} p="md">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Text>Application header</Text>
              <Group>
                <ConnectButton
                  connectWallet={connectWallet}
                  connectedAccount={connectedAccount}
                />
                <LightDarkButton />
              </Group>
            </div>
          </Header>
        }
      >
        <Routes>
          <Route path="/" element={<ChipsExample />} />
          <Route path="/input" element={<InputExample />} />
          <Route path="/title" element={<TextExample />} />
          <Route path="/table" element={<TableExample />} />
          <Route path="/calendar" element={<CalendarExample />} />
          <Route path="/time" element={<TimeExample />} />
          <Route path="/notify" element={<NotificationExample />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </AppShell>
    </Router>
  );
}
