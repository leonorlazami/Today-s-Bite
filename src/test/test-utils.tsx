import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import type { UserInfo } from "firebase/auth";
import { AuthContext } from "../stores/authStore/authStore";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";

type CustomRenderOptions = {
  userData?: UserInfo | undefined;
  setUserData?: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
};

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // disable retries in tests
      },
    },
  });

const customRender = (
  ui: ReactElement,
  { userData = undefined, setUserData = vi.fn() }: CustomRenderOptions = {}
) => {
  const queryClient = createTestQueryClient();

  return render(
    <MemoryRouter>
      <AuthContext.Provider value={{ userData, setUserData }}>
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
      </AuthContext.Provider>
    </MemoryRouter>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };
