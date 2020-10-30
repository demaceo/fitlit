import {expect} from 'chai'
import SleepRepository from '../src/sleepRepository';
import User from '../src/User';
describe.only('SleepRepository', function() {
  let sleep1;
  let sleep2;
  let sleep3;
  let sleep4;
  let sleep5;
  let sleep6;
  let sleep7;
  let mockSleepRepo;
  let mockRawData;
  let todaysDate;
  let sleepData;
  let user;
  beforeEach(() => {
    sleep1 = {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      sleep2 = {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      sleep3 = {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      sleep4 = {
        "userID": 4,
        "date": "2019/06/15",
        "hoursSlept": 5.4,
        "sleepQuality": 3
      },
      sleep5 = {
        "userID": 5,
        "date": "2019/06/15",
        "hoursSlept": 4.1,
        "sleepQuality": 3.6
      },
      sleep6 = {
        "userID": 6,
        "date": "2019/06/15",
        "hoursSlept": 9.6,
        "sleepQuality": 2.9
      },
      sleep7 = {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 5.1,
        "sleepQuality": 2.6
      },
      mockRawData = {
        userData: [{
          id: 19,
          name: "Wilburn Collins",
          address: "543 Keeling Road, Schummside ID 47123-6269",
          email: "Blake27@gmail.com",
          strideLength: 3.3,
          dailyStepGoal: 8000,
          friends: [30, 43, 22, 39]
        }],
        sleepData: [sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7]
      };
      todaysDate = '06/15/2019',
      mockSleepRepo = new SleepRepository(todaysDate);
    })
      // user = new User({
      //
      //     id: 19,
      //     name: “Wilburn Collins”,
      //     address: “543 Keeling Road, Schummside ID 47123-6269",
      //     email: “Blake27@gmail.com”,
      //     strideLength: 3.3,
      //     dailyStepGoal: 8000,
      //     friends: [30, 43, 22, 39]
      //   },
      //   hydrationInfo = {
      //     record: [{
      //         “userID”: 19,
      //         “date”: “2019/06/15",
      //         “numOunces”: 62
      //       },
      //       {
      //         “userID”: 19,
      //         “date”: “2019/06/16",
      //         “numOunces”: 73
      //       }
      //     ],
      //   },
      //   sleepInfo = {
      //     record: [{
      //         “userID”: 19,
      //         “date”: “2019/06/16",
      //         “hoursSlept”: 5.5,
      //         “sleepQuality”: 1.2
      //       },
      //       {
      //         “userID”: 19,
      //         “date”: “2019/06/17”,
      //         “hoursSlept”: 9.5,
      //         “sleepQuality”: 2
      //       },
      //     ],
      //   },
      //   sleepInfo = {
      //     record: [{
      //         “userID”: 19,
      //         “date”: “2019/06/22",
      //         “numSteps”: 12577,
      //         “minutesActive”: 126,
      //         “flightsOfStairs”: 37
      //       },
      //       {
      //         “userID”: 19,
      //         “date”: “2019/06/23",
      //         “numSteps”: 12226,
      //         “minutesActive”: 247,
      //         “flightsOfStairs”: 27
      //       }
      //     ]
      //   })
  //});
  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });
  it('should be an instance of Sleep', function() {
    expect(mockSleepRepo).to.be.an.instanceof(SleepRepository);
  });
  it('should have a record', function() {
    expect(mockSleepRepo.record).to.be.an.instanceof(Array);
  })
  //total steps * user stride length / 5280
  it('should return hours slept for given date', function() {
    expect(mockSleepRepo.findHoursSleptOnDate('2019/06/19')).to.equal()
  });
  it('should return sleep quality for given date', function() {
    expect(mockSleepRepo.findSleepQualityOnDate('2019/06/19')).to.equal()
  });
  it('should return average total hours slept', function() {
    expect(mockSleepRepo.averageTotalHoursSlept()).to.equal()
  });
  it('should return average total sleep quality', function() {
    expect(mockSleepRepo.averageTotalSleepQuality()).to.equal()
  });
  it('should be able to return an array of daily hours slept for a given week', function() {
    expect(mockSleepRepo._________).to.equal()
  });
  it('should be able to return an array of daily quality of sleep for a given week', function() {
    expect(mockSleepRepo._________).to.equal()
  });
  it('should be able to return an average of hours slept for a given week', function() {
//method not written out yet in SleepRepository class
    expect(mockSleepRepo._________).to.equal()
  });
  it('should be able to return an average of a users quality of sleep for a given week', function() {
//method not written out yet in SleepRepository class
    expect(mockSleepRepo._________).to.equal()
  });
});
