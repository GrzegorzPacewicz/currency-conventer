const color = {
  white: "#ddd",
  pastelgreen: "#EBFFEB",
  black: "#000000",
  teal: "#008080",
  red: "#ED120C",
  eveningsee: "#074B4B",
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
    wheel: color.pastelgreen,
    switchbackground: color.teal,
    icon: color.teal,
  },
  color,
  breakpoint,
};

export const darkTheme = {
  elementColor: {
    background: color.teal,
    text: color.white,
    border: color.white,
    button: color.eveningsee,
    failure: color.red,
    input: color.black,
    select: color.black,
    switch: color.pastelgreen,
    wheel: color.teal,
    switchbackground: color.pastelgreen,
    icon: color.pastelgreen,
  },
  color,
  breakpoint,
};
