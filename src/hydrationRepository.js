class HydrationRepository {
  constructor() {
    this.records = [];
    // this.totalAverageOunces = 0;
    // this.ouncesRecord = [];
    // this.weeklyOunces = [];
  }

  // updateAverageOunces(record) {
  //   this.ouncesRecord.unshift(record);
  //   if (this.ouncesRecord.length) {
  //     this.totalAverageOunces = Math.round((record.numOunces + (this.totalAverageOunces * (this.ouncesRecord.length - 1))) / this.ouncesRecord.length);
  //   } else {
  //     this.totalAverageOunces = record.numOunces;
  //   }
  // }
  addDailyOunces(userID, date, numOunces) {
    this.records.push({
      userID: userID.
      date: date,
      numOunces: numOunces
    })
  }

  calculateUserAverageTotalOunces(userID) {
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
