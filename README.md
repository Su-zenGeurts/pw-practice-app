# Playwright Web Automation Testing
> Udemy course: [Playwright - Zero to hero](https://www.udemy.com/course/playwright-from-zero-to-hero/learn/lecture/39699132#overview)

> Start code: [pw-practice-app](https://github.com/bondar-artem/pw-practice-app)

> Demo code: [demo-pw-practice-app](https://github.com/bondar-artem/demo-pw-practice-app)

### Prerequisites
* [NodeJS LTS](https://nodejs.org/en)
* [Visual studio code](https://code.visualstudio.com/) &rarr; [Playwright Test for VSCode](https://playwright.dev/docs/getting-started-vscode)

### Sections
* Section 4: Interaction with Web Elements
* Section 5: UI Components 
* Section 6: Page Object Model

### Run application
###### Install packages
```
npm i --force
```

###### Run server
```
npm start
```

### Run tests
###### Run tests headless
```
npx playwright test
```

###### Run tests headed
```
npx playwright test --headed
```

###### Check test report
```
npx playwright show-report
```

###### Execute tests with UI mode
```
npx playwright test --ui
```

### .gitignore
In reality it is best to leave the user in `.env` folder local

### Visual testing
> When asserting with screenshots, tests need to be run 2 times. First time is to create a baseline, second one is to compare.