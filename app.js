var app = angular.module("learnAngular", []);

app.controller("learningController", function ($scope) {
    
    var self = this;
    
    $scope.learn = "Try my best!!";
    
    $scope.list = [
        {name: "Huy Cuong"},
        {name: "Cappu"},
        {name: "Google"},
        {name: "Facebook"}
    ];
    
    $scope.name = "This is scope name";
    
});

app.directive("direcOne", function() {
   return {
       restrict:    "E",
       templateUrl:    "directives/direcOne.html",
       scope:       {
            name: "@"
       },
       link:        function(scope) {
           console.log(scope);
       }
   } 
});

app.directive("direcTwo", function(){
   return {
       restrict:    "A",
       template:    "This is second Directive",
       scope:       true,
       link:    function(scope){
           console.log(scope);
       }
   } 
});
