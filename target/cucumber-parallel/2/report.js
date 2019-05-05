$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/H:/Shilpa/Hotel_Booking/src/test/resources/features/CreateBooking.feature");
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
  "name": "I want to create a new Hotel Booking",
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
        "Shilpa",
        "Basu",
        "100",
        "true",
        "2019-05-15",
        "2019-05-20"
      ]
    },
    {
      "cells": [
        "s",
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
        "First name",
        "Last name",
        "0",
        "false",
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
  "name": "I want to create a new Hotel Booking",
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
  "name": "I enter my Firstname as s",
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
  "location": "CreateBooking.iEnterThePriceAs(int)"
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
  "name": "The booking is saved successfully for s",
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
});