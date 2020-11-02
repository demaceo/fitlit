
import './css/styles.scss';


import domUpdates from './domUpdates';
import fetchData from './fetch';
import UserRepository from './UserRepository';
import moment from 'moment'

let currentUser
let todaysDate



//*****************CLASS INSTANTIATIONS*****************
function getData() {
  return fetchData()
  .then(data => {
    let todaysDate = moment().format('YYYY/MM/DD');
    let userRepository = new UserRepository(data, todaysDate);
    currentUser = userRepository.users[Math.floor(Math.random() * 50)]
    domUpdates.defineData(currentUser, todaysDate, userRepository);
    console.log("This is currentUser", currentUser)
  })
  .catch((err) => console.log(err.message))
}

//****************SECTIONS******************/
const hydrationSection = document.querySelector('#hydration-card-container')
const sleepSection = document.querySelector('#sleep-card-container')
const stepSection = document.querySelector('#steps-card-container'); 
const stairSection = document.querySelector('#stairs-card-container')

//****************STEP SECTION**************** */

const stepCardHandler = () => {
  let stepsMainCard = document.querySelector('#steps-main-card')
  let stepsInfoCard = document.querySelector('#steps-info-card')
  let stepsFriendsCard = document.querySelector('#steps-friends-card')
  let stepsCalendarCard = document.querySelector('#steps-calendar-card')
  if (event.target.classList.contains('steps-info-button')){
    domUpdates.changeCard(stepsMainCard, stepsInfoCard)
  }
  if (event.target.classList.contains('step-friends-button')){
    domUpdates.changeCard(stepsMainCard, stepsFriendsCard)
  }
  if (event.target.classLIst.contains('steps-calendar-button')){
    domUpdates.changeCard(stepsMainCard, stepsCalendarCard)
  }
  if (event.target.classList.contains('steps-go-back-button')){
    domUpdates.changeCard(event.target.parentNode, stepsMainCard)
  }
}
//*********************HYDRATION SECTION************************** */
  const hydrationCardHandler = () => {
    let hydrationMainCard = document.querySelector('#hydration-main-card')
    let hydrationInfoCard = document.querySelector('#hydration-info-card')
    let hydrationFriendsCard = document.querySelector('#hydration-friends-card')
    let hydrationCalendarCard = document.querySelector('hydration-calendar-card')
    if (event.target.classList.contains('hydration-info-button')){
      domUpdates.changeCard(hydrationMainCard, hydrationInfoCard)
    }
    if(event.target.classLIst.contains('hydration-friends-button')){
      domUpdates.changeCard(hydrationMainCard, hydrationFriendsCard)
    }
    if (event.target.classList.contains('hydration-calendar-button')){
      domUpdates.changeCard(hydrationMainCard, hydrationCalendarCard)
    } 
     if (event.target.classList.contains('steps-go-back-button')){
      domUpdates.changeCard(event.target.parentNode, hydrationMainCard)
      }
    }
    
  //******************SLEEP SECTION******************************** */
  const sleepCardHandler = () => {
    let sleepMainCard = document.querySelector('#sleep-main-card')
    let sleepInfoCard = document.querySelector('#sleep-info-card')
    let sleepFriendsCard = document.querySelector('#sleep-friends-card')
    let sleepCalendarCard = document.querySelector('#sleep-info-button')
    if (event.target.classList.contains('sleep-info-button')){
      domUpdates.changeCard(sleepMainCard, sleepInfoCard)
    }
    if (event.target.classList.contains('sleep-friends-button')){
      domUpdates.changeCard(sleepMainCard, sleepFriendsCard)
    }
    if (event.target.classList.contains('sleep-calendar-button')){
      domUpdates.changeCard(sleepMainCard, sleepCalendarCard)
    }
    if (event.target.classList.contains('sleep-go-back-button')){
      domUpdates.changeCard(event.target.parentNode, sleepMainCard)
    }
  }
