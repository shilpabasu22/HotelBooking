@HotelSearch @HotelBooking

Feature: Search for Hotel at a specified location

As a customer I want to search for a hotel at my specified location so that I can choose a hotel within my budget

Background:
    Given the application is "HotelBooking"

Scenario: I want to view a list of Hotels based on my search criteria
Given I am on the Hotel Booking home page
When I enter my destination

