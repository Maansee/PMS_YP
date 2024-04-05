export const LoginFn = async (page, email, password) => {
    await page.goto("https://pms.yodaplus.net/login");
    await page.locator("#Email_id").fill(email);
    await page.locator("#filled-password-input").fill(password);
    await page.locator("#login").click();
}

export const LogoutFn = async(page) => {
    await page.locator(".ProfileIcon").click();
    await page.getByText("Logout").click();
    await page.waitForTimeout(7000);
}