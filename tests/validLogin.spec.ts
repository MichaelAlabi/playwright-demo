import { test } from "@playwright/test";
import { LoginPage } from "./login.js";
import dotenv from "dotenv";

test("verify that user can successfully sign in", async ({ page }) => {
  const loginPage = new LoginPage(page as any);
  await loginPage.goto();
  await loginPage.login(
    process.env.user1_E2E_USERNAME!,
    process.env.user1_E2E_PASSWORD!,
  );
  console.log("Login successful");
});
