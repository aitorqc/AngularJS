// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function ($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'BQ e4.5',
      snippet: 'Fast just got faster with BQ'
    }
  ];

  $scope.names = [
    'nombre1',
    'nombre2',
    'nombre3',
    'adfgr',
    'juhgaas',
    'jhryu'
  ];

  $scope.prices = [
    '58',
    '62',
    '36',
    '44'
  ];
});

phonecatApp.directive("etiquetaH", function () {
  return {
    template: "<h1>Directivas</h1> <h3>Sub-Directivas</h3>"
  }
});

phonecatApp.filter('myFilter', function () {
  return function (x) {
    var i, c, txt = "";
    console.log(x.length);
    for (i = 0; i < x.length; i++) {
      c = x[i];
      console.log(c);
      if (i == x.length - 1) {
        c = c + '€';
      }
      txt += c;
    }
    return txt;
  };
});

// own service
phonecatApp.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

phonecatApp.controller('controllerA', function ($scope, $http, $interval, hexafy) {
  $scope.time = new Date().toLocaleTimeString();
  $http.get("welcome.html").then(function (response) {
    $scope.welcome = response.data;
  });
  $interval(function(){
    $scope.time = new Date().toLocaleTimeString();
  }, 500);
  $scope.hex=hexafy.myFunc(250);
  $http.get("datos.js").then(function(response){
    $scope.myData = response.data.records;
  });
});