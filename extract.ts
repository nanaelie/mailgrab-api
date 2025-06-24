function extract(text: string): string[] {
	// const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
	const regex = /(?<![a-zA-Z0-9._%+-])([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?![a-zA-Z0-9._%+-])/g;
	const emails = text.match(regex) || [];
	return emails;
}

export default async function get_url_ctn(url: string): Promise<string> {
	try {
		const resp = await fetch(url);

		if (!resp.ok) {
			console.log('erreur lors du fetch');
			return [];
		}
		const text = await resp.text();
		return text;
	} catch (error) {
		console.error('Erreur lors de l’extraction :', error);
		return [];
	}
}

