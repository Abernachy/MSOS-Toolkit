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
				{
					name: 'COMSEC Services',
					description: 'Need help with COMSEC Equipment',
					path: '/services/comsec-services',
				},
			],
		},
		{
			name: 'Resources',
			path: '/resources',
			subRoutes: [
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
		},
		{
			name: 'About Us',
			path: '/about-us',
		},
	],
}

// Ideas for here?
/*
{ name:
	type: file | link
	path:
	requireCac:true / false
	description
	
}

This way we can present these as cards/buttons for the users to use.
*/
export const resources = {
	user: [
		{
			name: 'Air Transport Test Loading Activity (ATTLA)',
			type: 'link',
			path: 'https://intelshare.intelink.gov/sites/attla',
			requireCac: true,
			description: 'ATTLA site for cert letters',
		},
		{
			name: 'stuff',
			type: 'Your face',
			path: 'www.google.com',
			description: 'This is your brain on drugs',
		},
		{
			name: 'stuff',
			type: 'Your face',
			path: 'www.google.com',
			description: 'This is your brain on drugs',
		},
	],
	amlo: [
		{
			name: 'stuff',
			type: 'Your face',
			path: 'www.google.com',
			description: 'This is your brain on drugs',
		},
		{
			name: 'stuff',
			type: 'Your face',
			path: 'www.google.com',
			description: 'This is your brain on drugs',
		},
		{
			name: 'stuff',
			type: 'Your face',
			path: 'www.google.com',
			description: 'This is your brain on drugs',
		},
	],
	eagle: [
		{
			name: 'stuff',
			type: 'Your face',
			path: 'www.google.com',
			description: 'This is your brain on drugs',
		},
		{
			name: 'stuff',
			type: 'Your face',
			path: 'www.google.com',
			description: 'This is your brain on drugs',
		},
		{
			name: 'stuff',
			type: 'Your face',
			path: 'www.google.com',
			description: 'This is your brain on drugs',
		},
	],
}
