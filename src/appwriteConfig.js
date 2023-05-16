client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('financr');

    import { Client, Account } from "appwrite";

    const client = new Client();
    
    const account = new Account(client);
    
    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('financr') // Your project ID
    ;
    
    const promise = account.create('[USER_ID]', 'email@example.com', '');
    
    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });