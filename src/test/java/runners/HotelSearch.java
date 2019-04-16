package runners;

import cucumber.api.CucumberOptions;
import org.testng.annotations.BeforeClass;

@CucumberOptions(
        features = {"classpath:features/"},
        glue = {"steps.browser", "hooks"},
        tags = {"@HotelSearch", "~@ignore"},
        dryRun=false)
public class HotelSearch {
    @BeforeClass
    public void setupTest(){
        System.setProperty("cukes.selenium", "true");
    }
}

