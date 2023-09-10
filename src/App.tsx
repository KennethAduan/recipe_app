import { QueryClient, QueryClientProvider } from "react-query";
import { NavbarDefault } from "./components";
// Create a client
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavbarDefault />
    </QueryClientProvider>
  );
}
