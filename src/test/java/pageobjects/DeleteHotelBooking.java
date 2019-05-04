package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

public class DeleteHotelBooking extends BasePage {

    public static void main(String[] args) {
        driver = initializeChromeDriver();

        driver.get("http://hotel-test.equalexperts.io/");
        try {
            Thread.sleep(2000);
            wait = explicitWait();
            wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[7]/input"))));


            List<WebElement> rows = driver.findElements(By.xpath("//div[@id='bookings']/div[@class='row']"));
            System.out.println(rows.size());
            for (int i = 0; i < rows.size(); i++) {
                WebElement link = rows.get(i);
                System.out.println("------------Link " + i + " Text-----------");
                System.out.println(link.getText());
                if (link.getText().contains("Shilpa")) {
                    int j = i + 1;
                    driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[" + j + "]/div[7]/input")).click();

                }
            }
        }catch (InterruptedException e){
            e.printStackTrace();
        }

    }
}
