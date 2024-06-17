import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { BREVO_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	const { email, listIds, redirectionUrl, templateId } = await request.json();

	const payload = {
		email,
		includeListIds: listIds,
		redirectionUrl,
		templateId,
	};

	try {
		const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
			method: 'POST',
			headers: {
				'api-key': BREVO_API_KEY as string,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			console.log(response);
			throw new Error('Network response was not ok');
		}

		return json({ success: true }, { status: 200 });
	} catch (error) {
		console.error('Error:', error);
		return json({ success: false, error: 'Internal Server Error' }, { status: 500 });
	}
};
