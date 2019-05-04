package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = {"classpath:features/"},
        glue = {"steps.browser", "hooks"},
        tags = {"@CreateBooking", "~@ignore"},
        plugin = {

                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        },
        dryRun=false)
public class CreateBooking extends AbstractTestNGCucumberTests {

}

