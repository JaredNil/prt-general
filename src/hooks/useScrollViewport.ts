import {  useState } from 'react'


const useScrollViewport = () => {
	const [scroll, setScroll] = useState(window.innerWidth);

	const scrollHandler = (e:any) =>{
		setScroll(window.scrollY)
	}

	window.onscroll = scrollHandler

	return scroll
}

export default useScrollViewport