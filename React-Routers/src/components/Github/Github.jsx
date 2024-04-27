import React, { useEffect, useState } from "react";
import HeadFootLayout from "../Layouts/HeadFootLayout";

const Github = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/inaumanmajeed")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <HeadFootLayout>
      <div className="flex flex-row gap-10 text-left m-5 bg-gray-700 text-white p-4 text-3xl mx-auto w-full max-w-7xl">
        <div className="basis-1/4">
          {" "}
          <img src={data.avatar_url} className="text-center rounded-full" alt="Avatar" width={300} />
        </div>
        <div className="basis-1/2 my-auto ">
          Name: {data.name}
          <br />
          Public Repos: {data.public_repos}
          <br />
          UserName: {data.login}
        </div>
      </div>
    </HeadFootLayout>
  );
};

export default Github;
