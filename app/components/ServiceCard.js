// app/components/ServiceCard.js
import Link from 'next/link';
import { DynamicIcon } from 'lucide-react/dynamic';

const STATUS_STYLES = {
  online: 'w-2 h-2 bg-green-500 rounded-full',
  down: 'w-2 h-2 bg-red-500 rounded-full',
  warning: 'w-2 h-2 bg-orange-500 rounded-full',
};

export default function ServiceCard({ service }) {
  return (
    <Link href={service.href} className='group'>
      <div className=" dark:bg-gray-800 bg-white
                      rounded-lg p-6
                      border  dark:border-gray-700 border-gray-300
                      hover:border-blue-500
                       dark:hover:bg-gray-700 hover:bg-gray-50
                      transition-all duration-200 h-full">

        {/* Service Name */}
        <DynamicIcon name={service.icon} className=" dark:text-white text-gray-900" size={24} />
        <h2 className="text-xl font-semibold
                        dark:text-white text-gray-900
                       mb-2 group-hover:text-blue-400 transition-colors">
          {service.name}
        </h2>

        {/* Description */}
        <p className=" dark:text-gray-400 text-gray-600 text-sm">
          {service.description}
        </p>

        {/* Status indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div className={STATUS_STYLES[service.status]}></div>
          <span className="text-xs  dark:text-gray-500 text-gray-600">
            {service.message || service.status}
          </span>
        </div>
      </div>
    </Link>
  );
}
