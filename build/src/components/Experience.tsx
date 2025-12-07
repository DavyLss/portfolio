import { Briefcase, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'Ingénieur DevOps - Branche Courrier',
    company: 'La Poste (BSCC)',
    period: 'Sept. 2023 - Présent',
    location: 'Limoges, France',
    responsibilities: [
      'Gestion technique d\'applications pour la branche courrier',
      'Mise en place de pipelines CI/CD (Jenkins et GitLab-CI)',
      'Déploiement d\'applications sur Openshift',
      'Création de surveillance sur Centreon et scripts shell spécifiques',
      'Création de dashboards Kibana et Grafana',
      'Gestion d\'incidents niveau 2 et 3, mise en production',
      'Gestion des données : MySQL (Résilience), Cassandra (Reaper)',
      'Création et modifications d\'ordonnanceurs VTOM',
      'Méthodologie Agile, SAFe (Jira)'
    ]
  },
  {
    title: 'Ingénieur DevOps - Squad',
    company: 'La Poste (BAII)',
    period: 'Janv. 2022 - Sept. 2023',
    location: 'Limoges, France',
    responsibilities: [
      'Gestion technique de trois applications de traçage courrier',
      'Mise en place de pipelines CI/CD (Jenkins)',
      'Déploiement d\'applications sur Openshift',
      'Création de surveillance sur Centreon et scripts shell',
      'Création de dashboards Kibana et Grafana',
      'Tests d\'exploitabilité (Jenkins, Centreon)',
      'Gestion d\'incidents niveau 2 et 3, mise en production',
      'Gestion des données : MySQL, Cassandra',
      'Méthodologie Agile, SAFe (Jira)'
    ]
  },
  {
    title: 'Analyste DevOps',
    company: 'Celios - La Poste',
    period: 'Mai 2021 - Déc. 2021',
    location: 'Limoges, France',
    responsibilities: [
      'Gestion technique d\'applications de traçage courrier et meubles connectés',
      'Mise en place de pipelines CI/CD (Jenkins)',
      'Déploiement d\'applications sur Openshift',
      'Création de surveillance sur Centreon',
      'Création de dashboards Kibana et Grafana',
      'Gestion d\'incidents niveau 2 et 3',
      'Création et modifications d\'ordonnanceurs VTOM',
      'Rédaction de documentations (Confluence, SharePoint)'
    ]
  },
  {
    title: 'Analyste d\'Exploitation',
    company: 'Celios Conseil - Sopra Steria / La Poste',
    period: 'Juil. 2019 - Mai 2021',
    location: 'Limoges, France',
    responsibilities: [
      'Gestion d\'incidents niveau 2 avec Calypso et Zelos',
      'Déploiement d\'applications sur Openshift via Jenkins',
      'Mise à jour des systèmes d\'exploitation et services',
      'Création de surveillance sur Centreon',
      'Création de dashboards Kibana et Grafana',
      'Gestion de sauvegarde : BESR, NETBACKUP, RUBRIK',
      'Création et modifications d\'ordonnanceurs VTOM'
    ]
  },
  {
    title: 'Technicien Système Réseau - Stage BTS SIO',
    company: 'Oceanis Informatique',
    period: 'Janv. 2019 - Févr. 2019',
    location: 'Givrand, France',
    responsibilities: [
      'Analyse concurrentielle d\'outils de métrologie et supervision',
      'Mise en œuvre de CENTREON et CACTI',
      'Création de surveillance technique et dashboards',
      'Création de métriques (95 percentile)',
      'Préparation d\'infrastructure VMware',
      'Configuration switch CISCO, VLAN et truncate',
      'Environnement : Linux (CentOS, Debian), CISCO, VMware'
    ]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Expérience
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Mon parcours professionnel</p>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30 -translate-x-1/2" />

            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
              <div key={index} className="relative mb-12">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950 -translate-x-1/2 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

                <div className={`ml-20 md:ml-0 md:w-[calc(50%-4rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="lego-module group hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <div className="lego-studs mb-6" />

                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                        <p className="text-slate-400 text-sm mt-1">{exp.period} | {exp.location}</p>
                      </div>
                    </div>

                    <div className="space-y-2 pl-16">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2 group/item">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <p className="text-slate-300">{resp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              );
            })}

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full -translate-x-1/2 animate-pulse shadow-[0_0_30px_rgba(34,211,238,0.8)]" />
            </div>
          </div>

          <div className="mt-20 lego-module bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-blue-500/30 text-center">
            <div className="lego-studs mb-6" />
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Construire le futur du DevOps, une automatisation à la fois.
              Passionné par l'accompagnement des équipes et la création d'un changement durable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
