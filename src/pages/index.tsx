import Image from "next/image";
import { Inter } from "next/font/google";
import { Client, Account, Databases } from "appwrite";
import { constants } from "buffer";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home({userData}) {

  const [user, setUser] = useState<null | string>(null);


  useEffect(() => {
    const client  = new Client();
    const account = new Account(client);
    client
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_PROJECT);
    
      const response = account.get();
      response.then(function(response) {
        console.log(response); //success
        setUser(response.email);
      }, function(error) {
        console.log(error); //failure
      }
      );
  }, [user]);

  const createUser = async () => {
    const client  = new Client();
    const account = new Account(client);
    client
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_PROJECT);
    
    const response = account.create(
      'ad', 'abck@t.com', 'mypassword'
    );
    response.then(function(response) {
      console.log(response); //success

    }, function(error) {
      console.log(error); //failure
    }
    );
  }

  const userLogin = async () => {
    const client  = new Client();
    const account = new Account(client);
    client
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_PROJECT);
    
    const response = account.createEmailSession('ad@t.com', 'mypassword')
    response.then(function(response) {
      console.log(response); //success
      setUser(response.email);
    }, function(error) {
      console.log(error); //failure
    }
    );
  }

  const userLogout = async () => {
    const client  = new Client();
    const account = new Account(client);
    client
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_PROJECT);
    
    const response = account.deleteSessions()
    response.then(function(response) {
      console.log(response); //success
      setUser(null)
    }, function(error) {
      console.log(error); //failure
    }
    );
  }
  
  return (
    <>
     {console.log(userData)}
     <button onClick={createUser}>Create User</button><br/>
     <button onClick={userLogin}>Login User</button><br />
    Hello! {user}<br/>
      <button onClick={userLogout}>Logout</button>
    </>
  );
}

export async function getServerSideProps(context : string) {
  const client = new Client();
  client
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT)

  const databases = new Databases(client);
  const userData = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE,
    process.env.NEXT_PUBLIC_USER_DATA_COLLECTION
  );
  
  return {
    props : {userData},
  }
}
