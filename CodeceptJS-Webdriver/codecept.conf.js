const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: '*_test.js', //createAccountNewQAzando_test.js
  output: './output',
  name: 'Codecept-webdriver',
  helpers: {
    WebDriver: {
      url: 'https://automationpratice.com.br/', //OLD QAzando -> http://www.automationpractice.pl/index.php, NEW QAZANDO -> 
      browser: 'chrome',
      //waitForTimeout: 5000, //se o elemento testado nao estiver na tela, aguardar 5 sec
      desiredCapabilities: {
        chromeOptions: {
          args: ["--window-size=1920,1080 "] //,"--headless" - testar no modo headless (sem abrir o browser)

        }
      }
    }
  },

  
  plugins: {

  mocha: {
    reporterOptions: {
        reportDir: './output'
    }
  },
  
      allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
  

   stepByStepReport: {
     enabled: false,
     deleteSuccessful: false,
     fullPageScreenshots: true,
     animateSlides: true,
     screenshotsForAllureReport: true
   }
},

  include: {
    I: './steps_file.js',
    home_page: "./pages/home_page.js",
    new_qazando_websitePage: "./pages/new_qazando_website.js",
  },
 
}