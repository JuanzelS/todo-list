import ReactDOM from 'react-dom/client'; // import from react-dom/client
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
