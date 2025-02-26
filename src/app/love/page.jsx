"use client"
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [isvalid, setIsvalid] = useState(true);

  return (
    <div>
        {/* <input type="text" onChange={(e)} /> */}
      {isvalid && (
        <Image
          src={`https://i.postimg.cc/htN1wDpf/photo-2025-02-22-22-42-03.jpg`}
          width={400}
          height={500}
        />
      )}
    </div>
  );
};

export default page;
