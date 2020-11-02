import {
  expect
} from 'chai'
import SleepRepository from '../src/sleepRepository';
import User from '../src/User';
describe.only('SleepRepository', function() {
  let sleepRepo;
  let user;
  let sleepData;
  beforeEach(() => {
    sleepData = [{
        "userID": 1,
        "date": '2019/06/01',
        "hoursSlept": 6.1,
        "sleepQuality": 1.2
      },
      {
        "userID": 1,
        "date": '2019/06/02',
        "hoursSlept": 7,
        "sleepQuality": 1.7
      },
      {
        "userID": 1,
        "date": '2019/06/03',
        "hoursSlept": 1.8,
        "sleepQuality": 10.7
      },
      {
        "userID": 1,
        "date": '2019/06/04',
        "hoursSlept": 5.4,
        "sleepQuality": 3
      },
      {
        "userID": 1,
        "date": '2019/06/05',
        "hoursSlept": 4.1,
        "sleepQuality": 10.6
      },
      {
        "userID": 1,
        "date": '2019/06/06',
        "hoursSlept": 9.6,
        "sleepQuality": 2.9
      },
      {
        "userID": 1,
        "date": '2019/06/07',
        "hoursSlept": 5.1,
        "sleepQuality": 2.6
      },
      {
        "userID": 1,
        "date": '2019/06/08',
        "hoursSlept": 5.1,
        "sleepQuality": 9.6
      }
    ];
    sleepRepo = new SleepRepository();
    sleepRepo.records.push(...sleepData);
  });

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleepRepo).to.be.an.instanceof(SleepRepository);
  });

  it('should have a record', function() {

    expect(sleepRepo.records).to.be.an.instanceof(Array);
  });

  it('should return hours slept for a given date', function() {
    let hrsSlept = sleepRepo.findHoursSleptOn('2019/06/08');
    expect(hrsSlept).to.equal(5.1)
  });

  it('should return sleep quality for a given date', function() {
    let sleepQ = sleepRepo.findSleepQualityOn('2019/06/08')
    expect(sleepQ).to.equal(9.6)
  });

  it('should return average total hours slept', function() {
    let avgHoursSlept = sleepRepo.averageHoursSlept()
    expect(avgHoursSlept).to.equal(6)
  });
  it('should return average total sleep quality', function() {
    let avgSleepQuality = sleepRepo.averageSleepQuality();
    expect(avgSleepQuality).to.equal(6)
  });
  it('should be able to return an array of daily hours slept for a given week', function() {
    let weeklyHoursSlept = sleepRepo.determineWeeklyHoursSlept()
    expect(weeklyHoursSlept).to.be.an.instanceof(Array)
  });
  // it('should be able to return an array of daily quality of sleep for a given week', function() {
  //  let weeklySleepQuality = sleepRepo.determineWeeklySleepQuality()
      // expect(weeklySleepQuality).to.be.an.instanceof(Array)
  // });
  // it('should be able to return an average of hours slept for a given week', function() {
  //   //method not written out yet in SleepRepository class
  //   expect(mockSleepRepo._________).to.equal()
  // });
  // it('should be able to return an average of a users quality of sleep for a given week', function() {
  //   //method not written out yet in SleepRepository class
  //   expect(mockSleepRepo._________).to.equal()
  // });
  it('should be able to return a user/s worst quality night of sleep', function() {
  let worstSleep = sleepRepo.findWorstNightsSleep();
    expect(worstSleep).to.equal('On 2019/06/01, your sleep quality of 1.2 was godawful.')
  });
  it('should be able to return whether or not a users sleep quality for a given week is greater than 3', function() {
  let bleh = sleepRepo.determineSleepQualityGreaterThanThree("2019/06/01")
    expect(bleh).to.equal(true)
  });
});
