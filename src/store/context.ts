import { createContext } from 'react';

interface ApplicationContextProps {
	isMobile: boolean,
	widthViewport: number,
	scrollViewport: number
}

export const ApplicationContext 
	= createContext<ApplicationContextProps | undefined>(undefined)