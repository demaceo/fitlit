class HydrationRepository {
  constructor() {
    this.records = [];
  }

  // addDailyOunces(userID, date, numOunces) {
  //   let newData = {
  //     "userID": userID.
  //     "date": date,
  //     "numOunces": numOunces
  //   }
  //   this.records.push(newData)
  // }

  calculateAverageTotalOunces(userID) {
    let totalOunces = 0;
    let counter = 0;
    this.records.forEach(record => {
      if (record.userID === userID) {
        totalOunces += record.numOunces;
        counter++
      }
    })
    return totalOunces = totalOunces / counter;
  }

  calculateAverageDailyOunces(userID, date) {
    let averageDailyOunces = 0;
    let counter = 0;
    this.records.forEach(record => {
      if (record.userID === userID && record.date === date) {
        averageDailyUsers += record.numOunces
        counter++;
      }
    })
    return averageDailyOunces = averageDailyOunces / counter;
  }

  calculateAverageWeeklyOunces(userID, date) {

  }
}

export default HydrationRepository;
