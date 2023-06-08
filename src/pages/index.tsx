import { useEffect, useState } from 'react';

export default function MyComponent(): JSX.Element {
  const [data, setData] = useState<any>(null); // Adjust the type based on the expected data structure

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cloud.appwrite.io/v1/databases/${process.env.NEXT_PUBLIC_DATABASE}/collections/${process.env.NEXT_PUBLIC_USER_DATA_COLLECTION}/documents/{documentId}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //process.env.NEXT_PUBLIC_ENDPOINT

  return (
    <div>
      {/* Display the fetched data */}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
