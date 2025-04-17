import { Suspense } from "react";
import Sites from "@/components/providers";
import PlaceholderCard from "@/components/placeholder-card";
import CreateProviderButton from "@/components/create-provider-button";
import CreateProviderModal from "@/components/modal/create-provider";

export default function AllProviders({ params }: { params: { id: string } }) {
  return (
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="font-cal text-3xl font-bold dark:text-white">
            All Providers
          </h1>
          <CreateProviderButton>
            <CreateProviderModal />
          </CreateProviderButton>
        </div>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <PlaceholderCard key={i} />
              ))}
            </div>
          }
        >
          {/* @ts-expect-error Server Component */}
          <Sites providerId={decodeURIComponent(params.id)} />
        </Suspense>
      </div>
    </div>
  );
}
