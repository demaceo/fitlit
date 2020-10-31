class HydrationRepository {
  constructor() {
    this.records = [];
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
  getAverageOuncesOverall() {
    let sumOunces = this.records.reduce((sum, entry) => {
      sum += entry.numOunces;
      return sum;
    }, 0);
    let overallAverageOunces = (sumOunces / this.records.length).toFixed(2)
    return Number(overallAverageOunces)
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
