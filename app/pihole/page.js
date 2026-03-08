"use client";

import { useState, useEffect } from "react";

export default function PiHolePage() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStats = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/pihole");

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            setStats(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch on mount
    useEffect(() => {
        fetchStats();
    }, []);

    // Loading state
    if (loading) {
        return (
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-white mb-4">Pi-hole</h1>
                <p className="text-gray-400">Loading...</p>
            </main>
        );
    }

    // Error state
    if (error) {
        return (
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-white mb-4">Pi-hole</h1>
                <p className="text-red-400">Error: {error}</p>
            </main>
        );
    }

    // Success state
    return (
        <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold text-white mb-4">
                Pi-hole Statistics
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Queries Today"
                    value={stats.dns_queries_today}
                />
                <StatCard title="Ads Blocked" value={stats.ads_blocked_today} />
                <StatCard
                    title="Percent Blocked"
                    value={`${stats.ads_percentage_today}%`}
                />
                <StatCard
                    title="Domains Blocked"
                    value={stats.domains_being_blocked}
                />
            </div>

            <button
                onClick={fetchStats}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Refresh
            </button>
        </main>
    );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}
