import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/Newincident';

export default function Routes() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Logon />
		},
		{
			path: '/register',
			element: <Register />
		},
		{
			path: '/profile',
			element: <Profile />
		},
		{
			path: '/incidents/new',
			element: <NewIncident />
		}
	]);

	return <RouterProvider router={router} />;
}
