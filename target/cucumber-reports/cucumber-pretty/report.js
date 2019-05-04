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
  "name": "I want to delete a new Hotel Booking",
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
  "name": "The booking is deleted",
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
        "Shilpa"
      ]
    },
    {
      "cells": [
        "s"
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
        "The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I want to delete a new Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
    }
  ]
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
  "name": "I see a booking for Shilpa",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for Shilpa",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to delete a new Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
    }
  ]
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
  "name": "I see a booking for s",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteBooking.iSeeABookingForFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for s",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[1]/div[2]/div[1]/div[7]/input\"}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027THUNDERTWONK\u0027, ip: \u0027192.168.1.124\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\Lavanya\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61333}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 86ff9745a8b0c45e613f47fcc1cb3b73\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[1]/div[2]/div[1]/div[7]/input}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageobjects.DeleteHotelBooking.deleteBooking(DeleteHotelBooking.java:23)\r\n\tat steps.browser.DeleteBooking.iClickOnDeleteButtonFor(DeleteBooking.java:20)\r\n\tat ✽.I click on delete button for s(classpath:features/DeleteBooking.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The booking is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to delete a new Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
    }
  ]
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
  "name": "The booking is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to delete a new Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
    }
  ]
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
  "name": "The booking is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to delete a new Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
    }
  ]
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
  "status": "passed"
});
formatter.step({
  "name": "I click on delete button for First name",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteBooking.iClickOnDeleteButtonFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The booking is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to delete a new Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
    }
  ]
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
  "name": "The booking is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteBooking.theBookingIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});