type siteMetaData = {
	webSite: string;
	server: string;
	serverVersion?: string | undefined;
	status: number;
	ok: boolean;
	title?: string;
}

export function siteMetaData(url: string) : siteMetaDataType {
	try {
		const resp = await fetch(url);

		if (!resp.ok) {
			console.log('erreur lors du fetch');
			return [];
		}
		const headers = await resp.headers;
		
		return {
			webSite: url,
			server: headers.server.split('/')[0],
			serverVersion: headers.server.split('/')[1]
			status: response.status,
			ok: response.ok,
			title: undefined,
		}
	} catch (error) {
		console.error('Erreur :', error);
		return [];
	}
}

export function extract(text: string): string[] {
	// const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
	const regex = /(?<![a-zA-Z0-9._%+-])([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?![a-zA-Z0-9._%+-])/g;
	const emails = text.match(regex) || [];
	return emails;
}

export async function get_url_ctn(url: string): Promise<string> {
	try {
		const resp = await fetch(url);

		if (!resp.ok) {
			console.log('erreur lors du fetch');
			return [];
		}
		const text = await resp.text();
		const headers = await resp.headers;
		console.log(headers);
		return text;
	} catch (error) {
		console.error('Erreur lors de l’extraction :', error);
		return [];
	}
}

// export { get_url_ctn, extract }
