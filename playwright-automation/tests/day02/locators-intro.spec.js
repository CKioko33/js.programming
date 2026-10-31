import {test} from "@playwright/test";

test("Simple google test", async ({page}) => {

    await page.goto("https://google.com");

    await page.waitForTimeout(3000);
    
    //Locator method is recommended but there are other ways 
    let searchBox = page.locator("//textarea[@Class ='gLFyf']");

    await searchBox.fill("CYDEO");

    await page.waitForTimeout(3000); 

    await searchBox.press("Enter");

    await page.waitForTimeout(3000);
   
});

/*
<textarea jsname="yZiJbe" class="gLFyf" 
aria-controls="Alh6id" 
aria-owns="Alh6id" autofocus="" maxlength="2048" 
aria-label="Search" placeholder="" aria-autocomplete="both" 
aria-expanded="false" aria-haspopup="false" autocapitalize="off" 
autocomplete="off" autocorrect="off" id="ti6dpd" name="q" 
role="combobox" rows="1" spellcheck="false" 
data-ved="2ahUKEwj3w6KI5eKXAxULrokEHUGfAq4Q39UDegQIABAR"></textarea>
*/

//textarea[@Class ="gLFyf"]