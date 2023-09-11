import { QueryClient, QueryClientProvider } from "react-query";
import { NavbarDefault, Footer } from "./components";
import { Hero } from "./pages";
// Create a client
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavbarDefault />
      <Hero />
      <Footer />
    </QueryClientProvider>
  );
}
