import Home from '../pages/home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <BrowserRouter future={{  v7_relativeSplatPath: true, }}>
      <Routes>
        <Route path={'/'} element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}