import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Wrapper from "./components/wrapper";
import "@splidejs/react-splide/css";
import Exchange from "./pages/exchange/exchange";
import SearchFood from "./pages/searchFood/searchFood";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route
          path="*"
          element={
            <Wrapper>
              <Home />
              <Outlet />
            </Wrapper>
          }
        >
          <Route path="exchange" element={<Exchange />} />
          <Route path="search-food" element={<SearchFood />} />
        </Route>
      </Routes>
      <div className="App"></div>
    </ChakraProvider>
  );
}

export default App;
