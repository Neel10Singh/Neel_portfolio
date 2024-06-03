import wheelitphone from '../images/wheelitphone.png'
import wheelit from '../images/wheelit.png'
import healyou from '../images/HealYou.png'
import healyouphone from '../images/HealYouphone.png'
import Resme from '../images/ResMe.png'
import resmephone from '../images/ResMephone.png'
import ourspace from '../images/ourspace.png'
import ourspacephone from '../images/ourspacephone.png'
import decentra from '../images/Decentra.png'
import decentraphone from '../images/Decentraphone.png'
import show from '../images/ss2.png'
import showphone from '../images/ss4.jpg'

export const projectdets = [
  {
    id: 0,
    name: 'Wheelit',
    startdate: '10/05/2023',
    duration: '30 days',
    TechStack: ['React', 'Redux', 'FireBase'],
    shortdesc: 'Self Driven Vehicle Rental Website',
    im: wheelit,
    backim: wheelitphone,
    desc: 'Whenver you want to go on a trip or need to go to another city to visit your family or even travel within city for daily needs, you might need a vehicle. If you dont own one, it is a hassle to get one. This website makes that easy. You can rent bikes, scooters, cars, luxury vehicles and SUVs that will accomodate your transportation needs.',
    usage:
      'It gets the bookinng dates as input from user and displays a variety of vehicles in your city that are available within that duration of time from which user can select. Booking process is extremely simple. The user needs to provide the vehicle pickup and dropoff address and just click on pay and make the payment.',
    link1: 'https://wheelit.netlify.app/',
    link2: 'https://github.com/Neel10Singh/wheelit',
  },
  {
    id: 1,
    name: 'Showtime',
    startdate: '20/05/2024',
    duration: '5 days',
    TechStack: ['Next.js', 'TailwindCSS', 'MongoDB'],
    shortdesc: 'Entertainment library website.',
    im: show,
    backim: showphone,
    desc: "In today's digital age, movie enthusiasts often struggle to manage and share their favorite films across different platforms. We provide a user-friendly interface where individuals can curate their own collections, discover new movies, and share their playlists or keep them private.",
    usage:
      'The application is built using Next.js for server-side rendering and seamless navigation, MongoDB with Mongoose for efficient data storage and retrieval, and TailwindCSS for responsive and modern UI design. User authentication and security are managed through bcrypt for hashing passwords and JWT for token-based authentication, with Next-Auth simplifying session management. ',
    link1: 'https://showtime-self.vercel.app/',
    link2: 'https://github.com/Neel10Singh/Showtimenew',
  },
  {
    id: 2,
    name: 'Decentragram',
    startdate: '15/11/2023',
    duration: '40 days',
    TechStack: ['React', 'Tailwind', 'Solidity', 'Hardhat', 'Ethereum'],
    shortdesc: 'Blockchain based social media website',
    im: decentra,
    backim: decentraphone,
    desc: 'With the advent of Web3, this website harness the powers of blockchain and IPFS and provides a social media platform where you can create NFT profiles, post your thoughts and images, view other posts and tip the posts that you like with some ethereum with no governing mediatory.',
    usage:
      'In order to post, user needs to create an NFT profile. To do the same, they will just have to upload an image, write their name, pay some gas for the transaction and the profile will be created. Then in the home section, they can easily write down their thoughts, upload their photograph and easily post at the expense of a little gas.',
    link1: 'https://driveseed.org/file/bSioFQrnV6AfuCpNCAVs',
    link2: 'https://github.com/Neel10Singh/Decentragram',
  },
  {
    id: 3,
    name: 'HealYou',
    startdate: '1/04/2023',
    duration: '10 days',
    TechStack: ['React', 'MongoDb', 'NodeJS'],
    shortdesc: 'Emergency Medical Service Provider Website',
    im: healyou,
    backim: healyouphone,
    desc: 'HealYou provides single stop for multiple such services like hospital bed booking, hospital visit appointment, pathology test appointment and online doctor appointment.',

    usage:
      'The website fetches user location using google map API and displays hospitals and pathologies near to the user. The booking can be made just by uploading the aadhar of the patient. It also has a tab for booking online consultation appointments. It lists best doctors specializing in in different fields. The user can apply filters like field of study, rating of doctors etc. Also has dahboards for doctors, hopitals and pathologies.',
    link1: '',
    link2: 'https://github.com/devpiyush20/healyou',
  },
  {
    id: 4,
    name: 'OurSpace',
    startdate: '24/07/2023',
    duration: '10 days',
    TechStack: ['React', 'Redux', 'FireBase'],
    shortdesc: 'A blogging website',
    im: ourspace,
    backim: ourspacephone,
    desc: 'Blogs are a fun way of connecting with the world and sharing your ideas and thoughts while also reading blogs from a bunch of more prople. This website intends to provide this experience. Whether you just want to share updates with your family and friends or you want to start a blog and build a broader audience, you can do it all.',
    usage:
      'You can create your own blog with tags and photo, post it on the website, read all othe blogs, filter them out based on the topic you want to read about, like and comment on blogs, and also edit or delete your own blogs.',
    link1: 'https://our-space-neel.netlify.app/',
    link2: 'https://github.com/Neel10Singh/codealpha-bloggingwebsite',
  },
  {
    id: 5,
    name: 'ResMe',
    startdate: '16/07/2023',
    duration: '5 days',
    TechStack: ['React', 'Redux'],
    shortdesc: 'Resume Generater Website',
    im: Resme,
    backim: resmephone,
    desc: 'Your resume communicates your qualifications and your brand—who you are and what makes you different—to employers and recruiters. In a tough job market, you need a resume that helps you stand out in a sea of applicants. This is the CV that gets the job done.',
    usage:
      'Very easy to use, just enter your details step by step and voila! You have it, your resume ready in minutes. No limit on the number of CVs you can create. Unlimited downloading in PDF. Limitless creativity.',
    link1: 'https://res-me.netlify.app/',
    link2: 'https://github.com/Neel10Singh/CodeAlpha-resume-generator',
  },
]
