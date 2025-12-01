import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "components/layout/Navbar";
import { colors } from "theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: colors.surface.navbar.hex,
            color: colors.text.primary.hex,
            border: `1px solid ${colors.border.subtle.hex}`,
          },
          success: {
            iconTheme: {
              primary: colors.state.success.hex,
              secondary: colors.state.successFg.hex,
            },
          },
          error: {
            iconTheme: {
              primary: colors.state.error.hex,
              secondary: colors.state.errorFg.hex,
            },
          },
        }}
      />
      <Navbar />
      <div className="mx-auto my-20 max-w-3xl">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
