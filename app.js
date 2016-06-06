var app = angular.module("learnAngular", []);

app.controller("learningController", function ($scope, $rootScope) {
    
    var self = this;
    
    $scope.learn = "Try my best!!";
    
    $scope.list = [
        {name: "Huy Cuong"},
        {name: "Cappu"},
        {name: "Google"},
        {name: "Facebook"}
    ];
    
    $scope.name = "This is scope name";
    
    $scope.myclick = function () {
        console.log("I click on this div!");
    }
    
});

app.directive("direcOne", function() {
   return {
       restrict:    "E",
       templateUrl:    "directives/direcOne.html",
       scope:       {
            name: "@"
       },
       link:        function(scope) {
       }
   } 
});

app.directive("direcTwo", function(){
   return {
       restrict:    "A",
       template:    "This is second Directive",
       scope:       true,
       link:    function(scope){
       }
   } 
});

app.directive("myClick", function() {
   return {
       restrict: "A",
       scope: {
           myClick: "&",
       },
       link: function (scope, el, attrs) {
            el.on("click", function(){
               scope.name = "Huy Cuong name in link function";
               console.log(scope);
            });
       },
   } 
});
