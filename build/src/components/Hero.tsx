import { Terminal, Code2, Workflow } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="lego-grid" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Avatar avec effet glow */}
          <div className="mt-8 mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                <img 
                  src="/images/avatar.png" 
                  alt="Davy Lassechere" 
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 animate-pulse" />
              <div className="relative flex items-center gap-4 bg-slate-900/80 border border-cyan-500/30 rounded-2xl px-8 py-4 backdrop-blur-sm">
                <Terminal className="w-8 h-8 text-cyan-400" />
                <Code2 className="w-8 h-8 text-blue-400" />
                <Workflow className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
              Davy Lassechere
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="lego-brick bg-gradient-to-br from-cyan-500 to-cyan-600">
              <span className="text-sm font-bold text-white">Ingénieur DevOps</span>
            </div>
            <div className="lego-brick bg-gradient-to-br from-blue-500 to-blue-600">
              <span className="text-sm font-bold text-white">Coach</span>
            </div>
            <div className="lego-brick bg-gradient-to-br from-purple-500 to-purple-600">
              <span className="text-sm font-bold text-white">Innovateur IA</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Je construis le futur du DevOps : j'accompagne les équipes, j'automatise partout où c'est utile et j'explore les possibilités de l'IA pour aller plus loin.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-white overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Me contacter</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="#projects"
              className="px-8 py-4 bg-slate-900 border-2 border-cyan-500/50 rounded-lg font-bold text-cyan-400 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all"
            >
              Voir les projets
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-8">
            <div className="pipeline-node">
              <div className="text-3xl font-bold text-cyan-400">5+</div>
              <div className="text-sm text-slate-400 mt-1">Ans d'XP</div>
            </div>
            <div className="pipeline-connector" />
            <div className="pipeline-node">
              <div className="text-3xl font-bold text-blue-400">∞</div>
              <div className="text-sm text-slate-400 mt-1">Automatisations</div>
            </div>
            <div className="pipeline-connector" />
            <div className="pipeline-node">
              <div className="text-3xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-slate-400 mt-1">Passion</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
