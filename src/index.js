import ReactDOM from 'react-dom/client';
import Provider from './Components/Auth/Provider';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider>
               <App />
            </Provider>);
