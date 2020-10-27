class HydrationRepository {
  constructor() {
    this.records = [];
    this.totalAverageOunces = 0;
    // this.dailyAverageOunces = 0;
    this.ouncesRecord = [];
    this.weeklyOunces = [];
  }

  updateAverageOunces(record) {
    this.ouncesRecord.unshift(record);
    if (this.ouncesRecord.length) {
      this.totalAverageOunces = Math.round((record.numOunces + (this.totalAverageOunces * (this.ouncesRecord.length - 1))) / this.ouncesRecord.length);
    } else {
      this.totalAverageOunces = record.numOunces;
    }
  }

  calculateAverageDailyOunces(date) {
    let dailyOunces = 0
    let dailyAverageOunces;
    let counter = 0;
    this.records.forEach(record => {
    if(record.date === date){
      dailyOunces += record.numOunces;
      counter ++
    }
    })
    return dailyOunces / counter;
  }
  calculateAverageWeeklyOunces(week) {
    let weeklyOunces = 0;
    let counter = 0;
    week.forEach(record => {
    weeklyOunces += record.numOunces;
    counter++
    })
    return weeklyOunces / counter
  }

  addDailyOunces(date) {
    return this.ouncesRecord.reduce((sum, record) => {
      let amount = record[date];
      if (amount) {
        sum += amount
      }
      return sum
    }, 0)
  }
  calculateUserAverageDailyOunces(userID, date){
  let averageDailyOunces = 0;
  let counter = 0;
  mockHydrationRepo.forEach(user => {
  if(user.userID === userID && user.date === date){
    averageDailyUsers += user.numOunces
    counter++;
  }
  })
 return averageDailyOunces = averageDailyOunces / counter
}

calculateUserAverageWeeklyOunces(userID, date){

}
calculateUserAverageTotalOunces(userID){
}
}

export default HydrationRepository;
