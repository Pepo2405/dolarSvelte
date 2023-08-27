import { parseHTML } from 'linkedom';

export async function getDolar(): Promise<string> {
	const api = 'https://dolarhoy.com/';
	const response = await fetch(api);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${response.status}`);
	}

	return await response.text();
}

export async function parseDolar(html: string) {
	const { document } = parseHTML(html);
	const rows = document.querySelectorAll('.tile.is-child');
	console.count('lal');
	const values = {};

	for (const row of rows) {
		const title = row.querySelector('.title')?.innerText;
		const elValues = row.querySelector('.values');
		if (title && elValues) {
			const compraVal = elValues
				?.querySelector('.compra')
				?.querySelector('.val')
				?.innerText?.replace('$', '');
			const ventaVal = elValues
				?.querySelector('.venta')
				?.querySelector('.val')
				?.innerText?.replace('$', '');
			if (compraVal && ventaVal) {
				values[title] = {
					compra: Number(compraVal),
					venta: Number(ventaVal)
				};
			}
		}
	}

	return values;
}

export function formatNumber(number: number) {
	return new Intl.NumberFormat('es-CO', {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2
	}).format(number);
}
