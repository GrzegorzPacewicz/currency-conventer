import { useState } from "react";
import { Label, Input, Switch, Wrapper } from "./styled";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const ThemeSwitch = ({ toggleTheme, isDarkTheme }) => {
  const [checked, setChecked] = useState();
  const toggler = () => (checked ? setChecked(false) : setChecked(true));

  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
    toggler();
  };

  return (
    <Wrapper>
      <Label>
        <SunIcon />
        <Input type="checkbox" checked={isToggled} onChange={onToggle} />
        <Switch />
        <MoonIcon />
      </Label>
    </Wrapper>
  );
};

export default ThemeSwitch;
