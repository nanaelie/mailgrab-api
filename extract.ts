export default async function extract(url: string): Promise<string[]> {
	try {
		const resp = await fetch(url);

		if (!resp.ok) {
			console.log('erreur lors du fetch');
			return [];
		}

		const text = await resp.text();
		// const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
		const regex = /(?<![a-zA-Z0-9._%+-])([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?![a-zA-Z0-9._%+-])/g;
		console.log(text);
		const emails = text.match(regex) || [];
		console.log(emails);
		// const emails = Array.from(new Set(text.match(regex) || []));

		return emails;
	} catch (error) {
		console.error('Erreur lors de l’extraction :', error);
		return [];
	}
}

