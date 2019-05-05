@DeleteBooking

Feature: Delete the Hotel Booking For a customer

  As a customer I want to Delete a hotel booking


  Scenario Outline: Delete An Existing Hotel Booking
    Given I am on the Hotel Booking home page
    When I see a booking for <firstname>
    And I click on delete button for <firstname>
    Then The booking is deleted for <firstname>

    Examples:
      |firstname |
      |Test      |
      |sb        |
      |354445    |
      |£%%$$%    |
      |First name|
      |Test1     |
      |Test2     |
      |The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog The quick brown fox jumped over the lazy dog |

