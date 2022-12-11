import {
  StyledForm,
  Caution,
  FormFieldset,
  FormLegend,
  FormInput,
  FormSelect,
  FormButton,
  FormResult,
} from "./styled";
import { useState } from "react";
import { currencies } from "../Currencies/currencies";
import axios from "axios";

const DEFAULT_CURRENCY = currencies[0].short;

const Form = () => {
  const [amountExchange, setAmountExchange] = useState("");
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [result, setResult] = useState(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amountExchange, currency);
  };

  const onFormReset = () => {
    setAmountExchange("");
    setCurrency(DEFAULT_CURRENCY);
    setResult("");
  };

  const calculateResult = (amountExchange, currency) => {
    const { rate, short } = currencies.find(({ short }) => short === currency);

    setResult(`${(+amountExchange / rate).toFixed(2)} ${short}`);
  };

  axios.get("https://api.exchangerate.host/latest?base=PLN")
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

  return (
    <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
      <FormFieldset>
        <FormLegend>Kwota do przeliczenia:</FormLegend>
        <span>PLN</span>
        <FormInput
          type="number"
          required
          min="0.01"
          step="0.01"
          placeholder="Wpisz kwotę"
          value={amountExchange}
          onChange={({ target }) => setAmountExchange(target.value)}
        />
      </FormFieldset>

      <FormFieldset>
        <FormLegend>Przelicz na*:</FormLegend>
        <FormSelect
          name="currencyConverted"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.short} value={currency.short}>
              {currency.name}
            </option>
          ))}
        </FormSelect>
        <Caution>*Kurs NBP z dnia 21.11.2022</Caution>
      </FormFieldset>

      <FormFieldset>
        <FormLegend>Wynik:</FormLegend>
        <FormResult>
          Za tę kwotę otrzymasz: <strong> {result} </strong>
        </FormResult>
      </FormFieldset>
      <FormButton>Przelicz</FormButton>
    </StyledForm>
  );
};

export default Form;
