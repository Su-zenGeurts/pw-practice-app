import { expect } from '@playwright/test'
import { test } from '../test-options'

test('drag and drop with iframe', async ({page, globalsQaUrl}) => {
    await page.goto(globalsQaUrl)
    await page.locator(".fc-dialog-container").getByRole('button', { name: 'Consent' }).click() 

    // await page.locator('li', {hasText: "High Tatras 2"}).click()
    const frame = page.frameLocator('[rel-title="Photo Manager"] iframe')
    await frame.locator('li', {hasText: "High Tatras 2"}).dragTo(frame.locator('#trash'))


    //more precise control
    await frame.locator('li', {hasText: "High Tatras 4"}).hover()
    await page.mouse.down()
    await frame.locator('#trash').hover()
    await page.mouse.up()

    await expect(frame.locator('#trash li h5')).toHaveText(["High Tatras 2", "High Tatras 4"])
})