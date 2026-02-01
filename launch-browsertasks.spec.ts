import test, { chromium} from "@playwright/test"

test("Launching the URL" , async()=> {
    //launching the browser
    //run in the headless 
const browser = await chromium.launch({channel:'msedge',headless:false})


    //Edge 
const context1 = await browser.newContext()
const page1 = await context1.newPage()
const page2 = await context1.newPage()

   //Navigate
await page1.goto("https://www.redbus.in")
await page2.goto("https://www.flipkart.com")

console.log("The title of the page is "+await page1.title())
console.log("The title of the page is "+await page2.title())
console.log("The Current URL of the page is "+page1.url())
console.log("The Current URL of the page is "+page2.url())
})