import test from '@playwright/test'

test("Handle Frame with index",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")
//frame with index -> count 
//main page  will also consider as frame
const numberOfFrame=page.frames()
console.log(numberOfFrame.length)
//mP->0 ,f1->1,f2->2,f3->3,f4->4

//switch to frame with index
const frame1=numberOfFrame[1]
await frame1.locator("#Click").click()

await page.waitForTimeout(3000)

//nested frame -> using with index directly we can switch to nested frame
const frame4=numberOfFrame[4]
await frame4.locator("#Click").click()
await page.waitForTimeout(3000)


})