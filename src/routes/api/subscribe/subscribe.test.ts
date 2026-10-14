import { afterEach, describe, expect, it, vi } from 'vitest';
import { POST } from './+server';

const payload = {
	email: 'reader@example.com',
	listIds: [1],
	redirectionUrl: 'https://filament.zone/subscription-success',
	templateId: 2,
};

function event(apiKey?: string) {
	return {
		request: new Request('https://filament.zone/api/subscribe', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		}),
		platform: { env: { BREVO_API_KEY: apiKey } },
	} as Parameters<typeof POST>[0];
}

afterEach(() => vi.unstubAllGlobals());

describe('Cloudflare subscription bindings', () => {
	it('returns 503 when the runtime secret is missing', async () => {
		const fetch = vi.fn();
		vi.stubGlobal('fetch', fetch);
		const response = await POST(event());
		expect(response.status).toBe(503);
		expect(fetch).not.toHaveBeenCalled();
	});

	it('uses the runtime secret to request a double opt-in', async () => {
		const fetch = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
		vi.stubGlobal('fetch', fetch);
		const response = await POST(event('runtime-test-key'));
		expect(response.status).toBe(200);
		expect(await response.json()).toEqual({ success: true });
		expect(fetch).toHaveBeenCalledWith(
			'https://api.brevo.com/v3/contacts/doubleOptinConfirmation',
			expect.objectContaining({
				headers: { 'api-key': 'runtime-test-key', 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: payload.email,
					includeListIds: payload.listIds,
					redirectionUrl: payload.redirectionUrl,
					templateId: payload.templateId,
				}),
			}),
		);
	});
});
