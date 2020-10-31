class ActivityRepository {
  constructor() {
    this.records = [];
  }

allTimeStairs(){
  let newArr = []
newArr = user.activityInfo.records.sort((a,b) => {
  b.flightsOfStairs - a.flightsOfStairs
})
return newArr[0];
}
latestSteps(){
  let latestRecord = user.activityInfo.records.slice(-1)
  return latestRecord.numSteps
  }
latestMinutesActive(){
let latestRecord = user.activityInfo.records.slice(-1)
  return latestRecord.minutesActive
  }
latestMilesWalked(){
let latestRecord = user.activityInfo.records.slice(-1)
return ` you have recently ${2000 / latestRecord.steps} miles`
  }
 userMilesWalked(user, date){
    let todaysStepsTaken = this.records.find((record) => {
      record.date === date
      return record.numSteps
  });
  let milesWalked = (todaysStepsTaken * user.strideLength)/5280
  return milesWalked
 };
 minutesActivePerWeek(todaysDate) {
  let week = this.records//date.slice//(-7, -1)
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
 minActive(todaysDate){
  let result = user.activityInfo.records.find(record => {
    if (record.date === todaysDate){
      return record.minutesActive
    }
  });
  return result
}

 checkGoal(todaysDate) {
  let result = user.activityInfo.records.find(record => {
    if (record.date === todaysDate && record.minutesActive >= user.dailyStepGoal){
      return true
    }
  });
  return result;
}

 getMetStepGoals(){
  let resultsArr = []
  user.activityInfo.records.forEach(record => {
    if(record.minutesActive >= user.dailyStepGoal){
      resultsArr.push(record)
    }
  });
  return resultsArr;
}

allTimeStairs() {
  let newArr = []
newArr = user.activityInfo.records.sort((a,b) => {
  b.flightsOfStairs - a.flightsOfStairs
})
return newArr[0];
}

latestSteps() {
  let latestRecord = user.activityInfo.records.slice(-1)
  return latestRecord.numSteps
  }

latestMinutesActive(){
let latestRecord = user.activityInfo.records.slice(-1)
  return latestRecord.minutesActive
  }
latestMilesWalked(){
let latestRecord = user.activityInfo.records.slice(-1)

return ` you have recently ${2000 / latestRecord.steps} miles`
  }
}
export default ActivityRepository;
