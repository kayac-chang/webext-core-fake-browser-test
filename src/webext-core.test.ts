import browser from "webextension-polyfill";
import { fakeBrowser } from "@webext-core/fake-browser";
import { localExtStorage } from "@webext-core/storage";
import { vi } from "vitest";

// Normally, the function being tested would be in a different file
function isXyzEnabled(): Promise<boolean> {
  return localExtStorage.getItem("xyz");
}

// Enable the global mock
vi.mock("webextension-polyfill");

describe("isXyzEnabled", () => {
  beforeEach(() => {
    // Reset the in-memory state before every test
    fakeBrowser.reset();
  });

  it("should return true when enabled", async () => {
    const expected = true;
    // Use either browser or fakeBrowser to setup your test case
    await browser.storage.local.set({ xyz: expected });

    const actual = await isXyzEnabled();

    expect(actual).toBe(expected);
  });
});
