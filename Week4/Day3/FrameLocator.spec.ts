import test from "@playwright/test";

test("Handle Frame with locator",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")

//locator the frame first then perform action
//FrameLocator().locator().click()

await page.frameLocator("(//iframe)[1]").locator("#Click").click()

//nested Frame 
//->outterframe -> innerframe-> locator -> click

await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()
})