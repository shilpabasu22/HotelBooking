package HelperClasses;

import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class BasePageHelper {

    public static ChromeOptions loadChromeOptions() {
        ChromeOptions chromeOptions = new ChromeOptions();
        try {
           // FileInputStream input = new FileInputStream("./resources/config/paths.properties");
            System.setProperty("webdriver.chrome.driver",".//.//.//Binary//chromedriver.exe");
            InputStream input = BasePageHelper.class.getClassLoader().getResourceAsStream("config/paths.properties");

            Properties prop = new Properties();
            prop.load(input);
            System.setProperty(ChromeDriverService.CHROME_DRIVER_LOG_PROPERTY, prop.getProperty("logs"));
            System.out.println("Logs are at " +prop.getProperty("logs"));

            chromeOptions.setPageLoadStrategy(PageLoadStrategy.NORMAL);
            chromeOptions.addArguments("--disable-notifications");
            chromeOptions.addArguments("--start-maximized");
            chromeOptions.addArguments("disable-infobars");
            System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");


        }catch (FileNotFoundException e){
            e.printStackTrace();
        }
        catch (IOException e){
            e.printStackTrace();
        }
        return chromeOptions;
    }


}
