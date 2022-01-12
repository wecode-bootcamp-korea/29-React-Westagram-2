import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 남주님
import LoginNamJu from './pages/namju/Login/Login';
import MainNamJu from './pages/namju/Main/Main';
// 기만님
import LoginKiMan from './pages/kiman/Login/Login';
import MainKiMan from './pages/kiman/Main/Main';
// 지홍님
import LoginJiHong from './pages/jihong/Login/Login';
import MainJiHong from './pages/jihong/Main/Main';
// 정도님
import LoginJeongDo from './pages/jeongdo/Login/Login';
import MainJeongDo from './pages/jeongdo/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-namju" element={<LoginNamJu />} />
        <Route path="/main-namju" element={<MainNamJu />} />

        <Route path="/login-kiman" element={<LoginKiMan />} />
        <Route path="/main-kiman" element={<MainKiMan />} />

        <Route path="/login-jihong" element={<LoginJiHong />} />
        <Route path="/main-jihong" element={<MainJiHong />} />

        <Route path="/login-jeongdo" element={<LoginJeongDo />} />
        <Route path="/main-jeongdo" element={<MainJeongDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
