// api/extract.ts
import extract from '../extract';

module.exports = async (req, res) => {
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
			const emails: string[] = await extract(url.trim());
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
