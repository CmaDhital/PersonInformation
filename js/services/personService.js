angular.module("app").service("personService", ["$http", function($http){

    
    
    var Obj=this;
    
         $http.get("/service/person").then(function(response){
            Obj.personDetails= response.data; 
             console.log("from Service person")
             console.log(Obj.personDetails);


   
    });
}]);
    
    