import './css/base.scss'
import './css/styles.scss';

import fetchData from './fetch';
import domUpdates from './domUpdates';
import moment from 'moment';
import UserRepository from './UserRepository';

let currentUser
let todaysDate

/****************SECTIONS******************/
const hydrationSection = document.querySelector('#hydration-card-container')
const sleepSection = document.querySelector('#sleep-card-container')
const stepSection = document.querySelector('#steps-card-container');
const stairSection = document.querySelector('#stairs-card-container')

//*****************CLASS INSTANTIATION*****************
function getData() {
  return fetchData()
  .then((data) => {
    let todaysDate = moment().format('YYYY/MM/DD');
    let userRepository = new UserRepository(data, todaysDate);
    currentUser = userRepository.users[Math.floor(Math.random() * userRepository.users.length)]
    domUpdates.defineData(currentUser, todaysDate, userRepository);
  }).then(() => {
    domUpdates.displayPage();
  })
  .catch((err) => console.log(err.message));
}

const populateUserProfile = () => {
  domUpdates.displayDropDown(currentUser);
}

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
  if (event.target.classList.contains('steps-calendar-button')){
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
    if(event.target.classList.contains('hydration-friends-button')){
      domUpdates.changeCard(hydrationMainCard, hydrationFriendsCard)
    }
    if (event.target.classList.contains('hydration-calendar-button')){
      domUpdates.changeCard(hydrationMainCard, hydrationCalendarCard)
    }
     if (event.target.classList.contains('hydration-go-back-button')){
      domUpdates.changeCard(event.target.parentNode, hydrationMainCard)
      }
    }
  //******************SLEEP SECTION******************************** */
  const sleepCardHandler = () => {
    let sleepMainCard = document.querySelector('#sleep-main-card')
    let sleepInfoCard = document.querySelector('#sleep-info-card')
    let sleepFriendsCard = document.querySelector('#sleep-friends-card')
    let sleepCalendarCard = document.querySelector('#sleep-calendar-card')
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
    if (event.target.classList.contains('stairs-go-back-button')){
      domUpdates.changeCard(event.target.parentNode, stairsMainCard)
    }
  }
//****************EVENT LISTENERS*********** */
window.addEventListener('load', getData )
document.querySelector('#profile-button').addEventListener('click', populateUserProfile);
stepSection.addEventListener('click', stepCardHandler);
stairSection.addEventListener('click', stairsCardHandler)
hydrationSection.addEventListener('click', hydrationCardHandler)
sleepSection.addEventListener('click', sleepCardHandler)
