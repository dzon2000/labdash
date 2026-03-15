import ServicesList from "./components/ServicesList";

const services = [
    {
        icon: "shield-minus",
        name: "Pi-hole",
        href: "/pihole",
        description: "DNS ad-blocking",
        statusEndpoint: "/api/pihole/status",
    },
    {
        icon: "waypoints",
        name: "Nginx",
        href: "/nginx",
        description: "Reverse proxy",
        statusEndpoint: "/api/nginx/status",
    },
    {
        icon: "download",
        name: "Transmission",
        href: "/transmission",
        description: "BitTorrent Client",
        statusEndpoint: "/api/transmission/status",
    },
    {
        icon: "code",
        name: "Code Server",
        href: "/code",
        description: "VS Code remote server",
        statusEndpoint: "/api/code/status",
    },
];

async function getInitialStatuses() {
    const servicesWithStatus = await Promise.all(
        services.map(async (service) => {
            try {
                const response = await fetch(
                    `http://localhost:3000${service.statusEndpoint}`,
                    {
                        cache: "no-store",
                        signal: AbortSignal.timeout(5000),
                    },
                );

                if (!response.ok) {
                    return {
                        ...service,
                        status: "down",
                        message: "Unreachable",
                    };
                }

                const data = await response.json();
                return { ...service, ...data };
            } catch (error) {
                return { ...service, status: "down", message: "Unreachable" };
            }
        }),
    );

    return servicesWithStatus;
}

export default async function HomePage() {
    const initialServices = await getInitialStatuses();

    return (
      <main className="flex-1 p-8  dark:bg-gray-900 bg-gray-50">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold  dark:text-white text-gray-900 mb-2">
            Destroyer Dashboard
          </h1>
          <p className=" dark:text-gray-400 text-gray-600">
            Happily monitoring {services.length} services.
          </p>
        </div>

        <ServicesList initialServices={initialServices} />
      </main>
    );
}
