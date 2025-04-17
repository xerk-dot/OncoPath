import { InlineSnippet } from "@/components/form/domain-configuration";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold text-white">
          Welcome to <InlineSnippet>OncoPath</InlineSnippet>
        </h1>
        <p className="text-center text-lg text-gray-400">
          Your platform for managing cancer pathways and research
        </p>
      </div>

    </div>
  );
}
