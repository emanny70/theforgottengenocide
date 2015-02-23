'use strict';

angular.module('myApp.view1').controller('View1Ctrl', ['$scope', function($scope) {
	$scope.person = {name: 'test'};

// handles the click event for link 1, sends the query
$scope.getOutput = function() {
  getRequest(
      'view1/person.php', // URL for the PHP file
       drawOutput,  // handle successful request
       drawError    // handle error
  );
  return false;
}  
// handles drawing an error message
function drawError() {
    $scope.error = "There was an error";
}
// handles the response, adds the html
function drawOutput(responseText) {
	$scope.$apply(function(){
		$scope.person.name = responseText;
	});
}

// helper function for cross-browser request object
function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }
    req.open("GET", url, true);
    req.send(null);
    return req;
}
}]);