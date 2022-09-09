import {
  MantineProvider,
  ColorSchemeProvider,
  Paper,
  ColorScheme,
  Loader,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import AppShellExample from "./Components/AppShell";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";
import LightDarkButton from "./Components/LightDarkButton";
import { theme } from "./theme";
import { retro } from "manthemes/daisyui";
import { nightfox } from "manthemes/nightfox";
// import { moonlight } from "manthemes";

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <MantineProvider
            // theme={colorScheme === "dark" ? nightfox : retro}
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
            // inherit
          >
            <NotificationsProvider>
              <AppShellExample />
            </NotificationsProvider>
          </MantineProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default App;
