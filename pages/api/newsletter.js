import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(
      'mongodb+srv://jasper:qKPJp533UgbNQgKW@tude-pedia.qwc3589.mongodb.net/tudepediadb?retryWrites=true&w=majority'
    );
    const db = client.db();
    const newsletterCollection = db.collection('newsletterCollection');
    const result = await newsletterCollection.insertOne(data);
    client.close();
  }
}



// import prisma from "../../lib/prisma";

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed!'})
//   }
//   const { newsletter } = req.body;
  
//   const saveEmail = await prisma.subscriber.create({
//     data: {newsletter: newsletter}
//   });
//   res.json(saveEmail)
// }
