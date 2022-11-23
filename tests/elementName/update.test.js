/**
 * @jest-environment jsdom
 */

import * as bubble from '../../lib/bubblePluginEnvironment.js';
import * as init from '../../src/elementName/initialize.js';
import * as underTest from '../../src/elementName/update.js';
 
 
describe("Tests for plugin update() function", () => {
 
    beforeEach(() => {
        bubble.reset();
        // initalize will always have been run before update
        init.initialize(bubble.instance(), bubble.context());

        // TODO any other standard setup you want to do to have a clean start for each test
    });
 

    test('My test description', () => {
        // GIVEN starting point
        const instance = bubble.instance(); // this is a mock, which we can then interrogate
        const properties = { };
        //  - TODO add whatever other setup you want here
 
        // WHEN we run initialize
        underTest.update(instance, properties, bubble.context());
 
        // THEN something happened
        //  - in this example, we confirm that the custom state 'ready' has been set to true (Yes) by the initialize function
        expect(instance.publishState).toBeCalledWith('update', 123);
        //  - TODO and whatever other checks you want to add
     });

     // TODO add any other tests here
});
