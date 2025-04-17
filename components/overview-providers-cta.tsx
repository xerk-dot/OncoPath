import { getSession } from "@/lib/auth";
import CreateProviderButton from "./create-site-button";
import CreateProviderModal from "./modal/create-site";
import Link from "next/link";
import db from "@/lib/db";
import { sites } from "@/lib/schema";
import { count, eq } from "drizzle-orm";

export default async function OverviewProvidersCTA() {
  const session = await getSession();
  if (!session) {
    return 0;
  }
  const [providersResult] = await db
    .select({ count: count() })
    .from(sites)
    .where(eq(sites.userId, session.user.id));

  return providersResult.count > 0 ? (
    <Link
      href="/providers"
      className="rounded-lg border border-black bg-black px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-black active:bg-stone-100 dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-black dark:hover:text-white dark:active:bg-stone-800"
    >
      View All Providers
    </Link>
  ) : (
    <CreateProviderButton>
      <CreateProviderModal />
    </CreateProviderButton>
  );
}
