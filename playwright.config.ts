// Learn the base configuration from the official site;
import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.PORT || 3003;

// The base URL you can use in the test code.
// If you do page.goto(/), then, it will go to this baseURL.
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  timeout: 30 * 1000,

  testDir: "e2e",
  outputDir: "e2e-results/",

  // retry when the test fails.
  retries: 2,

  // Run the web(in dev mode or whatever) before testing.
  webServer: {
    // Important: When you run test, the PlayWright will run this command
    // This command will run the site, so the code can be run on.
    command: "npm run dev -- --port " + PORT,
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL,
  },

  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
