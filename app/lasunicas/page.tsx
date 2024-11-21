'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function UnicasProject() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      title: 'Dashboard/Summary View',
      description:
        'Digital tracking of community meetings and financial decisions',
    },
    {
      title: 'Loan Tracking',
      description: 'Manages rotating credit pool and repayment schedules',
    },
    {
      title: 'Member Dashboard',
      description:
        'Real-time visibility of shares, loans, and community capital',
    },
    {
      title: 'Offline Support',
      description: 'Continues working in areas with limited connectivity',
    },
  ];

  const techStack = [
    { name: 'Frontend', items: ['Next.js', 'Tailwind CSS', 'React Query'] },
    { name: 'Backend', items: ['NestJS', 'PostgreSQL', 'JWT Auth'] },
    {
      name: 'Infrastructure',
      items: ['Railway.app', 'Offline-first architecture'],
    },
  ];

  const screenshots = [
    {
      src: '/projects/lasunicas/resumen.png',
      alt: 'Assembly dashboard showing member activity and capital overview',
      caption: 'Assembly dashboard with real-time financial tracking',
    },
    {
      src: '/projects/lasunicas/acciones.png',
      alt: 'Contains fields for selecting member, date, quantity of shares, and share value. Shows purchase history table with previous transactions',
      caption:
        'Contains fields for selecting member, date, quantity of shares, and share value. Shows purchase history table with previous transactions',
    },
    {
      src: '/projects/lasunicas/agenda.png',
      alt: 'Shows assembly agenda with capital information at top',
      caption: 'Shows assembly agenda with capital information at top',
    },
    {
      src: '/projects/lasunicas/asistencia.png',
      alt: 'Clean, organized table layout for easy attendance marking',
      caption: 'Clean, organized table layout for easy attendance marking',
    },
    {
      src: '/projects/lasunicas/pagos.png',
      alt: 'Fields for selecting member, payment date, loan selection, and payment amounts. Payment history table showing previous transactions. Details include capital payments, interest payments, late fees, and remaining balance',
      caption: 'Payment history table showing previous transactions.',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      {/* Hero Section */}
      <div className='relative h-96 bg-gradient-to-r from-blue-900 to-purple-900'>
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative z-10 container mx-auto px-4 h-full flex flex-col justify-center'>
          <h1 className='text-5xl font-bold mb-4'>Las Únicas Platform</h1>
          <p className='text-xl max-w-2xl'>
            Empowering rural communities in Peru through digital financial
            inclusion
          </p>
        </div>
        <Image
          src={'/projects/lasunicas/front.png'}
          alt={'las unicas'}
          fill
          className='rounded object-cover'
        />
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-4 py-12'>
        {/* Navigation Tabs */}
        <div className='flex space-x-4 mb-8'>
          {['overview', 'features', 'technical'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            {activeTab === 'overview' && (
              <div className='space-y-6'>
                <h2 className='text-3xl font-bold mb-4'>Project Overview</h2>
                <p className='text-gray-300'>
                  A digital platform transforming traditional community lending
                  circles in rural Peru. The system manages monthly assemblies
                  where members pool resources, coordinate micro-loans, and
                  track repayments to foster local entrepreneurship.
                </p>
                <div className='bg-gray-800 p-6 rounded-lg'>
                  <h3 className='text-xl font-bold mb-4'>Impact Stats</h3>
                  <ul className='space-y-2'>
                    <li>🏘️ Serving 5,000+ community members</li>
                    <li>⚡ 75% reduction in administrative time</li>
                    <li>📈 95% improvement in record accuracy</li>
                    <li>🌟 Enhanced financial inclusion in rural areas</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h2 className='text-3xl font-bold mb-6'>Key Features</h2>
                <div className='grid gap-6'>
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className='bg-gray-800 p-6 rounded-lg'
                    >
                      <h3 className='text-xl font-bold mb-2'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-300'>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'technical' && (
              <div>
                <h2 className='text-3xl font-bold mb-6'>Technical Stack</h2>
                <div className='space-y-6'>
                  {techStack.map((category, idx) => (
                    <div
                      key={idx}
                      className='bg-gray-800 p-6 rounded-lg'
                    >
                      <h3 className='text-xl font-bold mb-3'>
                        {category.name}
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        {category.items.map((item, i) => (
                          <span
                            key={i}
                            className='px-3 py-1 bg-blue-600 rounded-full text-sm'
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Screenshots Section */}
          <div className='space-y-6'>
            {screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                className='bg-gray-800 p-4 rounded-lg'
              >
                <div className='relative aspect-video w-full'>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className='rounded object-cover'
                    priority={idx === 0}
                  />
                </div>
                <p className='text-lg text-gray-100 p-4'>
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
