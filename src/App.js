import './App.css';
import { CustomerContextProvider } from './contexts/customer';
import Routers from './Routers';


function App() {
  return (
      <>
      <main>

      <CustomerContextProvider>
        <Routers/>

      </CustomerContextProvider>


      </main>
    
      </>

    );
}

export default App;
