let homepage=function()
{
    let firstnumber=element(by.model('first'));
    let secondnumber=element(by.model('second'));
    let gobutton=element(by.css('[ng-click="doAddition()"]'));

    this.get=function(url)
        {
          browser.get(url);
        };

    this.enterfirstnumber=function(firstNo)
    {
       firstnumber.sendKeys(firstNo);
    };

    this.entersecondnumber=function(secondno)
    {
        secondnumber.sendKeys(secondno);
    };

    this.clickgo=function()
    {
        gobutton.click();
    };

    this.verify=function(res)
    {
        let result=element(by.cssContainingText('.ng-binding', res))
        expect(result.getText()).toEqual(res);
    };

};

    module.exports=new homepage();






