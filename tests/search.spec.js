const { test, chromium } = require('@playwright/test');
const { PulsePage } = require('../pages/PulsePage');

test("Should be able to navigate to Pulse", async ({ page }) =>{

    const pulsePage = new PulsePage(page);
    await pulsePage.visit();
    await pulsePage.search("g");
    await page.screenshot({ path: 'screenshot.png' });
});