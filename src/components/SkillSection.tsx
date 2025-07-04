
import { Layers, Monitor, Server, Database, GitBranch } from "lucide-react";

const skills = [
  { id: 1, name: "Frontend", description: "React, Vue.js, HTML5, CSS3, JavaScript", icon: Monitor, color: "from-green-600 to-cyan-500" },
  { id: 2, name: "Backend", description: "Node.js, Express, Python, Java, PHP", icon: Server, color: "from-green-600 to-emerald-500" },
  { id: 3, name: "Database", description: "MongoDB, MySQL, PostgreSQL, Firebase", icon: Database, color: "from-purple-500 to-violet-500" },
  { id: 4, name: "Version Control", description: "Git, GitHub, GitLab", icon: GitBranch, color: "from-orange-500 to-red-500" },
];

const SkillSection = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div data-aos="fade-up" className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full px-6 py-3 mb-8">
              <Layers className="w-5 h-5" />
              <span className="font-bold" >My Skills</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8" data-aos="fade-up">
              Technical
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-aos="fade-down">
              A comprehensive toolkit for building modern web applications from concept to deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  data-aos="zoom-in"
                  key={skill.id} 
                  className="group bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 hover:-translate-y-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {skill.name}
                  </h3>
                  
                  <p className="text-gray-400 text-center leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default SkillSection;
