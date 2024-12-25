'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  Linkedin,
  Github,
  Briefcase,
  Instagram,
} from 'lucide-react';
import Link from 'next/link';


export  function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'services',
        'work',
        'projects',
        'contact',
      ];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-black text-white min-h-screen'>
      <header className='fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90'>
        <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <a
            href='#home'
            className='text-2xl font-bold'
          >
            Donald Cross
          </a>
          <ul className='hidden md:flex space-x-6'>
            {['Home', 'About', 'Services', 'Work', 'Projects', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-gray-300 transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-[#94CA42]'
                        : 'text-gray-400'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className='flex space-x-4'>
            <a
              href='https://linkedin.com/in/crossderek'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href='https://github.com/derekcrosslu'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://www.instagram.com/derekcrosslu/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram className='w-6 h-6' />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id='home'
          className='min-h-screen flex items-center justify-center relative'
        >
          <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <h1 className='text-5xl md:text-7xl font-bold mb-4'>
                Full-Stack Developer
              </h1>
              <p className='text-xl mb-6'>
                Seasoned software engineer with 6+ years of experience
              </p>
              <div className='flex gap-4'>
                <a
                  href='/resume.pdf'
                  className='bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#94CA42] transition-colors inline-flex items-center hover:text-black'
                >
                  Resume
                  <ChevronDown className='ml-2 w-5 h-5' />
                </a>
                <a
                  href='#contact'
                  className='bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-[#94CA42] transition-colors inline-flex items-center hover:text-black'
                >
                  Hire Me
                  <ChevronDown className='ml-2 w-5 h-5' />
                </a>
              </div>
            </div>
            <div className='md:w-1/2'>
              <Image
                src='/derek.webp'
                alt='Donald Cross'
                className='rounded-full w-64 h-64 object-cover mx-auto'
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
            <Briefcase className='w-8 h-8 animate-bounce' />
            <ChevronDown className='w-8 h-8 animate-bounce' />
          </div>
        </section>

        <section
          id='about'
          className='py-20 bg-gray-900'
        >
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-8'>About Me</h2>
            <p className='text-lg mb-6'>
              I&apos;m a full stack software engineer with over 6 years of
              experience in UI development, API integration, and machine
              learning solutions. I&apos;ve worked with notable organizations
              including McCann, Virtual Doorman, Navy Research Lab, Inversiones
              la Cruz, and Capital One Bank.
            </p>
            <p className='text-lg'>
              My expertise includes system optimization for Docker deployment,
              AWS cloud integration, and developing innovative solutions for
              digital banking and fraud prevention.
            </p>
          </div>
        </section>

        <section
          id='services'
          className='py-20'
        >
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-8'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                'Full Stack Development',
                'UI/UX Design',
                'API Integration',
                'Machine Learning Solutions',
                'Cloud Integration',
                'DevOps & CI/CD',
              ].map((service) => (
                <div
                  key={service}
                  className='relative group'
                >
                  <div className='bg-gray-800 p-6 rounded-lg    bg-black  '>
                    <h3 className='text-xl font-semibold mb-4'>{service}</h3>
                    <p>
                      Providing expert solutions and implementation in{' '}
                      {service.toLowerCase()}.
                    </p>
                  </div>
                  <div className='flex p-4 bg-white text-black bg-yellowgreen p-6 rounded-lg group-hover:opacity-100  opacity-0  transition-opacity inset-0 absolute justify-center items-center text-2xl font-bold'>
                    {service.toLowerCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id='work'
          className='py-20 bg-gray-900'
        >
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-8'>Work Experience</h2>
            <div className='space-y-8'>
              {[
                {
                  title: 'Senior Engineer',
                  company: 'Capital One',
                  period: '05/2024 - 08/2024',
                  description:
                    'Focused on infrastructure and UI development, optimizing AWS infrastructure and improving app performance.',
                },
                {
                  title: 'Senior Frontend Engineer',
                  company: 'Mobomo (Contractor at Navy Research Lab)',
                  period: '12/2021 - 03/2023',
                  description:
                    'Worked on IPOWER, an advanced energy simulation tool for the U.S. Naval Research Laboratory.',
                },
                {
                  title: 'Senior Fullstack Engineer',
                  company: 'Inversiones la Cruz',
                  period: '07/2019 - 11/2021',
                  description:
                    'Spearheaded development of a consumer-focused digital banking solution using React Native.',
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className='bg-gray-800 p-6 rounded-lg'
                >
                  <h3 className='text-xl font-semibold'>{job.title}</h3>
                  <p className='text-gray-400'>{job.company}</p>
                  <p className='text-sm text-gray-500 mb-2'>{job.period}</p>
                  <p>{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id='projects'
          className='py-40'
        >
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-8 '>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8  '>
              {[
                {
                  title: 'Las Unicas: Community Lending Platform',
                  description:
                    'Empowering rural communities in Peru through digital financial inclusion.',
                  bgimage: '/projects/fronts/unicas.png',
                  link: '/lasunicas',
                  size: { width: 400, height: 100 },
                },
                {
                  title: 'Sumbi: Community Lending Platform',
                  description:
                    'Led a cross-functional team for an NGO project, focusing on timelines, budget management, stakeholder communication.',
                  bgimage: '/projects/fronts/sumbi.png',
                  link: 'https://sumbi-s8un.vercel.app/',
                  size: { width: 400, height: 100 },
                },
                {
                  title: 'RulesLab: Credit Risk Assessment Automation',
                  description:
                    'Developed at Capital One, focusing on credit risk assessment automation.',
                  bgimage: '/projects/fronts/capitalone.png',
                  link: '/capitalone',
                  size: { width: 400, height: 100 },
                },
                {
                  title: 'IPOWER: Energy simulation management',
                  description:
                    'Created for Navy Research Lab, an advanced energy simulation tool.',
                  bgimage: '/projects/fronts/ipower.png',
                  size: { width: 400, height: 100 },
                },
                {
                  title: 'Banking App',
                  description:
                    'Spearheaded development of a consumer-focused digital banking solution using React Native.',
                  bgimage: '/projects/fronts/inversiones.png',
                  link: '/inversiones',
                  size: { width: 400, height: 100 },
                },
                {
                  title: 'SIECF System',
                  description:
                    'Developed a predictive scoring model for unbanked youth using social media data.',
                  bgimage: '/projects/fronts/innovate.png',
                  size: { width: 400, height: 100 },
                },
                {
                  title: 'Leonardo Cross',
                  description:
                    'Website for successful young filmaker Leonardo Cross.',
                  bgimage: '/projects/fronts/leocross.png',
                  size: { width: 400, height: 100 },
                  link: 'http://leonardocross.com',
                },
                {
                  title: 'Moving Memories',
                  description:
                    'Website developed for Moving Memories artist Ricardo Lay.',
                  bgimage: '/projects/fronts/movingmemories.png',
                  size: { width: 400, height: 100 },
                  link: 'http://movingmemories.vercel.app',
                },
                {
                  title: 'Brookfield',
                  description:
                    'Interactive visualization of Brookfield&apos;s proven strategy.Clear presentation of Brookfield Corporation and Asset Management',
                  bgimage: '/projects/fronts/brookfield.png',
                  size: { width: 400, height: 100 },
                  link: 'https://brookfield-v2-ten.vercel.app/',
                },
                {
                  title: 'Chess Dojo',
                  description:
                    'Website developed for Moving Memories artist Ricardo Lay.',
                  bgimage: '/projects/fronts/chessdojo.png',
                  size: { width: 400, height: 100 },
                  link: 'https://chessdojo-production.up.railway.app/',
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className='relative group'
                >
                  <div className='bg-gray-800 p-6 rounded-lg    bg-black h-40 flex-col justify-center items-center'>
                    <h3 className='text-lg md:text-2xl font-bold mb-0'>
                      {project.title}
                    </h3>
                    <p className='text-md md:text-xl'>{project.description}</p>
                  </div>
                  <Link
                    className='absolute inset-0 flex p-0 
    bg-white 
    text-black 
    rounded-lg 
    opacity-0 
    group-hover:opacity-100 
    transition-opacity'
                    href={project.link || '/'}
                  >
                    <div className='absolute w-full h-full overflow-hidden rounded-lg'>
                      <Image
                        src={project.bgimage}
                        alt='projects'
                        width={project.size?.width}
                        height={project.size?.height}
                        className='w-full h-full object-cover '
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id='contact'
          className='py-20 bg-gray-900'
        >
          <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold mb-8'>Contact Me</h2>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <p className='mb-4'>
                Feel free to reach out for collaborations or just a friendly
                hello:
              </p>
              <ul className='space-y-2'>
                <li>Email: dereklq7@gmail.com</li>
                <li>Phone: 917-580-3957</li>
                <li>Location: Delray Beach, FL</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-gray-800 py-8'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2024 Donald Cross. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
