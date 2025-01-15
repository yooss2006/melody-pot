import { createBrowserRouter, Navigate } from 'react-router-dom';

export const appRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <div>MP3 생성 페이지</div>,
    },
    {
      path: '/mp3/:id',
      element: <div>mp3</div>,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
};
