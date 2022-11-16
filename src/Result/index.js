import "./style.css"

const Result = () => (
    <form>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Wynik:</legend>
            <button className="form__button">Przelicz</button>
            <p className="form__result js-form__result" type="text" name="result"> </p>
        </fieldset>
        <button className="form__button form__button--reset" type="reset">Wyczyść</button>
    </form>
);

export default Result;