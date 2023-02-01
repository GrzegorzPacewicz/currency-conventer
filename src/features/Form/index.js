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
import { useState, useRef } from "react";
import { useRatesData } from "../../useRatesData";
import Result from "../Result";

const Form = () => {
  const [amountExchange, setAmountExchange] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState();
  const ratesData = useRatesData();
  const { rates, date, status } = ratesData;
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amountExchange, currency);
  };

  const calculateResult = (amountExchange, currency) => {
    const rateExchange = rates[currency];
    inputRef.current.focus();

    setResult({
      sourceAmount: +amountExchange,
      targetAmount: amountExchange * rateExchange,
      currency,
    });
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      {status === "loading" ? (
        <Loading>Chwilka! 😃 Ładujemy dane....</Loading>
      ) : status === "error" ? (
        <Failure>Coś poszło nie tak! Nie możemy pobrać danych 😐</Failure>
      ) : (
        <>
          <FormFieldset>
            <FormLegend>Kwota do przeliczenia w PLN:</FormLegend>
            <FormInput
              type="number"
              required
              min="0.01"
              step="0.01"
              placeholder="Wpisz kwotę"
              ref={inputRef}
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
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </FormSelect>
            <Caution>Kurs EBC z dnia {date} </Caution>
          </FormFieldset>

          <FormFieldset>
            <FormLegend>Wynik:</FormLegend>
            <Result result={result} />
          </FormFieldset>
          <FormButton>Przelicz</FormButton>
        </>
      )}
    </StyledForm>
  );
};

export default Form;
