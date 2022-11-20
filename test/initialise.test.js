/**
 * @jest-environment jsdom
 */

import * as bubble from '../lib/bubblePluginEnvironment.js';
import * as underTest from '../src/initialize.js';
 
 
describe("Tests for plugin initialize() function", () => {
 
    beforeEach(() => {
        bubble.reset();

        // TODO any other standard setup you want to do to have a clean start for each test
    });
 

    test('My test description', () => {
        // GIVEN starting point
        const instance = bubble.instance(); // this is a mock, which we can then interrogate
        //  - TODO add whatever other setup you want here
 
        // WHEN we run initialize
        underTest.initialize(instance, bubble.context());
 
        // THEN something happened
        //  - in this example, we confirm that the custom state 'ready' has been set to true (Yes) by the initialize function
        expect(instance.publishState).toBeCalledWith('ready', true);
        //  - TODO and whatever other checks you want to add
     });

     // TODO add any other tests here
});
