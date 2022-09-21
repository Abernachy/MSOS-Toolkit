export let amloResources = [
	{
		name: 'NOTAMS DINS',
		type: 'Airfield Resources',
		path: 'https://www.notams.faa.gov/dinsQueryWeb/',
		requireCac: false,
		img: '/imgs/MoarPlanes.jpg',
		description: 'Pull NOTAMS for any known airfield',
	},
	{
		name: 'SMS',
		type: 'Mission Resources',
		path: 'https://sms.transport.mil/sms-open/smswebstart.pl',
		requireCac: true,
		img: '/imgs/SMSLargeLogo.png',
		description:
			'Web based computer system that provides visbility of air, sea, and land transportation assets and provides reporting of cargo/pax movements.',
	},
	{
		name: 'TACC SharePoint',
		type: 'Mission Resources',
		path: 'https://tacc.us.af.mil',
		requireCac: true,
		img: '/imgs/TACC_Emblem.jpg',
		description: 'TACC Sharepoint',
	},
	{
		name: 'Foreign Clearance Guide',
		type: 'Mission Resources',
		path: 'https://fcg.pentagon.mil/fcg.cfm',
		requireCac: false,
		img: '/imgs/alawone.jpg',
		description: 'US Foreign Clearance Guide',
	},
	{
		name: '621 CRW SharePoint',
		type: 'Mission Resources',
		path: 'https://usaf.dps.mil/sites/621crw.default.aspx',
		requireCac: true,
		img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/USAF_-_621st_Contigency_Response_Wing.png',
		description: '621 CRW Sharepoint',
	},
	{
		name: '621 AMAG SharePoint',
		type: 'Mission Resources',
		path: 'https://usaf.dps.mil/sites/621AMAG/default.aspx',
		requireCac: true,
		img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/USAF_-_621st_Contigency_Response_Wing.png',
		description: '621 AMAG Sharepoint',
	},
	{
		name: 'NOA Weather',
		type: 'Mission Resources',
		path: 'https://weather.gov',
		requireCac: false,
		img: '/imgs/hurricane.jpg',
		description: 'TACC Sharepoint',
	},
	{
		name: 'NOA Weather',
		type: 'Mission Resources',
		path: 'https://weather.gov',
		requireCac: false,
		img: '/imgs/hurricane.jpg',
		description: 'TACC Sharepoint',
	},
]

//AMLO list requests:

//1
// Contacts for all of the AOCs =>  Air Operation Centers
// A list of phone numbers and offices/emails

//2
//TACC secure website =>  the AMLO contact list, a link directly to it.

//4
// Steal links from the MSOS SharePoint

//8
// Link to the TTP Repository => Tactics , testing , and procedures from the EC
