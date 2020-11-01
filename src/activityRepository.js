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
  };

latestMilesWalked(){
let latestRecord = user.activityInfo.records.slice(-1)
return ` you have recently ${2000 / latestRecord.steps} miles`
  };

 userMilesWalked(user, date){
    let matchingRecord = this.records.find((record) => {
      return record.date === date 
  });
  
  let milesWalked = (matchingRecord.numSteps  * user.strideLength)/5280
  return milesWalked
 };


 minutesActivePerWeek(todaysDate) {
   let totalWeeklyMinsActive = this.records.reduce((totalActive, entry) => {
     let todaysEntry = this.records.find(entry =>  entry.date === todaysDate)
        let index = this.records.indexOf(todaysEntry)
        if (index <= this.records.indexOf(entry) && this.records.indexOf(entry) <= (index + 6)){
          totalActive += entry.minutesActive
   }
   return totalActive / 7;
  }, 0)
};

 minActive(todaysDate){
  let result = user.activityInfo.records.find(record => {
    if (record.date === todaysDate){
      return record.minutesActive
    }
  });
  return result
}

 checkAllGoals(user) {
  let allGoals = []
  let result = user.activityInfo.records.filter(record => {
    if ( record.minutesActive >= user.dailyStepGoal){
        allGoals.push(record.date)
    }
  });
  return result;
}

getMetStepGoals(user, todaysDate){
  let targetDate = this.records.find((record) => {
    return record.date === todaysDate 
});
  let goalReached = targetDate.numSteps >= user.dailyStepGoal
  return goalReached;

 }

allTimeStairs() {
  let newArr = []
  newArr = this.records.sort((a,b) => {
  b.flightsOfStairs - a.flightsOfStairs
})
return newArr[0].flightsOfStairs;
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
