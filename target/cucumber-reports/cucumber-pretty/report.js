$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/DeleteBooking.feature");
formatter.feature({
  "name": "Delete the Hotel Booking For a customer",
  "description": "  As a customer I want to Delete a hotel booking",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DeleteBooking"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Delete An Existing Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the Hotel Booking home page",
  "keyword": "Given "
});
formatter.step({
  "name": "I see a booking for \u003cfirstname\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click on delete button for \u003cfirstname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "The booking is deleted for \u003cfirstname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname"
      ]
    },
    {
      "cells": [
        "Test1"
      ]
    },
    {
      "cells": [
        "sb"
      ]
    },
    {
      "cells": [
        "354445"
      ]
    },
    {
      "cells": [
        "£%%$$%"
      ]
    },
    {
      "cells": [
        "First name"
      ]
    },
    {
      "cells": [
        "Test2"
      ]
    },
    {
      "cells": [
        "Test3"
      ]
    },
    {
      "cells": [
        "The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete An Existing Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
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
  "name": "I see a booking for Test1",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for Test1",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is deleted for Test1",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.DeleteBooking.theBookingIsDeleted(DeleteBooking.java:42)\r\n\tat ✽.The booking is deleted for Test1(classpath:features/DeleteBooking.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete An Existing Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
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
  "name": "I see a booking for sb",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for sb",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is deleted for sb",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.DeleteBooking.theBookingIsDeleted(DeleteBooking.java:42)\r\n\tat ✽.The booking is deleted for sb(classpath:features/DeleteBooking.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete An Existing Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
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
  "name": "I see a booking for 354445",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for 354445",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is deleted for 354445",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.DeleteBooking.theBookingIsDeleted(DeleteBooking.java:42)\r\n\tat ✽.The booking is deleted for 354445(classpath:features/DeleteBooking.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete An Existing Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
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
  "name": "I see a booking for £%%$$%",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for £%%$$%",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is deleted for £%%$$%",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.DeleteBooking.theBookingIsDeleted(DeleteBooking.java:42)\r\n\tat ✽.The booking is deleted for £%%$$%(classpath:features/DeleteBooking.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete An Existing Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
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
  "name": "I see a booking for First name",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.DeleteBooking.iSeeABookingForFirstname(DeleteBooking.java:25)\r\n\tat ✽.I see a booking for First name(classpath:features/DeleteBooking.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on delete button for First name",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The booking is deleted for First name",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete An Existing Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
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
  "name": "I see a booking for Test2",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for Test2",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is deleted for Test2",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.DeleteBooking.theBookingIsDeleted(DeleteBooking.java:42)\r\n\tat ✽.The booking is deleted for Test2(classpath:features/DeleteBooking.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete An Existing Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
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
  "name": "I see a booking for Test3",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for Test3",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is deleted for Test3",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.DeleteBooking.theBookingIsDeleted(DeleteBooking.java:42)\r\n\tat ✽.The booking is deleted for Test3(classpath:features/DeleteBooking.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete An Existing Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
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
  "name": "I see a booking for The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is deleted for The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.browser.DeleteBooking.theBookingIsDeleted(DeleteBooking.java:42)\r\n\tat ✽.The booking is deleted for The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog(classpath:features/DeleteBooking.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});