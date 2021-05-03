# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cdevlin/lotide`

**Require it:**

`const _ = require('@cdevlin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: asserts that two arrays are equal
* `assertEqual(...)`: asserts that two values are equal
* `assertObjectsEqual(...)`: asserts that two Objects are equal
* `countLetters(...)`: returns the number of letters in a string
* `countOnly(...)`: counts the appearances of a specified value
* `eqArrays(...)`: determines if two arrays are equal
* `eqObjects(...)`: determins if two objects are equal
* `findKey(...)`: finds keys within an Object using a given function
* `findKeyByValue(...)`: finds values within an Object using a given function
* `flatten(...)`: flattens nested arrays
* `head(...)`: returns first value of an array
* `letterPositions(...)`: returns index of a letter in a string
* `map(...)`: performs a given  function on every value in an array
* `middle(...)`: returns the middle value of an array, or the average of the two middle values
* `tail(...)`: returns an array with the first value removed
* `takeUntil(...)`: copies an array until a given function is satisfied
* `without(...)`: removes specified values from an array