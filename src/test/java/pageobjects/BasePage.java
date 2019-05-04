package pageobjects;

import java.io.File;
import java.io.IOException;
import HelperClasses.BasePageHelper;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Month;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class BasePage extends BasePageHelper {

    public static WebDriver driver = null;
    public static WebDriverWait wait = null;

    public static WebDriver initializeChromeDriver() {
        driver = new ChromeDriver(loadChromeOptions());

        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        return driver;

    }

    public static void takeScreenShot(){
        // take screenshot
        File srcFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(srcFile, new File(System.getProperty("user.dir")+"//Results//finalResult.jpg"));
        } catch (IOException e) {
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
