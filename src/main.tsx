import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './routes/Home/Home';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Home/> */}
  </StrictMode>,
)
