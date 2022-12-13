import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import Footer from "./Footer";
import { Container } from "./Container/styled";

function App() {
  return (
    <Container>
      <Clock />
      <Header title="Kalkulator walut" />
      <Form />
      <Footer /> 
    </Container>
  );
}

export default App;
