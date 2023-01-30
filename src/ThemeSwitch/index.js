import { useState } from "react";
import { Label, Input, Switch, Wrapper, SwitchText } from "./styled";

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
        <Input type="checkbox" checked={isToggled} onChange={onToggle} />
        <Switch />
        <SwitchText>Ciemne tło {checked ? "on" : "off"}</SwitchText>
      </Label>
    </Wrapper>
  );
};

export default ThemeSwitch;
