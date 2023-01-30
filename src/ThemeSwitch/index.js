import { useState } from "react";
import { Label, Input, Switch, Wrapper, SwitchText } from "./styled";

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);
  const toggler = () => (checked ? setChecked(false) : setChecked(true));

  return (
    <Wrapper>
      <Label>
        <Input checked={checked} type="checkbox" onChange={toggler} />
        <Switch />
        <SwitchText>Ciemne tło {checked ? "on" : "off"}</SwitchText>
      </Label>
    </Wrapper>
  );
};

export default ThemeSwitch;
