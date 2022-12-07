import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
const date = useCurrentDate();

const formatDate = date.toLocaleString("pl", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

  return <StyledClock>Dziś jest {formatDate}</StyledClock>;
};

export default Clock;