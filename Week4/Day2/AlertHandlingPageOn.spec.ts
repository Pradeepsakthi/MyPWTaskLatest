import test from '@playwright/test'

test("Handle alert with Page.On",async({page})=>{

page.on('dialog', alertType =>{

const type = alertType.type()
console.log(type)

const msg = alertType.message()
console.log(msg)
//action
if(type==='alert')
{
    alertType.accept()
} else if (type ==='confirm')
{
   alertType.accept()
} else if(type ==='prompt')
{
    alertType.dismiss()
}
})
await page.goto("https://leafground.com/alert.xhtml")
await page.locator("//span[text()= 'Show']").first().click()
await page.waitForTimeout(4000)
await page.locator("//span[text()= 'Show']").nth(1).click()
await page.waitForTimeout(4000)
})
