export const COLORS = {
  orange: "hsl(26, 100%, 55%)",
  orangePale: "hsl(25, 100%, 94%)",
  white: "hsl(0, 0%, 100%)",
  gray: {
    900: "hsl(220, 13%, 13%)",
    700: "hsl(219, 9%, 45%)",
    500: "hsl(220, 14%, 75%)",
    300: "hsl(223, 64%, 98%)",
  },
  black: "hsl(0, 0%, 0%)",
};

export const BREAKPOINTS = {
  tabletMin: 750,
  laptopMin: 1100,
  desktopMin: 1500,
};
export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};
