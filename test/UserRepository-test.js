import {
  expect
} from 'chai';

import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Sleep from '../src/Sleep';

describe('UserRepository', function() {
  let user1;
  let user2;
  let user3;
  let sleep1;
  let sleep2;
  let sleep3;
  let testRepository;
  //what is getting passed into userRepository? It has access to all the
  //the user d

  beforeEach(() => {
    user1 = new User({
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    })
    user2 = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    })
    user3 = new User({
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 15000,
      "friends": [
        19,
        11,
        42,
        33
      ]
    })
    testRepository = new UserRepository();
    testRepository.users.push(user1, user2, user3);
    //^^This code is trying to put three users into UserRepository
    //we want this to be testRepository--a smaller subset for testing purposes.
  });
  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });
  it('should be an instance of user repository', function() {
    expect(testRepository).to.be.an.instanceof(UserRepository);
  });
  it('should hold an array of users', function() {
    expect(testRepository.users).to.deep.equal([user1, user2, user3]);
    expect(testRepository.users.length).to.equal(3);
  });
  it('getUser should return user object when given a user id', function() {
    expect(testRepository.getUser(2)).to.equal(user2);
  })
  it('calculateAverageStepGoal should return average step goal for all users', function() {
    expect(testRepository.calculateAverageStepGoal()).to.equal(10000);
  })
  it('calculateAverageSleepQuality should return average sleep quality for all users', function() {
    user1.sleepQualityAverage = 3.3;
    user2.sleepQualityAverage = 5;
    user3.sleepQualityAverage = 1;
    expect(testRepository.calculateAverageSleepQuality()).to.equal(3.1);
  });
  it('should have a method that calculates friends average ounces of water', function() {
    user1.ouncesRecord = [{
        "2019/06/15": 1
      },
      {
        "2019/06/15": 1
      },
      {
        "2019/06/16": 5
      }
    ]
    user2.ouncesRecord = [{
        "2019/06/15": 1
      },
      {
        "2019/06/15": 1
      },
      {
        "2019/06/16": 8
      }
    ]
    user3.ouncesRecord = [{
        "2019/06/15": 1
      },
      {
        "2019/06/15": 1
      },
      {
        "2019/06/16": 4
      }
    ]
    expect(testRepository.calculateAverageDailyWater("2019/06/16")).to.equal(5)
  });
  it('should have a method that finds the best sleepers', function() {
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 1000
    }, testRepository);

    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7.3,
      "sleepQuality": 500
    }, testRepository);

    sleep3 = new Sleep({
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    }, testRepository);
    expect(testRepository.findBestSleepers("2019/06/16")).to.deep.equal([user1, user2]);
  });


  it.only('should have a method that finds the longest sleepers', function() {
    let testRepository = new UserRepository();
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 100
    }, testRepository);
    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7.3,
      "sleepQuality": 1500
    }, testRepository)
    sleep3 = new Sleep({
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    }, testRepository);
    console.log("testRepository", testRepository);
    console.log("users", testRepository.users);
    expect(testRepository.getLongestSleepers("2019/06/15")).to.equal(3);
  });
  //WE NEED A TEST REPOSITORY OR ELSE IT WILL BE TESTING
  //FROM THE ACTUAL REPOSITORY DATA;
  it('should have a method that finds the worst sleepers', function() {
    let testRepository = new UserRepository();
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 1000
    }, testRepository);
    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7.3,
      "sleepQuality": 500
    }, testRepository);
    sleep3 = new Sleep({
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    }, testRepository);
    console.log(testRepository);
    expect(testRepository.getWorstSleepers("2019/06/15")).to.equal(3);
  });
  it('should have a method that calculates average number of stairs for users', function() {
    user1.activityRecord = [{
      date: "2019/09/17",
      flightsOfStairs: 10
    }, {
      date: "2019/09/17",
      flightsOfStairs: 15
    }];
    user2.activityRecord = [{
      date: "2019/09/16",
      flightsOfStairs: 8
    }, {
      date: "2019/09/17",
      flightsOfStairs: 4
    }];
    expect(testRepository.calculateAverageStairs("2019/09/17")).to.equal(10);
  })
  it('should have a method that calculates average number of steps for users', function() {
    user1.activityRecord = [{
      date: "2019/09/17",
      steps: 100
    }, {
      date: "2019/09/17",
      steps: 2000
    }];
    user2.activityRecord = [{
      date: "2019/09/16",
      steps: 9820
    }, {
      date: "2019/09/17",
      steps: 234
    }];
    expect(testRepository.calculateAverageSteps("2019/09/17")).to.equal(778);
  })
  it('should have a method that calculates average number of active minutes for users', function() {
    user1.activityRecord = [{
      date: "2019/09/17",
      minutesActive: 100
    }, {
      date: "2019/09/17",
      minutesActive: 20
    }];
    user2.activityRecord = [{
      date: "2019/09/16",
      minutesActive: 78
    }, {
      date: "2019/09/17",
      minutesActive: 12
    }];
    expect(testRepository.calculateAverageMinutesActive("2019/09/17")).to.equal(44);
  })
});
