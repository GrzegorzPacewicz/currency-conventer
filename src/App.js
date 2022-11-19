import Form from "./Form";
import Container from "./Container"
import Header from "./Header";
import { useState } from "react";
import { currencies } from "./Currencies/currency"
import Result from "./Result";


function App() {

    return (
        <Container>
            <Header title="Kalkulator walut" />
            <Form />
        </Container>
    );
};

export default App;
