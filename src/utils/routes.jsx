export const routes = {
	navLinks: [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Services',
			path: '/services',
			subRoutes: [
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
				// {
				// 	name: 'COMSEC Services',
				// 	description: 'Need help with COMSEC Equipment',
				// 	path: '/services/comsec-services',
				// },
			],
		},
		{
			name: 'Resources',
			path: '/resources',
			subRoutes: [
				{
					name: 'Customer Resources',
					description: 'Free resources for customers',
					path: '/resources/customer-resources',
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
					name: 'Newcomer Resources',
					description: 'Resources for new and upcoming squadron members',
					path: '/resources/newcomer-resources',
				},
				// {
				// 	name: 'COMSEC Resources',
				// 	description: 'Resources for COMSEC',
				// 	path: '/resources/amlo-resources',
				// },
			],
		},
		{
			name: 'About Us',
			path: '/about-us',
		},
	],
}
