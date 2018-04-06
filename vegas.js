fetch('https://draftmanager.com/mlb/no-vig-vegas-lines/.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });