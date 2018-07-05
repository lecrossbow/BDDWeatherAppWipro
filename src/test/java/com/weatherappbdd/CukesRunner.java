package com.weatherappbdd;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features={"src/test/resources"},
        format = {  "progress", "html:target/Results",
        "json:target/Results/cucumber.json"}

)

public class CukesRunner {}

