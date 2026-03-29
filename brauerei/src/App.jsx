import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Content from './components/content/Content';
import LoginForm from './components/LoginForm';

function App() {

  return (
    <>

    <LoginForm />
      {/* <BrowserRouter> */}
        {/* < Header /> */}
        {/* < Content /> */}
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
