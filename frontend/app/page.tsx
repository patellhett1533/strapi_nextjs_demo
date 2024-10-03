import Image from "next/image";
import Link from "next/link";
import SelectReason from "./_components/SelectReason";
import { fetchPageContent } from "@/app/lib/data";

export default async function Page() {
  const pageContent = await fetchPageContent();

  if (!pageContent) return null;
  return (
    <div className="w-full py-12">
      <div className="flex flex-col  items-center justify-center h-dvh">
        <p className="uppercase mb-8 text-lg">{pageContent[0].head}</p>
        <h1 className="capitalize text-4xl font-bold">
          {pageContent[0].title}
        </h1>
        <p className="text-center mt-8 w-1/2">{pageContent[0].description}</p>
        <div>
          <SelectReason data={pageContent[0].reason_data} />
        </div>
      </div>
    </div>
  );
}