//********************STAIR SECTION******************************* */
  const stairsCardHandler = () => {
    let stairsMainCard = document.querySelector('#stairs-main-card')
    let stairsInfoCard = document.querySelector('#stairs-info-card')
    let stairsFriendsCard = document.querySelector('#sairs-friends-card')
    let stairsCalendarCard = document.querySelector('#stairs-calendar-card')
    if (event.target.classList.contains('stairs-info-button')){
      domUpdates.changeCard(stairsMainCard, stairsInfoCard)
    }
    if (event.target.classList.contains('stairs-friends-button')){
      domUpdates.changeCard(stairsMainCard, stairsFriendsCard)
    }
    if (event.target.classList.contains('stairs-calendar-card')){
      domUpdates.changeCard(stairsMainCard, stairsCalendarCard)
    }
    if (event.target.classList.contains('stair-go-back-button')){
      domUpdates.changeCard(event.target.parentNode, stairsMainCard)
    }
  }

//
// //***********************QUERY SELECTORS*************************//
//
// let dailyOz = document.querySelectorAll('.daily-oz');
// let dropdownEmail = document.querySelector('#dropdown-email');
// let dropdownFriendsStepsContainer = document.querySelector('#dropdown-friends-steps-container');
// let dropdownGoal = document.querySelector('#dropdown-goal');
// let dropdownName = document.querySelector('#dropdown-name');
// let headerName = document.querySelector('#header-name');
// let hydrationCalendarCard = document.querySelector('#hydration-calendar-card');
// let hydrationFriendOuncesToday = document.querySelector('#hydration-friend-ounces-today');
// let hydrationFriendsCard = document.querySelector('#hydration-friends-card');
// let hydrationInfoCard = document.querySelector('#hydration-info-card');
// let hydrationInfoGlassesToday = document.querySelector('#hydration-info-glasses-today');
// let hydrationMainCard = document.querySelector('#hydration-main-card');
// let hydrationUserOuncesToday = document.querySelector('#hydration-user-ounces-today');
// let mainPage = document.querySelector('main');
// let profileButton = document.querySelector('#profile-button');


// //*****************SLEEP FUNCTIONALITY*****************************
//
// sleepCalendarHoursAverageWeekly.innerText = user.calculateAverageHoursThisWeek(todayDate);
// sleepCalendarQualityAverageWeekly.innerText = user.calculateAverageQualityThisWeek(todayDate);
// sleepFriendLongestSleeper.innerText = userRepository.users.find(user => {
//   return user.id === userRepository.getLongestSleepers(todayDate)
// }).getFirstName();
// sleepFriendWorstSleeper.innerText = userRepository.users.find(user => {
//   return user.id === userRepository.getWorstSleepers(todayDate)
// }).getFirstName();
// sleepInfoHoursAverageAlltime.innerText = user.hoursSleptAverage;
// stepsInfoMilesWalkedToday.innerText = user.activityRecord.find(activity => {
//   return (activity.date === todayDate && activity.userId === user.id)
// }).calculateMiles(userRepository);
//
// sleepInfoQualityAverageAlltime.innerText = user.sleepQualityAverage;
//
// sleepInfoQualityToday.innerText = sleepData.find(sleep => {
//   return sleep.userID === user.id && sleep.date === todayDate;
// }).sleepQuality;
//
// sleepUserHoursToday.innerText = sleepData.find(sleep => {
//   return sleep.userID === user.id && sleep.date === todayDate;
// }).hoursSlept;

//*****************MISC****************************************


// user.findFriendsTotalStepsForWeek(userRepository.users, todayDate);

// user.friendsActivityRecords.forEach(friend => {
//   dropdownFriendsStepsContainer.innerHTML += `
//   <p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>
//   `;
// });

// let friendsStepsParagraphs = document.querySelectorAll('.friends-steps');

// friendsStepsParagraphs.forEach(paragraph => {
//   if (friendsStepsParagraphs[0] === paragraph) {
//     paragraph.classList.add('green-text');
//   }
//   if (friendsStepsParagraphs[friendsStepsParagraphs.length - 1] === paragraph) {
//     paragraph.classList.add('red-text');
//   }
//   if (paragraph.innerText.includes('YOU')) {
//     paragraph.classList.add('yellow-text');
//   }
// });

//****************EVENT LISTENERS*********** */
window.addEventListener('load', getData )
stepSection.addEventListener('click', stepCardHandler); 
stairSection.addEventListener('click', stairsCardHandler)
hydrationSection.addEventListener('click', hydrationCardHandler)
sleepSection.addEventListener('click', sleepCardHandler)

