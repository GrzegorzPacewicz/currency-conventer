import {
  StyledForm,
  Caution,
  FormFieldset,
  FormLegend,
  FormInput,
  FormSelect,
  FormButton,
  FormResult,
  Loading,
  Failure,
} from "./styled";
import { useState } from "react";
import { useRatesData } from "../useRatesData";

const DEFAULT_CURRENCY = "EUR";

const Form = () => {
  const [amountExchange, setAmountExchange] = useState("");
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [result, setResult] = useState(null);
  const ratesData = useRatesData();
  const {date} = ratesData;

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amountExchange, currency);
  };

  const calculateResult = (amountExchange, currency) => {
    const rateExchange = ratesData.rates[currency];

    setResult(`${(+amountExchange * rateExchange).toFixed(2)} ${[currency]}`);
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
            <FormLegend>Przelicz na*:</FormLegend>
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
            <Caution>*Kurs EBC z dnia {date} </Caution>
          </FormFieldset>

          <FormFieldset>
            <FormLegend>Wynik:</FormLegend>
            <FormResult>
              Za kwotę <strong>{amountExchange} PLN</strong> otrzymasz:{" "}
              <strong> {result} </strong>
            </FormResult>
          </FormFieldset>
          <FormButton>Przelicz</FormButton>
        </>
      )}
    </StyledForm>
  );
};

export default Form;
