app.controller('CarsController', ['CarsService', 'CompanyService', function (CarsService,CompanyService){
    var self = this;
    self.message = 'What cars dem Tacos'
    self.cars = CarsService.cars;
    self.companies = CompanyService.companies
    self.newCar = {}

    self.addNewCar = CarsService.addNewCar

}])