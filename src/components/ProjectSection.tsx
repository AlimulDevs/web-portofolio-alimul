import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description:
      "A dynamic e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing for a smooth shopping experience.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://example.com/project1",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-green-600 to-purple-600",
  },
  {
    id: 2,
    name: "Real-Time Chat App",
    description:
      "A real-time chat application built using Node.js, WebSocket, and MongoDB with end-to-end encryption and file sharing capabilities for efficient communication.",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://example.com/project2",
    tags: ["WebSocket", "Node.js", "MongoDB", "React"],
    color: "from-green-600 to-cyan-600",
  },
  {
    id: 3,
    name: "Task Management System",
    description:
      "A comprehensive project management tool with team collaboration features, built with Vue.js and Express.js backend for enhanced productivity.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://example.com/project3",
    tags: ["Vue.js", "Express", "PostgreSQL", "Docker"],
    color: "from-purple-500 to-pink-600",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div data-aos="fade-up" className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-full px-6 py-3 mb-8">
            <ExternalLink className="w-5 h-5" />
            <span className="font-bold">My Projects</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8" data-aos="fade-up">
            Featured
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-aos="fade-down">
            A showcase of applications I've built, from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              data-aos="zoom-out"
              key={project.id}
              className="group bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-4 border border-gray-700 hover:border-gray-600"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}
                >
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <span className="font-bold">View Project</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.name}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`bg-gradient-to-r ${
                        tagIndex % 3 === 0
                          ? "from-blue-900/50 to-purple-900/50 text-blue-300 border border-blue-500/20"
                          : tagIndex % 3 === 1
                          ? "from-cyan-900/50 to-blue-900/50 text-cyan-300 border border-cyan-500/20"
                          : "from-purple-900/50 to-pink-900/50 text-purple-300 border border-purple-500/20"
                      } px-4 py-2 rounded-full text-xs font-bold`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${project.color} text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-200 shadow-lg`}
                >
                  <span>View Code</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
