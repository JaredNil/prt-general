
import { Outlet } from 'react-router-dom';

import useViewport from './hooks/useViewport.js';

import { ApplicationContext } from './store/context.ts';

import Background from './components/background/Background.jsx';


const Application = () => {

	const viewportWidth = useViewport()


	return (
		<ApplicationContext.Provider value={{ viewportWidth }}>

			<div className="application">
				<Background/>
				{/* <Header /> */}
				<Outlet />
				{/* <Footer /> */}
			</div>

		</ApplicationContext.Provider>
	)
}

export default Application