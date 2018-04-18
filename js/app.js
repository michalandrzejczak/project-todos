var app = angular.module("app", []);
app.controller("appCtrl", ["$scope", "tasks", function($scope, tasks) {
    $scope.tasks = tasks;
    $scope.addTask = function () {
        $scope.tasks.push({"text": $scope.newTask.text, "date": inputDate.value, "done": false});
        $scope.newTask.text = "";
        $scope.newTask.date = moment().format("MM/DD/YYYY h:mm A");
    };
   
}]);
app.factory('tasks', function () {
        return [
            {
                "text": 'Find a job', "date": "30/04/2018 12:00 AM" ,"done": false,
            }
        ];
    });
const inputDate = document.getElementById("date");
inputDate.addEventListener("keydown", function(event) {
    event.preventDefault()
});
