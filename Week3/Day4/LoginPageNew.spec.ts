import test from '@playwright/test'

test("Using CSS",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")

await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
await page.waitForTimeout(3000)
//[name='value']

})