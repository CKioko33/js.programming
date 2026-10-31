import {test} from "@playwright/test";

//Method name title():Returns the title of the current page as a string
test('Getting the title of the page', async ({ page }) => { 

    await page.goto("https://the-internet-5chk.onrender.com/");
    
    //Pause for three seconds
    //await page.waitForTimeout(3000);

    let actualTitle = await page.title();

    console.log("actualTitle");

});

console.log("--------------------------------------------------------")

//Method name: goto(url): Navigate he browser to a specified URL
test('Getting the current url of the page', async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    let actualURL = page.url();
    console.log(actualURL);
});

console.log("--------------------------------------------------------")

//Method setViewPointSize(): Sets the size of the browser viewport to specified width and height values.

test('', async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");

    await page.waitForTimeout(3000);

    //Below size can also be configured in global configuration.
    //await page.setViewportSize({width:1850, height:1080});

    //await page.waitForTimeout(3000);

});
console.log("--------------------------------------------------------")



