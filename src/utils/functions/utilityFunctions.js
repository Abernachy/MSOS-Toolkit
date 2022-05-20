export const resourceBuilder = (state, keyName) => {
	/* Function searches a given array of objects for the keyname.  If it doesn't find it on the first, it errors out.
    After that it creates an array of the keyNames, but only one copy of them, no duplicates.
    After that it begins building an object that has the type equal to the key name, and then it populates the lists with resources that have 
    the same values as the key.
  */
	// search the state for the key name if no luck then return error
	if (state[0].hasOwnProperty(keyName) === false) {
		return new Error(alert('no go'))
	}

	// build the arrays we'll be playing with
	let keyArray = []
	let objResources = []

	// create the separator array
	state.forEach((item) =>
		keyArray.includes(item[keyName]) ? null : keyArray.push(item[keyName])
	)
	// build the separator objects
	keyArray.forEach((item) =>
		objResources.push(
			new Object({ resourceType: item, resourcesList: [] })
		)
	)
	// populate the resourcesList of each one
	objResources.forEach(
		(item) =>
			(item.resourcesList = state.filter(
				(stateItem) => stateItem[keyName] === item.resourceType
			))
	)

	return objResources
}
