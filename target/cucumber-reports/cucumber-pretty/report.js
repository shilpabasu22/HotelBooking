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
        "100",
        "true",
        "2019-05-15",
        "2019-05-20"
      ]
    },
    {
      "cells": [
        "sb",
        "B",
        "-100",
        "false",
        "2019-05-15",
        "2019-05-20"
      ]
    },
    {
      "cells": [
        "354445",
        "345345",
        "15000",
        "true",
        "2019-06-19",
        "2019-06-28"
      ]
    },
    {
      "cells": [
        "£%%$$%",
        "$%^$%^$",
        "2000",
        "true",
        "2019-06-19",
        "2019-06-28"
      ]
    },
    {
      "cells": [
        "Test2",
        "User2",
        "100.25",
        "true",
        "2019-06-19",
        "2019-06-28"
      ]
    },
    {
      "cells": [
        "Test3",
        "User3",
        "-100.25",
        "true",
        "2019-06-19",
        "2019-06-28"
      ]
    },
    {
      "cells": [
        "The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog",
        "The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog",
        "100",
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
  "name": "I enter the price as 100",
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
  "name": "I enter the Checkin date as 2019-05-15",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterTheCheckinDateAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Checkout date as 2019-05-20",
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
  "name": "I enter my Firstname as sb",
  "keyword": "When "
});
formatter.match({
  "location": "CreateBooking.iEnterMyFirstnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my Lastname as B",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterMyLastnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the price as -100",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterThePriceAs(float)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the false paid",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Checkin date as 2019-05-15",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterTheCheckinDateAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Checkout date as 2019-05-20",
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
  "name": "The booking is saved successfully for sb",
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
  "name": "I enter my Firstname as 354445",
  "keyword": "When "
});
formatter.match({
  "location": "CreateBooking.iEnterMyFirstnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my Lastname as 345345",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterMyLastnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the price as 15000",
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
  "name": "The booking is saved successfully for 354445",
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
  "name": "I enter my Firstname as £%%$$%",
  "keyword": "When "
});
formatter.match({
  "location": "CreateBooking.iEnterMyFirstnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my Lastname as $%^$%^$",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterMyLastnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the price as 2000",
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
  "name": "The booking is saved successfully for £%%$$%",
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
  "name": "I enter my Firstname as Test3",
  "keyword": "When "
});
formatter.match({
  "location": "CreateBooking.iEnterMyFirstnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my Lastname as User3",
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
  "name": "The booking is saved successfully for Test3",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateBooking.theBookingIsSavedSuccessfullyFor(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.CreateBooking.theBookingIsSavedSuccessfullyFor(CreateBooking.java:80)\r\n\tat ✽.The booking is saved successfully for Test3(classpath:features/CreateBooking.feature:17)\r\n",
  "status": "failed"
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
  "name": "I enter my Firstname as The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog",
  "keyword": "When "
});
formatter.match({
  "location": "CreateBooking.iEnterMyFirstnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my Lastname as The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog",
  "keyword": "And "
});
formatter.match({
  "location": "CreateBooking.iEnterMyLastnameAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the price as 100",
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
  "name": "The booking is saved successfully for The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateBooking.theBookingIsSavedSuccessfullyFor(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.CreateBooking.theBookingIsSavedSuccessfullyFor(CreateBooking.java:80)\r\n\tat ✽.The booking is saved successfully for The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog(classpath:features/CreateBooking.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});