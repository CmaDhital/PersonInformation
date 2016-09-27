angular.module('app').controller('appCtrl', ['$scope','personService', function($scope, personService){
    
    
    $scope.title = "Person Information";
    $scope.personDetails = "";
     
     $scope.$watch(function(){
                                return personService.personDetails;
                            },function(newVal,oldVal){
                                                        if(oldVal!=newVal)
                                                                {
                                                                    $scope.personDetails=newVal;
                                                                    
                                                                    
                                                                    console.log("This is coming from controller for personDetails")
                                                                    console.log($scope.personDetails);
                                                                    
                                                                    
                                                                    
                                                                }
         
     });
    
     }]);
    