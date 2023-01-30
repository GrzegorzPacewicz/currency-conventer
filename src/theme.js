const color = {
  white: "#ddd",
  pastelgreen: "#EBFFEB",
  black: "#000000",
  teal: "#008080",
  red: "#ED120C",
};
const breakpoint = {
  mobileMax: 767,
};

export const lightTheme = {
  elementColor: {
    background: color.pastelgreen,
    text: color.black,
    border: color.teal,
    button: color.teal,
    failure: color.red,
    input: color.black,
    select: color.black,
    switch: color.teal,
    white: "#ddd",
    pastelgreen: "#EBFFEB",
    black: "#000000",
    teal: "#008080",
    red: "#ED120C",
  },
  color,
  breakpoint,
};

export const darkTheme = {
  elementColor: {
    background: color.teal,
    text: color.white,
    border: color.white,
    button: color.red,
    failure: color.red,
    input: color.black,
    select: color.black,
    switch: color.pastelgreen,
  },
  color,
  breakpoint,
};
