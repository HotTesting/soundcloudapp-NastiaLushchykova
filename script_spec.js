"use strict"

describe('Homework 2nd lesson', function () { 
    
  
    it('Player is visible on the main page', function () {

        browser.get('https://soundcloud-ngrx.herokuapp.com');
        browser.sleep(3000);
        let playButton = $$('track-card:nth-child(3) .btn--play').click();
        browser.sleep(5000);
        expect($('player').isDisplayed()).toBe(true);

    });

    it('Player is visible on the author page', function(){

        browser.get('https://soundcloud-ngrx.herokuapp.com');
        let secondAuthor = $$('track-card:nth-child(2) .track-card__username').click();
        let playButton = $$('.btn--play').first().click(); 
        browser.sleep(3000);
        expect($('player').isDisplayed()).toBe(true);

    });

    it ('Searching', function() {

        browser.get('https://soundcloud-ngrx.herokuapp.com');
        let searcher = $('.btn--search-alt').click();
        browser.sleep(3000);
        let input = $('.search-form__input').sendKeys('Adult Swim Singles').submit();
        browser.sleep(3000);
        let firstElement =$$('.track-card__username').first().getText();
        expect(firstElement).toBe('Adult Swim Singles');
        browser.sleep(3000);
        let pageTitle = $('.content-header__title').getText();
        expect(pageTitle).toBe('Adult Swim Singles');

    });

});