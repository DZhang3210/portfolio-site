import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between min-h-[200px]  py-5">
      <div className="text-gray-600">
        <div className="text-2xl font-bold text-main">David Zhang</div>
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
      <div className="flex justify-center gap-4 mt-8 sm:mt-0">
        <div className="flex flex-col items-start justify-start gap-2 h-full w-full">
          <div className="text-xl font-semibold mb-2">Navigate</div>
          <Link href="#home" className="hover:underline">
            <div className="text-lg text-gray-600">Home</div>
          </Link>
          <Link href="#certificates" className="hover:underline">
            <div className="text-lg text-gray-600">Certificates</div>
          </Link>
          <Link href="#portfolio" className="hover:underline">
            <div className="text-lg text-gray-600">Portfolio</div>
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 h-full w-full">
          <div className="text-xl font-semibold mb-2">Projects</div>
          <Link
            href="https://reddit-clone-topaz-beta.vercel.app/"
            className="hover:underline"
            target="_blank"
          >
            <div className="text-lg text-gray-600">Reddit</div>
          </Link>
          <Link
            href="https://prisma-deploy-kohl.vercel.app/"
            className="hover:underline"
            target="_blank"
          >
            <div className="text-lg text-gray-600">eCommerce</div>
          </Link>
          <Link
            href="https://unsplash-replica1.netlify.app/"
            className="hover:underline"
            target="_blank"
          >
            <div className="text-lg text-gray-600">Unsplash</div>
          </Link>
          <Link
            href="https://workvibe.netlify.app/"
            className="hover:underline"
            target="_blank"
          >
            <div className="text-lg text-gray-600">OfficeVibe</div>
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 h-full w-full">
          <div className="text-xl font-semibold mb-2">Social</div>
          <Link
            href="https://github.com/DZhang3210"
            className="hover:underline"
            target="_blank"
          >
            <div className="text-lg text-gray-600">Github</div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/techdavidzhang1/"
            className="hover:underline"
            target="_blank"
          >
            <div className="text-lg text-gray-600">LinkedIn</div>
          </Link>
          <Link
            href="mailto:davidzhang3210@gmail.com"
            className="hover:underline"
            target="_blank"
          >
            <div className="text-lg text-gray-600">Email</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
