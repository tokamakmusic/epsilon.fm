import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
import type { LayoutLoad } from './$types';

inject({ mode: dev ? 'development' : 'production' });
injectSpeedInsights();

export const load: LayoutLoad = (async () => {
	if (browser) {
		posthog.init(PUBLIC_POSTHOG_API_KEY, {
			api_host: 'https://eu.i.posthog.com',
			person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
		});
	}
}) satisfies LayoutLoad;
