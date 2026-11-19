import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UnitView } from "@/components/unit/UnitView";
import { getUnitBySlug, getUnits } from "@/lib/content";
import { unitSlug } from "@/lib/text";

export const dynamicParams = false;

export function generateStaticParams() {
  return getUnits().map((u) => ({ slug: unitSlug(u.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const u = getUnitBySlug(slug);
  return u ? { title: u.title, description: u.summary } : {};
}

export default async function UnitPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const unit = getUnitBySlug(slug);
  if (!unit) notFound();
  return <UnitView unit={unit} />;
}
