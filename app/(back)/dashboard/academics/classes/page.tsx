import { getAllClasses } from "@/actions/classes";
import ClassListing from "@/components/dashboard/class-listing";
// import ClassListing from "@/components/dashboard/class-listing";
import React from "react";

export default async function page() {
  const classes = await getAllClasses()|| [];
  return (
    <div>
      <ClassListing />
     {/* <ClassListing classes={classes}/> */}
    </div>
  );
}
