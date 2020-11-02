import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });

  const options = {
    version: 'v4',
    action: 'write',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    contentType: 'application/octet-stream',
  };
  const [url] = await storage
    .bucket(process.env.BUCKET_NAME)
    .file(req.query.file)
    .getSignedUrl(options);

  res.status(200).json({ url });
}
