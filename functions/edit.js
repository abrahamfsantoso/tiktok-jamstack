const { createClient } = require('@astrajs/collections');

const collection = 'posts';

exports.handler = async function (event, context, callback) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const users = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  const body = JSON.parse(event.body);

  try {
    const updatedUsers = await users.update(body.userId, body.data);

    return {
      statusCode: 200,
      body: JSON.stringify(updatedUsers),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
