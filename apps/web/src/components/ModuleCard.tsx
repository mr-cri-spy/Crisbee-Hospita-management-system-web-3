import Link from 'next/link';

interface ModuleCardProps {
  title: string;
  href: string;
  description: string;
}

export default function ModuleCard({ title, href, description }: ModuleCardProps) {
  return (
    <Link href={href} className="block rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:border-brand hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-brand">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </Link>
  );
}
