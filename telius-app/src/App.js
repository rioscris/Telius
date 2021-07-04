import { ThemeProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
import "./App.css";
import Menu from "./features/main/menu";

// Let's say you want to add custom colors
const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
};

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <Menu />
        </ThemeProvider>
    );
}

export default App;
