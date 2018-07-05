Feature: Show hide weather

  Scenario Outline: Click on each day should present the user with an exploded view of the weather in relation to the time of day

    Given when I land on the homepage
    When i click on <Day> to see the weather
    Then i click on the <Day Hide> again to hide the weather

    Examples:

    | Day        | Day Hide   |
    | Tuesday    | Tuesday    |
    | Tuesday    | Tuesday    |
    | Wednesday  | Wednesday  |
    | Wednesday  | Wednesday  |
    | Thursday   | Thursday   |
    | Thursday   | Thursday   |
    | Friday     | Friday     |
    | Friday     | Friday     |
    | Saturday   | Saturday   |
    | Saturday   | Saturday   |
