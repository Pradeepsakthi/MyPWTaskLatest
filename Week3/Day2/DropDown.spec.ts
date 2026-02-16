import test from '@playwright/test'

test("Select Tag",async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml")
    await page.selectOption(".ui-selectonemenu",{label:'Playwright'})
    //await page.selectOption("",{index:})
   // await page.selectOption("",{value:''})

   //non select tag
   await page.locator(".ui-selectonemenu-label.ui-inputfield.ui-corner-all").first().click()
   await page.locator("li[class='ui-selectonemenu-item ui-selectonemenu-list-item ui-corner-all']").nth(2).click()

//await page.locator("//span[text()='Book']").first().click()

})