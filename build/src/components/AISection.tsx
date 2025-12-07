import { Bot, Sparkles, FileText, TestTube, BookOpen, Zap } from 'lucide-react';

const aiCapabilities = [
  {
    icon: TestTube,
    title: 'Génération de tests',
    description: 'Création automatisée de tests via LLMs pour une couverture complète',
    color: 'cyan'
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Génération et maintenance intelligente de documentation',
    color: 'blue'
  },
  {
    icon: BookOpen,
    title: 'Runbooks',
    description: 'Création automatisée de runbooks pour l\'excellence opérationnelle',
    color: 'purple'
  },
  {
    icon: Zap,
    title: 'Automatisation pipelines',
    description: 'Optimisation et automatisation des workflows CI/CD par l\'IA',
    color: 'pink'
  }
];

const aiTools = [
  { name: 'OpenRouter API', color: 'cyan' },
  { name: 'OpenWebUI', color: 'blue' },
  { name: 'RAG Systems', color: 'purple' },
  { name: 'LLM Integration', color: 'pink' },
  { name: 'Custom AI Agents', color: 'indigo' },
  { name: 'AIOps', color: 'emerald' }
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' }
};

export default function AISection() {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Bot className="w-12 h-12 text-purple-400 animate-pulse" />
              <Sparkles className="w-8 h-8 text-pink-400" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                IA & Automatisation
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Exploiter l'intelligence artificielle pour l'excellence DevOps</p>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="lego-module bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-purple-500/30 mb-12">
            <div className="lego-studs mb-6" />
            <div className="text-center">
              <p className="text-xl text-slate-300 leading-relaxed">
                <strong className="text-purple-400">Passionné d'IA autodidacte</strong>, j'explore
                l'intersection entre DevOps et intelligence artificielle. Je construis des systèmes
                d'automatisation intelligents qui améliorent la productivité et la fiabilité.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              const colors = colorClasses[capability.color];

              return (
                <div
                  key={index}
                  className="lego-module group hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all"
                >
                  <div className="lego-studs mb-6" />

                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${colors.bg} rounded-lg border ${colors.border}`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>
                        {capability.title}
                      </h3>
                      <p className="text-slate-300">{capability.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lego-module border-cyan-500/30">
            <div className="lego-studs mb-6" />

            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
              Outils & Technologies IA
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {aiTools.map((tool, index) => {
                const colors = colorClasses[tool.color];
                return (
                  <span
                    key={index}
                    className={`px-4 py-2 ${colors.bg} border ${colors.border} rounded-lg ${colors.text} font-medium transition-all hover:scale-110`}
                  >
                    {tool.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
