import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        {result !== undefined && (
          <>
            {result.sourceAmount}&nbsp;PLN&nbsp; =
            {" "}
            <strong>
              {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
          </>   
        )}
    </StyledResult>
);

export default Result;