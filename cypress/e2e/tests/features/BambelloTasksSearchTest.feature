@demouitest
Feature: Search Tasks

    This is a feature test file for search result functionality

Scenario Outline: Add new <newTaskName> task
    Given user opens the bambello tasks site
    And user adds a task with the name "<newTaskName>"
Examples:
    | newTaskName |
    | Done4       |
    
Scenario Outline: Search cards by value <SearchValues>
    Given user opens the bambello tasks site
    When user clicks on show menu button
    Then Menu should be open
    When user open search cards option
    Then clear search box
    Then set value in search box "<SearchValues>"
    Then user close the menu
    Then search results is "<searchResults>"
    Then user clears search results

Examples:
    | SearchValues | searchResults    |
    | Done1        | 0 search results |
    | Done4        | 1 search results |
    | Done2        | 0 search results |


Scenario Outline: Remove task by value <taskName>
    Given user opens the bambello tasks site
    And user opens card "<taskName>"
    And user achives card
    And user close card
Examples:
    | taskName |
    | Done4    |

Scenario Outline: Search cards by value <SearchValues>
    Given user opens the bambello tasks site
    When user clicks on show menu button
    Then Menu should be open
    When user open search cards option
    Then clear search box
    Then set value in search box "<SearchValues>"
    Then user close the menu
    Then search results is "<searchResults>"
    Then user clears search results

Examples:
    | SearchValues  | searchResults    |
    | Done4         | 0 search results |
    | Done2         | 0 search results |
    | Done3         | 0 search results |
    | Done1         | 0 search results |





    