import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Profile() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      <h1>{data[0].name}</h1>
      <h2>
        {data[0].address.city} - {data[0].address.street}
      </h2>
    </div>
  );
}
