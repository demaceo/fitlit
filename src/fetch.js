
function fetchData() {
  let userData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData')
    .then(response => response.json())
    .then(data => {
      return data.userData;
    })
    .catch(err => console.log(err.message))

  let hydrationData = fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData")
     .then(response => response.json())
     .then(data => {
       return data.hydrationData;
     })
     .catch(err => console.log(err.message))

  let sleepData = fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData")
    .then(response => response.json())
    .then(data => {
      return data.sleepData;
    })
    .catch(err => console.log(err.message));

  let activityData = fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData")
    .then(response => response.json())
    .then(data => {
      return data.activityData;
  })
    .catch(err => console.log(err.message))

  return Promise.all([userData, hydrationData, sleepData, activityData])
    .then(data => {
        let allData = {}
        allData.userData = data[0];
        allData.hydrationData = data[1];
        allData.sleepData = data[2];
        allData.activityData = data[3];
      return allData
    });
  }

  export default fetchData
