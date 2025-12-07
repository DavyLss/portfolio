import { Cpu, User, Boxes, Briefcase, Rocket, Bot, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'hero', icon: Cpu, label: 'Accueil' },
  { id: 'bio', icon: User, label: 'Bio' },
  { id: 'skills', icon: Boxes, label: 'Compétences' },
  { id: 'experience', icon: Briefcase, label: 'XP' },
  { id: 'projects', icon: Rocket, label: 'Projets' },
  { id: 'ai', icon: Bot, label: 'IA' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export default function Navigation({ activeSection }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative">
        <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30" />

        <div className="flex flex-col gap-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative"
              >
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center
                  transition-all duration-300 border
                  ${isActive
                    ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                    : 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  }
                `}>
                  <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-cyan-400'}`} />
                </div>

                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-slate-900 border border-cyan-500/30 px-3 py-1.5 rounded shadow-[0_0_15px_rgba(34,211,238,0.2)] whitespace-nowrap">
                    <span className="text-cyan-400 text-sm font-medium">{item.label}</span>
                  </div>
                </div>

                {index < navItems.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-cyan-500/30 to-transparent" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
