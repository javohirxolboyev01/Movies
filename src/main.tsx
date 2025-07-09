import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/redux/index.ts";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
