import {
  expect
} from 'chai'
import HydrationRepository from '../src/HydrationRepository';
import User from '../src/User';

describe.only('HydrationRepository', function() {
  let todaysDate;
  let hydration1;
  let hydration2;
  let hydration3;
  let hydration4;
  let hydration5;
  let hydration6;
  let hydration7;
  let mockHydrationData = [];
  let mockHydrationRepo;
  beforeEach(() => {
    todaysDate = 11 / 21 / 2020;
    mockHydrationRepo = new HydrationRepository(todaysDate);
    mockHydrationData = [hydration1, hydration2, hydration3, hydration4, hydration5, hydration6, hydration7];
    hydration1 = {
      "userID": 6,
      "date": "2019/06/15",
      "numOunces": 87
    };
    hydration2 = {
      "userID": 7,
      "date": "2019/06/15",
      "numOunces": 94
    };
    hydration3 = {
      "userID": 8,
      "date": "2019/06/15",
      "numOunces": 84
    };
    hydration4 = {
      "userID": 9,
      "date": "2019/06/15",
      "numOunces": 39
    };
    hydration5 = {
      "userID": 10,
      "date": "2019/06/15",
      "numOunces": 75
    };
    hydration6 = {
      "userID": 11,
      "date": "2019/06/15",
      "numOunces": 51
    };
    hydration7 = {
      "userID": 12,
      "date": "2019/06/15",
      "numOunces": 100
    }
  })
  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });
  it('should be an instance of user', function() {
    expect(mockHydrationRepo).to.be.an.instanceof(HydrationRepository);
  });
  it('should have an id', function() {
    expect(hydration1.userID).to.equal(6);
  });
  it('should have a date', function() {
    expect(hydration1.date).to.equal("2019/06/15");
  });
  it('should have a number of ounces', function() {
    expect(hydration1.numOunces).to.equal(87);
  });
})
