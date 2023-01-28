import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import Footer from "./Footer";
import ThemeSwitch from "./ThemeSwitch";
import { Container } from "./Container/styled";

function App() {
  return (
    <Container>
      <Clock />
      <Header title="Kalkulator walut" />
      <ThemeSwitch>this</ThemeSwitch>
      <Form />
      <Footer />
    </Container>
  );
}

export default App;
