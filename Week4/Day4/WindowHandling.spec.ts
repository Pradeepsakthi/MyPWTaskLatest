import test from '@playwright/test'

test("Window Handleing",async({page,context})=>{

await page.goto("https://www.amazon.in/")
const passValue=page.locator("#twotabsearchtextbox")
await passValue.fill("laptop")
await passValue.press("Enter")

//step 1-> create the promise for the new page
const parentWindow=context.waitForEvent('page')

//step 2-> click on the element which will open the new page
await page.locator("//span[contains(text(),'Dell 15')]").first().click()

//step 3-> get the new page
const childwindow=await parentWindow

const price =await childwindow.locator("//span[@class='a-price-whole']").nth(5).innerText()

console.log(price)

//child window is closed
childwindow.close()
//whether control will come back to parent window or not
await page.locator("//a[text()='Bestsellers']").click()




})