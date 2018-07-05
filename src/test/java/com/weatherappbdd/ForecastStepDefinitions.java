package com.weatherappbdd;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

import static junit.framework.TestCase.fail;
import static org.junit.Assert.assertEquals;

public class ForecastStepDefinitions {

    private StringBuilder verificationErrors = new StringBuilder();

    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "P:\\Xley group\\BDD\\src\\test\\resources\\chromedriver.exe");
        //The above would normally be set to an global env property for portability
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        //The below time out would usually be customised to be wait for an expected condition within the base class
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @Given("^when I land on the homepage$")
    public void when_I_land_on_the_homepage() {
        // Write code here that turns the phrase above into concrete actions
        driver.get("https://weather-acceptance.herokuapp.com/");
        try {
            assertEquals("5 Weather Forecast", driver.getTitle());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }
    //In some of scenarios below I show how xpath and cssSelector can be utilised, but I opted for cssSelector as I believe it is more stable

    @When("^i click on Tuesday to see the weather$")
    public void i_click_on_Tuesday_to_see_the_weather() {
//        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[1]/span[1]/span[1]")).click();
        driver.findElement(By.cssSelector("#root > div > div:nth-child(2) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Tue", driver.findElement(By.cssSelector("#root > div > div:nth-child(2) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }

    @Then("^i click on the Tuesday again to hide the weather$")
    public void i_click_on_the_Tuesday_again_to_hide_the_weather() {
//        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[1]/span[1]/span[1]")).click();
        driver.findElement(By.cssSelector("#root > div > div:nth-child(2) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Tue", driver.findElement(By.cssSelector("#root > div > div:nth-child(2) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }

    @When("^i click on Wednesday to see the weather$")
    public void i_click_on_Wednesday_to_see_the_weather() {
        driver.findElement(By.cssSelector("#root > div > div:nth-child(3) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Wed", driver.findElement(By.cssSelector("#root > div > div:nth-child(3) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }

    @Then("^i click on the Wednesday again to hide the weather$")
    public void i_click_on_the_Wednesday_again_to_hide_the_weather() {
        driver.findElement(By.cssSelector("#root > div > div:nth-child(3) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Wed", driver.findElement(By.cssSelector("#root > div > div:nth-child(3) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }

    @When("^i click on Thursday to see the weather$")
    public void i_click_on_Thursday_to_see_the_weather() {
        driver.findElement(By.cssSelector("#root > div > div:nth-child(4) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Thu", driver.findElement(By.cssSelector("#root > div > div:nth-child(4) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }

    @Then("^i click on the Thursday again to hide the weather$")
    public void i_click_on_the_Thursday_again_to_hide_the_weather() {
        driver.findElement(By.cssSelector("#root > div > div:nth-child(4) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Thu", driver.findElement(By.cssSelector("#root > div > div:nth-child(4) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }

    @When("^i click on Friday to see the weather$")
    public void i_click_on_Friday_to_see_the_weather() {
        driver.findElement(By.cssSelector("#root > div > div:nth-child(5) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Fri", driver.findElement(By.cssSelector("#root > div > div:nth-child(5) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }

    @Then("^i click on the Friday again to hide the weather$")
    public void i_click_on_the_Friday_again_to_hide_the_weather() {
        driver.findElement(By.cssSelector("#root > div > div:nth-child(5) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Fri", driver.findElement(By.cssSelector("#root > div > div:nth-child(5) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }

    @When("^i click on Saturday to see the weather$")
    public void i_click_on_Saturday_to_see_the_weather() {
        driver.findElement(By.cssSelector("#root > div > div:nth-child(6) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Sat", driver.findElement(By.cssSelector("#root > div > div:nth-child(6) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }

    @Then("^i click on the Saturday again to hide the weather$")
    public void i_click_on_the_Saturday_again_to_hide_the_weather() {
        driver.findElement(By.cssSelector("#root > div > div:nth-child(6) > div.summary > span:nth-child(1) > span.name")).click();
        try {
            assertEquals("Sat", driver.findElement(By.cssSelector("#root > div > div:nth-child(6) > div.summary > span:nth-child(1) > span.name")).getText());
        } catch (Error e) {
            verificationErrors.append(e.toString());
        }
    }



    @After
    public void tearDown () {
        driver.quit();
        String verificationErrorString = verificationErrors.toString();
        if (!"".equals(verificationErrorString)) {
            fail(verificationErrorString);
        }
    }

}

