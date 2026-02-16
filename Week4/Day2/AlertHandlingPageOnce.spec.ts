import test from '@playwright/test'

test("Handle alert with Page.Once",async({page})=>{

page.once('dialog', alertType =>{

const type = alertType.type()
console.log(type)

const msg = alertType.message()
console.log(msg)

alertType.accept()

})

await page.goto("https://leafground.com/alert.xhtml")
await page.locator("//span[text()= 'Show']").first().click()
await page.waitForTimeout(4000)
await page.locator("//span[text()= 'Show']").nth(1).click()
await page.waitForTimeout(4000)

})
