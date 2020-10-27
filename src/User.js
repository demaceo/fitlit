import HydrationRepository from "./HydrationRepository";
import ActivityRepository from "./ActivityRepository";
import SleepRepository from "./SleepRepository";

 class User {
   constructor(userData, todaysDate) {
     this.id = userData.id;
     this.name = userData.name;
     this.address = userData.address;
     this.email = userData.email;
     this.strideLength = userData.strideLength;
     this.dailyStepGoal = userData.dailyStepGoal;
     this.friends = userData.friends;
     this.hydrationInfo = new HydrationRepository(todaysDate);
     this.activityInfo = new ActivityRepository(todaysDate);
     this.sleepInfo = new SleepRepository(todaysDate);
   }

   getFirstName() {
     var names = this.name.split(' ');
     return names[0].toUpperCase();
   }

   findFriendsNames(users) {
     this.friends.forEach(friend => {
       this.friendsNames.push(users.find(user => user.id === friend).getFirstName());
     })
   }

   findFriendsTotalStepsForWeek(users, date) {
     this.friends.map(friend => {
       let matchedFriend = users.find(user => user.id === friend);
       matchedFriend.calculateTotalStepsThisWeek(date);
       this.friendsActivityRecords.push({
         'id': matchedFriend.id,
         'firstName': matchedFriend.name.toUpperCase().split(' ')[0],
         'totalWeeklySteps': matchedFriend.totalStepsThisWeek
       })
     })
     this.calculateTotalStepsThisWeek(date);
     this.friendsActivityRecords.push({
       'id': this.id,
       'firstName': 'YOU',
       'totalWeeklySteps': this.totalStepsThisWeek
     });
     this.friendsActivityRecords = this.friendsActivityRecords.sort((a, b) => b.totalWeeklySteps - a.totalWeeklySteps);
   }
 }

 export default User;
