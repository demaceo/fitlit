class ActivityRepository {
  constructor() {
    this.records = [];
  }

  calculateTotalStepsThisWeek(todayDate) {
    this.totalStepsThisWeek = (this.record.reduce((sum, activity) => {
      let index = this.record.indexOf(this.record.find(activity => activity.date === todayDate));
      if (index <= this.record.indexOf(activity) && this.record.indexOf(activity) <= (index + 6)) {
        sum += activity.steps;
      }
      return sum;
    }, 0));
  }

  updateActivities(activity) {
    this.record.unshift(activity);
    if (activity.numSteps >= this.dailyStepGoal) {
      this.accomplishedDays.unshift(activity.date);
    }
  }
  findClimbingRecord() {
    return this.record.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    })[0].flightsOfStairs;
  }
  calculateDailyCalories(date) {
    let totalMinutes = this.record.filter(activity => {
      return activity.date === date
    }).reduce((sumMinutes, activity) => {
      return sumMinutes += activity.minutesActive
    }, 0);
    return Math.round(totalMinutes * 7.6);
  }
  calculateAverageMinutesActiveThisWeek(todayDate) {
    return (this.record.reduce((sum, activity) => {
      let index = this.record.indexOf(this.record.find(activity => activity.date === todayDate));
      if (index <= this.record.indexOf(activity) && this.record.indexOf(activity) <= (index + 6)) {
        sum += activity.minutesActive;
      }
      return sum;
    }, 0) / 7).toFixed(0);
  }
  calculateAverageStepsThisWeek(todayDate) {
    return (this.record.reduce((sum, activity) => {
      let index = this.record.indexOf(this.record.find(activity => activity.date === todayDate));
      if (index <= this.record.indexOf(activity) && this.record.indexOf(activity) <= (index + 6)) {
        sum += activity.steps;
      }
      return sum;
    }, 0) / 7).toFixed(0);
  }
  calculateAverageFlightsThisWeek(todayDate) {
    return (this.record.reduce((sum, activity) => {
      let index = this.record.indexOf(this.record.find(activity => activity.date === todayDate));
      if (index <= this.record.indexOf(activity) && this.record.indexOf(activity) <= (index + 6)) {
        sum += activity.flightsOfStairs;
      }
      return sum;
    }, 0) / 7).toFixed(1);
  }

  findTrendingStepDays() {
    let positiveDays = [];
    for (var i = 0; i < this.record.length; i++) {
      if (this.record[i + 1] && this.record[i].steps > this.record[i + 1].steps) {
        positiveDays.unshift(this.record[i].date);
      } else if (positiveDays.length > 2) {
        this.trendingStepDays.push(`Your most recent positive step streak was ${positiveDays[0]} - ${positiveDays[positiveDays.length - 1]}!`);
        positiveDays = [];
      }
    }
  }

  findTrendingStairsDays() {
    let positiveDays = [];
    for (var i = 0; i < this.record.length; i++) {
      if (this.record[i + 1] && this.record[i].flightsOfStairs > this.record[i + 1].flightsOfStairs) {
        positiveDays.unshift(this.record[i].date);
      } else if (positiveDays.length > 2) {
        this.trendingStairsDays.push(`Your most recent positive climbing streak was ${positiveDays[0]} - ${positiveDays[positiveDays.length - 1]}!`);
        positiveDays = [];
      }
    }
  }

  userMilesWalked(user, date){
    let todaysStepsTaken = this.record.find((record) => {
      record.date === date
      return record.numSteps
  });
  let milesWalked = (todaysStepsTaken * user.strideLength)/5280 
  return milesWalked
 };

 const minutesActivePerWeek = (todaysDate) => {
  let week = this.records.//date.slice//(-7, -1)
  let result = user.activityInfo.records.find(record => {
    if (record.date === todaysDate){
      let average = week.reduce((acc, currVal) => {
        acc += currVal.activityInfo.records.minutesActive
        return acc/7
      }, 0 )
      return average
    }
  })
  return result
}

const minActive = (todaysDate) => {
  let result = user.activityInfo.records.find(record => {
    if (record.date === todaysDate){
      return record.minutesActive
    }
  });
  return result
}

const checkGoal = (todaysDate) => {
  let result = user.activityInfo.records.find(record => {
    if (record.date === todaysDate && record.minutesActive >= user.dailyStepGoal){
      return true
    }
  });
  return result;
}

const getMetStepGoals = () => {
  let resultsArr = []
  user.activityInfo.records.forEach(record => {
    if(record.minutesActive >= user.dailyStepGoal){
      resultsArr.push(record)
    }
  });
  return resultsArr;
}

const allTimeStairs = () => {
  let newArr = []
newArr = user.activityInfo.records.sort((a,b) => {
  b.flightsOfStairs - a.flightsOfStairs
})
return newArr[0];
}

const latestSteps = () => {
  let latestRecord = user.activityInfo.records.slice(-1)
  return latestRecord.numSteps
  }

const latestMinutesActive = () => {
let latestRecord = user.activityInfo.records.slice(-1)
  return latestRecord.minutesActive
  }
const latestMilesWalked = () => {
let latestRecord = user.activityInfo.records.slice(-1)

return ` you have recently ${2000 / latestRecord.steps} miles`
  }

const 
}

export default ActivityRepository;
