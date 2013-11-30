describe('AppCtrl', function() {
  var $scope;
  beforeEach(module('myApp'));
  beforeEach(inject(function ($rootScope) {
    $scope = $rootScope.$new();
  }));

  it('should do something', inject(function ($controller) {
    $controller('AppCtrl', {
      $scope: $scope,
    });
    expect($scope.name).toEqual('arvid');
  }));
});
