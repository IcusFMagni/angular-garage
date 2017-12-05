app.service('CompanyService', ['$http', function($http){
    var self = this;
    self.newCompany = {name:  '', country: ''}
    self.companies = {list:[]};

    self.getCompanies = function () {
        $http({
            method: 'GET',
            url: '/company'
        }).then(function(response) {
            console.log('response', response.data);
            self.companies.list = response.data;
        });
    };
    self.addNewCompany = function(newCompany) {
        $http({
            method: 'POST',
            url: '/company',
            data: newCompany
        }).then(function(response) {
            console.log('response', response);
            self.newCompany.name = ''
            self.newCompany.country = '';
            self.getCompanies();
        });
    }

    self.getCompanies();
}])