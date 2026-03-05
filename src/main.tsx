// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './components/app/App.tsx';
import './i18n';

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement!); //восклицательный знак означает что этот элемент точно есть (TS)

reactRoot.render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
);
