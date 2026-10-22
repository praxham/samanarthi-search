import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div
          className="mx-auto my-4 p-4 lg:p-0"
          style={{ maxWidth: "var(--website-horizontal-size)" }}
        >
          <App />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
