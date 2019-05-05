import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        strict = true,
        features = {"H:/Shilpa/Hotel_Booking/src/test/resources/features/CreateBooking.feature:24"},
        plugin = {"json:H:/Shilpa/Hotel_Booking/target/cucumber-parallel/4.json", "html:H:/Shilpa/Hotel_Booking/target/cucumber-parallel/4"},
        monochrome = true,
        glue = {"steps.browser"})
public class Parallel04IT extends AbstractTestNGCucumberTests {
}
