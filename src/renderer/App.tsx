import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from '@/renderer/pages/login';

function Hello() {
  return (
    <div className="bg-red-500">
      <p className="text-black">HI</p>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider
      router={createHashRouter([
        { path: '/', element: <Hello /> },
        { path: '/login', element: <Login /> },
      ])}
    />
  );
}
