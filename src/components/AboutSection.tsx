import { Code } from 'lucide-react'


function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div data-aos="fade-right" className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-full px-6 py-3">
                <Code className="w-5 h-5" />
                <span className="font-bold">About Me</span>
              </div>
              
              <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight" data-aos="fade-right">
                Full Stack
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed" data-aos="fade-right">
                I'm Nur Alimul Haq, a Full Stack Developer with a passion for building robust, scalable web applications. 
                From frontend to backend, I create seamless user experiences with modern technologies.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed" data-aos="fade-right">
                With expertise spanning both client and server-side development, I bring innovative ideas to life through 
                clean, efficient code. Always learning, always building, always pushing the boundaries of what's possible.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-6">
                {['Problem Solver', 'Clean Code Advocate', 'Tech Innovator', 'Continuous Learner'].map((skill, index) => (
                  <span 
                  data-aos="fade-up-right"
                    key={skill} 
                    className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-green-600 to-blue-500' : 'from-cyan-500 to-blue-500'} text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in-right" data-aos="flip-left">
              <div className="relative bg-gradient-to-br from-green-600 via-blue-500 to-cyan-500 rounded-3xl p-2 transform hover:rotate-2 transition-transform duration-300">
                <div className="bg-gray-800 rounded-2xl p-8 space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-600 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-black text-white">
                      NAH
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white">Developer Stats</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-4 border border-blue-500/20">
                        <div className="text-2xl font-black text-blue-400">50+</div>
                        <div className="text-sm text-gray-400">Projects</div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl p-4 border border-cyan-500/20">
                        <div className="text-2xl font-black text-cyan-400">3+</div>
                        <div className="text-sm text-gray-400">Years</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-4 border border-purple-500/20">
                        <div className="text-2xl font-black text-purple-400">24/7</div>
                        <div className="text-sm text-gray-400">Coding</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-600-900/50 to-emerald-900/50 rounded-xl p-4 border border-green-500/20">
                        <div className="text-2xl font-black text-green-400">∞</div>
                        <div className="text-sm text-gray-400">Learning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection
