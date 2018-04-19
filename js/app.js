var app = angular.module("app", []);
app.controller("appCtrl", ["$scope", "tasks", function($scope, tasks) {
    $scope.tasks = tasks;
    $scope.left = function() {
      var counter = 0;
      angular.forEach($scope.tasks, function(task) {
        counter += task.done ? 0 : 1;
      });
      return counter;
    };
    $scope.addTask = function () {
        $scope.tasks.push({"text": $scope.newTask.text, "date": inputDate.value, "done": false});
        $scope.newTask.text = "";
        $scope.newTask.date = moment().format("MM/DD/YYYY h:mm A");
    };
    $scope.cleanDone = function () {
        $scope.tasks = $scope.tasks.filter(function (task) {
                return !task.done
        })
    };
}]);
app.factory('tasks', function () {
    return [
        {
            "text": "Find a job", "date": "04/30/2018 12:00 AM", "done": false,
        },
        {
            "text": "Meet with friends", "date": "04/27/2018 7:00 PM", "done": false,
        },
        {
            "text": "Make 1.000.000th in the world todolist app", "date": "04/20/2018 2:00 PM", "done": true,
        },
    ];
});
const inputDate = document.getElementById("date");
inputDate.addEventListener("keydown", function(event) {
    event.preventDefault()
});

