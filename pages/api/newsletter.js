import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://jasper:qKPJp533UgbNQgKW@tude-pedia.qwc3589.mongodb.net/tudepediadb?retryWrites=true&w=majority'
    );
    const db = client.db();
    const newsletterCollection = db.collection('newsletterCollection');
    const result = await newsletterCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Newsletter added!' });
  }
}

export default handler;