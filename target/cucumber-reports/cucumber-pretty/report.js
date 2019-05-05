$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/CreateBooking.feature");
formatter.feature({
  "name": "Create the Hotel Booking For a specific time period",
  "description": "As a customer I want to create a hotel booking for the holiday",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateBooking"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create a new Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the Hotel Booking home page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter my Firstname as \u003cfirstname\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I enter my Lastname as \u003clastname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the price as \u003cprice\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the \u003cdeposit\u003e paid",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Checkin date as \u003ccheckin\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Checkout date as \u003ccheckout\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the save button",
  "keyword": "And "
});
formatter.step({
  "name": "The booking is saved successfully for \u003cfirstname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "price",
        "deposit",
        "checkin",
        "checkout"
      ]
    },
    {
      "cells": [
        "Test1",
        "User1",
        "100.25",
        "true",
        "2019-06-19",
        "2019-06-28"
      ]
    },
    {
      "cells": [
        "Test2",
        "User2",
        "-100.25",
        "true",
        "2019-06-19",
        "2019-06-28"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create a new Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateBooking"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Hotel Booking home page",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateBooking.iAmOnTheHotelBookingHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my Firstname as Test1",
  "keyword": "When "
});
formatter.match({
  "location": "CreateBooking.iEnterMyFirstnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my Lastname as User1",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterMyLastnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the price as 100.25",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterThePriceAs(float)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the true paid",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Checkin date as 2019-06-19",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterTheCheckinDateAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Checkout date as 2019-06-28",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterTheCheckoutDateAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iClickOnTheSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is saved successfully for Test1",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateBooking.theBookingIsSavedSuccessfullyFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a new Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateBooking"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Hotel Booking home page",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateBooking.iAmOnTheHotelBookingHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my Firstname as Test2",
  "keyword": "When "
});
formatter.match({
  "location": "CreateBooking.iEnterMyFirstnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my Lastname as User2",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterMyLastnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the price as -100.25",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterThePriceAs(float)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the true paid",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Checkin date as 2019-06-19",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterTheCheckinDateAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Checkout date as 2019-06-28",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterTheCheckoutDateAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iClickOnTheSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is saved successfully for Test2",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateBooking.theBookingIsSavedSuccessfullyFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});