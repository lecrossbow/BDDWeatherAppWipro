$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("showHideWeather.feature");
formatter.feature({
  "line": 1,
  "name": "Show hide weather",
  "description": "",
  "id": "show-hide-weather",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on \u003cDay\u003e to see the weather",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the \u003cDay Hide\u003e again to hide the weather",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;",
  "rows": [
    {
      "cells": [
        "Day",
        "Day Hide"
      ],
      "line": 11,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;1"
    },
    {
      "cells": [
        "Tuesday",
        "Tuesday"
      ],
      "line": 12,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;2"
    },
    {
      "cells": [
        "Tuesday",
        "Tuesday"
      ],
      "line": 13,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;3"
    },
    {
      "cells": [
        "Wednesday",
        "Wednesday"
      ],
      "line": 14,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;4"
    },
    {
      "cells": [
        "Wednesday",
        "Wednesday"
      ],
      "line": 15,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;5"
    },
    {
      "cells": [
        "Thursday",
        "Thursday"
      ],
      "line": 16,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;6"
    },
    {
      "cells": [
        "Thursday",
        "Thursday"
      ],
      "line": 17,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;7"
    },
    {
      "cells": [
        "Friday",
        "Friday"
      ],
      "line": 18,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;8"
    },
    {
      "cells": [
        "Friday",
        "Friday"
      ],
      "line": 19,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;9"
    },
    {
      "cells": [
        "Saturday",
        "Saturday"
      ],
      "line": 20,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;10"
    },
    {
      "cells": [
        "Saturday",
        "Saturday"
      ],
      "line": 21,
      "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3929004563,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Tuesday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Tuesday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 974032561,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Tuesday_to_see_the_weather()"
});
formatter.result({
  "duration": 158120080,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Tuesday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 110030021,
  "status": "passed"
});
formatter.after({
  "duration": 712567072,
  "status": "passed"
});
formatter.before({
  "duration": 3146753377,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Tuesday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Tuesday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 1076903014,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Tuesday_to_see_the_weather()"
});
formatter.result({
  "duration": 148243900,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Tuesday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 116570973,
  "status": "passed"
});
formatter.after({
  "duration": 693427606,
  "status": "passed"
});
formatter.before({
  "duration": 3138521621,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Wednesday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Wednesday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 1204116360,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Wednesday_to_see_the_weather()"
});
formatter.result({
  "duration": 144380407,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Wednesday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 106820985,
  "status": "passed"
});
formatter.after({
  "duration": 713193519,
  "status": "passed"
});
formatter.before({
  "duration": 3139849207,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Wednesday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Wednesday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 837920051,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Wednesday_to_see_the_weather()"
});
formatter.result({
  "duration": 147449397,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Wednesday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 109378576,
  "status": "passed"
});
formatter.after({
  "duration": 712576108,
  "status": "passed"
});
formatter.before({
  "duration": 3155006819,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Thursday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Thursday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 1241520074,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Thursday_to_see_the_weather()"
});
formatter.result({
  "duration": 139904925,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Thursday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 114337749,
  "status": "passed"
});
formatter.after({
  "duration": 697115814,
  "status": "passed"
});
formatter.before({
  "duration": 3136430251,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Thursday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Thursday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 1204115456,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Thursday_to_see_the_weather()"
});
formatter.result({
  "duration": 145171598,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Thursday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 113622454,
  "status": "passed"
});
formatter.after({
  "duration": 710379627,
  "status": "passed"
});
formatter.before({
  "duration": 3143610299,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Friday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Friday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 1188704857,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Friday_to_see_the_weather()"
});
formatter.result({
  "duration": 146447985,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Friday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 97908570,
  "status": "passed"
});
formatter.after({
  "duration": 708832483,
  "status": "passed"
});
formatter.before({
  "duration": 3138968567,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Friday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Friday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 835495279,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Friday_to_see_the_weather()"
});
formatter.result({
  "duration": 143223890,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Friday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 109721917,
  "status": "passed"
});
formatter.after({
  "duration": 697484152,
  "status": "passed"
});
formatter.before({
  "duration": 3149293199,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Saturday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Saturday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 833740926,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Saturday_to_see_the_weather()"
});
formatter.result({
  "duration": 141705357,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Saturday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 111653965,
  "status": "passed"
});
formatter.after({
  "duration": 699218929,
  "status": "passed"
});
formatter.before({
  "duration": 3143912981,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Click on each day should present the user with an exploded view of the weather in relation to the time of day",
  "description": "",
  "id": "show-hide-weather;click-on-each-day-should-present-the-user-with-an-exploded-view-of-the-weather-in-relation-to-the-time-of-day;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "when I land on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i click on Saturday to see the weather",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i click on the Saturday again to hide the weather",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ForecastStepDefinitions.when_I_land_on_the_homepage()"
});
formatter.result({
  "duration": 1185899096,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_Saturday_to_see_the_weather()"
});
formatter.result({
  "duration": 137540689,
  "status": "passed"
});
formatter.match({
  "location": "ForecastStepDefinitions.i_click_on_the_Saturday_again_to_hide_the_weather()"
});
formatter.result({
  "duration": 106119545,
  "status": "passed"
});
formatter.after({
  "duration": 702331287,
  "status": "passed"
});
});