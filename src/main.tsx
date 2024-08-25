import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home';

// import App from './App';
import './components/main'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Home/>
  </StrictMode>,
)
