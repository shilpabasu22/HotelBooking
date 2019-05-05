package pageobjects;

import java.io.File;
import java.io.IOException;
import HelperClasses.BasePageHelper;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import org.apache.commons.io.FileUtils;
import org.assertj.core.api.SoftAssertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.WebDriverWait;
import reports.ExtentManager;

import com.aventstack.extentreports.ExtentReports;
import java.time.Month;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class BasePage extends BasePageHelper {

    public static SoftAssertions softAssert = null;
    public static WebDriver driver = null;
    public static WebDriverWait wait = null;
    public static  ExtentReports  reports = null;
    public static ExtentTest scenario = null;

    public static WebDriver initializeChromeDriver() {
        driver = new ChromeDriver(loadChromeOptions());

        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        return driver;

    }

    public static void generateReport(String scenarioName){
        reports = ExtentManager.getInstance(System.getProperty("user.dir")+"\\Reports\\Report_");
        scenario = reports.createTest(scenarioName);

    }
    public static void flushReports(){
        if(reports!=null)
            reports.flush();
    }

public void infoLog(String message){
        scenario.log(Status.INFO, message);
}

public void failureLog(String errorMessage){
    scenario.log(Status.FAIL, errorMessage);
    takeSceenShot();

}
   /* public static void takeScreenShot(){
        // take screenshot
        File srcFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(srcFile, new File(System.getProperty("user.dir")+"//Results//finalResult.jpg"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
*/

    public void takeSceenShot(){
        // fileName of the screenshot
        Date d=new Date();
        String screenshotFile=d.toString().replace(":", "_").replace(" ", "_")+".png";
        // take screenshot
        File srcFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        try {
            // get the dynamic folder name
            FileUtils.copyFile(srcFile, new File(ExtentManager.screenshotFolderPath+screenshotFile));
            //put screenshot file in reports
            scenario.log(Status.FAIL,"Screenshot-> "+ scenario.addScreenCaptureFromPath(ExtentManager.screenshotFolderPath+screenshotFile));
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }
    public static int getMonthNumber(String monthName) {
        return Month.valueOf(monthName.toUpperCase()).getValue();
    }

    public static WebDriverWait explicitWait(){
        wait  = new WebDriverWait(driver ,30);
        return wait;
    }
    }
