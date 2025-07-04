import {
  ArrowRight,
  ChevronDown,
  Code,
  Database,
  GitBranch,
  Server,
  Zap,
} from "lucide-react";

interface HeroProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-gradient-xy">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        {/* Floating code elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-lg animate-float flex items-center justify-center">
          <Code className="w-8 h-8 text-blue-400" />
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-lg animate-float-delayed flex items-center justify-center">
          <Database className="w-6 h-6 text-purple-400" />
        </div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-500/10 rounded-lg animate-float-slow flex items-center justify-center">
          <Server className="w-10 h-10 text-cyan-400" />
        </div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-green-500/10 rounded-lg animate-float flex items-center justify-center">
          <GitBranch className="w-5 h-5 text-green-400" />
        </div>
      </div>

      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-700/50">
            <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-gray-300 text-sm font-medium">
              Available for new opportunities
            </span>
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-fade-in-up">
          Hi, I'm
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Nur Alimul Haq
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delayed">
          A Full Stack Developer | Innovating with Code & Creativity
          <span className="block mt-2 text-lg text-gray-400">
            Building robust, scalable web applications with modern technologies
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delayed-2">
          <button
            onClick={() => scrollToSection("projects")}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-2xl flex items-center space-x-2"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-full font-bold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            Let's Connect
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-gray-300 transition-colors duration-200 p-2 rounded-full bg-gray-800/30 backdrop-blur-sm"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
