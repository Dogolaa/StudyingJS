import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import AppRoutes from './routes'; // Mudamos o nome para evitar conflitos
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
