import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import router from './router/router'

import './index.scss';


createRoot(document.getElementById('root'))
    .render(
        <RouterProvider router={router} />
    );

reportWebVitals();
