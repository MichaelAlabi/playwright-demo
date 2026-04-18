import { expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();
export class LoginPage {
  page: any;
  emailInput: any;
  passwordInput: any;
  loginButton: any;
  errorMessage: any;

  constructor(page: {
    getByTestId(arg0: string): any;
    locator(arg0: string): any;
    getByRole: (arg0: string, arg1: { name: string }) => any;
    getByText: (arg0: string) => {
      (): any;
      new (): any;
      nth: { (arg0: number): any; new (): any };
    };
  }) {
    this.page = page;

    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');

    this.loginButton = page.locator('[data-test="login-submit"]');
  }
  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/auth/login");
  }

  async login(email?: string, password?: string) {
    const user1_E2E_USERNAME = email ?? process.env.user1_E2E_USERNAME;
    const user1_E2E_PASSWORD = password ?? process.env.user1_E2E_PASSWORD;
    await this.emailInput.fill(user1_E2E_USERNAME);

    await this.passwordInput.fill(user1_E2E_PASSWORD);

    await this.loginButton.click();
  }
}
