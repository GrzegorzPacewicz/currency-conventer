import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
const formatDate = useCurrentDate();

  return <StyledClock>Dziś jest {formatDate}</StyledClock>;
};

export default Clock;