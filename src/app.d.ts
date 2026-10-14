// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	interface Platform {
		env: {
			BREVO_API_KEY?: string;
			ASSETS: import('@cloudflare/workers-types').Fetcher;
		};
		context: import('@cloudflare/workers-types').ExecutionContext;
		caches: import('@cloudflare/workers-types').CacheStorage;
	}
}
