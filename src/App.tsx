import { Body } from "./components/Body";
import { ThemeProvider } from "@emotion/react";

import "./App.css";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body />
    </ThemeProvider>
  );
}

export default App;
