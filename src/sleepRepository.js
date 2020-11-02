class SleepRepository {
  constructor() {
    this.records = [];
    this.weeklyRecords = [];
  }
  // For a user (identified by their userID), the average number of hours slept per day
  averageHoursSlept() {
    let totalHoursSlept = 0;
    this.records.forEach(record => {
      totalHoursSlept += record.hoursSlept
    });
    return Math.ceil(totalHoursSlept / this.records.length);
  }
  // For a user, their average sleep quality per day over all time
  averageSleepQuality() {
    let totalAverage = 0;
    this.records.forEach(record => {
      totalAverage += record.sleepQuality
    });
    return Math.ceil(totalAverage / this.records.length);
  }

  findHoursSleptOn(date) {
    const sleepLog = this.records.find(record => record.date === date)
    return sleepLog.hoursSlept;
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
  findSleepQualityOn(date) {
    const sleepLog = this.records.find(record => record.date === date)
    return sleepLog.sleepQuality;
  }

  // For a user, how many hours slept each day over the course of a given week (7 days)
  //- you should be able to calculate this for any week, not just the latest week

  determineWeeklySchedule() {
    let mockRecords = this.records;
    let week;
    let weekCounter = 0;
    mockRecords.filter(record => {
      week = mockRecords.slice(0, 7);
      // console.log("week", week);
      weekCounter++;
      // return this.weeklyRecords.push(`Week ${weekCount}: ${week}`);
      return this.weeklyRecords.push(`{Week ${weekCounter}: ${week}}`);
    })
    // console.log(this.weeklyRecords);
  }

  // determineWeeklySchedule() {
  //   let mockRecords = this.records;
  //   let week;
  //   let weekCounter = 0;
  //   mockRecords.reduce((acc, record) => {
  //     week = mockRecords.slice(0, 7);
  //     console.log("week", week);
  //     weekCounter++;
  //     return this.weeklyRecords.push(`{Week ${weekCounter}: ${week}}`);
  //   }, [`{Week ${weekCounter}: ${week}`])
  //   // console.log(this.weeklyRecords);
  // }
  // function determineWeeklySchedule() {
  // mockRecords.filter(record => {
  //   console.log(“splice”, mockRecords.splice(0, 6))
  //    let week = mockRecords.splice(0, 7);
  //    console.log(“week”, week);
  //     weeklyCount++;
  //     console.log(“mockrecords”, mockRecords)
  //     return weeklyRecords.push(`Week ${weeklyCount}: ${week}`);
  //     });
  //     return weeklyRecords;
  //     }
  determineWeeklyHoursSlept(todaysDate) {
    this.determineWeeklySchedule();
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
    // console.log(weeklyHoursSlept)
    return weeklyHoursSlept;
  }
  // For a user, their sleep quality each day over the course of a given week (7 days)
  //- you should be able to calculate this for any week, not just the latest week
  determineWeeklySleepQuality(todaysDate) {
    this.determineWeeklySchedule();
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
    this.records.forEach(record => {
      totalAverage += record.sleepQuality
    });
    return totalAverage = totalAverage / this.records.length
  }


  // Find all users who average a sleep quality greater than 3 for a given week (7 days)
  //- you should be able to calculate this for any week, not just the latest week
  determineSleepQualityGreaterThanThree(todaysDate) {
    let day = Number(todaysDate.charAt(8) + todaysDate.charAt(9));
    let dayCounter = 1;
    let weeksTotalSleepQuality = 0;
    let userSQGreaterThanThree = false;
    this.records.forEach(record => {
      let recordDay = Number(record.date.charAt(8) + record.date.charAt(9));
      if (recordDay === day && dayCounter < 7) {
        day++;
        dayCounter++;
        weeksTotalSleepQuality += record.sleepQuality;
      } else if (dayCounter === 7) {
        weeksTotalSleepQuality += record.sleepQuality;
        let weeksAverageSQ = weeksTotalSleepQuality / dayCounter;
        if (weeksAverageSQ > 3) {
          userSQGreaterThanThree = true;
        }
      }
    });
    return userSQGreaterThanThree;
  }

  // For a given day (identified by the date),
  //find the users who slept the most number of hours (one or more if they tied)
  determineBestSleeper(date) {
    let dayOfRest = [];
    this.records.forEach(record => {
      if (record.date === date) {
        dayOfRest.push(record)
      }
    })
    dayOfRest.sort((a, b) => {
      b.hoursSlept - a.hoursSlept
    })
    let bestNightsSleeper = [dayOfRest[0]];
    dayOfRest.forEach(sleep => {
      if (sleep.hoursSlept === dayOfRest[0].hoursSlept)
        bestNightsSleeper.push(sleep)
    })
    return bestNightsSleeper;
  }


  // Make a metric of your own! Document it, calculate it, and display it.
  // find the user's night of sleep....EVER!
  findWorstNightsSleep() {
    let worstSleep = this.records.sort((a, b) => {
      a.sleepQuality - b.sleepQuality
    })
    return `On ${worstSleep[0].date}, your sleep quality of ${worstSleep[0].sleepQuality} was godawful.`
  }
}
export default SleepRepository;
