<script lang="ts">
	import AuthLayout from 'component/AuthLayout.svelte';
	import AuthContentLayout from 'component/AuthContentLayout.svelte';
	import AuthBannerLayout from 'component/AuthBannerLayout.svelte';

	let email = '';
	let optIn = false;
	let isSubmitted = false;
	let successMessage = '';
	let errorMessage = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		const payload = {
			email,
			listIds: [3],
			redirectionUrl: 'https://filament.zone/subscription-success',
			templateId: 2,
		};

		try {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const result = await response.json();

			if (result.success) {
				isSubmitted = true;
				successMessage =
					'Please check your inbox to confirm your subscription. Remember to check your spam folder just in case.';
			} else {
				throw new Error(result.error);
			}
		} catch (error) {
			console.error('Error:', error);
			errorMessage = 'There was an error processing your subscription. Please try again later.';
		}
	}
</script>

<AuthLayout>
	<AuthBannerLayout slot="left" />
	<AuthContentLayout slot="right">
		<div slot="content" class="right-content">
			<div class="container">
				{#if isSubmitted}
					<div class="header">
						<h1>One more step</h1>
						<p class="sub-title">to subscribe to the latest from Filament</p>
					</div>
					<p class="success-message">{successMessage}</p>
					<div class="divider-section">
						<div class="divider-line"></div>
						<p class="divider-text">and</p>
						<div class="divider-line"></div>
					</div>
					<div class="twitter-section">
						<a class="follow" href="https://x.com/filamentzone" target="_blank">
							<span>Follow us on</span>
							<svg
								width="23"
								height="20"
								viewBox="0 0 23 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M17.6306 0.431641H20.9386L13.7116 8.69164L22.2136 19.9316H15.5566L10.3426 13.1146L4.37662 19.9316H1.06662L8.79663 11.0966L0.640625 0.431641H7.46663L12.1796 6.66264L17.6306 0.431641ZM16.4696 17.9516H18.3026L6.47062 2.30764H4.50363L16.4696 17.9516Z" />
							</svg>
						</a>
					</div>
				{:else}
					<form on:submit={handleSubmit}>
						<div class="header">
							<h1>Get updates</h1>
							<p class="sub-title"></p>
						</div>
						<div class="input-section">
							<p class="input-label">Email address</p>
							<input type="email" bind:value={email} name="EMAIL" required />
						</div>
						<button class="secondary" type="submit">Subscribe</button>
						{#if errorMessage}
							<p class="error-message">{errorMessage}</p>
						{/if}
						<div class="privacy">
							<input type="checkbox" bind:checked={optIn} name="OPT_IN" required />
							<p class="privacy-note">
								By submitting this form you agree that the personal data you provided will be
								transferred to our service provider Brevo for processing in accordance with
								<a href="https://www.brevo.com/en/legal/privacypolicy/" target="_blank" class="link"
									>Brevo's Privacy Policy.</a>
							</p>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</AuthContentLayout>
</AuthLayout>

<style lang="less">
	@import 'src/styles/colors.less';
	@import 'src/styles/typography.less';

	.right-content {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;

		height: 100%;
	}

	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;

		height: fit-content;
		width: 25rem;
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-items: flex-start;

		width: 100%;
	}

	.link {
		color: var(--link-color);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	h1 {
		.h1();

		text-align: center;
	}

	.sub-title {
		.b1();
	}

	.input-section {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.input-label {
		.b2();

		margin-bottom: 0.3rem;
	}

	input[type='email'] {
		.h3();

		padding: 0.5rem;
		width: 100%;
		border: none;
		border-radius: 4px;
		background: #141414;
		border: 1px solid var(--default);
		color: var(--foreground-color);
	}

	input[type='checkbox'] {
		margin-right: 1rem;
	}

	button,
	a.follow {
		.nav-item();

		align-items: center;
		display: flex;
		justify-content: center;

		padding: 0.5rem;
		width: 100%;

		background-color: var(--foreground-color);
		border: 0.125rem solid transparent;
		color: var(--background-color);
		cursor: pointer;

		&:hover {
			background-color: transparent;
			border-color: var(--foreground-color);
			color: var(--foreground-color);
		}
	}

	a.follow {
		& svg {
			margin-left: 0.5rem;

			fill: var(--baackground-color);
		}

		&:hover svg {
			fill: var(--foreground-color);
		}
	}

	.privacy {
		display: flex;
		color: var(--foreground-color);
	}

	.privacy-note {
		.b2();

		opacity: 0.5;
	}

	.twitter-section {
		display: flex;
		height: fit-content;
		width: 100%;
		align-items: center;
		gap: 1rem;
	}

	.divider-section {
		display: flex;
		width: 100%;
		height: fit-content;
		width: 100%;
		align-items: center;
		gap: 1rem;
	}

	.divider-line {
		background-color: #303030;
		height: 1px;
		width: 100%;
	}

	.divider-text {
		color: var(--foreground);
		white-space: nowrap;
		opacity: 0.65;
	}

	.success-message {
		.b1();

		font-size: 0.75rem;
	}

	.error-message {
		.b1();

		margin-top: -1rem;

		color: @color-rugged;
		font-size: 0.75rem;
	}
</style>
