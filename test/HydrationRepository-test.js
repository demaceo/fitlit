import {
  expect
} from 'chai'
import HydrationRepository from '../src/HydrationRepository';
import User from '../src/User';

describe.only('HydrationRepository', function() {
  // let todaysDate;
  let hydration1;
  let hydration2;
  let hydration3;
  let mockHydrationData = [];
  let mockHydrationRepo;
  beforeEach(() => {
    hydration1 = {
      "userID": 6,
      "date": "2019/06/15",
      "numOunces": 87
    };
    hydration2 = {
      "userID": 7,
      "date": "2019/06/16",
      "numOunces": 94
    };
    hydration3 = {
      "userID": 8,
      "date": "2019/06/15",
      "numOunces": 84
    };
    // todaysDate = "2019/06/15";
    mockHydrationRepo = new HydrationRepository();
    mockHydrationData = [hydration1, hydration2, hydration3];
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
  it('should be able to update the average amount of ounces', function() {
    mockHydrationRepo.updateAverageOunces("2019/06/15", 12);
    expect(mockHydrationRepo.totalAverageOunces).to.equal(12);
  });
  it('should be able to add daily ounces', function() {
    mockHydrationRepo.updateAverageOunces("2019/06/15", 12);
    expect(mockHydrationRepo.addDailyOunces("2019/06/15")).to.equal(12);
  });
  it('should hold all individual entries in an array', function() {
    mockHydrationRepo.records.push(...mockHydrationData)
    expect(mockHydrationRepo.records.length).to.deep.equal(3);
  })
  it('should average a user\'s daily ounces consumed', function() {

    expect(mockHydrationRepo.)
  })
  it('should calculate the amount of ounces consumed by a user\'s for any given day', function() {

    expect()
  })
  it('should average a user\'s daily ounces consumed', function() {

    expect()
  })
})
