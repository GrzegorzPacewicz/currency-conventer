import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import Footer from "./Footer";
import ThemeSwitch from "./ThemeSwitch";
import { Container } from "./Container/styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Clock />
        <Header />
        <ThemeSwitch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Form />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
