import {
  StyledForm,
  Caution,
  FormFieldset,
  FormLegend,
  FormInput,
  FormSelect,
  FormButton,
  Loading,
  Failure,
} from "./styled";
import { useState } from "react";
import { useRatesData } from "../useRatesData";
import Result from "../Result";

const DEFAULT_CURRENCY = "EUR";

const Form = () => {
  const [amountExchange, setAmountExchange] = useState("");
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amountExchange, currency);
  };

  const calculateResult = (amountExchange, currency) => {
    const rateExchange = ratesData.rates[currency];

    setResult({
      sourceAmount: +amountExchange,
      targetAmount: amountExchange * rateExchange,
      currency,
    });
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      {ratesData.status === "loading" ? (
        <Loading>Chwilka! 😃 Ładujemy dane....</Loading>
      ) : ratesData.status === "error" ? (
        <Failure>Coś poszło nie tak! Nie możemy pobrać danych 😐</Failure>
      ) : (
        <>
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
            <FormLegend>Wybierz walutę:</FormLegend>
            <FormSelect
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {Object.keys(ratesData.rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </FormSelect>
            <Caution>Kurs EBC z dnia {ratesData.date} </Caution>
          </FormFieldset>

          <FormFieldset>
            <FormLegend>Wynik:</FormLegend>
            <Result result={result}> </Result>
          </FormFieldset>
          <FormButton>Przelicz</FormButton>
        </>
      )}
    </StyledForm>
  );
};

export default Form;
