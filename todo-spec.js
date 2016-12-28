describe('angularjs homepage todo list', function() {

    beforeEach( () => {
        browser.ignoreSynchronization = true;
    })

    it('should add a todo', function() {
        browser.get('https://angularjs.org');
        // browser.get('https://www.facebook.com');

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        // browser.driver.sleep(60000);

        // browser.driver.findElement(by.id('email')).sendKeys('shianhuang2008@gmail.com');
        // browser.driver.findElement(by.id('pass')).sendKeys('hsa08042011');
        //
        // browser.driver.findElement(by.xpath('//input[@value="Log In"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});
