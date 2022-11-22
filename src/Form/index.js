import "./style.css";
import { useState } from "react";
import { currencies } from "../Currencies/currency"

const Form = () => {
    const [amountExchange, setAmountExchange] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const [result, setResult] = useState(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amountExchange, currency);
    };

    const onFormReset = () => {
        setAmountExchange("");
        setCurrency("EUR");
        setResult("");
    };

    const calculateResult = (amountExchange, currency) => {
        const rateExchange = currencies.find(({ short }) => short === currency).rate;
        const currencyExchanged = currencies.find(({ short }) => short === currency).short;

        setResult(`${(+amountExchange / rateExchange).toFixed(2)} ${currencyExchanged}`);
    };

    return (
        <form className="form"
            onSubmit={onFormSubmit}
            onReset={onFormReset}
        >
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kwota do przeliczenia:</legend>
                <label className="form__label">
                    <span>PLN</span>
                    <input
                        className="form__inputAmount"
                        type="number"
                        required min="0.01"
                        step="0.01"
                        placeholder="Wpisz kwotę"
                        value={amountExchange}
                        onChange={({ target }) => setAmountExchange(target.value)}
                    />
                </label>
            </fieldset>

            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicz na*:</legend>
                <select
                    className="form__select"
                    name="currencyConverted"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    ))}
                </select>
                <p className="form__caution">*Kurs NBP z dnia 21.11.2022</p>
            </fieldset>

            <p>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">Wynik:</legend>
                    <button className="form__button">Przelicz</button>
                    <p className="form__result">
                        Za tę kwotę otrzymasz: <strong> {result} </strong>
                    </p>
                </fieldset>
                <button className="form__button form__button--reset" type="reset">Wyczyść</button>
            </p>
        </form>
    )
};

export default Form;