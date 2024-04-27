import React from "react";
import HeadFootLayout from "../Layouts/HeadFootLayout";
import { useParams } from "react-router-dom";

const Users = () => {
  const { userid } = useParams();
  return (
    <HeadFootLayout>
      <div className="text-center bg-gray-700 text-white text-3xl p-4 mx-auto w-full max-w-7xl">
        User: {userid}
      </div>
    </HeadFootLayout>
  );
};

export default Users;
