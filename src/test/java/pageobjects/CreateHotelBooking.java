package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Calendar;


public class CreateHotelBooking extends BasePage {


public static final String FIRSTNAME = "firstname";
public static final String LASTNAME = "lastname";
public static final String TOTALPRICE = "totalprice";
public static final String DEPOSITPAID = "depositpaid";
public static final String CHECKIN = "checkin";
public static final String CHECKOUT = "checkout";
//public static final String SAVE = "//input[value()=' Save ']";
public static final String SAVE = "/html/body/div[1]/div[3]/div/div[7]/input";


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
    public static void setCheckin(String checkin){ //This commented code is not yet complete and can be worked upon to work with calendar controls
           /* int year;
            String month;
            String day;
            try {
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
                Date date = simpleDateFormat.parse(checkin);
                month = new SimpleDateFormat("MMM", Locale.ENGLISH).format(date);
                year = Integer.parseInt(new SimpleDateFormat("yyyy").format(date));
                day = new SimpleDateFormat("dd").format(date);
                System.out.println(day + " - " + month + " - " + year);

                while (true) {
                    int displayedYear = Integer.parseInt(driver.findElement(By.xpath("//span[@class='ui-datepicker-year'")).getText());
                    System.out.println(displayedYear);
                    String displayedMonth = driver.findElement(By.xpath("//span[@class='ui-datepicker-month'")).getText();
                    System.out.println(displayedMonth);
                    if(displayedYear==year){

                        driver.findElement(By.xpath("//span[text()='"+year+"']")).click();
                        Thread.sleep(3000);//later fix with explicit wait
                        //      driver.findElement(By.xpath(MONTH)).click();

                        Date month_format = new SimpleDateFormat("MMM", Locale.ENGLISH).parse(displayedMonth);

                        while(true) {
                            Calendar cal = Calendar.getInstance();
                            cal.setTime(month_format);
                            int displayedMonthInt = getMonthNumber(displayedMonth);
                            int travelMonthInt = getMonthNumber(month);
                            if (displayedMonthInt < travelMonthInt) {
                                driver.findElement(By.xpath("//a[@class='ui-datepicker-prev ui-corner-all']")).click();
                            } else if (displayedMonthInt > travelMonthInt) {
                                driver.findElement(By.xpath("//a[@class='ui-datepicker-next ui-corner-all']")).click();
                            } else {
                                break;
                            }
                        }

                        driver.findElement(By.xpath("//"))
                            break;
                        }
                        break;
                    }else {// not visible
                        if (upperYear < year) {// click forward
                            driver.findElement(By.xpath("//i[@class='glyphicon glyphicon-chevron-right']")).click(); // 2 but first of interest
                        } else if (year < lowerYear) {// click back
                            driver.findElement(By.xpath("//i[@class='glyphicon glyphicon-chevron-left']")).click(); // 2 but first of interest
                        }
                    }

            }catch (ParseException e){
                e.printStackTrace();
            }
            catch (InterruptedException e){
                e.printStackTrace();
            }*/
        driver.findElement(By.id(CHECKIN)).sendKeys(checkin);

    }



    public static void setCheckOut(String checkout){
        driver.findElement(By.id(CHECKOUT)).sendKeys(checkout);

    }
    public static void setSaveRecord(){
        driver.findElement(By.xpath(SAVE)).click();
    }
    public static boolean checkRecordExists(String firstname) {
        List<WebElement> rows=null;
        try {
            Thread.sleep(4000);

         //   wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[7]/input"))));


            rows = driver.findElements(By.xpath("//div[@id='bookings']/div[@class='row']"));
        }catch (InterruptedException e){
            e.printStackTrace();
        }
            int count = 0;
            for (int i = 0; i < rows.size(); i++) {
                WebElement link = rows.get(i);
                if (link.getText().contains(firstname)) {
                    count++;
                } else {
                    continue;
                }
            }
            if (count >= 1) {
                return true;
            } else {
                return false;
            }

    }
}
