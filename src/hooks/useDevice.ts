import { useEffect, useState, useLayoutEffect } from 'react'


const useDevice = () => {
	const [size, setSize] = useState([0]);
	const [isMobile, setMobile] = useState(false);

	useLayoutEffect(() => {

		function updateSize() {
			setSize([window.innerWidth]);
		}
		window.addEventListener('resize', updateSize);

		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	useEffect(() => {
		// console.log(window.innerWidth)
		setSize([window.innerWidth]);
	}, [window.innerWidth])


	useEffect(() => {
		const userAgent =
			typeof window.navigator === "undefined" ? "" : navigator.userAgent;

		const mobile = Boolean(
			userAgent.match(
				/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
			)
		);
		setMobile(mobile);
	}, []);


	if (isMobile) { return true }
	else if (!isMobile && (size[0] < 1024)) { return true }
	else { return false }

}

export default useDevice