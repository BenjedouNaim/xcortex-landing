import { defineConfig, devices } from '@playwright/test'

// `--project=legacy` must not wait for a Next build, and vice versa.
const picked = process.argv
  .find((a) => a.startsWith('--project='))
  ?.slice('--project='.length)
const wants = (name: string) => !picked || picked === name

const legacyServer = {
  command: 'pnpm serve:legacy',
  url: 'http://localhost:4100',
  reuseExistingServer: true,
}
const nextServer = {
  command: 'pnpm build && pnpm start',
  url: 'http://localhost:3000',
  reuseExistingServer: true,
  timeout: 600_000,
}
// Behavior tests run against `next dev` on 3001, so they never touch the production build on 3000.
const behaviorServer = {
  command: 'pnpm dev --port 3001',
  url: 'http://localhost:3001',
  reuseExistingServer: true,
  timeout: 120_000,
}

export default defineConfig({
  testDir: './tests',
  // No project name in the path: `legacy` writes the baselines, `next` compares against the same files.
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  timeout: 90_000, // each test loads the page and walks it top to bottom, slow under load
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  expect: {
    timeout: 20_000,
    toHaveScreenshot: {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
      caret: 'hide',
    },
  },
  use: {
    // System Google Chrome: the bundled Chromium is not installed on this machine.
    // Remove `channel` and run `pnpm exec playwright install chromium` to use the bundled one (then re-capture baselines).
    ...devices['Desktop Chrome'],
    channel: 'chrome',
    reducedMotion: 'reduce',
  },
  projects: [
    {
      name: 'legacy',
      testIgnore: 'behavior.spec.ts',
      use: { baseURL: 'http://localhost:4100' },
    },
    {
      name: 'next',
      testIgnore: 'behavior.spec.ts',
      use: { baseURL: 'http://localhost:3000' },
    },
    {
      name: 'behavior',
      testMatch: 'behavior.spec.ts',
      // Real motion: the pill, smooth scroll and parallax only run without reduced motion.
      use: { baseURL: 'http://localhost:3001', reducedMotion: 'no-preference' },
    },
  ],
  webServer: [
    ...(wants('legacy') ? [legacyServer] : []),
    ...(wants('next') ? [nextServer] : []),
    ...(wants('behavior') ? [behaviorServer] : []),
  ],
})
