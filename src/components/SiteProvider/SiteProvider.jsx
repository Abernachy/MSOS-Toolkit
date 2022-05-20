import { createContext, useContext, useState } from 'react'
import { initialState } from '../../utils/initialState/initialState.jsx'

const SiteContext = createContext()
const ToggleMobileNavContext = createContext()

export function useAppContext() {
	return useContext(SiteContext)
}

export function useToggleMobileNavContext() {
	return useContext(ToggleMobileNavContext)
}

export function SiteProvider({ children }) {
	const { mobileNavMenuOpen } = initialState
	const [mobileNavMenu, setMobileNavMenu] = useState(mobileNavMenuOpen)

	function toggleMenu() {
		setMobileNavMenu((prevState) => !prevState)
		if (document.body.style.overflow !== 'hidden') {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'scroll'
		}
	}

	return (
		<SiteContext.Provider value={{ baseState: initialState }}>
			<ToggleMobileNavContext.Provider
				value={{
					navMenuState: mobileNavMenu,
					updateNavMenuState: toggleMenu,
				}}>
				{children}
			</ToggleMobileNavContext.Provider>
		</SiteContext.Provider>
	)
}
