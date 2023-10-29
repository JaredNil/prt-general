import { createBrowserRouter } from "react-router-dom";


import Application from './../Application';

import MainPage from './../pages/mainPage/MainPage';

import ErrorPage from './../pages/ErrorPage';
import ProjectPage from "../pages/projectPage/ProjectPage";



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