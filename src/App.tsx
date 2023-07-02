import { Container, GlobalStyles } from "./styles/sharedStyles";
import Navbar from "./components/navbar/Navbar";
import RoutePath from "./routes/RoutePath";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { TStore } from "./logic/redux/store/store";
import { darkTheme, lightTheme } from "./styles/theme";

const App = () => {
  const theme = useSelector((state: TStore) => state.themeReducer.themeValue);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container width="90%">
        <Navbar />
        <RoutePath />
      </Container>
    </ThemeProvider>
  );
};

export default App;
