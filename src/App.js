import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Tanstack02 from './reactquery/Tanstack02';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Tanstack02/>
      </QueryClientProvider>
    </>
  );
}

export default App;
