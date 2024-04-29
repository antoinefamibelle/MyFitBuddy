import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout';
import { AuthContext, LoadingContext } from "@/context";
import {
  Homepage,
  Page404,
  LoginPage,
  RegisterPage
} from './pages';
import { useState } from 'react';
import { UserAuthRo } from './lib/types';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserAuthRo | null>(null);

  return (
    <>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        {loading && (
          <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100'>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" /> 
          </div>
        )}
          <AuthContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </AuthContext.Provider>
       
      </LoadingContext.Provider>
    </>
  )
}

export default App
