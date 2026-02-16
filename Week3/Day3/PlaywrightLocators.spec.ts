import test from '@playwright/test'
test("Playwright Locators",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")

await page.getByRole('textbox',{name:'username'}).fill("DemoSalesManager")

await page.getByLabel("Password").fill("crmsfa")

//await page.getByAltText()

})