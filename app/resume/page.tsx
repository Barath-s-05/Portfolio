import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-violet-900/20 py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 border border-cyan-500/20"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2">
              <span className="neon-text">Barath</span>
            </h1>
            <h2 className="text-xl text-cyan-300">Creative Developer / Student Tech Enthusiast</h2>
          </div>

          <div className="space-y-10">
            {/* Contact Section */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-2">Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass p-4 rounded-lg border border-cyan-500/20">
                  <h4 className="font-medium text-gray-300">Email</h4>
                  <a href="mailto:sanbarath0509@gmail.com" className="text-cyan-300 hover:underline">sanbarath0509@gmail.com</a>
                </div>
                <div className="glass p-4 rounded-lg border border-cyan-500/20">
                  <h4 className="font-medium text-gray-300">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/barath-s05/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">linkedin.com/in/barath-s05</a>
                </div>
                <div className="glass p-4 rounded-lg border border-cyan-500/20">
                  <h4 className="font-medium text-gray-300">GitHub</h4>
                  <a href="https://github.com/Barath-s-05" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">github.com/Barath-s-05</a>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-2">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg border border-cyan-500/20">
                  <h4 className="font-medium text-gray-300 flex items-center"><span className="mr-2">💻</span> Frontend Development</h4>
                  <p className="text-sm text-gray-400">React, Next.js, JavaScript, TypeScript</p>
                </div>
                <div className="glass p-4 rounded-lg border border-cyan-500/20">
                  <h4 className="font-medium text-gray-300 flex items-center"><span className="mr-2">🎨</span> UI/UX Design</h4>
                  <p className="text-sm text-gray-400">Figma, Responsive Design, Accessibility</p>
                </div>
                <div className="glass p-4 rounded-lg border border-cyan-500/20">
                  <h4 className="font-medium text-gray-300 flex items-center"><span className="mr-2">🧩</span> Problem Solving</h4>
                  <p className="text-sm text-gray-400">Algorithms, Data Structures, Logical Thinking</p>
                </div>
                <div className="glass p-4 rounded-lg border border-cyan-500/20">
                  <h4 className="font-medium text-gray-300 flex items-center"><span className="mr-2">🔧</span> Programming Fundamentals</h4>
                  <p className="text-sm text-gray-400">OOP, Design Patterns, Clean Code</p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-2">Education</h3>
              <div className="space-y-4">
                <div className="glass p-5 rounded-lg border border-cyan-500/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-200">B.E. Computer Science (Data Science)</h4>
                      <p className="text-cyan-300">CMR Institute of Technology</p>
                    </div>
                    <span className="text-gray-400">2023 - Present | GPA: 8.5</span>
                  </div>
                  <p className="mt-2 text-gray-400">Focus on Data Science concepts, Programming and software development, Problem-solving and system design, Applying theory through real-world technical projects</p>
                </div>
                <div className="glass p-5 rounded-lg border border-cyan-500/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-200">Higher Secondary - Computer Science</h4>
                      <p className="text-cyan-300">Adarsh Matriculation Higher Secondary School</p>
                    </div>
                    <span className="text-gray-400">2023 | 91%</span>
                  </div>
                  <p className="mt-2 text-gray-400">Strengthened interest in technology and computing while developing discipline, consistency, and performance under pressure</p>
                </div>
                <div className="glass p-5 rounded-lg border border-cyan-500/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-200">Secondary School</h4>
                      <p className="text-cyan-300">Adarsh Matriculation Higher Secondary School</p>
                    </div>
                    <span className="text-gray-400">2021 | 95%</span>
                  </div>
                  <p className="mt-2 text-gray-400">Built a strong base in mathematics, logical reasoning, and analytical thinking — the roots of problem-solving mindset</p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-2">Experience</h3>
              <div className="space-y-4">
                <div className="glass p-5 rounded-lg border border-cyan-500/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-200">Student Tech Enthusiast</h4>
                      <p className="text-cyan-300">Self-Employed</p>
                    </div>
                    <span className="text-gray-400">2020 - Present</span>
                  </div>
                  <ul className="mt-2 text-gray-400 list-disc pl-5 space-y-1">
                    <li>Developed multiple web applications focusing on user experience and modern development practices</li>
                    <li>Continuously learning and implementing new technologies and frameworks</li>
                    <li>Created intuitive user interfaces with a focus on aesthetics and usability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-2">Notable Projects</h3>
              <div className="space-y-4">
                <div className="glass p-5 rounded-lg border border-cyan-500/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-200">E-commerce Platform</h4>
                    </div>
                    <span className="text-gray-400">2023</span>
                  </div>
                  <p className="mt-2 text-gray-400">A modern e-commerce platform with real-time inventory management and secure payment processing.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-900/30 text-cyan-300">React</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-900/30 text-cyan-300">Node.js</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-900/30 text-cyan-300">MongoDB</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-10 text-center">
            <button 
              onClick={() => window.print()}
              className="glass px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors btn-hover"
            >
              Print Resume
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;