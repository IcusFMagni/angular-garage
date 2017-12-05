app.controller('CompanyController', ['CompanyService', function (CompanyService){
    var self = this;
    self.message = 'What up hommie?';
    self.newCompany = CompanyService.newCompany
    self.companies = CompanyService.companies;
    console.log(self.newCompany);

    self.addNewCompany = CompanyService.addNewCompany



}])