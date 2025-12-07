import { Heart, Target, Zap, Users } from 'lucide-react';

export default function Bio() {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Qui suis-je ?
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="lego-module group">
              <div className="lego-studs mb-4" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3">Mission</h3>
                  <p className="text-slate-300 leading-relaxed">
                    DevOps & Coach chez <strong className="text-white">La Poste</strong>,
                    j'accompagne les équipes Ops vers la culture DevOps. J'aide les équipes à livrer plus vite,
                    de manière plus fiable, avec une meilleure observabilité grâce à l'excellence CI/CD.
                  </p>
                </div>
              </div>
            </div>

            <div className="lego-module group">
              <div className="lego-studs mb-4" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">Expertise</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Passionné d'IA autodidacte, j'exploite les LLMs pour la génération de tests, la documentation,
                    les runbooks et l'automatisation intelligente. Je construis le futur du DevOps avec l'IA.
                  </p>
                </div>
              </div>
            </div>

            <div className="lego-module group">
              <div className="lego-studs mb-4" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">Passion</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Innovation, automatisation et amélioration continue. Créateur de
                    <strong className="text-white"> wearedevops.fr</strong>, une plateforme éducative
                    gratuite pour l'apprentissage DevOps et la communauté.
                  </p>
                </div>
              </div>
            </div>

            <div className="lego-module group">
              <div className="lego-studs mb-4" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-500/20 rounded-lg border border-pink-500/30">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-3">Approche</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Coaching basé sur l'organisation, l'estimation, la communication et la confiance.
                    J'accompagne les équipes avec les principes CALMS, les Three Ways, la culture blameless
                    et le feedback continu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lego-module bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-cyan-500/30">
            <div className="lego-studs mb-6" />
            <div className="text-center">
              <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                Je crois en <strong className="text-cyan-400">l'automatisation</strong>,
                <strong className="text-blue-400"> la collaboration</strong> et
                <strong className="text-purple-400"> l'apprentissage continu</strong>.
                Mon objectif est de rendre le DevOps accessible, pratique et ludique tout en construisant
                des systèmes fiables dont les équipes peuvent être fières.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
