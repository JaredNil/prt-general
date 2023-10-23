
import { Outlet } from 'react-router-dom';

import useMobile from './hooks/useDevice.ts'
import useWidthViewport from './hooks/useWidthViewport.ts';
import useScrollViewport from './hooks/useScrollViewport.ts';

import { ApplicationContext } from './store/context.ts';

// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';

import { RouterProvider } from 'react-router-dom';



const Application = () => {

	const isMobile = useMobile()
	const widthViewport = useWidthViewport()
	const scrollViewport = useScrollViewport()

	return (
		<ApplicationContext.Provider value={{ isMobile, widthViewport, scrollViewport }}>

			<div className="application" >
				{/* <Header /> */}
				<Outlet />
				{/* <Footer /> */}
			</div>

		</ApplicationContext.Provider>
	)
}

export default Application