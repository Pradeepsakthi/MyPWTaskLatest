import test from '@playwright/test';


test.only("Drag and Drop",async({page})=>{
// Navigate to the drag and drop page
await page.goto("https://www.leafground.com/drag.xhtml");
// Wait for draggable and droppable elements to be visible
const drag = page.locator("#form\\:drag");
const drop = page.locator("#form\\:drop");
await drag.waitFor({ state: "visible" });
await drop.waitFor({ state: "visible" });
// Perform drag and drop
await drag.dragTo(drop);
await page.waitForTimeout(2000);
})