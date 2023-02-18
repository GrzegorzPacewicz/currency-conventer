import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./themeSlice";
import Form from "../features/Form";
import Header from "../features/Header";
import Clock from "../features/Clock";
import Footer from "../features/Footer";
import ThemeSwitch from "../features/ThemeSwitch";
import { Container } from "../features/Container/styled";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
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
