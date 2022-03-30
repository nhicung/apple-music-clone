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
      main: "rgba(60, 60, 67, 0.03);",
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
