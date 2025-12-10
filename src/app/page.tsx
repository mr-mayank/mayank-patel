'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Menu,
  X,
  Globe,
  Layers,
  Wrench
} from 'lucide-react';
import Image from 'next/image';

// --- Configuration & Data ---

const LINKS = {
  linkedin: "https://www.linkedin.com/in/mayankkumar-d-patel/",
  github: "https://github.com/mr-mayank",
  email: "mrmayank6877@gmail.com",
  resume: "/resume.pdf"
};

const TECH_STACK = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "D3.js", "HTML/CSS", "Redux"],
  Backend: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs", "WebSockets", "Microservices"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Database Design", "Query Optimization"],
  DevOps: ["Git", "Docker", "CI/CD", "AWS", "Linux", "Webpack", "Jest", "Vercel"]
};

const EXPERIENCE = [
  {
    company: "Odoo",
    role: "Full Stack Developer",
    period: "July 2025 - Present",
    link: "https://www.odoo.com/",
    description: "Driving full-stack development within the Odoo ecosystem, focusing on scalable architecture and business module optimization.",
    tech: ["Python", "JS", "PostgreSQL", "XML"]
  },
  {
    company: "Rapidops",
    role: "Junior Software Engineer",
    period: "Jan 2024 - Jun 2025",
    link: "https://www.rapidops.com",
    description: "Built the 'Collections' module from scratch (20% revenue boost). Implemented real-time search previews and refactored dashboard functionality.",
    tech: ["React", "Node.js", "TypeScript", "MongoDB"]
  }
];

const PROJECTS = [
  {
    title: "Arena Battles",
    category: "Gaming Platform",
    description: "Interactive web gaming platform featuring real-time multiplayer support via WebSockets. Includes 'Falling Sand' and 'Battle Ship' with bot modes.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB"],
    link: "https://arena-battles.netlify.app/"
  },
  {
    title: "Souvenir",
    category: "Social Network",
    description: "A robust social networking platform engineered for seamless user connections, featuring real-time feeds, secure authentication, and media handling.",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "AWS S3"],
    link: "#"
  },
  {
    title: "Rapid Page Builder",
    category: "Dev Tool",
    description: "Dynamic page creation tool with automated publishing, cron scheduling, and custom URL management used for efficient content management.",
    tech: ["React", "Express", "Mongoose", "Cron Jobs"],
    link: "#"
  },
  {
    title: "NCC Portal",
    category: "Management System",
    description: "Comprehensive cadet management system reducing admin complaints by 50%. Handles event creation, participation tracking, and records.",
    tech: ["PHP", "MySQL", "Bootstrap", "JS"],
    link: "https://vgecg.ac.in/NCC/"
  }
];

// --- Components ---

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
    {children}
  </span>
);

const TechPill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors cursor-default">
    {children}
  </span>
);

