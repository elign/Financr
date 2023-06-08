import { Client, Account } from 'appwrite';
import { NextApiRequest, NextApiResponse } from 'next';

// Configure the Appwrite client
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(process.env.NEXT_PUBLIC_PROJECT || ""); // Your project ID

// Function to create an account
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { email, password, name } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const account = new Account(client);

  try {
    const response = await account.create('', email, password, name || '');
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Account creation failed' });
  }
}
