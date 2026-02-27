import test from "@playwright/test"
import dotenv from 'dotenv'

//set path for  multiple env file

const file=process.env.envFileName||"LT_LoginQA"
dotenv.config({path:`Data/${file}.env`})


test(" Mul ENV File",async({page})=>{

    
    let url=process.env.LT_Url as string
    let user=process.env.LT_Username as string
    let pass=process.env.LT_Password as string

await page.goto(url)
await page.locator("#username").fill(user)
await page.locator("#password").fill(pass)
await page.locator(".decorativeSubmit").click()
await page.locator(`text='CRM/SFA'`).click()
    
})