import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { AuthProvider } from "./stores/authStore/authStore.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { VoteProvider } from "./stores/voteStore/voteStore.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <VoteProvider>
          <App />
        </VoteProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
