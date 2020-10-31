class HydrationRepository {
  constructor() {
    this.records = [];
  }

  getOuncesbyDay(date){
    let targetDay = this.records.find(entry => entry.date === date);
    return targetDay
  }

  calculateTotalAverageOunces() {
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

  calculateAverageDailyOunces(date) {
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

  sumDailyOunces(userID, date){
    let totalDailyOunces = 0;
    this.records.forEach(record => {
      if (record.userID === userID && record.date === date) {
        totalDailyOunces += record.numOunces
      }
    })
    return totalDailyOunces;
  }

  calculateWeeksDailyOunces() {
    let week = this.records.slice(-7, -1);
    return week.map(day => {
      return day.numOunces;
    });
  }
}
export default HydrationRepository;
