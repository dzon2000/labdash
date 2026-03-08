'use client';

import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

export default function ServicesList({ initialServices }) {
  const [services, setServices] = useState(initialServices);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function to check all service statuses
  const checkStatuses = async () => {
    setIsRefreshing(true);

    try {
      // Check all services in parallel
      const updatedServices = await Promise.all(
        services.map(async (service) => {
          try {
            const response = await fetch(service.statusEndpoint);
            const data = await response.json();

            return {
              ...service,
              status: data.status,
              message: data.message,
            };
          } catch (error) {
            return {
              ...service,
              status: 'down',
              message: 'Unreachable',
            };
          }
        })
      );

      setServices(updatedServices);
    } catch (error) {
      console.error('Failed to check statuses:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(checkStatuses, 30000);
    return () => clearInterval(interval);
  }, [services]);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </section>

      <button
        onClick={checkStatuses}
        disabled={isRefreshing}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700
                   disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isRefreshing ? 'Checking...' : 'Refresh Status'}
      </button>
    </>
  );
}
