Feature: API Testing with BDD

  Scenario: Verify GET request to fetch books by author
    Given I have the books API endpoint
    When I send a GET request with author name "shetty"
    Then the response status code should be 200
    And the response body should contain book details
    And the response time should be less than 2000 milliseconds

  Scenario: Verify API response headers
    Given I have the books API endpoint
    When I send a GET request with author name "shetty"
    Then the response should have "content-type" header with "application/json"
    And the response should have "server" header
