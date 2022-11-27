import Form from "./Form";
import Container from "./Container";
import Header from "./Header";
import Clock from "./Clock"

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
