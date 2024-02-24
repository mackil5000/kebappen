import React from "react";
import clientPromise from "@/lib/mongodb";

type Props = {};

export async function getAllReviews() {
  try {
    const client = await clientPromise;
    const db = client.db("Kebappen"); // Replace with your database name

    // Fetch data from your collection
    const data = await db.collection("Reviews").find({}).toArray(); // Replace with your collection name

    // Send the data as a response
    return data;
  } catch (e) {
    console.error(e);
  }
}

const Home = async (props: Props) => {
  const data = await getAllReviews();
  console.log(data[0].body);
  return (
    <div>
      <h1>{data[0].title}</h1>
      <p>{data[0].place.shortFormattedAddress}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: data[0].body.replace(/\n\n/g, "<br>"),
        }}
      ></p>
      <p>Betyg: {data[0].rating}</p>
    </div>
  );
};

export default Home;
