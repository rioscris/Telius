import { theme, ThemeProvider } from "@chakra-ui/react";
import Catalogue from "features/catalogue/Catalogue";
import Layout from "features/layout/Layout";
import Menu from "features/main/menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

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
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Menu />
                    </Route>
                    <Layout>
                        <Route exact path='/catalogo'>
                            <Catalogue />
                        </Route>
                    </Layout>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
