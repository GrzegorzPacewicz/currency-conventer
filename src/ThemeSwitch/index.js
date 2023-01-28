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
        <span>Ciemne tło {checked ? "on" : "off"}</span>
        <Input checked={checked} type="checkbox" onChange={handleChange} />
        <Switch />
      </Label>
    </Wrapper>
  );
};

export default ThemeSwitch;
