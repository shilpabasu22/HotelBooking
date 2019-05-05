import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"H:/Shilpa/Hotel_Booking/src/test/resources/features/CreateBooking.feature:21"},
        plugin = {"json:H:/Shilpa/Hotel_Booking/target/cucumber-parallel/1.json", "html:H:/Shilpa/Hotel_Booking/target/cucumber-parallel/1"},
        monochrome = true,
        glue = {"steps.browser"})
public class Parallel01IT extends AbstractTestNGCucumberTests {
}
