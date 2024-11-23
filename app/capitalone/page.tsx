'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import {Button} from '@/components/ui/button'


export default function CapitalOneProject() {
  const [activeTab, setActiveTab] = useState('overview');
const [modalImage, setModalImage] = useState<number | null>(null);
const router = useRouter()
  const features = [
    {
      title: 'React Frontend Development',
      description:
        'Created robust user interfaces using React and best practices',
    },
    {
      title: 'AWS Cloud Development',
      description: 'Leveraged AWS services for scalable, reliable applications',
    },
    {
      title: 'Java Backend Development',
      description:
        'Utilized Spring and Hibernate for efficient backend systems',
    },
    {
      title: 'Agile/Scrum Methodology',
      description:
        'Worked in sprints, daily stand-ups, and iterative development',
    },
  ];

  const techStack = [
    {
      name: 'Frontend',
      items: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
    },
    { name: 'Backend', items: ['Java', 'Spring', 'Hibernate'] },
    {
      name: 'Cloud & DevOps',
      items: ['AWS Lambda', 'API Gateway', 'S3', 'Jenkins', 'GitHub Actions'],
    },
    {
      name: 'Testing',
      items: ['Jest', 'Enzyme', 'Mocha', 'Cypress'],
    },
  ];

  const screenshots = [
    {
      src: '/projects/ruleslab/decision-intent.png',
      alt: 'Decision intent selection interface',
      caption: 'Interface for selecting or creating new decision intents',
    },
    {
      src: '/projects/ruleslab/search-interface.png',
      alt: 'Search interface with resource type selection',
      caption:
        'New search interface allowing users to switch between resource types',
    },
    {
      src: '/projects/ruleslab/search-objective.png',
      alt: 'Search functionality objectives',
      caption: 'Objectives for the new search experience implementation',
    },
    {
      src: '/projects/ruleslab/jira-sprint.png',
      alt: 'Jira sprint board showing project tasks',
      caption: 'Agile sprint planning and task management in Jira',
    },
    {
      src: '/projects/ruleslab/jira-sprint2.png',
      alt: 'Jira sprint board showing tasks details',
      caption: 'Task details',
    },
  ];

  const openModal = (index: number) => {
    setModalImage(index);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const nextImage = () => {
    setModalImage((prev) =>
      prev !== null ? (prev + 1) % screenshots.length : null
    );
  };

  const prevImage = () => {
    setModalImage((prev) =>
      prev !== null
        ? (prev - 1 + screenshots.length) % screenshots.length
        : null
    );
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      {/* Hero Section */}
      <div className='relative h-80 bg-blue-900'>
        <div className='absolute inset-0 bg-white' />
        <div className='flex p-16 mx-10'>
          <div className='relative z-10 container mx-auto px-4 h-full flex flex-col justify-center mt-10 '>
            <h1 className='text-3xl lg:text-5xl font-bold mb-4 text-black/70'>
              Senior Full-Stack Engineer Experience
            </h1>
            <p className='text-xl max-w-2xl text-black/40 font-semibold'>
              Capital One Project
            </p>
          </div>
          <Image
            src='/projects/ruleslab/logo.png'
            alt='Capital One Logo'
            width={300}
            height={100}
            className='mb-20 mr-20 z-20'
          />
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-4 py-12'>
        {/* Navigation Tabs */}
        <div className='flex space-x-6 mb-8'>
          {['overview', 'features', 'technical', 'gallery'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab ? 'bg-blue-700' : 'bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <Button
            onClick={() => router.push('/')}
            className='bg-gray-700 px-5 py-5 rounded-lg text-md'
          >
            Home
          </Button>
        </div>
        {/* Back to Homm page Tab */}
        {activeTab === 'home' && <Button onClick={() => router.push('/')} />}
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold mb-4'>Project Overview</h2>
              <p className='text-gray-300'>
                As a senior full-stack engineer at Capital One, I specialized in
                React frontend development, AWS cloud development, and Java
                backend systems. I focused on creating secure, scalable
                applications using microservices and API-driven design
                principles.
              </p>
              <div className='bg-gray-800 p-6 rounded-lg'>
                <h3 className='text-xl font-bold mb-4'>Key Achievements</h3>
                <ul className='space-y-2'>
                  <li>
                    🚀 Led implementation of new search functionality for DMMS
                  </li>
                  <li>📱 Developed user-friendly React interfaces</li>
                  <li>
                    ☁️ Leveraged AWS services for scalable cloud applications
                  </li>
                  <li>🔒 Implemented secure API integrations</li>
                  <li>🧪 Achieved high test coverage with automated testing</li>
                </ul>
              </div>
            </div>
            <div
              className='bg-gray-800 p-4 rounded-lg cursor-pointer'
              onClick={() => openModal(0)}
            >
              <Image
                src={screenshots[0].src}
                alt={screenshots[0].alt}
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
                    className='bg-gray-800 p-6 rounded-lg'
                  >
                    <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                    <p className='text-gray-300'>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className='bg-gray-800 p-4 rounded-lg cursor-pointer mt-16'
              onClick={() => openModal(0)}
            >
              <Image
                src={screenshots[0].src}
                alt={screenshots[0].alt}
                width={600}
                height={400}
                className='rounded-lg object-contain'
              />
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
                    className='bg-gray-800 p-6 rounded-lg'
                  >
                    <h3 className='text-xl font-bold mb-3'>{category.name}</h3>
                    <div className='flex flex-wrap gap-2'>
                      {category.items.map((item, i) => (
                        <span
                          key={i}
                          className='px-3 py-1 bg-blue-700 rounded-full text-sm'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className='bg-gray-800 p-4 rounded-lg cursor-pointer h-fit mt-16'
              onClick={() => openModal(0)}
            >
              <Image
                src={screenshots[0].src}
                alt={screenshots[0].alt}
                width={600}
                height={400}
                className='rounded-lg object-contain'
              />
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className='grid md:grid-cols-2 gap-8'>
            {screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                className='bg-gray-800 p-4 rounded-lg cursor-pointer'
                onClick={() => openModal(idx)}
              >
                <div className='relative h-[400px] w-full'>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
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
        )}
      </div>

      {/* Modal */}
      {modalImage !== null && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='max-w-4xl w-full p-4'>
            <Image
              src={screenshots[modalImage].src}
              alt={screenshots[modalImage].alt}
              width={1200}
              height={800}
              className='rounded-lg object-contain'
            />
            <div className='mt-4 flex justify-between'>
              <button
                onClick={prevImage}
                className='bg-blue-700 px-4 py-2 rounded'
              >
                Previous
              </button>
              <button
                onClick={closeModal}
                className='bg-red-700 px-4 py-2 rounded'
              >
                Close
              </button>
              <button
                onClick={nextImage}
                className='bg-blue-700 px-4 py-2 rounded'
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}