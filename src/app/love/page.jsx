"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isvalid, setIsvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <div>Loading</div>;
  }
  const handleIsValid = (e) => {
    e.preventDefault();
    const d = process.env.NEXT_PUBLIC_PASSKEY;
    const input = e.target.value;
    if (d === input) {
      setIsvalid(true);
    }
  };

  return (
    <div>
      <div className="h-[10vh] flex justify-center items-center">
        <input
          type="password"
          onChange={(e) => handleIsValid(e)}
          className="bg-slate-300 rounded-sm h-12 w-[20vw] placeholder:pl-5"
          placeholder="Enter data"
        />
      </div>
      {isvalid && (
        <Image
          src={`https://i.postimg.cc/htN1wDpf/photo-2025-02-22-22-42-03.jpg`}
          alt="image"
          width={400}
          height={500}
        />
      )}
    </div>
  );
};

export default page;
