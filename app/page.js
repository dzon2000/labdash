import ServiceCard from "./components/ServiceCard";

const services = [
  { icon: 'shield-minus', name: 'Pi-hole', href: '/pihole', description: 'DNS ad-blocking', status: 'online' },
  { icon: 'waypoints', name: 'Nginx', href: '/nginx', description: 'Reverse proxy', status: 'online' },
  { icon: 'download', name: 'Transmission', href: '/transmission', description: 'BitTorrent Client', status: 'warning' },
  { icon: 'code', name: 'Code Server', href: '/code', description: 'VS Code remote server', status: 'down' },
];

export default function HomePage() {
  return (
    <main className="flex-1 p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Destroyer Dashboard
            </h1>
            <p className="text-gray-400">
              Happily monitoring { services.length } services.
            </p>
          </div>

          {/* Services Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </section>
        </main>
  );
}
