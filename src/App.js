import './reset.scss';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 남주님

// 기만님

// 지홍님

// 정도님

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
