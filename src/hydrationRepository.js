class HydrationRepository {
  constructor() {
    this.records = [];


  }
  updateAverageOunces(date, amount) {

  }
  addDailyOunces(date) {
    

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
    let week = [];
    let day = date;
    this.records.forEach(record => {
      if (record.userID === userID && record.date === date){
        week.push({
          `${date}`: calculateAverageDailyOunces(userID, date);
        })
        day++;
      if (record.userID === userID && record.date === date)
      }
    }))
  }
  sumDailyOunces(userID, date){
    let totalDailyOunces = 0;
    this.records.forEach(record => {
      if (record.userID === userID && record.date === date) {
        totalDailyOunces += record.numOunces
      }
    })
    return totalDailyOunces;
  }
}

export default HydrationRepository;
