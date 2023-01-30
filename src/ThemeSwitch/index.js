import { useState } from "react";
import { Label, Input, Switch, Wrapper } from "./styled";

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);
  const toggler = () => (checked ? setChecked(false) : setChecked(true));

  // const [theme, setTheme] = useState("lightTheme");
  // const themeToggler = () => {
  //   theme === "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme");
  // };

  return (
    <Wrapper>
      <Label>
        <Input checked={checked} type="checkbox" onClick={toggler} />
        <Switch />
        <span>Ciemne tło {checked ? "on" : "off"}</span>
      </Label>
    </Wrapper>
  );
};

export default ThemeSwitch;
