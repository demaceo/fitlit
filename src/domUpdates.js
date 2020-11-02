const domUpdates = {
  currentUser: null,
  todaysDate: null,
  userRepository: null,

  defineData(user, todaysDate, userRepository) {
    this.currentUser = user;
    this.todaysDate = todaysDate;
    this.userRepository = userRepository;
  },

  displayPage() {
    this.displayName(); 
    this.displayStepCard();
    this.displayStairCard();
  },

  displayName() {
    document.getElementById('#header-name').innerText = `${this.currentUser.getFirstName()}'s FITLIT`
  },

  changeCard(hideCard, showCard) {
    hideCard.classList.add('hide')
    showCard.classList.remove('hide')
  },

  displayDropDown() {
    document.getElementById('#user-info-dropdown').classList.toggle('hide')
    document.getElementById('#dropdown-name').innerText = this.currentUser.name
    document.getElementById('#dropdown-goal').innerText = `Daily Step Goal: ${this.currentUser.dailyStepGoal}`; 
    document.getElementById('#dropdown-email').innerText = `User Account: ${this.currentUser.email}`; 
  },

  //*****************ACTIVITY DISPLAY SECTION************** */

  //****Steps*/

  displayStepCard() {
    document.querySelector('steps-user-steps-today').innerText = `${this.currentUser.activityInfo.latestSteps()}`
    this.displayStepsInfo(); 
    this.displayStepCalendarCard();
    this.displayStepFriendCard(); 
    this.displayUsersStepGoalComparison(); 
  }, 
  displayStepsInfo() {
    document.getElementById('#input-steps-minutes').value = ''; 
    document.getElementById('#input-steps').value = ''; 
    document.qetElementById('steps-info-miles-walked-today').innerText = 
    `${this.currentUser.activityInfo.userMilesWalked(this.currentUser, this.todaysDate)}`
    document.getElementById('steps-info-active-minutes-today').innerText = `${this.currentUser.activityInfo.latestSteps()}`
  },

  displayStepCalendarCard() {
    document.getElementById('#steps-calendar-total-active-minutes-weekly').innerText = this.currentUser.activityInfo.minutesActivePerWeek(this.todaysDate)
},

  displayStepFriendCard() { 
    document.getElementById('#steps-friends-steps-average-today').innerText = this.userRepository.getCommunityAverageSteps(this.todaysDate)
    document.getElementById('#steps-friend-active-minutes-average-today').innerText = this.userRepository.getCommunityAvgMinActive(this.todaysDate)
    document.getElementById('steps-friend-average-step-goal').innerText = this.userRepository.getCommunityAvgStepGoal();
  },
//***Stairs* */
displayStairsCard() {
  document.getElementById('stairs-user-stairs-today').innerText = `${this.currentUser.latestStairs()}`
  this.displayStairsCalendarCard()
  this.displayStairsFriendCard(); 
  this.displayUsersStairGoalComparison(); 
}, 

displayStairsCalendarCard(){
  // document.getElementById('#steps-calendar-flights-average-weekly').innerText = this.activityInfo.records.getWeekly
}
}

export default domUpdates; 
