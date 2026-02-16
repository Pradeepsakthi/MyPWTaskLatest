import test from '@playwright/test';

test("Scroll to the element",async({page})=>{
//About Us
await page.goto("https://www.snapdeal.com/")
await page.locator("//a[text()='About Us']").scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)
})