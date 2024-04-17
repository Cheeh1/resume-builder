import RouterLink from "./router/RouterLink";
import { ProgressContextProvider } from "./context/ProgressContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ProgressContextProvider>
      <ToastContainer />
      <RouterLink />
    </ProgressContextProvider>
  );
};

export default App;
