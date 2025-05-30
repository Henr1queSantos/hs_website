import React from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, User, Star } from 'lucide-react'; // Importing icons from lucide-react
import profilePic from './Images/henrique.jpeg';

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#about" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-300 rounded-md p-2">
            HS
          </a>
          <div className="flex space-x-6">
            <NavItem href="#about" icon={<User size={18} />} text="About" />
            <NavItem href="#skills" icon={<Star size={18} />} text="Skills" />
            <NavItem href="#projects" icon={<Code size={18} />} text="Projects" />
            <NavItem href="#experience" icon={<Briefcase size={18} />} text="Experience" />
            <NavItem href="#contact" icon={<Mail size={18} />} text="Contact" />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-24">
        {/* About Me Section */}
        <section id="about" className="min-h-screen flex items-center justify-center py-16">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-3xl text-center border border-gray-700">
            <h2 className="text-5xl font-extrabold text-indigo-400 mb-6 leading-tight">
              Hello, I'm <span className="text-white">Henrique Santos</span>
            </h2>
            <div className="flex justify-center mb-8">
              <img
                src={profilePic}
                alt="Henrique Santos"
                className="w-64 h-64 rounded-full border-4 border-indigo-400 object-cover shadow-md"
              />
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              "I'm a software developer and tech enthusiast with a genuine passion for creating cool digital solutions.
              For over five years, I've been diving deep into full-stack development, cloud computing, and mobile apps, always aiming to weave creativity into every line of clean code I write.
              It's incredibly rewarding to build things that have a real impact!"
            </p>
            <div className="flex justify-center space-x-6">
              <SocialLink href="https://github.com/Henr1queSantos" icon={<Github size={24} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/henrique-santos-5608a8139/" icon={<Linkedin size={24} />} label="LinkedIn" />
              <SocialLink href="henrique.moraesps@gmail.com" icon={<Mail size={24} />} label="Email" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-16">
          <h2 className="text-4xl font-bold text-indigo-400 mb-12">My Skills</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-4xl w-full border border-gray-700">
            <div className="flex justify-center mb-8 space-x-4">
              <span className="text-sm px-4 py-2 rounded-full bg-indigo-600 text-white shadow-md">Frequently Used</span>
              <span className="text-sm px-4 py-2 rounded-full bg-gray-600 text-gray-300 shadow-md">Occasionally Used</span>
            </div>

            <SkillCategory title="Programming Languages">
              <SkillTag name="Python" type="frequently" />
              <SkillTag name="JavaScript" type="frequently" />
              <SkillTag name="TypeScript" type="frequently" />
              <SkillTag name="HTML" type="frequently" />
              <SkillTag name="CSS/SCSS" type="frequently" />
              <SkillTag name="Go" type="occasionally" />
              <SkillTag name="Ruby" type="occasionally" />
              <SkillTag name="Bash Scripting" type="occasionally" />
            </SkillCategory>

            <SkillCategory title="Frameworks & Libraries">
              <SkillTag name="React" type="frequently" />
              <SkillTag name="Next.js" type="frequently" />
              <SkillTag name="Tailwind CSS" type="frequently" />
              <SkillTag name="Django" type="frequently" />
              <SkillTag name="Flask" type="frequently" />
              <SkillTag name="FastAPI" type="occasionally" />
              <SkillTag name="Material UI" type="occasionally" />
              <SkillTag name="Chakra UI" type="occasionally" />
              <SkillTag name="Bootstrap" type="occasionally" />
              <SkillTag name="Redux" type="occasionally" />
            </SkillCategory>

            <SkillCategory title="Databases & Tools">
              <SkillTag name="SQL (PostgreSQL, MySQL)" type="frequently" />
              <SkillTag name="Git" type="frequently" />
              <SkillTag name="Docker" type="frequently" />
              <SkillTag name="AWS" type="occasionally" />
              <SkillTag name="Kubernetes" type="occasionally" />
            </SkillCategory>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-16">
          <h2 className="text-4xl font-bold text-indigo-400 mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce solution with user authentication, product management, and payment integration."
              technologies={['React', 'Node.js', 'Express', 'MongoDB', 'Stripe']}
              githubLink="#"
              liveLink="#"
            />
            <ProjectCard
              title="Task Management App"
              description="A responsive web application for managing daily tasks with drag-and-drop functionality."
              technologies={['Vue.js', 'Firebase', 'Tailwind CSS']}
              githubLink="#"
              liveLink="#"
            />
            <ProjectCard
              title="Personal Blog"
              description="A static blog site built with a modern framework, featuring markdown support and SEO optimization."
              technologies={['Next.js', 'Markdown', 'Vercel']}
              githubLink="#"
              liveLink="#"
            />
            <ProjectCard
              title="AI Chatbot Integration"
              description="Integrated a custom AI chatbot into a customer support portal to handle common queries."
              technologies={['Python', 'Flask', 'OpenAI API', 'React']}
              githubLink="#"
              liveLink="#"
            />
            <ProjectCard
              title="Real-time Collaborative Whiteboard"
              description="A web-based whiteboard application allowing multiple users to draw and collaborate in real-time."
              technologies={['React', 'Socket.IO', 'Canvas API']}
              githubLink="#"
              liveLink="#"
            />
            <ProjectCard
              title="Data Visualization Dashboard"
              description="Interactive dashboard to visualize complex datasets, providing insights through charts and graphs."
              technologies={['D3.js', 'React', 'Python', 'Pandas']}
              githubLink="#"
              liveLink="#"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex flex-col items-center justify-center py-16">
          <h2 className="text-4xl font-bold text-indigo-400 mb-12">Work Experience</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-3xl w-full border border-gray-700">
            <ExperienceEntry
              title="Senior Software Engineer"
              company="Tech Solutions Inc."
              duration="Jan 2022 - Present"
              description="Led the development of scalable backend services using Python and Go, improving system performance by 30%. Mentored junior developers and contributed to architectural design."
            />
            <ExperienceEntry
              title="Software Developer"
              company="Innovate Corp."
              duration="Jul 2019 - Dec 2021"
              description="Developed and maintained web applications using React and Node.js. Implemented new features and optimized existing code for better user experience."
            />
            <ExperienceEntry
              title="Junior Developer Intern"
              company="Startup Hub"
              duration="May 2018 - Aug 2018"
              description="Assisted in front-end development tasks, bug fixing, and learned best practices in a fast-paced agile environment."
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-16">
          <h2 className="text-4xl font-bold text-indigo-400 mb-12">Get in Touch</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full border border-gray-700">
            <p className="text-lg text-gray-300 mb-8 text-center">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 resize-y"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 text-center text-gray-400 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

// NavItem Component for navigation links
const NavItem = ({ href, icon, text }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
  >
    {icon}
    <span className="hidden sm:inline">{text}</span> {/* Hide text on small screens */}
  </a>
);

// SocialLink Component for social media links
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-400 hover:text-indigo-300 transition-transform duration-300 transform hover:scale-110 p-2 rounded-full border border-indigo-400 hover:border-indigo-300"
    aria-label={label}
  >
    {icon}
  </a>
);

