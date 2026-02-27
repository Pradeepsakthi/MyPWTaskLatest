import test from "@playwright/test";

test("Storage State", async ({ page }) => {
  await page.goto("https://login.salesforce.com/?locale=in");
  await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
  await page.locator("#password").fill("TestLeaf@2025");
  await page.locator("#Login").click();

  //storage state ->accpect only json response
  await page.context().storageState({ path: "helper/SF_storageState.json" });
});
