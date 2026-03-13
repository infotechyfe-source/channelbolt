import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
export const TESTIMONIALS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_TESTIMONIALS_COLLECTION_ID;
export const CONTACT_COLLECTION_ID = import.meta.env.VITE_APPWRITE_CONTACT_COLLECTION_ID;

export const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID!;