import { useLayoutEffect, useState } from 'react'


const useViewport = () => {

	const [viewportWidth, setViewportWidth] = useState(null)
	function resizeHandler() { setViewportWidth(window.innerWidth) }
	window.addEventListener('resize', resizeHandler)

	return viewportWidth
}

export default useViewport