import { useState, ChangeEvent } from "react";
import { Label, Input, Switch, Wrapper } from "./styled";

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Wrapper>
      <Label>
        <Input checked={checked} type="checkbox" onChange={handleChange} />
        <Switch />
        <span>Ciemne tło {checked ? "on" : "off"}</span>
      </Label>
    </Wrapper>
  );
};

export default ThemeSwitch;
