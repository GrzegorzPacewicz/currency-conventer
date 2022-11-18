import Form from "./Form";
import Container from "./Container"
import Header from "./Header";
import { useState } from "react";
import { currencies } from "./Currencies/currency"
import Result from "./Result";


function App() {
    const [result, setResult] = useState(null);

    const calculateResult = (amountExchange, currency) => {
        const rateExchange = currencies.find(({ short }) => short === currency).rate;
        const currencyFinal = currencies.find(({ short }) => short === currency).short;

        setResult((+amountExchange / rateExchange).toFixed(2) + currencyFinal);
    };

    return (
        <Container>
            <Header title="Kalkulator walut" />
            <Form
                calculateResult={calculateResult}
                setResult={setResult}
            />
            <Result 
            result={result}
            />
        </Container>
    );
};

export default App;
