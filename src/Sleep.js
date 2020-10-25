class Sleep { // instance for the user's sleep each day
  constructor(data, userRepository) {
    this.userId = data.userID;
    this.date = data.date;
    this.hoursSlept = data.hoursSlept;
    this.sleepQuality = data.sleepQuality;
    // this.sleep(userRepository);
  }
  findSleeper(userRepository) {
    userRepository.users.find(user => {
      return user.id === this.userId;
    }).updateSleep(this.date, this.hoursSlept, this.sleepQuality);
  }
}

export default Sleep;
