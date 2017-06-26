// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by monolith.js.
import { name as packageName } from "meteor/monolith";

// Write your tests here!
// Here is an example.
Tinytest.add('monolith - example', function (test) {
  test.equal(packageName, "monolith");
});
