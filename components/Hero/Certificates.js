import { certificates } from "@/lib/certificates-lists";
import Image from "next/image";
import React from "react";

const Certificates = () => {
  return (
    <div className="flex flex-col gap-5 " id="certificates">
      <div className="text-5xl font-semibold text-gray-600">Certificates</div>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-10">
        {certificates.map(([src, title], i) => (
          <div
            key={i}
            className="flex flex-row items-center justify-center rounded-lg border"
          >
            <div className="flex items-center justify-center">
              <Image src={src} alt={src} height={120} width={120} />
            </div>
            <div className="flex flex-col p-4 text-lg">
              <div className="font-semibold">{title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
