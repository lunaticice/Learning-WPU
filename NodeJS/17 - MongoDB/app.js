const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('LunaticProject');
    const characters = database.collection('characters');
    const character = characters.find();
    await character.forEach(console.log);

    // Insert Character
    // const result = await database.collection('characters').insertOne({
    //   name: 'Violette',
    //   type: 'INT',
    //   race: 'Undead',
    // });
    // console.log(result);

    //Insert Many Character
    // const result = await database.collection('characters').insertMany([
    //   {
    //     name: 'Velanna',
    //     type: 'DEX',
    //     race: 'Undead',
    //   },
    //   {
    //     name: 'Honglan',
    //     type: 'INT',
    //     race: 'Beast',
    //   },
    // ]);
    // console.log(result);

    // Update Character
    // const filter = { name: 'Honglan' };
    // const updateDoc = {
    //   $set: {
    //     name: 'Seeha',
    //   },
    // };
    // const result = await characters.updateOne(filter, updateDoc);

    // Delete Character
    // const query = { name: 'Seeha' };
    // const result = await characters.deleteOne(query);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
