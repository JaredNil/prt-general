import { useEffect } from 'react'


const useScrollLock = (isOpenBurger: boolean) => {
	const st = document.body.style
	const header = (document.getElementsByClassName('header-mobile') as HTMLCollectionOf<HTMLElement>)[0].style
	console.log(header)
	if (isOpenBurger) {
		st.overflowY = 'hidden'
		st.paddingRight = '17px'
		header.paddingRight = '17px'
	} else {
		st.overflowY = 'auto'
		st.paddingRight = '0px'
		header.paddingRight = '0px'
	}
	return 1
}

export default useScrollLock