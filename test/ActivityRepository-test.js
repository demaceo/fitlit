import { expect } from 'chai'
import ActivityRepository from '../src/ActivityRepository';
import User from '../src/User';
describe('ActivityRepository', function() {
  let activity1;
  let activity2;
  let activity3;
  let activity4;
  let activity5;
  let activity6;
  let activity7;
  let mockActivityRepo;
  let mockRawData;
  let todaysDate;
  let activityData;
  let user;
  let hydrationInfo;
  let sleepInfo;
  let activityInfo;

   beforeEach(() => {
    activity1 = {
      userID: 19,
      date: "2019/06/15",
      numSteps: 5683,
      minutesActive: 210,
      flightsOfStairs: 41
    },
    activity2 = {
      userID: 19,
      date: "2019/06/16",
      numSteps: 5439,
      minutesActive: 236,
      flightsOfStairs: 22
    },
    activity3 = {
      userID: 19,
      date: "2019/06/17",
      numSteps: 5799,
      minutesActive: 68,
      flightsOfStairs: 24
    },
    activity4 = {
      userID: 19,
      date: "2019/06/18",
      numSteps: 5172,
      minutesActive: 82,
      flightsOfStairs: 29
    },
    activity5 = {
      userID: 19,
      date: "2019/06/19",
      numSteps: 7614,
      minutesActive: 290,
      flightsOfStairs: 18
    },
    activity6 = {
      userID: 19,
      date: "2019/06/20",
      numSteps: 3050,
      minutesActive: 112,
      flightsOfStairs: 42
    },
    activity7 = {
      userID: 19,
      date: "2019/06/21",
      numSteps: 13015,
      minutesActive: 132,
      flightsOfStairs: 24
    },


    mockRawData = { userData: [ {id: 19,
      name: "Wilburn Collins",
      address: "543 Keeling Road, Schummside ID 47123-6269",
      email: "Blake27@gmail.com",
      strideLength: 3.3,
      dailyStepGoal: 8000,
      friends: [ 30, 43, 22, 39 ]
    }
  ],
    sleepData: [{userID: 'test'}],
    hydrationData: [{userID: 'test'}],
    activityData: [activity1, activity2, activity3, activity4, activity5, activity6, activity7]},
    todaysDate = '2019/06/15',
    mockActivityRepo = new ActivityRepository(todaysDate),
    user = new User ({
    id: 19,
    name: "Wilburn Collins",
    address: "543 Keeling Road, Schummside ID 47123-6269",
    email: "Blake27@gmail.com",
    strideLength: 3.3,
    dailyStepGoal: 8000,
    friends: [30, 43, 22, 39]
  },
    hydrationInfo: {
      records: [
        {
          "userID": 19,
          "date": "2019/06/15",
          "numOunces": 62
        },
        {
          "userID": 19,
          "date": "2019/06/16",
          "numOunces": 73
        }
      ],
      //averageOuncesAllTime: NaN;
    },
    sleepInfo: {
      records: [
        {
          "userID": 19,
          "date": "2019/06/16",
          "hoursSlept": 5.5,
          "sleepQuality": 1.2
        },
        {
          "userID": 19,
          "date": "2019/06/17",
          "hoursSlept": 9.5,
          "sleepQuality": 2
        },
      ],
    },
    activityInfo: {
      records: [
        {
        "userID": 19,
        "date": "2019/06/22",
        "numSteps": 12577,
        "minutesActive": 126,
        "flightsOfStairs": 37
      },
      {
        "userID": 19,
        "date": "2019/06/23",
        "numSteps": 12226,
        "minutesActive": 247,
        "flightsOfStairs": 27
      }
    ]
  })
});
  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });
  it('should be an instance of activity', function() {
    expect(mockActivityRepo).to.be.an.instanceof(ActivityRepository);
  });
  it('should have a record', function() {
    expect(mockActivityRepo.record).to.be.an.instanceof(Array);
  })
    //total steps * user stride length / 5280
  it.only('should calculate miles walked per day', function () {
    mockActivityRepo.record.push(...mockRawData.activityData)
    ActivityRepository.userMilesWalked(mockActivityRepo.record.push)
    expect(milesWalked).to.equal()
 })
});
