import { Label, Input, Switch, Wrapper } from "./styled";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsDarkTheme,
  toggleIsDarkTheme,
} from "../../common/theme/themeSlice";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Wrapper>
      <Label>
        <SunIcon />
        <Input
          type="checkbox"
          onClick={() => dispatch(toggleIsDarkTheme())}
          moveRight={isDarkTheme}
        />
        <Switch />
        <MoonIcon />
      </Label>
    </Wrapper>
  );
};

export default ThemeSwitch;
