
import User from './User'

class UserRepository {
  constructor(rawData, todaysDate) {
    this.users = this.linkData(rawData, todaysDate);
  }

  linkdata(rawData, todaysDate){
    let instantiatedUsers = rawData.userData.map((rawUser) => new User(rawUser, todaysDate)
      this.linkHydration(instantiedUsers, rawData.hydrationData);
      this.linkSleep(instantiatedUsers, rawData.sleepData)
      this.linkActivity(instantiatedUsers, rawData.activityData);
  return instantiatedUsers
}

  linkHydration(users, rawHydrationData) {
    users.forEach(user => {
      user.hydrationInfo.records = rawHydrationData.filter(data => {
        return data.userID === user.id
      })
    })
  }

  linkSleep(users, rawSleepData) {
    users.forEach(user => {
      user.sleepInfo.records = rawSleepData.filter(data => {
        return data.userID === user.id);
      })
    })
  }

  linkActivity(users, rawActivityData) {
    users.forEach(user => {
      user.activityInfo.records = rawActivityData.filter(data => {
        return data.userID === user.id
      })
    })
  }
  getUser(id) {
    return this.users.find(user => {
      return user.id === id;
    })
  }
  calculateAverageStepGoal() {
    let goals = this.users.map(user => {
      return user.dailyStepGoal;
    });
    let total = goals.reduce((sum, goal) => {
      sum += goal;
      return sum;
    }, 0);
    return total / this.users.length;
  }
  calculateAverageSleepQuality() {
    let totalSleepQuality = this.users.reduce((sum, user) => {
      sum += user.sleepQualityAverage;
      return sum;
    }, 0);
    return totalSleepQuality / this.users.length;
  }
  calculateAverageSteps(date) {
    let allUsersStepsCount = this.users.map(user => {
      return user.activityRecord.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfSteps = allUsersStepsCount.reduce((stepsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stepsSum += activity.steps
      })
      return stepsSum;
    }, 0);
    return Math.round(sumOfSteps / allUsersStepsCount.length);
  }
  calculateAverageStairs(date) {
    let allUsersStairsCount = this.users.map(user => {
      return user.activityRecord.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfStairs = allUsersStairsCount.reduce((stairsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stairsSum += activity.flightsOfStairs
      })
      return stairsSum;
    }, 0);
    return Math.round(sumOfStairs / allUsersStairsCount.length);
  }
  calculateAverageMinutesActive(date) {
    let allUsersMinutesActiveCount = this.users.map(user => {
      return user.activityRecord.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfMinutesActive = allUsersMinutesActiveCount.reduce((minutesActiveSum, activityCollection) => {
      activityCollection.forEach(activity => {
        minutesActiveSum += activity.minutesActive
      })
      return minutesActiveSum;
    }, 0);
    return Math.round(sumOfMinutesActive / allUsersMinutesActiveCount.length);
  }
  calculateAverageDailyWater(date) {
    let todaysDrinkers = this.users.filter(user => {
      return user.addDailyOunces(date) > 0;
    });
    let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
      return sum += drinker.addDailyOunces(date);
    }, 0)
    return Math.floor(sumDrankOnDate / todaysDrinkers.length);
  }
  findBestSleepers(date) {
    return this.users.filter(user => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    })
  }
  getLongestSleepers(date) {
    return sleepData.filter(sleep => {
      return sleep.date === date;
    }).sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    })[0].userID;
  }
  getWorstSleepers(date) {
    return sleepData.filter(sleep => {
      return sleep.date === date;
    }).sort((a, b) => {
      return a.sleepQuality - b.sleepQuality;
    })[0].userID;
  }
}

export default UserRepository;
