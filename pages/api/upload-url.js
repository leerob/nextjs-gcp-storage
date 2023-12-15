import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      type: 'service_account',
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
      client_id: process.env.CLIENT_ID,
      universe_domain: process.env.UNIVERSE_DOMAIN,
    },
  });

  const bucket = storage.bucket(process.env.BUCKET_NAME);
  const file = bucket.file(req.query.file);
  const options = {
    expires: Date.now() + 1 * 60 * 1000, //  1 minute,
    fields: { 'x-goog-meta-test': 'data' },
  };

  const [response] = await file.generateSignedPostPolicyV4(options);
  res.status(200).json(response);
}
