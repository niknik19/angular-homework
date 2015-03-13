angular.module('app').controller('tableController', ['$scope',  function($scope) {
    $scope.showTableContent = false;
    
    $scope.searchByFilterQuery = function(person) {
        if( !$scope.filterQuery ||
           person.firstName.indexOf($scope.filterQuery) > -1 || 
           person.lastName.indexOf($scope.filterQuery ) > -1 || 
           person.age === +$scope.filterQuery) {
            return true;
        }
        return false;
    }
    
    
    $scope.sortField = null;
    $scope.sortReverse = false;
    $scope.setSortField = function(newSortField) {
        if ($scope.sortField !== newSortField) {
            $scope.sortField = newSortField;
            $scope.sortReverse = false;
        } else {
            $scope.sortReverse = !$scope.sortReverse;
        }
    };
    $scope.getSortGlyphClass = function(field) {
        if ($scope.sortField === field) {
            return "glyphicon " + ( $scope.sortReverse ? "glyphicon-triangle-bottom" : "glyphicon-triangle-top" );
        } 
        return "";
    };
    
    $scope.contactOptions = [
        { name: "Home Phone Number", type: "home"},
        { name: "Fax Number", type: "fax" }
    ];
    
    $scope.currentContactOption = $scope.contactOptions[0];
    
    //Dialog 
    
    $scope.showPersonInfo = function(person) {
        $scope.selectedPerson = person;
        $scope.isShowDisplayInfo = true;
    };
    
    $scope.getSelectedPersonHeader = function() {
        if ($scope.selectedPerson) {
            return $scope.selectedPerson.firstName + " " + $scope.selectedPerson.lastName;
        }
    };
    
    $scope.onModalOk = function() {
        alert("Ok");
    };
    
    $scope.onModalCancel = function() {
        alert("Cancel");
    };
    
    $scope.persons = [
        {
            "firstName": "John",
            "lastName": "Smith",
            "age": 25,
            "address":
            {
                "streetAddress": "21 2nd Street",
                "city": "New York",
                "state": "NY",
                "postalCode": "10021"
            },
            "phoneNumber":
                [
                    {
                        "type": "home",
                        "number": "212 555-1234"
                    },
                    {
                        "type": "fax",
                        "number": "646 555-4567"
                    }
                ]
        },
        {
            "firstName": "Simona",
            "lastName": "Morasca",
            "age": 22,
            "address":
            {
                "streetAddress": "3 Mcauley Dr",
                "city": "Ashland",
                "state": "OH",
                "postalCode": "44805"
            },
            "phoneNumber":
                [
                    {
                        "type": "home",
                        "number": "419-503-2484"
                    },
                    {
                        "type": "fax",
                        "number": "419-800-6759"
                    }
                ]
        },
        {
            "firstName": "Josephine",
            "lastName": "Darakjy",
            "age": 33,
            "address":
            {
                "streetAddress": "4 B Blue Ridge Blvd",
                "city": "Brighton",
                "state": "MI",
                "postalCode": "48116"
            },
            "phoneNumber":
                [
                    {
                        "type": "home",
                        "number": "973-605-6492"
                    },
                    {
                        "type": "fax",
                        "number": "602-919-4211"
                    }
                ]
        }
    ];
}]);