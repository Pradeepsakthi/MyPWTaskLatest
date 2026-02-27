import test from '@playwright/test'

import logData from '../../../Data/LT_Login.json'


for(let login of logData){
test(`Json Param ${login.TestID}`, async ({page}) => {
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill(login.Username)
await page.locator("#password").fill(login.Password)
await page.locator("#Login").click()
await page.waitForTimeout(3000)

})
}
