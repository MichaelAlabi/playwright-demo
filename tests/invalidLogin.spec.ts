import { test, expect} from "@playwright/test";
import { LoginPage } from "./login.js";
import dotenv from "dotenv";

test("validate that user can not login with invalid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page as any);
  await loginPage.goto();
  await loginPage.login(
    process.env.user2_E2E_USERNAME!,
    process.env.user2_E2E_PASSWORD!,
  );
  await expect(page.getByText("invalid email or password")).toBeVisible();
});
