# Next.js + GCP Storage Upload

This is an example of a Next.js application allowing you to upload photos to a GCP storage bucket.

## Getting Started

**Option 1: Use an existing storage bucket.**

Retrieve your existing project ID, bucket name, and service account email and private key. Provide those values after clicking "Deploy" to automatically set the environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fleerob%2Fnextjs-gcp-storage&env=PROJECT_ID,CLIENT_EMAIL,PRIVATE_KEY,BUCKET_NAME&envDescription=GCP%20bucket%20information%20and%20service%20account.)

**Option 2: Create a new bucket.**

1. Download the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use the `gcloud` CLI.
1. Run `gcloud auth login`.
1. Inside Google Cloud, create a new project `nextjs-storage-bucket`.
1. Run `gcloud config set project nextjs-storage-bucket`.
1. Run `gcloud auth application-default login`, per [setup instructions](https://www.pulumi.com/docs/intro/cloud-providers/gcp/setup/).
1. Run `pulumi up` to deploy your bucket (it will prompt you to log in).
1. View your newly created bucket and add the bucket name to `.env.local` (see `.env.example`).
1. Create a new [service account](https://console.cloud.google.com/iam-admin/serviceaccounts) with a role of `Storage Object Creator`.
1. Click "Create Key" and save the JSON file.
1. Add the `project_id`, `client_email`, and `private_key` to `.env.local` (see `.env.example`).
1. Run `yarn dev` to start the Next app at `localhost:3000`.
1. Choose a `.png` or `.jpg` file.
1. You should see your file successfully uploaded to the bucket.

## Commands

- `yarn dev` – Starts the Next.js app at `localhost:3000`.
- `pulumi up` – Deploy this stack to GCP.
