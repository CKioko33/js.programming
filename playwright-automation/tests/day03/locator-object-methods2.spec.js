import { test } from "@playwright/test";

//create beforeEach to navigate to https://the-internet-5chk.onrender.com/
test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/")
});

test.describe("Test Group", () => {
    test("innerText(): retrieves the visible text", async ({page}) =>{
        let headerElement = page.locator("span[class='h1y']");
        let actualText = await headerElement.innerText();
        console.log(actualText);

    });

    test("inputValue(): only works with <input>, <textarea>, <select>,retrieves the input value", async ({page}) => {
        let inputsLink = page.getByText("Inputs");
        await inputsLink.click();

        let inputBox = page.locator("//input[@type='number']");

        await page.waitForTimeout(3000);

        await inputBox.fill('1234');

        await page.waitForTimeout(3000);

        let actaulInput = await inputBox.inputValue();
        console.log(actaulInput);

        await page.waitForTimeout(3000);



     });

    test("getAttributes(): Retrieves the attribute value ", async ({page}) => {
      let abTestingLink = page.locator("text='A/B Testing'");  
      let hrefLink = await abTestingLink.getAttribute("href");
      console.log(hrefLink);

    await page.waitForTimeout(3000);

     });
});