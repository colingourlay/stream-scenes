import { expect, test } from '@playwright/test';

test('index page has expected article', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('article')).toBeVisible();
});
