import { test, expect } from '@playwright/test';
test.use({ headless: false });
test('Fill out form on Demo QA', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.fill('#firstName', 'Vlad');
  await page.waitForTimeout(1000);
  await page.fill('#lastName', 'Prangati');
  await page.waitForTimeout(1000);
  await page.fill('#userEmail', 'vladprangati@gmail.com');
  await page.waitForTimeout(1000);
  await page.click('label[for="gender-radio-1"]');
  await page.waitForTimeout(1000);
  await page.fill('#userNumber', '37312312312');
  await page.waitForTimeout(1000);
  await page.click('#dateOfBirthInput');
  await page.waitForTimeout(1000);
  await page.selectOption('.react-datepicker__month-select', '9');
  await page.selectOption('.react-datepicker__year-select', '2005');
  await page.click('.react-datepicker__day--020');
  await page.waitForTimeout(1000);
  await page.fill('#subjectsInput', 'Math');
  await page.press('#subjectsInput', 'Enter');
  await page.waitForTimeout(1000);
  await page.click('label[for="hobbies-checkbox-1"]');
  await page.waitForTimeout(1000);
  await page.fill('#currentAddress', 'Chisinau, Moldova');
  await page.waitForTimeout(1000);
  await page.click('#state');
  await page.click('text=Haryana');

  await page.waitForTimeout(1000);
  await page.waitForFunction(() => {
    const city = document.querySelector('#city');
    return city && window.getComputedStyle(city).pointerEvents !== 'none';
  });

  await page.click('#city');
  await page.waitForTimeout(1000);
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  await page.click('#submit');

  const modal = await page.locator('.modal-content');
  await expect(modal).toBeVisible();
});
