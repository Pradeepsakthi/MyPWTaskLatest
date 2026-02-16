import test, { chromium } from '@playwright/test'
import { channel } from 'diagnostics_channel'

test("Load the Url",async()=>{

    //launching the browser
    //run in the headless 
    const browser= await chromium.launch({channel:'chrome',headless:false})
    //context -> window
    const context=await browser.newContext()
    //page
    const page= await context.newPage()
    const page1=await context.newPage()

   await page.goto("https://www.facebook.com")

   await page1.goto("https://www.amazon.in")

   await page.waitForTimeout(5000)
})


test("Load the Url1",async()=>{

    //launching the browser
    //run in the headless 
    const browser= await chromium.launch({channel:'chrome',headless:false})
    //context -> window
    const context=await browser.newContext()
    //page
    const page= await context.newPage()
    //const page1=await context.newPage()

   await page.goto("https://www.facebook.com")

   //await page1.goto("https://www.amazon.in")

   await page.waitForTimeout(5000)


})