import { createBrowserRouter } from "react-router-dom";


import Application from './../Application';

import MainPage from './../pages/MainPage';
import ProjectPage from './../pages/ProjectPage';
import ErrorPage from './../pages/ErrorPage';



const router = createBrowserRouter([
	{
		element: <Application />,
		children: [
			{
				path: "/",
				element: <MainPage />,
				errorElement: <ErrorPage />,
			},
            {
				path: "/projects",
				element: <ProjectPage />,
				errorElement: <ErrorPage />,
			},
		]
	},
]);

export default router