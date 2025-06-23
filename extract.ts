export default async function extract(url: string): Promise<string[]> {
	try {
		const resp = await fetch(url);

		if (!resp.ok) {
			return [];
		}

		const text = await resp.text();
		const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
		const emails = text.match(regex) || [];
		// const emails = Array.from(new Set(text.match(regex) || []));

		return emails;
	} catch (error) {
		console.error('Erreur lors de l’extraction :', error);
		return [];
	}
}

