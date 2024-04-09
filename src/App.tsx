import RouterLink from "./router/RouterLink";
import { ProgressContextProvider } from "./context/ProgressContext";

const App = () => {
  return (
    <ProgressContextProvider>
      <RouterLink />
    </ProgressContextProvider>
  );
};

export default App;
