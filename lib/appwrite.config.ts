export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_KEY,
  DOCTOR_COLLECTION_ID,
  PATIENT_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT,
} = process.env;

import * as sdk from "node-appwrite";

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("668d497b00282de1d006")
  .setKey(
    "9778e2beb9997901666d5180fa1da8dc7bd81dfd0da4a6f4a50e0911d9636cec7c6c7fda7c6546317809356cf4e56f28aee8a8087354a57da6cf1cf945e90ed7eb0a332b34bba4ee4ebd5aa60b4b15d14f5b7df0670afbe08c0b796fab875bd371a63435aff236bf47684b46a51a15b4d37b98a193d0b8cb8b9ad8f41363aeb6"
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
