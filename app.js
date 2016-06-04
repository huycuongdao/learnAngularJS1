var app = angular.module("learnAngular", []);

app.controller("learningController", function ($scope) {
    
    var self = this;
    
    $scope.learn = "Try my best!!";
    
    $scope.list = [
        {name: "Huy Cuong"},
        {name: "Cappu"},
        {name: "Google"},
        {name: "Facebook"}
    ]
    
});

app.directive("direcOne", function() {
   return {
       restrict:    "A",
       template:    "This is my first Directive",
       scope:       true,
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
