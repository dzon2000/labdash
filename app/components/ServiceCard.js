import Link from 'next/link';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function ServiceCard({ service }) {
  return (
    <Link href={service.href} className='group'>
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700
                            hover:border-blue-500 hover:bg-gray-700
                            transition-all duration-200 h-full">

              {/* Service Name */}
              <h2 className="text-xl font-semibold text-white mb-2
                             group-hover:text-blue-400 transition-colors">
                <DynamicIcon name={service.icon} color="white" size={24} /> {service.name}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm">
                {service.description}
              </p>

              {/* Optional: Status indicator */}
              <div className="mt-4 flex items-center gap-2">
                  <div className={
                      service.status == 'online' ?
                          'w-2 h-2 bg-green-500 rounded-full' :
                          service.status == 'down' ?
                              'w-2 h-2 bg-red-500 rounded-full' :
                              'w-2 h-2 bg-orange-500 rounded-full'}></div>
                <span className="text-xs text-gray-500">{service.status}</span>
              </div>
            </div>
    </Link>
  );
}
