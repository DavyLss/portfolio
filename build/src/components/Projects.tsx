import { ExternalLink, GitBranch, Database, Shield, Blocks, Radio, Globe } from 'lucide-react';

const projects = [
  {
    title: 'wearedevops.fr',
    icon: Globe,
    color: 'cyan',
    description: 'Plateforme complète de formation DevOps avec des ressources éducatives gratuites pour la communauté',
    tags: ['Éducation', 'DevOps', 'Communauté', 'Gratuit'],
    link: 'https://wearedevops.fr'
  },
  {
    title: 'ExplorIA',
    icon: Database,
    color: 'blue',
    description: 'Environnement d\'anonymisation complet avec système RAG pour le traitement intelligent de documents',
    tags: ['IA', 'LLM', 'RAG', 'Confidentialité', 'OpenWebUI'],
    link: null
  },
  {
    title: 'Pipelines CI/CD avancés',
    icon: GitBranch,
    color: 'purple',
    description: 'Architectures de pipelines complexes avec triggers, cache, validation humaine et workflows automatisés',
    tags: ['GitLab CI', 'GitHub Actions', 'Automatisation', 'DevOps'],
    link: null
  },
  {
    title: 'Plateforme de Runbooks',
    icon: Blocks,
    color: 'pink',
    description: 'Plateforme interne de génération et d\'exécution de runbooks opérationnels automatisés',
    tags: ['Automatisation', 'Opérations', 'Documentation', 'IA'],
    link: null
  },
  {
    title: 'Tunnels Cloudflared',
    icon: Shield,
    color: 'indigo',
    description: 'Implémentation d\'accès sécurisé via Cloudflare Tunnels sans exposition de ports',
    tags: ['Sécurité', 'Réseau', 'Cloudflare', 'Zero Trust'],
    link: null
  },
  {
    title: 'Homelab Proxmox',
    icon: Radio,
    color: 'emerald',
    description: 'Serveurs personnels avec stacks Docker complexes : Audiobookshelf, Ghost CMS, Kasm Workspaces, etc.',
    tags: ['Infrastructure', 'Docker', 'Auto-hébergé', 'Proxmox'],
    link: null
  }
];

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string; tag: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]', tag: 'bg-cyan-500/20 border-cyan-500/40' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]', tag: 'bg-blue-500/20 border-blue-500/40' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]', tag: 'bg-purple-500/20 border-purple-500/40' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]', tag: 'bg-pink-500/20 border-pink-500/40' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]', tag: 'bg-indigo-500/20 border-indigo-500/40' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]', tag: 'bg-emerald-500/20 border-emerald-500/40' }
};

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Projets notables
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Construire le futur, un commit à la fois</p>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const colors = colorClasses[project.color];

              return (
                <div
                  key={index}
                  className={`lego-module group ${colors.glow} transition-all duration-300 cursor-pointer transform hover:scale-105`}
                  onClick={() => project.link && window.open(project.link, '_blank')}
                >
                  <div className="lego-studs mb-6" />

                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 ${colors.bg} rounded-lg border ${colors.border}`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    {project.link && (
                      <ExternalLink className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    )}
                  </div>

                  <h3 className={`text-2xl font-bold ${colors.text} mb-3`}>
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 ${colors.tag} border rounded text-xs font-medium ${colors.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
