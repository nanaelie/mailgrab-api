import extract from '../extract';

module.exports = async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	if (req.method !== 'GET') {
		res.status(405).send('Method Not Allowed');
		return;
	}

	try {
		const url = req.query.url as string;
		
		res.setHeader('Content-Type', 'application/json');
		if (url.trim() === '') {
			res.status(200).send({
				error: true,
				message: "L'url est vide!",
			});
		} else {
			const text: string = await get_url_ctn(url.trim())
			const emails: string[] = extract(text);
			res.status(200).send({
				error: false,
				message: emails,
			});
		}
	} catch (error) {
		console.error(error);
		res.status(500).send("Erreur serveur.");
	}
};
