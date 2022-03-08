import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
    palette: {
        primary: {
            main: '#fa586a',
        }
    },
})

export default baseTheme

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