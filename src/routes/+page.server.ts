import { getDolar, parseDolar } from '../utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const values = await parseDolar(await getDolar());
	return { ...values };
};
