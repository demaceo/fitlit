import { expect } from 'chai'
import HydrationRepository from '../src/HydrationRepository';
import User from '../src/User';
describe.only('HydrationRepository', function() {
  let hydration1;
  let hydration2;
  let hydration3;
  let hydration4;
  let hydration5;
  let hydration6;
  let hydration7;
  let mockHydrationData = [];
  let mockHydrationRepo;
  let mockRawData;
  let todaysDate;
  beforeEach(() => {
    hydration1 = {
      'userID': 6,
      'date': '2019/06/15',
      'numOunces': 87
    };
    hydration2 = {
      'userID': 6,
      'date': '2019/06/16',
      'numOunces': 94
    };
    hydration3 = {
      'userID': 6,
      'date': '2019/06/17',
      'numOunces': 84
    };
    hydration4 = {
      'userID': 6,
      'date': '2019/06/18',
      'numOunces': 78
    };
    hydration5 = {
      'userID': 6,
      'date': '2019/06/19',
      'numOunces': 49
    };
    hydration6 = {
      'userID': 6,
      'date': '2019/06/20',
      'numOunces': 48
    };
    hydration7 = {
      'userID': 6,
      'date': '2019/06/21',
      'numOunces': 68
    };
    todaysDate = '2019/06/15';
    mockHydrationRepo = new HydrationRepository(todaysDate);
    mockRawData = [hydration1, hydration2, hydration3, hydration4, hydration5, hydration6, hydration7];
  });

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(mockHydrationRepo).to.be.an.instanceof(HydrationRepository);
  });

  it('should hold all of a users hydration entries in an array', function() {
    mockHydrationRepo.records.push(...mockRawData);
    console.log(mockHydrationRepo.records)
    expect(mockHydrationRepo.records.length).to.deep.equal(7);
  });

  it('should have a date', function() {
    expect(hydration1.date).to.equal('2019/06/15');
  });
  it('should have a number of ounces', function() {
    expect(hydration1.numOunces).to.equal(87);
  });
  it('should be able to calculate the average amount of all total ounces for a user', function() {
    expect(mockHydrationRepo.calculateTotalAverageOunces()).to.equal(77);
  });
  it('should hold all individual entries in an array', function() {
    mockHydrationRepo.records.push(...mockRawData)
    expect(mockHydrationRepo.records.length).to.deep.equal(7);
  })
  it('should average a user\‘s daily ounces consumed', function() {
    mockHydrationRepo.records.push(...mockRawData)
    expect(mockHydrationRepo.calculateAverageDailyOunces().to.equal(86.3))
  });
  it('should get the weeks average of ounces', function() {
    mockHydrationRepo.records.push(...mockRawData);
    expect(mockHydrationRepo.calculateWeeklyAvgOunces()).to.equal(93)
  });
})
