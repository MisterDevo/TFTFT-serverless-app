define([],
    function() {
        return ['$scope', 'welcomeService', function($scope, welcomeService) {

          //$scope.messages = welcomeService.messages.query();

            $scope.messages = [ {text:'Angular-bootsrap-requirejs Client App Template'},
                        {text:''},
                        {text:''},
                        {text:'Wonderful Test !!!'}
                      ] ;


            $scope.$apply();
	}];
});
