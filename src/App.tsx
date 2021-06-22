import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { NewRom } from "./pages/NewRom";

import { AuthContextProvider } from './contexts/authContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" component={Home} exact />
        <Route path="/rooms/new" component={NewRom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;