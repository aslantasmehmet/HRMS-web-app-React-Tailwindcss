import "./App.css";
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import Dashboard from "./layout/Dashboard";


function App() {
  return (
    <div className="App">
      
      <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
    </div>
  );
}

export default App;
