import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FigmaApp from './Figma';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FigmaApp />
  </BrowserRouter>,
)
