
function fetchData() {

  let userData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData')
    .then(response => response.json())
    .then(data => {
      return data.userData;
  })
  .catch(err => console.log(err.message))

  let hydrationData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData
');
    .then (response => response.json());
    .then (data => {
      return data.hydrationData;
  })
  .catch(err => console.log(err.message))

  