// SkillCategory Component to group skills
const SkillCategory = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {children}
    </div>
  </div>
);

// SkillTag Component to display individual skills with frequency indicator
const SkillTag = ({ name, type }) => {
  const baseClasses = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md";
  const frequentlyClasses = "bg-indigo-600 text-white hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700";
  const occasionallyClasses = "bg-gray-600 text-gray-300 hover:bg-gray-700 border border-gray-600 hover:border-gray-700";

  return (
    <span
      className={`${baseClasses} ${type === 'frequently' ? frequentlyClasses : occasionallyClasses}`}
    >
      {name}
    </span>
  );
};

// ProjectCard Component for displaying project details
const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col h-full">
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 mb-4 flex-grow">{description}</p>
    <div className="mb-4">
      <h4 className="text-md font-semibold text-indigo-300 mb-2">Technologies Used:</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
      >
        <Github size={18} className="mr-2" /> GitHub
      </a>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
      >
        <Code size={18} className="mr-2" /> Live Demo
      </a>
    </div>
  </div>
);

// ExperienceEntry Component for displaying work experience
const ExperienceEntry = ({ title, company, duration, description }) => (
  <div className="mb-8 last:mb-0 p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
    <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
    <p className="text-indigo-300 text-lg mb-1">{company}</p>
    <p className="text-gray-400 text-sm mb-3">{duration}</p>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

export default App;
