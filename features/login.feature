Feature: To test the login functionality of an application

Background:
  Given the user is on login page

Scenario: The one where user logs in using valid credentials
  When the user enters username as "user1" and password as "web_dev"
  And clicks on login button
  Then the user is logged in and displays a message "You have successfully logged in"

Scenario Outline: The one where user logs in using invalid credentials
  When the user enters username as "<username>" and password as "<password>"
  And clicks on login button
  Then the user must remain on login page displaying a message "<errorMessage>"
Examples:
  | username  | password              | errorMessage       |
  | james     |                       | Please enter password  |
  |           | web_dev               | Please enter username  |  

