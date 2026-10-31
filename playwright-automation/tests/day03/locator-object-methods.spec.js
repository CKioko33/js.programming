import { test } from "@playwright/test";

//create beforeEach to navigate to https://the-internet-5chk.onrender.com/
test.beforeEach(async({page}) => {
    await page.goto("https://the-internet-5chk.onrender.com/")
});

test.describe("Test Group", () => {

    test("Check(): Checks the radio button and check boxes if they haven't been checked yet", async ({ page }) => {
        //let checkboxesLink = page.locator("text ='Checkboxes'");
        let checkboxesLink = page.getByText("Checkboxes");
        await checkboxesLink.click();
        
        //Pause for 3 secs
        //await page.waitForTimeout(3000);

        let checkbox1 = page.locator("//input[@id='box1']");
        await checkbox1.check();

        //await page.waitForTimeout(3000);

     });

    test("Uncheck method: Unchecks the radio button and check boxes if they haven't been unchecked yet", async ({ page }) => {
        //let checkboxesLink = page.locator("text ='Checkboxes'");
        let checkboxesLink = page.getByText("Checkboxes");
        await checkboxesLink.click();

        let checkbox2 = page.locator("input[id='box2']");
        //await page.waitForTimeout(3000);

        await checkbox2.uncheck();
        //await page.waitForTimeout(3000);
     });

    test("SelectOption(): Used for dropdown boxes with select tagname", async ({ page }) => { 
        let dropdownLink = page.getByText("Dropdown");
        await dropdownLink.click();

        //await page.waitForTimeout(3000);

        let simpleDropdown = page.locator("//select[@id='dropdown']");
        //await simpleDropdown.selectOption("1"); //Selecting by the value
        //await simpleDropdown.selectOption({label:"Option 1"});//Selecting by text value
        await simpleDropdown.selectOption({ index: 1 });//Selecting by index

        //await page.waitForTimeout(3000);

    });
});