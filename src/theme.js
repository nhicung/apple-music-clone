import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.88)",
    },
    secondary: {
      main: "#d60017",
    },
    subtitle: {
      main: "#0000008f",
    },
    focus: {
      main: "rgba(214,0,23,0.6)",
    },
    lighter: {
      main: "rgba(0, 0, 0, 0.56)",
    },
    sidebar: {
      main: "#fafafa",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default baseTheme;

// const darkTheme = createTheme(adaptV4Theme({
//     ...baseTheme,
//     palette: {
//         mode: 'dark',
//         secondary: {
//             main: '#fa586a'
//         }
//     }
// }))

// const lightTheme = createTheme(adaptV4Theme({
//     ...baseTheme,
//     palette: {
//         mode: 'light',
//         secondary: {
//             main: '#fa586a'
//         }
//     }
// }))

// export { darkTheme, lightTheme }
