app.controller('CarsController', ['CarsService', 'CompanyService', function (CarsService,CompanyService){
    var self = this;
    self.message = 'What cars dem Tacos'
    self.newCar = {}


    self.cars = CarsService.cars;
    self.companies = CompanyService.companies

    self.addNewCar = CarsService.addNewCar
    self.deleteCar = CarsService.deleteCar


}])