import { GitBranch, Cloud, Container, Shield, Gauge, Users, Bot, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'cyan',
    skills: [
      'Pipelines CI/CD',
      'GitLab CI',
      'GitHub Actions',
      'Infrastructure as Code',
      'Ansible',
      'Terraform',
      'Kubernetes',
      'Docker',
      'Orchestration de conteneurs'
    ]
  },
  {
    title: 'Plateforme & Ops',
    icon: Server,
    color: 'blue',
    skills: [
      'Linux / Debian',
      'Proxmox',
      'LXC',
      'On-Prem & VPS',
      'Monitoring',
      'Alerting',
      'Gestion des logs',
      'Fiabilité',
      'SLO/SLI'
    ]
  },
  {
    title: 'Observabilité',
    icon: Gauge,
    color: 'purple',
    skills: [
      'Métriques & Dashboards',
      'Analyse de logs',
      'Tracing',
      'Définition SLO/SLI',
      'Réduction du toil',
      'Optimisation performance',
      'Réponse aux incidents',
      'Post-Mortems'
    ]
  },
  {
    title: 'Sécurité',
    icon: Shield,
    color: 'pink',
    skills: [
      'DevSecOps',
      'Sécurité Shift-Left',
      'Scanners de sécurité',
      'Zero Trust',
      'Gestion des secrets',
      'Conformité',
      'Gestion des vulnérabilités'
    ]
  },
  {
    title: 'IA & Automatisation',
    icon: Bot,
    color: 'indigo',
    skills: [
      'Intégration LLM',
      'OpenRouter API',
      'OpenWebUI',
      'Génération de tests',
      'Automatisation doc',
      'Génération de runbooks',
      'Pipelines intelligents',
      'Systèmes RAG'
    ]
  },
  {
    title: 'Compétences humaines',
    icon: Users,
    color: 'emerald',
    skills: [
      'Coaching',
      'Construction d\'équipe',
      'Communication',
      'Conduite du changement',
      'Culture CALMS',
      'Culture blameless',
      'Pédagogie',
      'Mentorat'
    ]
  }
];

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', glow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]' }
};

export default function Skills() {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Compétences & Expertise
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Les briques de mes connaissances techniques</p>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = colorClasses[category.color];

              return (
                <div
                  key={index}
                  className={`lego-module group ${colors.glow} transition-all duration-300`}
                >
                  <div className="lego-studs mb-6" />

                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 ${colors.bg} rounded-lg border ${colors.border}`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 ${colors.bg} border ${colors.border} rounded-lg text-sm ${colors.text} font-medium transition-all hover:scale-105`}
                      >
                        {skill}
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
