/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed in the allFeeds object and ensures
         * it has a URL defined and that the URL is not empty.
         */
         it('URLs are defined, not empty', function() {
           for(var i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();             // https://devhints.io/jasmine
             expect(allFeeds[i].url.length).not.toBe(0);
           }
         });

        /* Loops through each feed in the allFeeds object and ensures
         * it has a name defined and that the name is not empty.
         */
         it('Names are defined, not empty', function() {
           for(var i = 0; i < allFeeds.length; i++) {
           expect(allFeeds[i].name).toBeDefined();
           expect(allFeeds[i].name.length).not.toBe(0);
           }
         });
    });

    describe('The Menu', function() {

      // Ensures the menu element is hidden by default
      it('menu is hidden', function() {
        expect($('body').hasClass('menu-hidden')).toBeTruthy();                // https://api.jquery.com/hasclass/
      });

      // Ensures the menu changes visibility when the menu icon is clicked.
      it('menu visible on click', function() {                              // http://api.jquery.com/trigger/
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(false);

        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(true);

      });
  });

    describe('Initial Entries', function() {
      beforeEach(function(done) {                 // https://jasmine.github.io/tutorials/async
        loadFeed(0, function() {
          done();
        });
      });

      // feed container has at least one entry element
      it('at least one entry in feed', function () {
        expect($('.feed .entry').length).not.toBe(0);      // https://jasmine.github.io/api/3.4/matchers
      });
  });

    describe('New Feed Selection', function() {
      ogFeed = $('.feed').html();                     // https://www.w3schools.com/jquery/html_html.asp
      beforeEach(function(done) {
        loadFeed(0, function() {
        });
        loadFeed(1, function() {
          done();
        });
      });

      // newFeed and ogFeed are not the same
      it('new feed loaded', function() {
        newFeed = $('.feed').html();
        expect(newFeed).not.toBe(ogFeed);
      });
    });
}());

/* Also referenced: 
* https://medium.com/letsboot/testing-javascript-with-jasmine-basics-48efe03cf973
* https://www.youtube.com/watch?v=pPt4oOKNdEk
*
*/
