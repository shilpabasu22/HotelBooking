package steps.browser;

import com.sun.org.apache.xpath.internal.operations.Bool;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import pageobjects.BasePage;
import pageobjects.CreateHotelBooking;

import static pageobjects.CreateHotelBooking.checkRecordExists;
import static pageobjects.CreateHotelBooking.setCheckOut;

public class CreateBooking extends BasePage {
    CreateHotelBooking createHotelBooking = new CreateHotelBooking();

    @Given("^I am on the Hotel Booking home page$")
    public void iAmOnTheHotelBookingHomePage(){
        driver = initializeChromeDriver();
        driver.get("http://hotel-test.equalexperts.io/");
        System.out.println("I am on the Hotel Booking home page");
    }


    @When("^I enter my Firstname as ([^\"]*)$")
    public void iEnterMyFirstnameAs(String firstname) {
        createHotelBooking.setFirstName(firstname);

    }

    @And("^I enter my Lastname as ([^\"]*)$")
    public void iEnterMyLastnameAs(String lastname) {
        createHotelBooking.setLastName(lastname);


    }

    @And("^I enter the price as \\+?(-?\\d+)$")
    public void iEnterThePriceAs(int totalPrice) {
        createHotelBooking.setTotalPrice(totalPrice);

    }

    @And("^I enter the ([^\"]*) paid$")
    public void iEnterThe(String deposit) {
        createHotelBooking.setDepositPaid(deposit);

    }

    @And("^I enter the Checkin date as ([^\"]*)$")
    public void iEnterTheCheckinDateAs(String checkin) {
        createHotelBooking.setCheckin(checkin);

    }

    @And("^I enter the Checkout date as ([^\"]*)$")
    public void iEnterTheCheckoutDateAs(String checkout) {
        createHotelBooking.setCheckOut(checkout);

    }
    @And("^I click on the save button$")
    public void iClickOnTheSaveButton() {
        createHotelBooking.setSaveRecord();

    }

    @Then("^The booking is saved successfully for ([^\"]*)$")
    public void theBookingIsSavedSuccessfullyFor(String firstname) {
       Boolean recordExists = createHotelBooking.checkRecordExists(firstname);
        System.out.println(firstname);
        System.out.println("Record Exists value = "+recordExists);
        Assert.assertTrue(recordExists);

    }


}
