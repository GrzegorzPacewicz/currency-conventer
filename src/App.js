import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import { Container } from "./Container/styled";

function App() {
  return (
    <Container>
      <Clock />
      <Header title="Kalkulator walut" />
      <Form />
    </Container>
  );
}

export default App;
