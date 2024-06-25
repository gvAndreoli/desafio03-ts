import { BrowserRouter} from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Layout } from "./components/Layout/Layout";
import { AppContextProvider } from "./components/Context/AppContext";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";



const theme = extendTheme({
  fonts: {
    body: 'Helvetica, Arial, sans-serif',
    heading: 'Helvetica, Arial, sans-serif',
  },
});

function App() {

  if (!getAllLocalStorage()){
    createLocalStorage()
  }

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider theme={theme}>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