const SectionHeading = ({ children, icon }: { children: React.ReactNode, icon: React.ReactNode }) => (
  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
    <span className="p-1.5 bg-zinc-800 rounded-lg text-indigo-400">
      {icon}
    </span>
    {children}
  </h2>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* 
        Changes made: 
        1. Removed 'w-full' and 'max-w-2xl'. Added 'w-fit'.
        2. Removed 'justify-between'.
        3. Added explicit horizontal padding 'px-6'.
        4. Controls spacing strictly via 'gap'.
      */}
      <div className="w-fit bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 flex items-center gap-8 shadow-2xl">

        <a href="#" className="font-bold text-lg text-white tracking-tighter hover:text-indigo-400 transition-colors">MP.</a>

        {/* Desktop Nav - TIGHT spacing (gap-6) */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Contact Button */}
          <a
            href={`mailto:${LINKS.email}`}
            className="hidden md:block bg-white text-black px-5 py-1.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors"
          >
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-14 left-0 right-0 mx-auto w-64 bg-zinc-900 border border-zinc-800 rounded-2xl p-2 flex flex-col gap-1 shadow-2xl md:hidden overflow-hidden"
            >
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-xl hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`mailto:${LINKS.email}`}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-white text-black font-bold text-center mt-1 text-sm"
              >
                Contact Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-indigo-500/30 font-sans pb-10">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pt-32 space-y-16 md:space-y-24">

        {/* --- HERO GRID --- */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* 1. Main Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 size={100} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] md:text-xs font-bold mb-4 border border-indigo-500/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
                </span>
                Full Stack Engineer
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
                Building scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                  digital experiences.
                </span>
              </h1>

              <p className="text-zinc-400 text-base md:text-lg max-w-lg mb-6 leading-relaxed">
                Hi, I&apos;m <span className="text-white font-semibold">Mayankkumar Patel</span>.
                I solve complex problems with Next.js, Node, and modern cloud architecture.
                Currently innovating at <span className="text-white underline decoration-zinc-700 underline-offset-4">Odoo</span>.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={LINKS.resume}
                  target="_blank"
                  className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-zinc-200 transition-transform active:scale-95"
                >
                  <Download size={16} />
                  Resume
                </a>
                <div className="flex items-center gap-2">
                  <SocialButton href={LINKS.linkedin} icon={<Linkedin size={18} />} />
                  <SocialButton href={LINKS.github} icon={<Github size={18} />} />
                  <SocialButton href={`mailto:${LINKS.email}`} icon={<Mail size={18} />} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Photo & Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 flex flex-col gap-4"
          >
            {/* Photo Container */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-1.5 h-64 md:h-auto md:flex-1 relative overflow-hidden group">
              <Image
                src="/profile.jpg"
                alt="Mayankkumar Patel"
                fill
                priority
                className="w-full h-full object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
            </div>

            {/* Quote Container */}
            <div className="bg-zinc-900 rounded-3xl p-4 flex items-center justify-center border border-zinc-800 text-center">
              <p className="text-lg font-bold font-serif italic text-white/90">
                &quot;It&apos;s not over until I win.&quot;
              </p>
            </div>
          </motion.div>

          {/* 3. Tech Arsenal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 bg-zinc-900/30 border border-zinc-800 rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Layers className="text-indigo-400" size={20} />
              <h3 className="text-lg font-bold text-white">Tech Arsenal</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="text-indigo-400 text-sm font-semibold mb-3 flex items-center gap-2">
                  <Layout size={14} /> Frontend
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {TECH_STACK.Frontend.map(t => <TechPill key={t}>{t}</TechPill>)}
                </div>
              </div>

              <div>
                <h4 className="text-indigo-400 text-sm font-semibold mb-3 flex items-center gap-2">
                  <Server size={14} /> Backend
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {TECH_STACK.Backend.map(t => <TechPill key={t}>{t}</TechPill>)}
                </div>
              </div>

              <div>
                <h4 className="text-indigo-400 text-sm font-semibold mb-3 flex items-center gap-2">
                  <Database size={14} /> Databases
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {TECH_STACK.Database.map(t => <TechPill key={t}>{t}</TechPill>)}
                </div>
              </div>

              <div>
                <h4 className="text-indigo-400 text-sm font-semibold mb-3 flex items-center gap-2">
                  <Wrench size={14} /> DevOps
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {TECH_STACK.DevOps.map(t => <TechPill key={t}>{t}</TechPill>)}
                </div>
              </div>
            </div>
          </motion.div>

        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience">
          <SectionHeading icon={<Terminal size={20} />}>Work Experience</SectionHeading>

          <div className="space-y-4">
            {EXPERIENCE.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {job.company}
                    </h3>
                    <p className="text-zinc-400 font-medium text-sm">{job.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                      {job.period}
                    </span>
                    <a href={job.link} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-zinc-300 leading-relaxed mb-4 text-sm max-w-3xl">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {job.tech.map(t => <Badge key={t}>{t}</Badge>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects">
          <SectionHeading icon={<Globe size={20} />}>Featured Projects</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:ring-1 hover:ring-indigo-500/50 transition-all group"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 bg-zinc-800/50 rounded-xl text-indigo-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {index % 2 === 0 ? <Layout size={20} /> : <Database size={20} />}
                    </div>
                    <a href={project.link} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-5 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded">#{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="border-t border-zinc-900 pt-10 mt-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s build something great.</h2>
          <p className="text-zinc-500 mb-6 text-sm">Open for opportunities and collaborations.</p>

          <a
            href={`mailto:${LINKS.email}`}
            className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-indigo-400 transition-colors"
          >
            {LINKS.email}
            <ExternalLink size={14} />
          </a>

          <div className="mt-10 text-zinc-600 text-xs">
            © {new Date().getFullYear()} Mayankkumar Patel. All rights reserved.
          </div>
        </footer>

      </main>
    </div>
  );
}

// --- Helper Components ---

function SocialButton({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 bg-zinc-800 rounded-xl text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-700/50"
    >
      {icon}
    </a>
  );
}
