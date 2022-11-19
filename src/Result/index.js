import "./style.css"

const Result = ({ result }) => (

    <p className="result">
        Za tę kwotę otrzymasz: <strong> {result} </strong>
    </p>
);

export default Result;