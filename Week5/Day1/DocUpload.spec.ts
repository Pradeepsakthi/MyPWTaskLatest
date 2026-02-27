import test from '@playwright/test'

test("Upload Document", async ({page}) => {

await page.goto("https://www.naukri.com/registration/createAccount")
await page.locator("//h2[contains(text(), 'experienced')]").click()
await page.locator("#resumeUpload").first().setInputFiles("Data/01-Primitive-Datatypes.pdf")
await page.waitForTimeout(3000)
})