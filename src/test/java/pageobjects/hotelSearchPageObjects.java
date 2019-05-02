package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class hotelSearchPageObjects extends BasePage {


public static final String FIRSTNAME = "firstname";
public static final String LASTNAME = "lastname";
public static final String TOTALPRICE = "totalprice";
public static final String DEPOSITPAID = "depositpaid";
public static final String CHECKIN = "checkin";
public static final String CHECKOUT = "checkout";
public static final String SAVE = "//input[value()=Save]";
    public static void main(String[] args) {
        driver = initializeChromeDriver();
        driver.get("http://hotel-test.equalexperts.io/");
        setFirstName("Shilpa");
        setLastName("Basu");
        setTotalPrice(200);
        setDepositPaid("true");
        setCheckin("15/05/2019");
        setCheckOut("20/05/2019");

    }

    public static void setFirstName(String firstName){
        driver.findElement(By.id(FIRSTNAME)).sendKeys(firstName);

    }

    public static void setLastName(String lastName){
        driver.findElement(By.id(LASTNAME)).sendKeys(lastName);

    }

    public static void setTotalPrice(int totalPrice){
        String totalPrice_Val = String.valueOf(totalPrice);
        driver.findElement(By.id(TOTALPRICE)).sendKeys(totalPrice_Val);

    }

    public static void setDepositPaid(String depositPaid){
        WebElement dropDown = driver.findElement(By.id(DEPOSITPAID));
        Select value_select = new Select(dropDown);
        value_select.selectByVisibleText(depositPaid);

    }
    public static void setCheckin(String checkin){
        driver.findElement(By.id(CHECKIN)).sendKeys(checkin);

    }


    public static void setCheckOut(String checkout){
        driver.findElement(By.id(CHECKOUT)).sendKeys(checkout);

    }
}
