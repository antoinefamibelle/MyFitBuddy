import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout';
import {
  Homepage,
  Page404,
  LoginPage,
  RegisterPage
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
