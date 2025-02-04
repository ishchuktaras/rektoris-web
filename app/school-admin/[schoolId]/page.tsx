import { notFound } from "next/navigation";
import React from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ schoolId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const schoolId = (await params).schoolId;
  const name = (await searchParams).name;
  if (!schoolId) {
    return notFound();
  }
  return;
  <div className="">
    <p>School Id: {schoolId}</p>
    <p>School Name: {name}</p>
  </div>;
}
