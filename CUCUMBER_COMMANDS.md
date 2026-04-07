# Cypress BDD Cucumber Framework - Commands & Usage Guide

## 🚀 Quick Start Commands

### Run All Cucumber Tests
```bash
npm run cucumber
```

### Run Cucumber Tests in Chrome
```bash
npm run cucumber:chrome
```

### Run Cucumber Tests in Headed Mode (See Browser)
```bash
npm run cucumber:headed
```

### Open Cypress Test Runner
```bash
npm run openTests
```

---

## 📋 All Available Commands

### Standard Cypress Commands
```bash
# Open Cypress Test Runner (Interactive Mode)
npm run openTests

# Run all tests headlessly
npx cypress run

# Run tests in headed mode (visible browser)
npm run headedTests

# Run tests in Chrome browser
npm run chromeTest

# Run specific smoke test
npm run SmokeTest
```

### BDD Cucumber Commands
```bash
# Run all feature files
npm run cucumber

# Run all feature files in Chrome
npm run cucumber:chrome

# Run all feature files with visible browser
npm run cucumber:headed

# Run specific feature file
npx cypress run --spec "cypress/e2e/API Automation/APIRequest.feature"

# Run all features in a specific folder
npx cypress run --spec "cypress/e2e/automation_flow/*.feature"

# Run feature file in specific browser
npx cypress run --spec "cypress/e2e/API Automation/APIRequest.feature" --browser chrome

# Run feature file with headed mode
npx cypress run --spec "cypress/e2e/API Automation/APIRequest.feature" --headed
```

---

## 📁 Project Structure

```
cypress/
├── e2e/
│   ├── API Automation/
│   │   ├── APIRequest.feature      # Feature file (Gherkin scenarios)
│   │   ├── APIRequest.js           # Step definitions
│   │   └── APIRequest.cy.js        # Regular Cypress test
│   ├── automation_flow/
│   │   ├── login.feature           # Login scenarios
│   │   └── login.js                # Login step definitions
│   ├── Files_Operations/
│   └── fixture_usage/
├── fixtures/
└── support/
```

---

## ✍️ Writing BDD Tests

### 1. Create a Feature File (.feature)

Example: `cypress/e2e/sample.feature`
```gherkin
Feature: Sample Feature

  Scenario: Sample test scenario
    Given I am on the home page
    When I click on login button
    Then I should see login form
```

### 2. Create Step Definitions (.js)

Example: `cypress/e2e/sample.js`
```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the home page", () => {
  cy.visit("https://example.com");
});

When("I click on login button", () => {
  cy.get("#loginBtn").click();
});

Then("I should see login form", () => {
  cy.get("#loginForm").should("be.visible");
});
```

**Important:** The step definition file must have the same name as the feature file!
- Feature: `sample.feature`
- Steps: `sample.js`

---

## 🔤 Gherkin Syntax Guide

### Keywords

- **Feature**: High-level description of functionality
- **Scenario**: Specific test case
- **Scenario Outline**: Template for multiple test cases with examples
- **Background**: Steps that run before each scenario
- **Given**: Preconditions (setup)
- **When**: Actions (execution)
- **Then**: Expected results (assertions)
- **And/But**: Additional steps

### Parameters in Steps

```gherkin
# String parameter
When I enter username "admin"

# Number parameter
Then I should see 5 items

# In step definition
When("I enter username {string}", (username) => {
  cy.get("#username").type(username);
});

Then("I should see {int} items", (count) => {
  cy.get(".item").should("have.length", count);
});
```

### Scenario Outline with Examples

```gherkin
Scenario Outline: Test multiple inputs
  When I enter "<username>" and "<password>"
  Then I should see "<message>"

  Examples:
    | username | password | message         |
    | admin    | admin123 | Welcome Admin   |
    | user     | user123  | Welcome User    |
```

---

## 🎯 Example Scenarios Included

### 1. API Testing (APIRequest.feature)
- GET request validation
- Response status verification
- Response body assertions
- Header verification
- Response time validation

### 2. Login Testing (login.feature)
- Background steps
- Scenario Outline with data tables
- Environment variable usage
- Form validation

---

## ⚙️ Configuration

### cypress.config.js
```javascript
- Cucumber preprocessor configured
- Spec pattern includes both .cy.js and .feature files
- ESBuild bundler setup
```

### package.json
```json
"cypress-cucumber-preprocessor": {
  "stepDefinitions": "cypress/e2e/**/[filepath]*.{js,ts}",
  "filterSpecs": true,
  "omitFiltered": true
}
```

---

## 💡 Tips & Best Practices

1. **File Naming**: Feature file and step definition file must have the same name
   - ✅ `login.feature` + `login.js`
   - ❌ `login.feature` + `loginSteps.js`

2. **Keep Scenarios Independent**: Each scenario should be able to run independently

3. **Use Background**: For common setup steps across scenarios

4. **Descriptive Names**: Use clear, business-readable scenario names

5. **Reusable Steps**: Write generic step definitions that can be reused

6. **One Feature = One File**: Don't mix multiple features in one file

7. **Parameterize Steps**: Use parameters instead of hardcoding values

---

## 🐛 Troubleshooting

### Tests not running?
```bash
# Verify installation
npm list @badeball/cypress-cucumber-preprocessor
npm list @bahmutov/cypress-esbuild-preprocessor

# Clear cache and reinstall
npm cache clean --force
npm install
```

### Step definitions not found?
- Check file names match (feature and step definition)
- Verify file is in correct folder structure
- Check import statement uses correct package

### Syntax errors in feature files?
- Ensure proper indentation (2 spaces recommended)
- Check keyword spelling (Feature, Scenario, Given, When, Then)
- Verify Examples table alignment

---

## 📦 Installed Packages

- `@badeball/cypress-cucumber-preprocessor` - Cucumber preprocessor
- `@bahmutov/cypress-esbuild-preprocessor` - Fast bundler
- `cypress` - E2E testing framework

---

## 🔗 Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Cucumber Gherkin Syntax](https://cucumber.io/docs/gherkin/)
- [Badeball Preprocessor Docs](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Cypress BDD Best Practices](https://docs.cypress.io/guides/references/best-practices)

---

## 🎓 Next Steps

1. Run the sample tests: `npm run cucumber`
2. Explore the sample feature files in `cypress/e2e/`
3. Create your own feature files based on examples
4. Write corresponding step definitions
5. Run and watch your BDD tests in action!

Happy Testing! 🚀
