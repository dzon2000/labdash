import ServiceCard from "./components/ServiceCard";

const services = [
  { name: 'Pi-hole', href: '/pihole', description: 'DNS ad-blocking' },
  // ...
];

export default function HomePage() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-white">Destroyer Dashboard</h1>
      <section>
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </section>
    </main>
  );
}