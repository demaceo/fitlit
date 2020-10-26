
function fetchData() {

  let userData = fetch()
    .then(response => response.json())
    .then(data => {
      return data.userData;
  })
  .catch(err => console.log(err.message))

  let hydrationData = fetch();
    .then (response => response.json());
    .then (data => {
      return data.hydrationData;
  })
  .catch(err => console.log(err.message))

  let sleepData = fetch()
    .then (response => response.json());
    .then(data => {
      return data.sleepData;
  })
  .catch(err => console.log(err.message));

  let activityData = fetch()
    .then(response => response.json())
    .then(data => {
      return data.activityData;
  })
  .catch(err => console.log(err.message))


  return Promise.all({userData, hydrationData, sleepData, activityData})
    .then(data => {
      let rawData = {}
      rawData.userData = data[0];
      rawData.hydrationData = data[1];
      rawData.sleepData = data[2];
      rawData.activityData = data[3];
    return rawData
  });
  }

export default fetchData
