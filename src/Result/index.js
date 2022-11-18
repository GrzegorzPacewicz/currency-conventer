import "./style.css"

const Result = () => (
    <form>
        <fieldset className="result__fieldset">
            <legend className="result__legend">Wynik:</legend>
            <button className="result__button">Przelicz</button>
            <p className="result__form" type="text" name="result"> </p>
        </fieldset>
        <button className="result__button result__button--reset" type="reset">Wyczyść</button>
    </form>
);

export default Result;