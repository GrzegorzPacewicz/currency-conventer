import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import { Container } from "./Container/styled";

function App() {
  return (
    <Container>
      <Header title="Kalkulator walut" />
      <Clock />
      <Form />
    </Container>
  );
}

export default App;
