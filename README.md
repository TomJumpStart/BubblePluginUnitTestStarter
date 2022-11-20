# Bubble Plugin Unit Test Starter
This is a super simple project that you can fork to quickly add unit tests around a Bubble client side plugin.

1. You enter the code into the `src/initialize.js` and `src/update.js` files, replacing what's already there - just like pasting it into the Bubble plugin *Element Code* section. Add more files if you have more functions to test, or remove either of these if you don't need them.
2. You then can add in whatever tests you need into the `test/initialize.test.js` and `test/update.test.js` files (and add any more you might need following the same pattern). These use the [jest](https://jestjs.io/) unit test framework, which is [pretty simple](https://jestjs.io/docs/using-matchers) to use.
3. Check the project into your version control - any update you make, make it i your local copy of this project first, get the tetss passing, then push to your repo.
4. Copy/paste the code into Bubble - hopefully it'll work reliably!

There's nothing particularly clever about this, it just gives you a quick starting point which correctly emulates a Client side plugin environment (DOM elements present, etc) which allows proper modern JS imports to modularise the code nicely.
