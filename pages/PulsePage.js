const { expect} = require('@playwright/test');

export class PulsePage{
    
    page;
    constructor(page){
        this.page = page;
    }
    async visit() {
        await this.page.goto("https://www.gentwo.com/pulse/");
    }

    async search(keyword){

        await this.page.locator('//span/button[1]').click();
        await this.page.getByPlaceholder("Search in Pulse").fill(keyword);
        await expect(this.page.getByText('results for "'+keyword+'" in Pulse')).toBeVisible();
        await expect(this.page.locator('//section/div/a/article[1]')).toBeVisible();
    }
}