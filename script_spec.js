"use strict"

describe('Home page', function () { 

it('should have correct title', function () { 
    browser.get('https://soundcloud-ngrx.herokuapp.com/');
    expect(browser.getTitle()).toBe('SoundCloud • Angular2 NgRx',
         'Expecting title to be correct');

         //let title = element(by.css('.content-header__title'));
         //equals
         browser.sleep(5000);
         let title = $('.content-header__title'); //$ - найти 1 элемент
         expect(title.getText()).toBe('Featured Tracks',
          'Title on home page should be for Featured Tracks');

         //let link = element.all(by.css('.track-card__username')).first();
        let firstSong = $$('.track-card__username').first();
        let firstSongText = firstSong.getText();
        firstSong.click();
        
        let card_title = $('.user-card__title').getText();
        
        expect(firstSongText).toBe(card_title);
        browser.sleep(10000); //10 сек

      //  element(by.cssContainingText('.g-col', 'Featured')).getText();

      //element.all(by.repeater('allinfo in days')).first().click();
});

//xit('should have correct URL', function () {
    
//});

});

