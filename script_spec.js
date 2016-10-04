"use strict"

describe('Home page', function () { //suite with testsб decribe глобальная переменная

it('should have correct title', function () { //(тут названия тестов) именование тестов строками 
    browser.get('https://soundcloud-ngrx.herokuapp.com/');
    expect(browser.getTitle()).toBe('SoundCloud • Angular2 NgRx',
         'Expecting title to be correct');
});

xit('should have correct URL', function () {
    
});

});