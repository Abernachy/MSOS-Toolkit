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
			path: '/services/amlo',
		},
		{
			name: 'EAGLE Services',
			description: 'Need help preparing for Joint-Inspection',
			path: '/services/eagle',
		},
		{
			name: 'COMSEC Services',
			description: 'Need help with COMSEC Equipment',
			path: '/services/amlo',
		},
	],
	resourcesRoutes: [
		{
			name: 'User Resources',
			description: 'Free resources for customers',
			path: '/resources/user',
		},
		{
			name: 'AMLO Resources',
			description: 'Resources for AMLOs ',
			path: '/resources/amlo',
		},
		{
			name: 'EAGLE Resources',
			description: 'Resources for EAGLEs',
			path: '/resources/eagle',
		},
		{
			name: 'COMSEC Resources',
			description: 'Resources for COMSEC',
			path: '/resources/amlo',
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
