export type Locale = "en" | "pt-br";

export const locales: Locale[] = ["en", "pt-br"];

// Tags authored in content frontmatter (e.g. book tags) are written in
// Portuguese; this maps each one to its English equivalent for display.
// Falls back to the original tag when no translation is registered.
export const tagTranslations: Record<string, string> = {
  "Teologia": "Theology",
  "Evangelho": "Gospel",
  "Cristianismo": "Christianity",
  "Ficção": "Fiction",
  "Clássico": "Classic",
  "Literatura": "Literature",
  "Terror": "Horror",
  "Ficção Científica": "Science Fiction",
  "Distopia": "Dystopia",
  "Fantasia": "Fantasy",
  "História": "History",
  "Não-ficção": "Non-fiction",
  "Apologética": "Apologetics",
  "Mistério": "Mystery",
  "Teatro": "Theater",
  "Literatura Brasileira": "Brazilian Literature",
  "Tudo": "Everything",
};

export const translations = {
  en: {
    home: {
      role: "SOFTWARE DEVELOPER",
      greeting: "Hello, nice to meet you.",
      tagline: "Let's build something together.",
      cta: "Discover more about my work",
      titles: [
        "SOFTWARE ENGINEER",
        "TECH LEAD",
        "BRASIL!",
        "FULLSTACK DEVELOPER",
        "PROBLEM SOLVER",
        "CRYPTOGRAPHY LOVER",
        "NOT AN AI",
        "MATH SUPERFAN",
        "FATHER OF A LITTLE BOY",
      ],
    },
    contacts: {
      githubAria: "GitHub profile",
      linkedinAria: "LinkedIn profile",
      emailAria: "Copy email address",
      tooltipDefault: "Click to copy email",
      tooltipCopied: "Copied! ✔",
      tooltipFailed: "Failed to copy 😕",
    },
    projects: {
      intro:
        'Here are some of my personal projects. You can find more of them on <a href="https://github.com/titosilva" target="_blank" rel="noopener noreferrer" class="text-primary-light hover:underline underline-offset-8">my GitHub</a>.',
      empty: "No projects found.",
      viewOnGithub: "View on GitHub >>",
    },
    reading: {
      empty: "No books found.",
      myNotes: "My notes >>",
    },
    aboutMe: {
      heroSubtitle:
        '<span class="text-primary-light">Software Developer</span> and <span class="text-primary-light">Tech Lead</span> with 5+ years of experience in distributed systems, software architecture, and cloud solutions (Azure, AWS). Strong background in multiple programming languages, systems design, scalability, and technical leadership in B2B and SaaS environments.',
      headings: {
        experience: "Experience",
        education: "Education",
        highlights: "Highlights and Recognitions",
        publications: "Publications and Conferences",
      },
      titles: {
        engTechLead: "Software Engineer & Tech Lead",
        engInternship: "Software Engineer (internship)",
      },
      dates: {
        lacunaCurrent: "09/2025 - Present",
      },
      jobs: {
        lacuna: {
          bullets: [
            "Led the architecture and technical direction of a multi-tenant, white-label electronic signature SaaS platform operating across multiple countries, processing millions of documents annually under strict security, auditing, and availability requirements.",
            "Owned system design and architectural evolution, balancing scalability, consistency, and regulatory compliance across B2B and B2C multi-tenant models, and formalizing decisions through ADRs.",
            "Designed and implemented core backend services using ASP.NET Core and EF Core, while contributing to frontend applications in Angular and ensuring reliable operation in Azure production environments.",
            "Drove engineering standards through Clean Architecture, SOLID principles, design patterns, and structured code reviews, reducing production defects and improving long-term maintainability.",
            "Acted as a technical leader and point of escalation, collaborating closely with support and operations teams to improve reliability, incident response, and cross-team alignment.",
            "Mentored engineers and structured team processes (1:1s, performance reviews, retrospectives), raising technical maturity, autonomy, and knowledge sharing across teams.",
          ],
        },
        trinks: {
          bullets: [
            "Led a team in the development and evolution of a large-scale SaaS platform for management and payments, serving thousands of establishments and millions of monthly active users, with strict scalability and reliability requirements.",
            "Designed and implemented payment integrations with Pagar.Me and checkout flows, resulting in approximately 3× growth in transaction volume in 2025 compared to 2024.",
            "Served as the technical reference for the team, leading technical refinements, planning, and mentoring, as well as conducting 1:1s and performance reviews to raise overall technical maturity.",
            "Drove strategic architectural evolution, including the migration to an event-driven microservices architecture using RabbitMQ and AWS SQS, and the adoption of Redis for distributed caching and locking to improve scalability, consistency, and resilience.",
            "Standardized architecture and code quality through Clean Architecture, SOLID principles, DDD practices and ADRs, improving delivery predictability and technical governance.",
            "Designed and developed backend services using ASP.NET Core, EF Core, and NHibernate with CQRS (MediatR, MassTransit, FluentValidation), and contributed to frontend applications in React, including a shared design system distributed via NPM and documented with Storybook.",
          ],
        },
        webvoto: {
          bullets: [
            "Led the design and implementation of large-scale, mission-critical electronic voting systems, supporting elections with hundreds of thousands of voters under strict legal, auditing, and availability constraints.",
            "Owned system architecture and scalability strategy, designing high-throughput APIs with ASP.NET Core, EF Core, and SignalR to handle thousands of requests per second during peak voting periods.",
            "Acted as technical manager for infrastructure, auditing, and delivery of high-stakes electoral processes, directly interacting with stakeholders and representing the company in multiple audit and proof-of-concept evaluations.",
            "Architected and operated cloud infrastructure in Azure using Docker and Terraform, significantly reducing operational costs while improving system reliability and resilience.",
            "Established and enforced engineering best practices (code reviews, TDD, pair programming), supported by a centralized SonarQube instance to continuously evaluate code quality, technical debt, and security issues in mission-critical systems.",
            "Designed stress-testing and asynchronous processing pipelines to validate scalability in advance and enable real-time processing of millions of biometric images in short timespans without operational impact.",
          ],
        },
        novaweb: {
          bullets: [
            "Contributed to backend development of a video backup and analytics platform for a TV station, handling hundreds of terabytes of media data stored in AWS S3 Glacier (Deep Archive). Built using Python (Flask) and MySQL, with automated testing based on pytest and TDD.",
            "Designed and implemented microservices using Docker and Kubernetes, and automated deployments using Helm and GitHub Actions to support CI/CD workflows.",
            "Developed backend services for a donation platform supporting environmental campaigns, implemented in .NET and ASP.NET Core with EF Core, deployed on Google Cloud Kubernetes Engine using a service-oriented architecture.",
          ],
        },
      },
      education: {
        bullets: [
          "Authored publications and presented research at national and international conferences in blockchain, distributed systems, and cryptography.",
          'Designed and implemented cryptographic primitives for homomorphic hashing and homomorphic hiding schemes in Go (open-source project): <a href="https://github.com/titosilva/pdpr-go" class="underline text-blue-600" target="_blank">https://github.com/titosilva/pdpr-go</a>',
          'Designed and implemented blockchain architectures and custom consensus algorithms for digital rights management systems in Go (open-source project): <a href="https://github.com/titosilva/drmchain-pos" class="underline text-blue-600" target="_blank">https://github.com/titosilva/drmchain-pos</a>',
          "Served as a teaching assistant for Calculus I, delivering weekly classes, grading exams and assignments, and supporting students academically.",
        ],
      },
      highlights: {
        items: [
          "Awarded medals in national and state-level Chemistry, Mathematics, and Physics Olympiads.",
          "King of the Derivative Award — highest prize in a regional Calculus competition.",
          "1st Place, Regional Entry-Level Programming Marathon.",
          "Best Paper Award, WPOS 2023.",
        ],
      },
      publications: {
        subheadings: {
          international: "International Conferences",
          national: "National Conferences",
          journals: "Scientific Journals",
        },
        international: [
          "ICITS 2024 - International Conference on Information Technology & Systems, Chile",
          "RECSI 2024 - Reunión Española de Criptología y Seguridad de la Información, Spain",
        ],
        national: [
          "SBSeg 2024 - Brazilian Symposium on Information Security and Computer Systems, São Paulo, Brazil",
          "WPOS 2023 - Workshop at University of Brasília, Brazil",
          "WPOS 2024 - Workshop at University of Brasília, Brazil",
        ],
        journals: [
          "Journal of the Brazilian Computer Society (JBCS) — Article accepted, awaiting publication",
        ],
      },
    },
  },
  "pt-br": {
    home: {
      role: "DESENVOLVEDOR DE SOFTWARE",
      greeting: "Olá, prazer em te conhecer.",
      tagline: "Vamos construir algo juntos.",
      cta: "Descubra mais sobre meu trabalho",
      titles: [
        "ENGENHEIRO DE SOFTWARE",
        "TECH LEAD",
        "BRASIL!",
        "DESENVOLVEDOR FULLSTACK",
        "RESOLVEDOR DE PROBLEMAS",
        "APAIXONADO POR CRIPTOGRAFIA",
        "NÃO SOU UMA IA",
        "SUPERFÃ DE MATEMÁTICA",
        "PAI DE UM MENININHO",
      ],
    },
    contacts: {
      githubAria: "Perfil no GitHub",
      linkedinAria: "Perfil no LinkedIn",
      emailAria: "Copiar endereço de e-mail",
      tooltipDefault: "Clique para copiar o e-mail",
      tooltipCopied: "Copiado! ✔",
      tooltipFailed: "Falha ao copiar 😕",
    },
    projects: {
      intro:
        'Aqui estão alguns dos meus projetos pessoais. Você pode encontrar mais deles no meu <a href="https://github.com/titosilva" target="_blank" rel="noopener noreferrer" class="text-primary-light hover:underline underline-offset-8">GitHub</a>.',
      empty: "Nenhum projeto encontrado.",
      viewOnGithub: "Ver no GitHub >>",
    },
    reading: {
      empty: "Nenhum livro encontrado.",
      myNotes: "Minhas anotações >>",
    },
    aboutMe: {
      heroSubtitle:
        '<span class="text-primary-light">Desenvolvedor de Software</span> e <span class="text-primary-light">Tech Lead</span> com mais de 5 anos de experiência em sistemas distribuídos, arquitetura de software e soluções em nuvem (Azure, AWS). Forte domínio de múltiplas linguagens de programação, design de sistemas, escalabilidade e liderança técnica em ambientes B2B e SaaS.',
      headings: {
        experience: "Experiência",
        education: "Formação",
        highlights: "Destaques e Reconhecimentos",
        publications: "Publicações e Conferências",
      },
      titles: {
        engTechLead: "Software Engineer & Tech Lead",
        engInternship: "Software Engineer (estágio)",
      },
      dates: {
        lacunaCurrent: "09/2025 - Atual",
      },
      jobs: {
        lacuna: {
          bullets: [
            "Liderou a arquitetura e a direção técnica de uma plataforma SaaS de assinatura eletrônica multi-tenant e white-label, operando em múltiplos países, processando milhões de documentos por ano sob rígidos requisitos de segurança, auditoria e disponibilidade.",
            "Responsável pelo design de sistemas e pela evolução arquitetural, equilibrando escalabilidade, consistência e conformidade regulatória entre modelos multi-tenant B2B e B2C, formalizando decisões por meio de ADRs.",
            "Projetou e implementou serviços de backend essenciais usando ASP.NET Core e EF Core, além de contribuir com aplicações frontend em Angular e garantir operação confiável em ambientes de produção no Azure.",
            "Impulsionou padrões de engenharia por meio de Clean Architecture, princípios SOLID, design patterns e revisões de código estruturadas, reduzindo defeitos em produção e melhorando a manutenibilidade a longo prazo.",
            "Atuou como líder técnico e ponto de escalonamento, colaborando de perto com times de suporte e operações para melhorar confiabilidade, resposta a incidentes e alinhamento entre equipes.",
            "Mentorou engenheiros e estruturou processos de equipe (1:1s, avaliações de desempenho, retrospectivas), elevando a maturidade técnica, autonomia e compartilhamento de conhecimento entre as equipes.",
          ],
        },
        trinks: {
          bullets: [
            "Liderou uma equipe no desenvolvimento e evolução de uma plataforma SaaS de grande escala para gestão e pagamentos, atendendo milhares de estabelecimentos e milhões de usuários ativos mensais, com rígidos requisitos de escalabilidade e confiabilidade.",
            "Projetou e implementou integrações de pagamento com a Pagar.Me e fluxos de checkout, resultando em um crescimento de aproximadamente 3× no volume de transações em 2025 em relação a 2024.",
            "Atuou como referência técnica da equipe, liderando refinamentos técnicos, planejamento e mentoria, além de conduzir 1:1s e avaliações de desempenho para elevar a maturidade técnica geral.",
            "Conduziu a evolução arquitetural estratégica, incluindo a migração para uma arquitetura de microsserviços orientada a eventos usando RabbitMQ e AWS SQS, e a adoção do Redis para cache distribuído e locking, melhorando escalabilidade, consistência e resiliência.",
            "Padronizou a arquitetura e a qualidade de código por meio de Clean Architecture, princípios SOLID, práticas de DDD e ADRs, melhorando a previsibilidade de entregas e a governança técnica.",
            "Projetou e desenvolveu serviços de backend usando ASP.NET Core, EF Core e NHibernate com CQRS (MediatR, MassTransit, FluentValidation), além de contribuir com aplicações frontend em React, incluindo um design system compartilhado distribuído via NPM e documentado com Storybook.",
          ],
        },
        webvoto: {
          bullets: [
            "Liderou o design e a implementação de sistemas de votação eletrônica de grande escala e missão crítica, dando suporte a eleições com centenas de milhares de eleitores sob rígidas restrições legais, de auditoria e de disponibilidade.",
            "Responsável pela arquitetura de sistemas e pela estratégia de escalabilidade, projetando APIs de alto throughput com ASP.NET Core, EF Core e SignalR para lidar com milhares de requisições por segundo em períodos de pico de votação.",
            "Atuou como gestor técnico de infraestrutura, auditoria e entrega de processos eleitorais de alto risco, interagindo diretamente com stakeholders e representando a empresa em diversas avaliações de auditoria e prova de conceito.",
            "Arquitetou e operou infraestrutura em nuvem no Azure usando Docker e Terraform, reduzindo significativamente os custos operacionais e melhorando a confiabilidade e a resiliência do sistema.",
            "Estabeleceu e reforçou boas práticas de engenharia (code reviews, TDD, pair programming), apoiadas por uma instância centralizada do SonarQube para avaliar continuamente qualidade de código, dívida técnica e questões de segurança em sistemas de missão crítica.",
            "Projetou pipelines de teste de carga e processamento assíncrono para validar a escalabilidade antecipadamente e permitir o processamento em tempo real de milhões de imagens biométricas em curtos intervalos, sem impacto operacional.",
          ],
        },
        novaweb: {
          bullets: [
            "Contribuiu com o desenvolvimento backend de uma plataforma de backup e análise de vídeos para uma emissora de TV, lidando com centenas de terabytes de dados armazenados no AWS S3 Glacier (Deep Archive). Construída com Python (Flask) e MySQL, com testes automatizados baseados em pytest e TDD.",
            "Projetou e implementou microsserviços usando Docker e Kubernetes, e automatizou deployments usando Helm e GitHub Actions para dar suporte a fluxos de CI/CD.",
            "Desenvolveu serviços de backend para uma plataforma de doações que dá suporte a campanhas ambientais, implementada em .NET e ASP.NET Core com EF Core, hospedada no Google Cloud Kubernetes Engine usando uma arquitetura orientada a serviços.",
          ],
        },
      },
      education: {
        bullets: [
          "Publicou trabalhos e apresentou pesquisas em conferências nacionais e internacionais nas áreas de blockchain, sistemas distribuídos e criptografia.",
          'Projetou e implementou primitivas criptográficas para esquemas de hash homomórfico e homomorphic hiding em Go (projeto open-source): <a href="https://github.com/titosilva/pdpr-go" class="underline text-blue-600" target="_blank">https://github.com/titosilva/pdpr-go</a>',
          'Projetou e implementou arquiteturas de blockchain e algoritmos de consenso customizados para sistemas de gestão de direitos digitais em Go (projeto open-source): <a href="https://github.com/titosilva/drmchain-pos" class="underline text-blue-600" target="_blank">https://github.com/titosilva/drmchain-pos</a>',
          "Atuou como monitor de Cálculo I, ministrando aulas semanais, corrigindo provas e trabalhos, e apoiando os alunos academicamente.",
        ],
      },
      highlights: {
        items: [
          "Premiado com medalhas em olimpíadas nacionais e estaduais de Química, Matemática e Física.",
          "Prêmio Rei da Derivada — maior prêmio de uma competição regional de Cálculo.",
          "1º Lugar, Maratona Regional de Programação para Iniciantes.",
          "Prêmio de Melhor Artigo, WPOS 2023.",
        ],
      },
      publications: {
        subheadings: {
          international: "Conferências Internacionais",
          national: "Conferências Nacionais",
          journals: "Periódicos Científicos",
        },
        international: [
          "ICITS 2024 - Conferência Internacional de Tecnologia da Informação e Sistemas, Chile",
          "RECSI 2024 - Reunión Española de Criptología y Seguridad de la Información, Espanha",
        ],
        national: [
          "SBSeg 2024 - Simpósio Brasileiro de Segurança da Informação e de Sistemas Computacionais, São Paulo, Brasil",
          "WPOS 2023 - Workshop na Universidade de Brasília, Brasil",
          "WPOS 2024 - Workshop na Universidade de Brasília, Brasil",
        ],
        journals: [
          "Revista da Sociedade Brasileira de Computação (JBCS) — Artigo aceito, aguardando publicação",
        ],
      },
    },
  },
} as const;
