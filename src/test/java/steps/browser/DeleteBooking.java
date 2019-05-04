package steps.browser;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.CreateHotelBooking;
import pageobjects.DeleteHotelBooking;

public class DeleteBooking {
    CreateHotelBooking createHotelBooking = new CreateHotelBooking();
    DeleteHotelBooking deleteHotelBooking = new DeleteHotelBooking();
    @When("^I see a booking for ([^\"]*)$")
    public void iSeeABookingForFirstname(String firstname) {
createHotelBooking.checkRecordExists(firstname);

    }

    @And("^I click on delete button for ([^\"]*)$")
    public void iClickOnDeleteButtonFor(String firstname) {
        deleteHotelBooking.deleteBooking(firstname);
    }

    @Then("The booking is deleted")
    public void theBookingIsDeleted() {
    }
}
