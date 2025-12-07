import { Mail, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

const links = [
  {
    icon: Globe,
    label: 'blog.lassechere.fr',
    url: 'https://blog.lassechere.fr',
    color: 'cyan',
    logo: null
  },
  {
    icon: Globe,
    label: 'wearedevops.fr',
    url: 'https://wearedevops.fr',
    color: 'blue',
    logo: '/images/wearedevops-logo.png'
  },
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/DavyLss',
    color: 'indigo',
    logo: null
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/davy-l-4199b0159/',
    color: 'purple',
    logo: null
  }
];

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]' }
};

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Me contacter
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Construisons quelque chose d'incroyable ensemble</p>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="lego-module group hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all mb-12">
            <div className="lego-studs mb-8" />

            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-4 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <a
                href="mailto:davy@lassechere.fr"
                className="text-xl text-cyan-400 hover:text-cyan-300 transition-colors inline-block"
              >
                davy@lassechere.fr
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {links.map((link, index) => {
              const Icon = link.icon;
              const colors = colorClasses[link.color];

              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`lego-module group ${colors.glow} transition-all cursor-pointer transform hover:scale-105`}
                >
                  <div className="lego-studs mb-6" />

                  <div className="flex flex-col items-center text-center">
                    {link.logo ? (
                      <div className={`p-2 ${colors.bg} rounded-lg border ${colors.border} mb-4`}>
                        <img src={link.logo} alt={link.label} className="w-10 h-10 object-contain" />
                      </div>
                    ) : (
                      <div className={`p-3 ${colors.bg} rounded-lg border ${colors.border} mb-4`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                    )}

                    <h3 className={`font-bold ${colors.text} mb-2`}>
                      {link.label}
                    </h3>

                    <ExternalLink className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </a>
              );
            })}
          </div>

          <footer className="text-center">
            <div className="lego-module bg-gradient-to-r from-slate-900/30 to-slate-800/30 border-slate-700/30">
              <div className="lego-studs mb-4 opacity-50" />
              <p className="text-slate-400">
                Construit avec passion en React, TypeScript et Tailwind CSS
              </p>
              <p className="text-slate-500 text-sm mt-2">
                © 2025 Davy Lassechere. Tous droits réservés.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
