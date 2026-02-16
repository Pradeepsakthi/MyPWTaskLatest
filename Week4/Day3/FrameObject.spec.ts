import test from "@playwright/test";

test("Handle Frame with object",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")

await page.frame({url:'https://www.leafground.com/default.xhtml'})?.locator("#Click").click()

//nested frame
await page.frame({name:'frame2'})?.locator("#Click").click()

})