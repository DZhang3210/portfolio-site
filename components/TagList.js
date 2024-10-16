"use client";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import React from "react";

const TagList = ({ tags }) => {
  return (
    <div className="space-x-1 my-0">
      {tags.map((tag, i) => (
        <Badge
          key={i}
          variant={""}
          className="inline-flex items-center px-1 py-1 text-[0.4rem] bg-gray-800 text-white my-1"
        >
          <span>{tag}</span>
        </Badge>
      ))}
    </div>
  );
};

export default TagList;
