import Form from "./features/Form";
import Header from "./features/Header";
import Clock from "./features/Clock";
import Footer from "./features/Footer";
import ThemeSwitch from "./ThemeSwitch";
import { Container } from "./features/Container/styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
import { useEffect } from "react";

const getLocalStorageTheme = () => {
  const localStorageTheme = localStorage.getItem("theme");
  return localStorageTheme ? JSON.parse(localStorageTheme) : [];
};

function App() {
  const [theme, setTheme] = useState(getLocalStorageTheme);
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

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
