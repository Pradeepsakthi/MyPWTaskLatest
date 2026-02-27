import { parse } from "csv-parse/sync";
import fs from 'fs'
import test from "@playwright/test";


const data:any[]=parse(fs.readFileSync("Data/Login.csv"),{
    columns:true,
    skipEmptyLines:true
})


for(let val of data){

test(`CSV File  ${val.testID}`,async({page})=>{ 
await page.goto("https://parabank.parasoft.com/parabank/index.htm")
await page.locator("//a[text() = 'Register']").click();
await page.locator("//input[@id = 'customer.firstName']").fill(val.firstname)
await page.locator("//input[@id = 'customer.lastName']").fill(val.lastname)
await page.locator("//input[@id = 'customer.address.city']").fill(val.city)
await page.locator("//input[@id = 'customer.address.state']").fill(val.state)
await page.waitForTimeout(3000)

  
})



}