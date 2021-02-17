let homepage= require('../pages/homepage');

describe('demo calculator tests', function(){
 
    it('addition test', function(){

       
       // browser.get('http://juliemr.github.io/protractor-demo/');
       homepage.get('http://juliemr.github.io/protractor-demo/')
       // element(by.model('first')).sendKeys('2');
       homepage.enterfirstnumber('3');
        //element(by.model('second')).sendKeys('5');
        homepage.entersecondnumber('3');
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickgo();
       // let result=element(by.cssContainingText('.ng-binding', '7'))
       // expect(result.getText()).toEqual('7');
       homepage.verify('6');
        browser.sleep(2000)
        
    });




});