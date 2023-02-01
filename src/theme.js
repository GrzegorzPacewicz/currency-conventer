const color = {
  white: "#ddd",
  pastelgreen: "#EBFFEB",
  black: "#000000",
  teal: "#008080",
  red: "#ED120C",
  eveningsee: "#074B4B",
  gradientdark:
    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%)",
  gradientlight:
    "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 100%)",
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
    lineargradient: color.gradientlight,
  },
  color,
  breakpoint,
};

export const darkTheme = {
  elementColor: {
    background: color.eveningsee,
    text: color.white,
    border: color.white,
    button: color.teal,
    failure: color.red,
    input: color.black,
    select: color.black,
    switch: color.pastelgreen,
    wheel: color.eveningsee,
    switchbackground: color.pastelgreen,
    icon: color.pastelgreen,
    lineargradient: color.gradientdark,
  },
  color,
  breakpoint,
};
