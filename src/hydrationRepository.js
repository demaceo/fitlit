class HydrationRepository {
  constructor() {
    this.records = [];
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

  getOuncesbyDay(date){
    let targetDay = this.records.find(entry => entry.date === date);
    return targetDay
  }

  calculateWeeksDailyOunces() {
    let week = this.records.slice(-7, -1);
    return week.map(day => {
      return day.numOunces;
    });
  }
  calculateWeeklyAvgOunces(date){
    let totalWeeklyOunces = this.records.reduce((sum, entry) => {
      let todaysEntry = this.records.find(entry => entry.date === date);
      let index = this.records.indexOf(todaysEntry);
      if (index <= this.records.indexOf(entry) && this.records.indexOf(entry) <= (index + 6)) {
         sum += entry.numOunces;
       }
       return sum;
     }, 0);
     let averageWeeklyOunces = (totalWeeklyOunces / 7).toFixed(0);
     return Number(averageWeeklyOunces);
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
  addHydrationData(input) {
    let foundEntry = this.records.find(record => record.date === input.date);
    if (foundEntry) {
      foundEntry.numOunces = foundEntry.numOunces + input.numOunces;
    } else {
      this.records.push(input)
  }
  }
}
export default HydrationRepository;
