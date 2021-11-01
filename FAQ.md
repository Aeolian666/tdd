

# FAQ


## Why TDD?

Test Driven Development (TDD) is an approach to the `test-then-code` mindset.  It is based on the idea that if developers write test cases before coding functionality, they can write better software and, in theory, complete projects faster.

In addition, TDD focuses on code necessary to pass the test, thereby reducing it to essentials.


## What are the benefits of TDD?

TDD has many benefits:
1. produces higher `code quality`
1. ensures your application is `maintainable` as it will instill confident in your code for future developers
1. your code will be more `flexible` to changes and new features as it was designed with testing in mind
1. the behaviour of your code will be more `predictable` as it ensures your application runs correctly
1. a `well-designed` application


## How is UI testing different than API/functional testing?

**Functional testing** is the technique of using blackbox testing to determine if a piece of software is acting in accordance with pre-determined requirements. 

In other words, if we input the numbers `2` and `3` into a function called `add`, will it return to `5`?

**UI testing** is geared towards simulating the actions of a user on the screen/webpage and determining if the desired effect meet the requirements.

For example, if we *simulate* a click of a button, will the "internal workings" of the application produce a verifiable result somewhere else?  

Therefore, we shouldn't test whether the button was clicked or not, but test whether the button did what it was supposed to.


## How is UI testing different from BDD (behaviour-driven development)?

**Behaviour driven testing**  is defining the behaviour of a feature through examples in plain text.  It treats testing feature as scenarios.  

For example, if you have a program that formats postal codes, capitalizing the letters and putting dashes in the middle would be part of the process, but you don't cover the *capitalization* nor *adding dashes* just by themselves; you should test the general behaviour of the program. eg. did you get the expected output after executing the program?

Therefore `BDD` is a quick way to present to stakeholders that an application *behaves* properly and is doing what it's supposed to.



## How big should each test case be?

Each test case should test a single aspect/scenario of your code only.

For example, if wanted to test an `add(number1, number2)` function, you would have test cases for the following scenarios:
  - can add 2 positive numbers
  - can add 2 negative numbers
  - can add a positive and a negative number (where number1 is positive and number2 is negative)
  - can add a positive and a negative number (where number1 is negative and number2 is positive)
  - ...etc


## Test cases seem repetitive; is there a faster way to write test cases?

Yes, you can use a special *plugin* found in the `VS Code` marketplace.  In `VS Code` go to `Extensions` and search for **TDD Snippets**.

For more details [click here](https://marketplace.visualstudio.com/items?itemName=HaiHua.tdd-snippets).


## Are there any manual efforts in testing?

Yes.  Apart from your automated test cases that you write, you will still need to perform the following testing:
  - integration testing
  - UI/UX tesitng
  - performance & load testing
  - regression


## What is the difference between "code coverage" and "test coverage"?

**Test coverage** is the effectiveness of tests against your code covered by your automated test cases.  You **cannot** measure nor report on this.

**Code coverage** is the measure of the lines of code covered by your automated test cases.  You can report on this number; usually a percentage.


These terms are often incorrectly used interchangeably.

>Note: a higher percentage of code coverage does not mean better testing.  A more effectiveness of tests does not better testing.  You need to ensure both!

## What is the percentage of code coverage at Manulife?

At Manulife we strive for **80%** code coverage.  Your automated pipelines should

