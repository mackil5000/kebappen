"use client";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const params = useSearchParams();
  const token = params.get("code");

  console.log(token);
  return <div>Välkommen hem!</div>;
};

export default Home;
