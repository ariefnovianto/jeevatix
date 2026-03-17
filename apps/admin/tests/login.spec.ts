import { test, expect } from '@playwright/test';

test('Halaman utama menampilkan form login admin', async ({ page }) => {
  // Buka halaman beranda admin
  await page.goto('/');

  // Memastikan rendering blok Card UI bawaan dari Shadcn berjalan mulus
  await expect(page.locator('text=Admin Jeevatix')).toBeVisible();
  
  // Memastikan bahwa kolom masukan form tersedia
  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator('input[type="password"]')).toBeVisible();

  // Memastikan tombol masuk ter-render
  await expect(page.locator('button:has-text("Masuk")')).toBeVisible();
});
