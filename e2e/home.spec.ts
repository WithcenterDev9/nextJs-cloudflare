import test, { expect, Page } from "@playwright/test";

//  i want to make sure that before i go to testing. the 
//  url must be at home page 
test.beforeEach("init", async ({ page }) => {
    await page.goto("/");
});

//  i want to group this test because it is about navigation
//  for this one we can use test.describe

test.describe("Check if navigation navbar is working", () => {

    //  test for our navigation 1

    test("Calling navigation 1", async ({ page }) => {
        const linkOne = page.getByRole('link', { "name": "Page 1" });

        //  since this was clicked by playwright. we can 
        //  assume that this is on Page 1
        await linkOne.click();
        //  check if there is a "page1" path params
        await expect(page).toHaveURL(/.*page1/);

        //  check if "Page 1" is also visible to our middle screen
        await expect(page.getByRole("heading", { name: 'Page' })).toBeVisible();
    });

    test("Calling navigation 2", async ({ page }) => {
        const linkTwo = page.getByRole('link', { "name": "Page 2" });
        await linkTwo.click();
        await expect(page).toHaveURL(/.*page2/);
        await expect(page.getByRole("heading", { name: 'Page' })).toBeVisible();
    });


    test("Calling navigation 3", async ({ page }) => {
        const linkThree = page.getByRole('link', { "name": "Page 3" });
        await linkThree.click();
        await expect(page).toHaveURL(/.*page3/);
        await expect(page.getByRole("heading", { name: 'Page' })).toBeVisible();
    });

});

async function testNavigation(page: Page, pageNumber: string) {
    const link = page.getByRole('link', { "name": `Page ${pageNumber}` });
    await link.click();
    await expect(page).toHaveURL(/.*pageNumber/);

    await expect(page.getByRole("heading", { name: 'Page' })).toBeVisible();
}