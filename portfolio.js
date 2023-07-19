import emoji from "react-easy-emoji";


export const greetings = {
	name: "Ludumo Toni",
	title: "Hi all, I'm Ludumo",
	description:
		"As a passionate Full Stack web developer, I have gained expertise in programming with Ruby and have extensive experience building web applications using React.js, Next.js. In addition, I have a strong background in blockchain development, including experience with Ethereum, Solidity, Web3.js, Truffle, and the Hardhat Framework.",
	resumeLink:
		"https://www.dropbox.com/s/e6ddxd2kkiz160z/Ludumo__Toni_-_Full_Stack_Developer%20%282%29.pdf?dl=0",
};

export const openSource = {
	githubUserName: "Ludumo",
};

export const contact = {};

export const socialLinks = {
	url: "https://ludumo-toni.netlify.app/",
	linkedin: "https://www.linkedin.com/in/ludumo-toni/",
	github: "https://github.com/Ludumo",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"Motivated Full Stack developer with a passion for blockchain.",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
			
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Truffle, Hardhat & Infura"
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js,& IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
				{
					skillName: "Hardhat",
					fontAwesomeClassname: "logos:hardhat-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "75", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Le Wagon",
		subHeader: "Full stack Web Development Bootcamp",
		duration: "July 2021",
		desc: "Full Stack web development Ruby, Ruby on Rails, JavaScript",
	},
	{
		schoolName: "IronHack",
		subHeader: "Full stack Web Development Bootcamp",
		duration: "October 2021",
		desc: "Full Stack web development JavaScript, React.js, Next.js, Node.js",
	},
	{
		schoolName: "Udemy",
		subHeader: "Programming, Ethereum & Solidity",
		duration: "May 2022",
		desc: "Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain",
	},
];

export const experience = [
	/* {
		role: "Frontend Developer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Apr 2022 – Jun 2022",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
	{
		role: "API Engineer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2022 – Mar 2022",
		desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Full Stack Developer",
		company: "Bleed-AI",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	}, */
];

export const projects = [
	{
		name: "DApp Token Exchange capstone project",
		desc: "A decentralized cryptocurrency exchange built on ethereum, solidity language.",
		link: "https://shy-lab-5606.on.fleek.co/",
	},
	{
		name: "Chance Cafe",
		desc: "A cafe lounge & cocktail bar in West Berlin, Germany which I built desktop & mobile responsive menu with QR codes etc.",
		link: "https://chancecafe.de/",
	},
	{
		name: "Elite Consulting",
		desc: "A South African consulting company which I built a website for with Nextjs Typescript Styled using Tailwind css.",
		link: "https://eliteconsulting.co.za/",
	},
	{
		name: "Nkosiza Homes Consulting",
		desc: "A South African modular housing company which I built a website for with Nextjs, Tailwind css.",
		link: "https://www.nkosiza.africa/",
	},
	{
		name: "Monetary",
		desc: "crypto wallet interface built with Ruby on the rails framework & JS frontend.",
		link: "https://monettary.herokuapp.com/users/sign_in",
	},
	{
		name: "Dog BnB",
		desc: "Become a part-time dog owner, based on airbnb model built with Ruby on the rails framework.",
		link: "https://dogbnb-lewagon.herokuapp.com/",
	},
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio built with react.js and next.js bootstrap.",
		link: " ",
	},
];

export const feedbacks = [
/* 	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	}, */
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Ludumo Toni",
	description:
		"A passionate Full Stack Web Developer",
	author: "Ludumo Toni",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Ludumo Toni",
		"Portfolio",
		"Ludumo Toni Portfolio",
	],
}
