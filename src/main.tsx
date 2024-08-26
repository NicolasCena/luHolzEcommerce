import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './routes/Home/Home';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Home/>
    </BrowserRouter>
  </StrictMode>,
)
