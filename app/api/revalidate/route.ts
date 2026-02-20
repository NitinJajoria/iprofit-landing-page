import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const secret = process.env.SANITY_WEBHOOK_SECRET;

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const payload = await request.json();
  const slug = payload?.slug?.current ?? payload?.slug ?? null;

  const profile = "default";

  revalidateTag("post", profile);
  if (slug) {
    revalidateTag(`post:${slug}`, profile);
  }

  return NextResponse.json({ revalidated: true, slug });
}
