import test from '@playwright/test'

test("Using Page Fixture",async({page})=>{

    await page.goto("https://www.amazon.com")
    await page.waitForTimeout(4000)
})