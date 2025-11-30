import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";
import Navbar from "components/layout/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className="mx-auto my-20 max-w-3xl">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
