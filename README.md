# Matador Solutions Project

This is a basic JavaScript project with Cypress set up for end-to-end testing.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd matador-solutions
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running Tests

- To open the Cypress Test Runner:

  ```bash
  npm run cypress:open
  ```

- To run Cypress tests in headless mode (e.g., in CI):

  ```bash
  npm test
  ```

## Continuous Integration

This project uses GitHub Actions to automatically run Cypress tests on every push to the `main` branch. The workflow is defined in `.github/workflows/ci.yml`. 