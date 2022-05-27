export let userResources = [
	{
		name: 'Air Transport Test Loading Activity (ATTLA)',
		type: 'Regulation and Guidance',
		path: 'https://intelshare.intelink.gov/sites/attla',
		img: 'https://media.defense.gov/2018/Mar/14/2001890075/-1/-1/0/180306-F-ZZ999-0001.JPG',
		requireCac: true,
		description: 'ATTLA site for cert letters',
	},
	{
		name: '(IPhone) USAF EOS Center of Balance App (Free)',
		type: 'Phone App',
		path: 'https://apps.apple.com/us/app/usaf-eos-center-of-balance/id1425999066',
		img: '/imgs/phoneimage.jpg',
		requireCac: false,
		description: 'Weight and Balance calculator for your phone',
	},
	{
		name: '(Android) USAF EOS Center of Balace app (Free)',
		type: 'Phone App',
		path: 'https://play.google.com/store/apps/details?id=com.ECS.CBCalculator&hl=en_US&gl=US',
		img: '/imgs/phoneimage.jpg',
		requireCaC: false,
		description: 'Weight and Balance calculator for your phone',
	},
	{
		name: 'DTR Part 3 Appendix B - Unit Airlift',
		type: 'Regulation and Guidance',
		path: 'https://www.ustranscom.mil/dtr/part-iii/dtr_part_iii_app_b.pdf',
		img: '/imgs/transCom.png',
		requireCaC: false,
		description:
			'General information about Unit Deployment requirements and Airlift planning.',
	},
	{
		name: 'DTR Part 3 Appendix J - Hazardous Materials (HAZMAT) Certification and Mobility Procedures ',
		type: 'Regulation and Guidance',
		path: 'https://www.ustranscom.mil/dtr/part-iii/dtr_part_iii_app_j.pdf',
		img: '/imgs/transCom.png',
		requireCac: false,
		description:
			'Hazardous Materials handling requirements for joint airlift',
	},
	{
		name: 'DTR Part 3 Appendix O - Preparation of Equipment and Supplies for Joint Inspection',
		type: 'Regulation and Guidance',
		path: 'https://www.ustranscom.mil/dtr/part-iii/dtr_part_iii_app_o.pdf',
		img: '/imgs/transCom.png',
		requireCac: false,
		description:
			'How to prepare your equipment for the Air Force Joint Inspection so you can pass it',
	},
	{
		name: 'DTR Part 3 Appendix P - Center of Balance Determination - Finding CB',
		type: 'Regulation and Guidance',
		path: 'https://www.ustranscom.mil/dtr/part-iii/dtr_part_iii_app_p.pdf',
		img: '/imgs/transCom.png',
		requireCaC: false,
		description:
			'How to calculate center of balance and correctly mark equipment',
	},
	{
		name: 'Integrated Computerized Deployment System (ICODES)',
		type: 'Load Planning',
		path: 'https://eta-teams.transport.mil',
		img: '/imgs/lemon.jpg',
		requireCac: true,
		description:
			'Integrated Computerized Deployment System (ICODES) load planning',
	},
	{
		name: 'Joint Aircraft Load Planner Course Class Registration',
		type: 'Load Planning',
		path: 'https://www.milsuite.mil/book/groups/joint-air-mobility-support-jams',
		img: '/imgs/lemon.jpg',
		requireCac: true,
		description:
			'How to register for JALP classes. JALP is required to be an airload planner for your unit.',
	},
	{
		name: 'AMC-IMT1033 (PDF) Shippers Declaration for Dangerous Goods ',
		type: 'Downloadable Resources',
		path: '/files/AMC Form 1033.pdf',
		img: '/imgs/downloadimg.jpg',
		requireCac: false,
		description:
			"A downloadable Shipper's Declaration for Dangerous Goods.",
	},
	{
		name: '(PDF) DDForm 2133 Joint Airlift Inspection Record/Checklist ',
		type: 'Downloadable Resources',
		path: '/files/DD2133.pdf',
		img: '/imgs/downloadimg.jpg',
		requireCac: false,
		description:
			'A Joint Inspection Checklist.  Completion of this by the JI is required to load equipment on a Cargo Aircraft ',
	},
	{
		name: '(PDF) DDForm1387-2 Special Handling Certification (Automatic Triplicate) ',
		type: 'Downloadable Resources',
		path: '/files/DDForm 1387-2.pdf',
		img: '/imgs/downloadimg.jpg',
		requireCac: false,
		description:
			'Used for special handling of sensitive or special items like weapons, comm equipment, etc',
	},
	/*
	{
		//Placeholder for the single form 1387-2 Single Form
		name: '(PDF) DDForm1387-2 Special Handling Certification (Automatic Triplicate) ',
		type: 'Downloadable Resources',
		path: '/files/DDForm 1387-2.pdf',
		img: '/imgs/downloadimg.jpg',
		requireCac: false,
		description:
			'Used for special handling of sensitive or special items like weapons, comm equipment, etc',
	},
	{
		//Placeholder for the single form 2133 Pax Manifest
		name: '(PDF) DDForm1387-2 Special Handling Certification (Automatic Triplicate) ',
		type: 'Downloadable Resources',
		path: '/files/DDForm 1387-2.pdf',
		img: '/imgs/downloadimg.jpg',
		requireCac: false,
		description:
			'Used for special handling of sensitive or special items like weapons, comm equipment, etc',
	},
	*/
	{
		name: '(PDF) DDForm1387 Military Shipping Label) ',
		type: 'Downloadable Resources',
		path: 'https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd1387.pdf',
		img: '/imgs/downloadimg.jpg',
		requireCac: false,
		description: 'Military Shipping Label',
	},

	{
		name: '(PDF) DDForm 1385 Cargo Manifest ',
		type: 'Downloadable Resources',
		path: 'https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd1385.pdf',
		img: '/imgs/downloadimg.jpg',
		requireCac: false,
		description: 'Breakdown of the cargo on the aircraft, required for JI',
	},

	{
		name: '(PDF) DDForm 2775 Pallet Identifier',
		type: 'Downloadable Resources',
		path: 'https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd2775.pdf',
		img: '/imgs/downloadimg.jpg',
		requireCac: false,
		description:
			'Pallet Identifier goes on the pallet. You need one on the short side and one on the long side.',
	},

	{
		name: 'Munitions History Program',
		type: 'Regulation and Guidance',
		path: 'https://mhp.redstone.army.mil/MHPMAIN.ASPX',
		img: '/imgs/transCom.png',
		requireCac: true,
		description: 'Provides ammo specification data',
	},
]
