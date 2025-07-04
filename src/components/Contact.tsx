
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
   <section id="contact" className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-6 py-3 mb-8">
            <Mail className="w-5 h-5" />
            <span className="font-bold">Let's Connect!</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
            Ready to
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Collaborate?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm always open to new opportunities and collaborations. Let's chat about your next project!
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <a 
              href="mailto:contact@nurhaq.dev"
              className="group bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-gray-400 font-medium">contact@nurhaq.dev</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/nuralimulhaq"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">LinkedIn</h3>
              <p className="text-gray-400 font-medium">linkedin.com/in/nuralimulhaq</p>
            </a>
            
            <a 
              href="https://github.com/nuralimulhaq"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600 sm:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">GitHub</h3>
              <p className="text-gray-400 font-medium">github.com/nuralimulhaq</p>
            </a>
          </div>
          
          <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-8">Let's Build Something Amazing</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-900 border-2 border-gray-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg text-white placeholder-gray-400"
                />
                <input 
                  type="email" 
                  placeholder="your.email@domain.com"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-900 border-2 border-gray-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg text-white placeholder-gray-400"
                />
              </div>
              <textarea 
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-6 py-4 rounded-2xl bg-gray-900 border-2 border-gray-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-lg resize-none text-white placeholder-gray-400"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;
