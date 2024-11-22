'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function InversionesProject() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      title: 'Instant Loans',
      description: 'Digital processing and approval of quick loans',
    },
    {
      title: 'Contract Management',
      description: 'Digital tracking of loan contracts and payments',
    },
    {
      title: 'Payment Processing',
      description: 'Integration with multiple payment methods and banks',
    },
    {
      title: 'Multi-language Support',
      description: 'Full support for Spanish and English interfaces',
    },
  ];

  const techStack = [
    {
      name: 'Mobile',
      items: ['React Native', 'Native Modules', 'Push Notifications'],
    },
    { name: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis'] },
    {
      name: 'Integration',
      items: ['Payment Gateways', 'Bank APIs', 'AWS Services'],
    },
  ];

  const screenshots = [
    {
      src: '/projects/inversiones/contracts.png',
      alt: 'Contracts dashboard showing active loans',
      caption: 'Active loans and payment tracking',
    },
    {
      src: '/projects/inversiones/loan-details.png',
      alt: 'Detailed view of loan information',
      caption: 'Detailed loan information and payment history',
    },
    {
      src: '/projects/inversiones/payment.png',
      alt: 'Payment confirmation screen',
      caption: 'Secure payment processing interface',
    },
    {
      src: '/projects/inversiones/confirmation.png',
      alt: 'Transaction confirmation page',
      caption: 'Final confirmation step with terms acceptance',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      {/* Hero Section */}
      <div className='relative h-80  bg-[#0052B4]'>
        <div className='absolute inset-0 bg-black/30' />
        <div className='flex p-20 mx-20'>
          <div className='relative z-10 container mx-auto px-4 h-full flex flex-col justify-center'>
            <h1 className='text-5xl font-bold mb-4'>
              Digital Banking Platform
            </h1>
            <p className='text-xl max-w-2xl'>
              Transforming traditional lending services with instant digital
              solutions
            </p>
          </div>
          <Image
            src='/projects/inversiones/front.png'
            alt='Inversiones La Cruz Logo'
            width={500}
            height={100}
            className='mb-6 mr-20'
          />
        </div>
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
                activeTab === tab ? 'bg-[#0052B4]' : 'bg-gray-700'
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
                  Led development of a comprehensive mobile banking platform for
                  instant loans and digital contract management. The solution
                  streamlined the lending process from application to repayment.
                </p>
                <div className='bg-gray-800 p-6 rounded-lg'>
                  <h3 className='text-xl font-bold mb-4'>Key Achievements</h3>
                  <ul className='space-y-2'>
                    <li>🚀 Reduced loan processing time by 80%</li>
                    <li>📱 98% user satisfaction rate</li>
                    <li>💳 Integrated multiple payment methods</li>
                    <li>🔐 PCI DSS compliant payment processing</li>
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
                            className='px-3 py-1 bg-[#0052B4] rounded-full text-sm'
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
                <div className='relative h-[600px] w-full'>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={400}
                    height={100}
                    fill
                    className='rounded object-contain'
                    priority={idx === 0}
                  />
                </div>
                <p className='mt-2 text-lg text-gray-400'>
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
