import wheelitphone from '../images/wheelitphone.png'
import wheelit from '../images/wheelit.png'
import healyou from '../images/HealYou.png'
import healyouphone from '../images/HealYouphone.png'
export const projectdets = [
  {
    id: 0,
    name: 'Wheelit',
    startdate: '10/05/2023',
    duration: '20 days',
    TechStack: ['React', 'FireBase'],
    shortdesc: 'Self Driven Vehicle Rental Website',
    im: wheelit,
    backim: wheelitphone,
    desc: 'Whenver you want to go on a trip or need to go to another city to visit your family or even travel within city for daily needs, you might need a vehicle. If you dont own one, it is a hassle to get one. This website makes that easy. You can rent bikes, scooters, cars, luxury vehicles and SUVs that will accomodate your transportation needs.',
    usage:
      'It gets the bookinng dates as input from user and displays a variety of vehicles in your city that are available within that duration of time from which user can select. Booking process is extremely simple. The user needs to provide the vehicle pickup and dropoff address and just click on pay and make the payment.',
    link: 'https://github.com/Neel10Singh/wheelit',
  },
  {
    id: 1,
    name: 'HealYou',
    startdate: '1/04/2023',
    duration: '10 days',
    TechStack: ['React', 'MongoDb', 'NodeJS'],
    shortdesc: 'Emergency Medical Service Provider Website',
    im: healyou,
    backim: healyouphone,
    desc: 'Pandemic like COVID-19 taught us how important medcial services are and how difficult it might get in times of need to get these services. HealYou provides single stop for multiple such services like hospital bed booking, hospital visit appointment, pathology test appointment and online doctor appointment.',

    usage:
      'The website fetches user location using google map API and displays hospitals and pathologies near to the user. The booking can be made just by uploading the aadhar of the patient. It also has a tab for booking online consultation appointments. It lists best doctors from accross the country specializing in in different fields. The user can apply filters like field of study, rating of doctors etc. It also has dahboards for doctors, hopitals and pathologies.',
    link: 'https://github.com/devpiyush20/healyou',
  },
]
