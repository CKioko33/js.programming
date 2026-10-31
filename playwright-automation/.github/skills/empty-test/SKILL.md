---
name: empty-test
description: Generate a blank Playwright test declaration using the @playwright/test test() API. Use when asked to create an empty Playwright test.
---

# Empty Playwright test

Create one empty Playwright test declaration using the `test()` API from `@playwright/test`.

Requirements:

- Use an asynchronous test callback with the `{ page }` fixture.
- Leave the test title as an empty string.
- Leave the callback body completely empty.
- Assume `test` is imported with ES module syntax; do not include an import statement.

Return only the test declaration in a JavaScript code fence. Do not include explanations, comments, or any other code.
