import Cards from "./features/cards/Cards";
import GlobalStyles from "./styles/GlobalStyles";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ReactQueryDevtools initialIsOpen={false} />
      <Cards />
    </QueryClientProvider>
  );
}

export default App;
