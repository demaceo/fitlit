import HydrationRepository from "./HydrationRepository";
import ActivityRepository from "./ActivityRepository";
import SleepRepository from "./SleepRepository";

 class User {
   constructor(userDetails, date) {
     this.id = userDetails.id;
     this.name = userDetails.name;
     this.address = userDetails.address;
     this.email = userDetails.email;
     this.strideLength = userDetails.strideLength;
     this.dailyStepGoal = userDetails.dailyStepGoal;
     this.friends = userDetails.friends;
     this.hydrationInfo = new HydrationRepository(date);
     this.activityInfo = new ActivityRepository(date);
     this.sleepInfo = new SleepRepository(date);
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
