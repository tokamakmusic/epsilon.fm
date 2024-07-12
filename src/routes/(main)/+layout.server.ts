import type { LayoutServerLoad } from './$types';
import { NODE_ENV } from '$env/static/private';
import { clerkClient } from '@clerk/clerk-sdk-node';

export const load: LayoutServerLoad = async ({ locals }) => {
	const organizationId = locals.session.claims.org_id ?? null;
	const response = await clerkClient.organizations.getOrganization({ organizationId });
	console.log('TEST' + response);
	const slug = response.slug ?? null;
	return {
		slug: slug,
		nodeEnv: NODE_ENV
	};
};
