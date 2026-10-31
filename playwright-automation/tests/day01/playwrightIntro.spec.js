//Test Function 

//const {test} = require("@playwright/test");//Import members from test library function

import { test } from "@playwright/test"; //We will use "Import keyword"

/*Test function can take 2 arguements in total:
 1. Descritpion
 2. async call back function contains the automation scripts.
 */
test("Simple google test", async ({ page }) => {
    //test codes
    await page.goto("https://google.com");

    await page.waitForTimeout(3000);
});




