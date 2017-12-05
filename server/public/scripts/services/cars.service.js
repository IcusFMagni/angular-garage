app.service('CarsService', ['$http', function($http){
    var self = this;
    self.cars = {list:[]};
    self.newCar = {}
    self.getCars = function () {
        $http({
            method: 'GET',
            url: '/cars'
        }).then(function(response) {
            console.log('response', response.data);
            self.cars.list = response.data;
        });
    };

    self.addNewCar = function(newCar) {
        $http({
            method: 'POST',
            url: '/cars',
            data: newCar
        }).then(function(response) {
            console.log('response', response);
            self.newCar.model = ''
            self.newCar.year = ''
            self.newCar.nickname = ''
            self.newCar.company_id = 0
            self.getCars();
        });
    }

    self.deleteCar = function(carToDelete) {
        console.log(carToDelete)
        $http ({
            method: 'DELETE',
            url: '/cars/'+carToDelete.id
        }).then(function(response) {
            console.log('response'+response)
            self.getCars();
        });
    };
   
    self.getCars();
}])