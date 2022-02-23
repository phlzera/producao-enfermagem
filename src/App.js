import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TelaLogin from './Paginas/TelaLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<TelaLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
