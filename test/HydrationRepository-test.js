import { expect } from 'chai'
import HydrationRepository from '../src/HydrationRepository';
import User from '../src/User';
describe.only('HydrationRepository', function() {
  let hydration1;
  let hydration2;
  let hydration3;
  let mockHydrationData = [];
  let mockHydrationRepo;
  beforeEach(() => {
    hydration1 = {
      'userID': 6,
      'date': '2019/06/15',
      'numOunces': 87
    };
    hydration2 = {
      'userID': 6,
      'date': '2019/06/15',
      'numOunces': 94
    };
    hydration3 = {
      'userID': 7,
      'date': '2019/06/15',
      'numOunces': 84
    };
    hydration4 = {
      'userID': 6,
      'date': '2019/06/15',
      'numOunces': 78
    };
    hydration5 = {
      'userID': 6,
      'date': '2019/06/16',
      'numOunces': 49
    };
    hydration6 = {
      'userID': 7,
      'date': '2019/06/30',
      'numOunces': 48
    };
    // todaysDate = “2019/06/15”;

    mockHydrationRepo = new HydrationRepository();
    mockHydrationData = [hydration1, hydration2, hydration3, hydration4, hydration5, hydration6];
  });
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
    expect(hydration1.date).to.equal('2019/06/15');
  });
  it('should have a number of ounces', function() {
    expect(hydration1.numOunces).to.equal(87);
  });
  it('should be able to calculate the average amount of all total ounces for a user', function() {
    expect(mockHydrationRepo.calculateTotalAverageOunces(6)).to.equal(77);
  });
  it('should be able to add daily ounces', function() {

    mockHydrationRepo.addDailyOunces(12, '2019/06/15', 100);
    expect(mockHydrationRepo[-1].userID).to.equal(12);
  });
  it.skip('should hold all individual entries in an array', function() {
    mockHydrationRepo.records.push(...mockHydrationData)
    expect(mockHydrationRepo.records.length).to.deep.equal(6);
  })

  it('should average a user\‘s daily ounces consumed', function() {
    // mockHydrationRepo.
    expect(mockHydrationRepo.calculateAverageDailyOunces(6, '2019/06/15').to.equal(86.3))
  })
  // it('should calculate the amount of ounces consumed by a user for any given day', function() {
  //
  //   expect(mockHydrationRepo.sumDailyOunces(6, "2019/06/15")).to.equal(126);
  // })
  // it('should average a user\'s daily ounces consumed', function() {
  //
  //   expect()
  // })
})
