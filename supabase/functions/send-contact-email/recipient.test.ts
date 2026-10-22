import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { z } from 'zod';

test('contact messages are sent to Olga’s current Gmail inbox', async () => {
  const source = readFileSync(new URL('./index.ts', import.meta.url), 'utf8')
    .replace(/^import .*\n/gm, '');
  let handler: ((request: Request) => Promise<Response>) | undefined;
  let recipients: string[] = [];
  const fetchMock = async (url: string, options: RequestInit) => {
    if (url.includes('/siteverify')) {
      return Response.json({ success: true });
    }
    const payload = JSON.parse(String(options.body));
    recipients = payload.to;
    return Response.json({ id: 'test-email' });
  };
  new Function('serve', 'z', 'Deno', 'fetch', source)(
    (callback: typeof handler) => { handler = callback; },
    z,
    { env: { get: () => 'mock-test-only' } },
    fetchMock,
  );
  if (!handler) throw new Error('Contact handler was not registered');
  const response = await handler(new Request('https://example.test/contact', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Test', email: 'visitor@example.com', message: 'Test message',
      recaptchaToken: 'mock-token',
    }),
  }));
  expect(response.status).toBe(200);
  expect(recipients).toEqual(['olgafilaszkiewicz@gmail.com']);
});