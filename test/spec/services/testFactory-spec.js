"use strict";

describe("Testing Languages Service", function () {
    beforeEach(module('mytodoApp'));

    var LanguagesService;

    beforeEach(function(){
      module('mytodoApp');
      inject(function($injector){
        LanguagesService = $injector.get('testFactory');
      });
    });

    // beforeEach(inject(function ($injector) {
    //     // angular.mock.inject(function ($injector) {
    //         httpBackend = $injector.get('$httpBackend');
    //         service = $injector.get('testFactory');
    //     })
    // }));

    // describe('getCustomers', function () {
    //     it("should return a list of customers", inject(function () {
    //         httpBackend.expectGET('http://www.w3schools.com/angular/customers.php').respond({
        //    "records":[
        //    {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"},
        //    {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"},
        //    {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"},
        //    {"Name":"Around the Horn","City":"London","Country":"UK"},
        //    {"Name":"B's Beverages","City":"London","Country":"UK"},
        //    {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"},
        //    {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"},
        //    {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"},
        //    {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"},
        //    {"Name":"Bon app'","City":"Marseille","Country":"France"},
        //    {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"},
        //    {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"},
        //    {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"},
        //    {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"},
        //    {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"}
        //    ]
        //    });
    //         service.getCustomers(function (result) {
    //             expect(result).toEqual({
        //    "records":[
        //    {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"},
        //    {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"},
        //    {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"},
        //    {"Name":"Around the Horn","City":"London","Country":"UK"},
        //    {"Name":"B's Beverages","City":"London","Country":"UK"},
        //    {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"},
        //    {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"},
        //    {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"},
        //    {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"},
        //    {"Name":"Bon app'","City":"Marseille","Country":"France"},
        //    {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"},
        //    {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"},
        //    {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"},
        //    {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"},
        //    {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"}
        //    ]
        //    });
    //       });
    //       httpBackend.flush();
    //     }))
    // })
    it('should return available languages', function() {
      var languages = LanguagesService.getlanguages();
      expect(languages).toContain('en');
      expect(languages).toContain('es');
      expect(languages).toContain('fr');
      expect(languages.length).toEqual(3);
    });
});

