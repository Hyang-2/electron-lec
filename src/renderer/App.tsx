import {
  MemoryRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Login from '@/renderer/pages/login';

function Hello() {
  return (
    <div className="bg-red-500">
      <p className="text-black">저녁 메뉴가 무엇입니까?</p>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider
      router={createHashRouter([
        {
          path: '/',
          element: <Hello />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ])}
    />
  );
}
