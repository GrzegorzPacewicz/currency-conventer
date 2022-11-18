import "./style.css"


const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kwota do przeliczenia:</legend>
            <label className="form__label">
                <span>PLN</span>
                <input className="form__inputAmount" type="number" min="0.01" required
                    placeholder="Wpisz kwotę" value="" step="0.01" />
            </label>
        </fieldset>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicz na*:</legend>
            <select className="form__select" name="currency">
                <option className="form__option" value="EUR" selected>EUR</option>
                <option className="form__option" value="GBP">GBP</option>
                <option className="form__option" value="USD">USD</option>
            </select>
            <p className="form__caution">*Kurs NBP z dnia 14.09.2022</p>
        </fieldset>
        
    </form>
);

export default Form;