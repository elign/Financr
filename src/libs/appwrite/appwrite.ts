import { Client } from "appwrite";

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_PROJECT as string);

export default client;