Feature: Login feature

    As a user I want to login to app

    Background: Open browser
        Given I open the url

    @smoke @qa @staging
    Scenario: check valid login
        When I enter username
        And I enter password
        And I click login
        Then I should see dashboard
        And I capture screenshot

    @smoke
    Scenario: check login with data args
        When I type username as "Admin"
        And I type password as "admin123"
        And I click login
        Then I should see "Dashboard"

    @smoke
    Scenario Outline: check login with diff sets of data
        When I type username as "<username>"
        And I type password as "<password>"
        And I click login
        Then I should see textlabel "<message>"

        Examples:
            | username | password | message             |
            | Admin    | admin123 | Dashboard           |
            | Admin    | admin124 | Invalid credentials |
            | Admin123 | admin123 | Invalid credentials |
            | Admin    | 12233    | Invalid credentials |


# @focus @smoke
# Scenario: check datatable
#     When I enter username and password
#         | username | password |
#         | Admin    | admin123 |
#     Then I should see textlabel "Dashboard"