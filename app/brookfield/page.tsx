'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BrookfieldProject() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      title: 'Proven Strategy Visualization',
      description:
        "Created interactive visuals to showcase Brookfield's history of success and diverse investment opportunities.",
    },
    {
      title: 'Corporate Structure Display',
      description:
        "Designed an intuitive layout to present Brookfield Corporation and Brookfield Asset Management's key attributes.",
    },
    {
      title: 'Dynamic Asset Management Presentation',
      description:
        'Developed a responsive section to highlight Brookfield Asset Management as a new investment opportunity.',
    },
    {
      title: 'Growth Phase Illustration',
      description:
        "Implemented an animated display to showcase Brookfield's next phase of growth with two distinct companies.",
    },
  ];

  const techStack = [
    {
      name: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    { name: 'Testing', items: ['Jest', 'React Testing Library'] },
    {
      name: 'Development Tools',
      items: ['React Scripts', 'PostCSS', 'Autoprefixer'],
    },
    {
      name: 'Additional Libraries',
      items: ['React Waypoint', 'React Lottie', 'Lodash (debounce)'],
    },
  ];

  const screenshots = [
    {
      src: '/projects/brookfield/proven-strategy.png',
      alt: "Brookfield's proven strategy section",
      caption: "Interactive visualization of Brookfield's proven strategy",
    },
    {
      src: '/projects/brookfield/corporate-structure.png',
      alt: "Brookfield's corporate structure",
      caption:
        'Clear presentation of Brookfield Corporation and Asset Management',
    },
    {
      src: '/projects/brookfield/asset-management.png',
      alt: 'Brookfield Asset Management section',
      caption:
        'Highlighting Brookfield Asset Management as a new investment opportunity',
    },
    {
      src: '/projects/brookfield/growth-phase.png',
      alt: "Brookfield's next phase of growth",
      caption:
        "Visualization of Brookfield's growth strategy with two distinct companies",
    },
  ];

  return (
    <div className='min-h-screen bg-[#1E3A8A] text-white'>
      {/* Hero Section */}
      <div className='relative h-80 bg-[#0A2351]'>
        <div className='absolute inset-0 bg-black/30' />
        <div className='flex p-20 mx-20'>
          <div className='relative z-10 container mx-auto px-4 h-full flex flex-col justify-center'>
            <h1 className='text-5xl font-bold mb-4'>Brookfield Project</h1>
            <p className='text-xl max-w-2xl'>
              Interactive Web Experience for Brookfield Corporation
            </p>
          </div>
          <Image
            src='/projects/brookfield/logo.png'
            alt='Brookfield Logo'
            width={300}
            height={100}
            className='mb-6 mr-20'
          />
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-4 py-12'>
        {/* Navigation Tabs */}
        <div className='flex space-x-4 mb-8'>
          {['overview', 'features', 'technical', 'gallery'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab ? 'bg-[#3B82F6]' : 'bg-[#1E40AF]'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold mb-4'>Project Overview</h2>
              <p className='text-gray-300'>
                As part of an assignment at Mobomo, I developed an interactive
                web experience for Brookfield Corporation. The project aimed to
                showcase Brookfield&apos;s proven strategy, corporate structure, and
                new investment opportunities through Brookfield Asset
                Management.
              </p>
              <div className='bg-[#1E40AF] p-6 rounded-lg'>
                <h3 className='text-xl font-bold mb-4'>Key Achievements</h3>
                <ul className='space-y-2'>
                  <li>🚀 Created responsive and interactive visualizations</li>
                  <li>
                    📊 Developed clear presentations of complex financial
                    structures
                  </li>
                  <li>
                    🎨 Implemented a cohesive design language across the site
                  </li>
                  <li>
                    ⚡ Optimized performance for smooth animations and
                    transitions
                  </li>
                  <li>
                    📱 Ensured cross-device compatibility and responsiveness
                  </li>
                </ul>
              </div>
            </div>
            <div className='bg-[#1E40AF] p-4 rounded-lg'>
              <Image
                src='/projects/brookfield/overview.png'
                alt='Brookfield Project Overview'
                width={600}
                height={400}
                className='rounded-lg object-contain'
              />
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>Key Features</h2>
              <div className='grid gap-6'>
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className='bg-[#1E40AF] p-6 rounded-lg'
                  >
                    <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                    <p className='text-gray-300'>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'technical' && (
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>Technical Stack</h2>
              <div className='space-y-6'>
                {techStack.map((category, idx) => (
                  <div
                    key={idx}
                    className='bg-[#1E40AF] p-6 rounded-lg'
                  >
                    <h3 className='text-xl font-bold mb-3'>{category.name}</h3>
                    <div className='flex flex-wrap gap-2'>
                      {category.items.map((item, i) => (
                        <span
                          key={i}
                          className='px-3 py-1 bg-[#3B82F6] rounded-full text-sm'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className='grid md:grid-cols-2 gap-8'>
            {screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                className='bg-[#1E40AF] p-4 rounded-lg'
              >
                <div className='relative h-[400px] w-full'>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className='rounded-lg object-contain'
                    priority={idx === 0}
                  />
                </div>
                <p className='mt-2 text-lg text-gray-300'>
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
