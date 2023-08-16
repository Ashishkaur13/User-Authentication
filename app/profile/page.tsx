"use client";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const userDetail = async () => {
    try {
      console.log("Hello");
      router.push("/detail");
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
}
