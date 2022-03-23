import React, { useState, useEffect } from 'react'

const useDeviceSize = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	const handleWindowResize = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	useEffect(() => {
		// The component is mounted and teh window is available
		handleWindowResize()
		window.addEventListener('resize', handleWindowResize)
		//unsubscribe from the event on component unmount
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])
	return [width, height]
}

export default useDeviceSize
