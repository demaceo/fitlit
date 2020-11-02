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
    this.displayStepCard()
  },

  displayName() {
    document.querySelector('#header-name').innerText = `${this.currentUser.getFirstName()}'s FITLIT`
  },

  changeCard(hideCard, showCard) {
    hideCard.classList.add('hide')
    showCard.classList.remove('hide')
  },

  displayDropDown() {

  },

  //*****************ACTIVITY DISPLAY SECTION************** */

  //****Steps*/

  displayStepCard() {
    document.getElementById('steps-user-steps-today').innerText = `${this.currentUser.activityInfo.latestSteps()}`
    this.displayStepsInfo(); 
    this.displayStepCalendarCard();
    this.displayStepFriendCard(); 
    this.displayUsersStepGoalComparison(); 
  }, 
  displayStepsInfo() {
    document.querySelector('#input-steps-minutes').value = ''; 
    document.querySelector('#input-steps').value = ''; 
    document.qetElementById('steps-info-miles-walked-today').innerText = 
    `${this.currentUser.activityInfo.userMilesWalked(this.currentUser, this.todaysDate)}`
    document.getElementById('steps-info-active-minutes-today').innerText = `${this.currentUser.activityInfo.latestSteps()}`
  },

  displayStepCalendarCard() {
    document.getElementbyId('#steps-calendar-total-active-minutes-weekly').innerText = this.currentUser.activityInfo.minutesActivePerWeek(this.todaysDate)
},

  displayStepFriendCard() { 
    document.getElementById('#steps-friends-steps-average-today').innerText = this.userRepository.getCommunityAverageSteps(this.todaysDate)
    document.getElementById('#steps-friend-active-minutes-average-today').innerText = this.userRepository.getCommunityAvgMinActive(this.todaysDate)
    document.getElementById('steps-friend-average-step-goal').innerText = this.userRepository.getCommunityAvgStepGoal();
  }

//***Stairs* */

}

export default domUpdates; 
