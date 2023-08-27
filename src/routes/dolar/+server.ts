import { getDolar, parseDolar } from '../../utils';

export async function GET() {
	const html = await getDolar();
	const data = await parseDolar(html);
	const response = new Response(JSON.stringify(data));
	response.headers.set('Content-Type', 'application/json');
	return response;
}
