 class User {
   constructor(userData) {
     this.id = userData.id;
     this.name = userData.name;
     this.address = userData.address;
     this.email = userData.email;
     this.strideLength = userData.strideLength;
     this.dailyStepGoal = userData.dailyStepGoal;
     this.friends = userData.friends;
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
