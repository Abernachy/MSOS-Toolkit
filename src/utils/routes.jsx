export const routes = {
	navLinks: [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Services',
			path: '/services',
		},
		{
			name: 'Resources',
			path: '/resources',
		},
		{
			name: 'About Us',
			path: '/aboutUs',
		},
	],
	servicesRoutes: [
		{
			name: 'AMLO Services',
			description: 'Need help requesting Airlift',
			path: '/services/amlo-services',
		},
		{
			name: 'EAGLE Services',
			description: 'Need help preparing for Joint-Inspection',
			path: '/services/eagle-services',
		},
		{
			name: 'COMSEC Services',
			description: 'Need help with COMSEC Equipment',
			path: '/services/comsec-services',
		},
	],
	resourcesRoutes: [
		{
			name: 'User Resources',
			description: 'Free resources for customers',
			path: '/resources/user-resources',
		},
		{
			name: 'AMLO Resources',
			description: 'Resources for AMLOs ',
			path: '/resources/amlo-resources',
		},
		{
			name: 'EAGLE Resources',
			description: 'Resources for EAGLEs',
			path: '/resources/eagle-resources',
		},
		{
			name: 'COMSEC Resources',
			description: 'Resources for COMSEC',
			path: '/resources/amlo-resources',
		},
	],
}

// Ideas for here?
/*
{ name:
	type: file | link
	path:
	description
	
}

This way we can present these as cards/buttons for the users to use.
*/
export const resources = {
	user: [],
	amlo: [],
	eagle: [],
}
