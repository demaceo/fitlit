class SleepRepository() {
  constructor() {
    this.record = [];
    this.weeklyRecords = [];
  }
  // For a user (identified by their userID), the average number of hours slept per day
  averageTotalHoursSlept() {
    let totalAverage = 0;
    this.record.forEach(record => {
      totalAverage += record.hoursSlept
    });
    return totalAverage = totalAverage / this.record.length
  }
  // For a user, their average sleep quality per day over all time
  averageTotalSleepQuality() {
    let totalAverage = 0;
    this.record.forEach(record => {
      totalAverage += record.sleepQuality
    });
    return totalAverage = totalAverage / this.record.length
  }
  // For a user, how many hours they slept for a specific day (identified by a date)
  findHoursSleptOnDate(date) {
    this.records.find(record => {
      if (record.date === date) {
        return record.hoursSlept
      }
    })
  }
  /////// ---- *** MORE DYNAMIC FOR THE ABOVE AND BELOW METHODS: *** ----
  // findSleepQualityOnDate(date, indexNumber) {
  //   this.records.find(record => {
  //     if (record.date === date) {
  //       return record[indexNumber]
  //     }
  //   })
  // }
  // For a user, their sleep quality for a specific day (identified by a date)
  findSleepQualityOnDate(date) {
    this.record.find(record => {
      if (record.date === date) {
        return record.sleepQuality
      }
    })
  }
  // For a user, how many hours slept each day over the course of a given week (7 days)
  //- you should be able to calculate this for any week, not just the latest week
  determineWeeklySchedule() {
    let mockRecords = this.record;
    let weekCounter = 0;
    mockRecords.filter(record => {
      let week = mockRecords.slice(0, 7);
      weekCount++;
      // return this.weeklyRecords.push(`Week ${weekCount}: ${week}`);
       return this.weeklyRecords.push(`{Week ${weeklyCount}: ${week}}`);
    })
  }
  // function determineWeeklySchedule() {
  // mockRecords.filter(record => {
  //   // console.log(“splice”, mockRecords.splice(0, 6))
  //    let week = mockRecords.splice(0, 7);
  //    console.log(“week”, week);
  //     weeklyCount++;
  //     console.log(“mockrecords”, mockRecords)
  //     return weeklyRecords.push(`Week ${weeklyCount}: ${week}`);
  //     });
  //     return weeklyRecords;
  //     }
  determineWeeklyHoursSlept(todaysDate) {
    determineWeeklySchedule();
    let weeklyHoursSlept = [];
    let dayCounter = 0;
    this.weeklyRecords.forEach(week => {
      if (week.includes(todaysDate)) {
        week.forEach(day => {
          dayCounter++;
          weeklyHoursSlept.push(`Day ${dayCounter}: ${day.hoursSlept}`);
        })
      }
    })
    return weeklyHoursSlept;
  }
  // For a user, their sleep quality each day over the course of a given week (7 days)
  //- you should be able to calculate this for any week, not just the latest week
  determineWeeklySleepQuality(todaysDate) {
    determineWeeklySchedule();
    let weeklySleepQuality = [];
    let dayCounter = 0;
    this.weeklyRecords.forEach(week => {
      if (week.includes(todaysDate)) {
        week.forEach(day => {
          dayCounter++;
          weeklyHoursSlept.push(`Day ${dayCounter}: ${day.sleepQuality}`);
        })
      }
    })
    return weeklySleepQuality;
  }
  // For all users, the average sleep quality
  averageTotalSleepQuality() {
    let totalAverage = 0;
    this.record.forEach(record => {
      totalAverage += record.sleepQuality
    });
    return totalAverage = totalAverage / this.record.length
  }
  // Find all users who average a sleep quality greater than 3 for a given week (7 days)
  //- you should be able to calculate this for any week, not just the latest week
  filterSleepQualityGreaterThanThree() {
    let qualitySleep = [];
    this.records.filter(record => {
      if(record.sleepQuality > 3){
        return qualitySleep.push(record)
      }
    })
    return qualitySleep;
  }
  // For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)
  // Make a metric of your own! Document it, calculate it, and display it.
  //
  // updateSleep(date, hours, quality) {
  //   this.sleepHoursRecord.unshift({
  //     ‘date’: date,
  //     ‘hours’: hours
  //   });
  //   this.sleepQualityRecord.unshift({
  //     ‘date’: date,
  //     ‘quality’: quality
  //   });
  //   if (this.sleepHoursRecord.length) {
  //     this.hoursSleptAverage = ((hours + (this.hoursSleptAverage * (this.sleepHoursRecord.length - 1))) / this.sleepHoursRecord.length).toFixed(1);
  //   } else {
  //     this.hoursSleptAverage = hours;
  //   }
  //   if (this.sleepQualityRecord.length) {
  //     this.sleepQualityAverage = ((quality + (this.sleepQualityAverage * (this.sleepQualityRecord.length - 1))) / this.sleepQualityRecord.length).toFixed(1);
  //   } else {
  //     this.sleepQualityAverage = quality;
  //   }
  // }
  // calculateAverageHoursThisWeek(todayDate) {
  //   return (this.sleepHoursRecord.reduce((sum, sleepAct) => {
  //     let index = this.sleepHoursRecord.indexOf(this.sleepHoursRecord.find(sleep => sleep.date === todayDate));
  //     if (index <= this.sleepHoursRecord.indexOf(sleepAct) && this.sleepHoursRecord.indexOf(sleepAct) <= (index + 6)) {
  //       sum += sleepAct.hours;
  //     }
  //     return sum;
  //   }, 0) / 7).toFixed(1);
  // }
  // calculateAverageQualityThisWeek(todayDate) {
  //   return (this.sleepQualityRecord.reduce((sum, sleepAct) => {
  //     let index = this.sleepQualityRecord.indexOf(this.sleepQualityRecord.find(sleep => sleep.date === todayDate));
  //     if (index <= this.sleepQualityRecord.indexOf(sleepAct) && this.sleepQualityRecord.indexOf(sleepAct) <= (index + 6)) {
  //       sum += sleepAct.quality;
  //     }
  //     return sum;
  //   }, 0) / 7).toFixed(1);
  // }
}
export default SleepRepository;
