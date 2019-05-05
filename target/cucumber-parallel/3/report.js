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
  "location": "CreateBooking.iEnterThePriceAs(int)"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput type\u003d\"button\" value\u003d\" Save \" onclick\u003d\"createBooking()\"\u003e is not clickable at point (1481, 956). Other element would receive the click: \u003ctd class\u003d\" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled\"\u003e...\u003c/td\u003e\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027THUNDERTWONK\u0027, ip: \u0027192.168.1.124\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\Lavanya\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49551}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 8ace5c77851a3f58e2628b21f26309e8\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageobjects.CreateHotelBooking.setSaveRecord(CreateHotelBooking.java:119)\r\n\tat steps.browser.CreateBooking.iClickOnTheSaveButton(CreateBooking.java:67)\r\n\tat ✽.I click on the save button(file:/H:/Shilpa/Hotel_Booking/src/test/resources/features/CreateBooking.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The booking is saved successfully for 354445",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateBooking.theBookingIsSavedSuccessfullyFor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});