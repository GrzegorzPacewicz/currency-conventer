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
  const [theme, setTheme] = useState("darkTheme");
  const themeToggler = () => {
    theme === "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme");
  };

  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Clock />
        <Header />
        <ThemeSwitch />
        <Form />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
