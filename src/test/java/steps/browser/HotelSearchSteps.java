package steps.browser;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HotelSearchSteps {

    @Given("^I am on the Hotel Booking home page$")
    public void iAmOnTheHotelBookingHomePage(){
        System.out.println("I am on the Hotel Booking home page");
    }

    @When("I enter my destination as Barcelona")
    public void iEnterMyDestination(){
        System.out.println("I enter my destination as Barcelona");
    }

}
