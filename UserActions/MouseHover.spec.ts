import test from '@playwright/test';

test("mouse hover",async({page})=>{
await page.goto("https://www.snapdeal.com/")
await page.locator("//div[text()='Home & Kitchen']").hover()
await page.waitForTimeout(2000)
})
