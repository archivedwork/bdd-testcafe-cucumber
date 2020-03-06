@google
Feature: Searching for TestCafe by Google
  I want to find TestCafe repository by google search

  Scenario: Searching for TestCafe by Google
    Given I am open Google's search page
    When I am typing my search request "TestCafe" on Google
    Then I am pressing "enter" key on Google
    Then I should see that the first Google's result is "A node.js tool to automate end-to-end web testing | TestCafe"
