import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <Link href={service.href}>
      <div className="...">
        <h2>{service.name}</h2>
        <p>{service.description}</p>
      </div>
    </Link>
  );
}