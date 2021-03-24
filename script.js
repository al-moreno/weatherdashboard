//Declaration of variables based on the html tab

var formEl = document.querySelector('#user-form');
var cityInputEl = document.getElementById('buttonInput');
var buttonInput = document.querySelector('#searchedCities');
var searchedCityEl = document.querySelector('#searchedCities');
var cityArray = [];
var message = document.getElementById('message');


console.log('1');
//functions for listening event
var formSubmitHandler = function (event) {
    event.preventDefault();
    var cityName = cityInputEl.value;
    console.log(cityName);
    cityArray.push(cityName);
    console.log(cityArray);

    if (cityName) {
        getCityInfo(cityName);

        buttonInput.textContent = '';
        cityInputEl.value = '';
    } else {
        alert("Please provide the name of the city who's weather you wish to inquire about");
    }
};
 
console.group('2');
//function for fetch event
var getCityInfo = function (city) { 
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8522788feb48b4797ad60e7823e7392b";
    console.log('3');
    // 'https://api.github.com/users/' + user + '/repos';
    // "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=8522788feb48b4797ad60e7823e7392b";
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        console.log(data);
                        displayCityInfo(data, city);
                    });
            } else {
                alert('Error:' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to complet request at this time, try again in a few seconts');
        })
};
console.log('4');
//function for creation of li 
var displayCityInfo = function (info, searchTerm) {
        console.log('info.length');
        console.log(info);
        console.log('searchTerm');
        console.log(searchTerm);
    
    console.log('5');
    searchedCityEl.textContent = searchTerm;

    for (var i = 0; i < cityArray.length; i++) {
         var cityNameEl = cityArray[i];
        // console.log(cityNameEl);

        var cityElement = document.createElement('div');
        cityElement.classList = 'list-item flex-frow justify-space-between alight-left';

        var cityEl2 = document.createElement('span');
         cityEl2.textContent = cityNameEl;
        cityElement.appendChild(cityEl2);
        console.log('6');

        var statusEl = document.createElement('span');
        statusEl.classList = 'flex-row align-center';
        // if (info[i] > 0) {
        //     statusEl.innerHTML =
        //         "<i class='fas fa-times status-icon icon-danger'></i>" + info[i].open_issues_count + ' issue(s)';
        // } else {
        //     statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        // }
        
        cityElement.appendChild(statusEl);

        buttonInput.appendChild(cityElement);
    }
console.log('7');
    
};console.log('8');

//calling function
formEl.addEventListener('submit', formSubmitHandler);


