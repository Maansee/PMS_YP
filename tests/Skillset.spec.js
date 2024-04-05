const { test } = require('@playwright/test');
import {LoginFn, LogoutFn} from "./utils/Functions"

test.only('Skillset Form', async ({ page }) => {
    // const LoginFn = async (email, password) => {
    //     await page.goto("https://pms.yodaplus.net/login");
    //     await page.locator("#Email_id").fill(email);
    //     await page.locator("#filled-password-input").fill(password);
    //     await page.locator("#login").click();
    //}

    await LoginFn(page,"srushti@yodaplus.com", "Test123@");
    await page.locator(".ProfileIcon").click();
    await page.getByText("Profile").click();
    await page.getByText("All Skills").click();

    const notification = await page.locator('#notistack-snackbar');
    console.log(await notification.textContent());
    await page.getByText("Add Skills").click();
    await page.locator("#add-skill-button").click();
    await page.locator("#skill-name").fill("QA 9");
    await page.locator("#question-0").fill("Automation Testing");
    await page.locator("#add-question-button").click();
    await page.locator("#question-1").fill("Regression Testing");
    await page.locator("#add-question-button").click();
    await page.locator("#question-2").fill("Functional Testing");
    await page.locator("#add-skill-button").click();
    await page.waitForTimeout(5000);

    await LogoutFn(page);

    //employee login
    await LoginFn(page,"divit@yodaplus.com", "Test123@");
    await page.locator(".ProfileIcon").click();
    await page.locator("#Profile").click();
    await page.locator("#simple-tab-1").click();
    await page.getByText("Automation Testing")
    await page.locator("#chevron-icon-0").click();
    await page.locator('#rating-box-15-0 label').filter({ hasText: '3 Stars' }).click();
    await page.waitForTimeout(10000); 
    await page.locator('#rating-box-19-0 label').filter({ hasText: '4 Stars' }).click();
    await page.locator('#rating-box-19-1 label').filter({ hasText: '4 Stars' }).click();
    await page.locator('#rating-box-19-2 label').filter({ hasText: '5 Stars' }).click();
    await page.locator('#rating-box-19-3 label').filter({ hasText: '5 Stars' }).click();

    //await page.locator('#rating-box-18-1 label').filter({ hasText: '4 Stars' }).click();
    //await page.locator('#rating-box-18-2 label').filter({ hasText: '5 Stars' }).click();
    //await page.locator('#rating-box-18-3 label').filter({ hasText: '3 Stars' }).click();
    //await page.locator('#rating-box-18-4 label').filter({ hasText: '4 Stars' }).click();
    //await page.locator('#rating-box-18-5 label').filter({ hasText: '2 Stars' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

    

    });
