
import React from 'react';
import { Timeline } from './ui/timeline';
import { GraduationCap, Award, Trophy, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const timelineData = [
    {
      title: "2025",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-brand-red w-6 h-6" />
            <h4 className="text-2xl font-bold text-white">Professional Achievements</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base font-normal mb-8">
            Focused on expanding technical expertise through competitive hackathons and specialized workshops.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-lg hover:bg-zinc-900/50 transition-colors group">
               <div className="flex justify-between items-start mb-2">
                  <Trophy className="text-yellow-500 w-5 h-5" />
                  <span className="text-xs font-display font-bold text-brand-red uppercase tracking-widest">Hackathon</span>
               </div>
               <h5 className="text-lg font-bold text-white mb-1">Caffeine AI Manila</h5>
               <p className="text-gray-500 text-sm">Frontend Developer & Competitor</p>
               <div className="mt-3 flex gap-2">
                 <span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded text-gray-400">React</span>
                 <span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded text-gray-400">AI Integration</span>
               </div>
            </div>

            <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-lg hover:bg-zinc-900/50 transition-colors group">
               <div className="flex justify-between items-start mb-2">
                  <Award className="text-blue-500 w-5 h-5" />
                  <span className="text-xs font-display font-bold text-brand-red uppercase tracking-widest">Workshop</span>
               </div>
               <h5 className="text-lg font-bold text-white mb-1">Salesforce Agentblazer</h5>
               <p className="text-gray-500 text-sm">CRM Automation Specialist</p>
               <div className="mt-3 flex gap-2">
                 <span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded text-gray-400">Automation</span>
                 <span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded text-gray-400">CRM</span>
               </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-brand-red w-6 h-6" />
            <h4 className="text-2xl font-bold text-white">Leadership Roles</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base font-normal mb-8">
            Stepped into governance roles within student organizations, managing resources and facilitating tech events.
          </p>
          <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-lg border-l-4 border-l-brand-red">
             <h5 className="text-xl font-bold text-white">Treasurer</h5>
             <p className="text-brand-red font-display text-sm uppercase tracking-widest mb-2">Codability Tech Student Org</p>
             <p className="text-gray-400 text-sm leading-relaxed">
               Managed financial resources for organization events, workshops, and hackathons. Coordinated with the executive board to ensure transparent allocation of funds for student activities.
             </p>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
           <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-brand-red w-6 h-6" />
            <h4 className="text-2xl font-bold text-white">Educational Foundation</h4>
          </div>
          <p className="text-gray-400 text-sm md:text-base font-normal mb-8">
            Commenced formal education in Information Technology, establishing a strong grounding in core computing concepts.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="relative pl-4 border-l border-white/10">
              <h5 className="text-lg font-bold text-white">National University Fairview</h5>
              <p className="text-gray-500 text-sm mb-1">Bachelor of Science in Information Technology</p>
              <p className="text-xs text-brand-red uppercase tracking-widest">Specialization: Mobile & Internet Technology</p>
            </div>
            
            <div className="relative pl-4 border-l border-white/10">
              <h5 className="text-lg font-bold text-white">Joined Codability</h5>
              <p className="text-gray-500 text-sm">Active Member</p>
              <p className="text-xs text-gray-600">Participated in initial tech seminars and peer coding sessions.</p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img
              src="/assets/ctso-logo.jpg"
              alt="University Collaboration"
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full p-2 md:p-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10 bg-white/5 grayscale hover:grayscale-0 transition-all duration-500"
            />
             <img
              src="/assets/national-university-philippines-seeklogo.png"
              alt="University Campus"
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full p-2 md:p-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10 bg-white/5 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>  
      ),
    },
  ];

  return (
    <section id="about" className="bg-[#050505]">
      <Timeline 
        data={timelineData} 
        title="My Journey" 
        description="Tracing the path from academic foundations to leadership roles and technical achievements." 
      />
    </section>
  );
};

export default About;
