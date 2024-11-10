"use client";
import { Badge } from "@/components/ui/badge";
import React from "react";

const TagList = ({ tags }) => {
  return (
    <div className="space-x-1 my-0">
      {tags.map((tag, i) => (
        <Badge
          key={i}
          variant={"outline"}
          className="inline-flex items-center px-4 py-1 my-1 text-xs border border-gray-400 text-gray-500 bg-white rounded-md"
        >
          <span>{tag}</span>
        </Badge>
      ))}
    </div>
  );
};

export default TagList;
