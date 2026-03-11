import { test, expect } from '@playwright/test';

test.describe('Flujo Básico de la Aplicación', () => {

    test('La página de inicio carga correctamente', async ({ page }) => {
        // Navigate to the base URL (which is defined in playwright.config.ts)
        await page.goto('/');

        // Check if the page has loaded by looking for an expected element.
        // For an Ionic app, we typically have a root ion-app.
        await expect(page.locator('ion-app')).toBeVisible();

        // Check if the title is somehow related to the app
        const title = await page.title();
        console.log(`Page title is: ${title}`);
    });

    test('La navegación hacia Login funciona o redirige', async ({ page }) => {
        await page.goto('/login');

        // En las versiones web o desktop, normalmente verás los botones de Google o el formulario
        // Aquí hacemos un aserto general de que la URL es correcta
        await expect(page).toHaveURL(/.*login/);
    });

});
