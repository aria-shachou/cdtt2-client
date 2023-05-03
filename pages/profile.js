import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";
import { getUserFromLocalCookie } from "../lib/auth";

const Profile = () => {
  const { user, loading } = useFetchUser();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserData = () => {
      getUserFromLocalCookie()
        .then((data) => setUserData(data))
        .catch((err) => console.log(err));
    };
    getUserData();
  }, []);
  console.log(userData);
  return (
    <Layout user={user} loading={loading}>
      <div
        className="w-full justify-center text-center"
        style={{ height: 600 }}
      >
        <h2>User&apos;s email: {userData.email}</h2>
        <h2>Username: {userData.username}</h2>
      </div>
    </Layout>
  );
};

export default Profile;
