import type { Animal, TaxonRank } from "./types";

// -----------------------------------------------------------------------------
// Lista-semente do "Bicho do Dia".
//
// ATENÇÃO (curadoria): estes dados foram preenchidos com valores amplamente
// aceitos, mas o público é técnico — vale a REVISÃO por um(a) veterinário(a)/
// biólogo(a) antes de expandir. Só entradas com `revisado: true` entram no
// sorteio diário e no autocomplete. Para crescer até ~365, basta adicionar
// novas entradas aqui; o motor não muda.
//
// Convenções de valores (mantê-los idênticos garante que a comparação bata):
//  - reino:        Animalia | Protozoa | Fungi | Bacteria
//  - simetria:     Bilateral | Assimétrica | (null = não se aplica)
//  - reproducao:   Vivíparo | Ovíparo | Ovovivíparo | Assexuada | Sexuada e assexuada
//  - fecundacao:   Interna | Externa | (null)
//  - desenvolvimento: Direto | Indireto | (null)
//  - habitat:      Terrestre | Aéreo | Aquático (dulcícola) | Aquático (marinho) | Parasitário
//  - dieta:        Onívoro | Carnívoro | Herbívoro | Hematófago | Parasita
//  - zoonose:      Sim | Não
//  - relevancia:   Pet | Produção | Silvestre | Vetor | Parasita | Agente
//  - termorregulacao: Endotérmico | Ectotérmico | (null)
//  - revestimento: Pelos | Penas | Escamas | Pele nua | Exoesqueleto quitinoso | Cutícula | Tegumento | (null)
//  - respiracao:   Pulmonar | Branquial | Cutânea e pulmonar | Traqueal | Cutânea | Anaeróbia | (null)
//  - esqueleto:    Endoesqueleto ósseo | Endoesqueleto cartilaginoso | Exoesqueleto quitinoso | Hidrostático | (null)
//  - excrecao:     Ureotélico | Uricotélico | Amoniotélico | (null)
//  - conservacao:  LC | NT | VU | EN | CR | (null = não avaliado / não se aplica)
//  - massaKg:      número aproximado | (null = não se aplica)
// -----------------------------------------------------------------------------

/** Monta a taxonomia (Filo → Classe → Ordem → Família) de forma legível. */
function tax(filo: string, classe: string, ordem: string, familia: string): TaxonRank[] {
  return [
    { rank: "Filo", name: filo },
    { rank: "Classe", name: classe },
    { rank: "Ordem", name: ordem },
    { rank: "Família", name: familia },
  ];
}

export const ANIMALS: Animal[] = [
  {
    id: "cao",
    nomeComum: "Cão",
    nomeCientifico: "Canis lupus familiaris",
    emoji: "🐕",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Carnivora", "Canidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Onívoro", zoonose: "Sim", relevancia: "Pet",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: null, massaKg: 15,
    },
  },
  {
    id: "gato",
    nomeComum: "Gato",
    nomeCientifico: "Felis catus",
    emoji: "🐈",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Carnivora", "Felidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Carnívoro", zoonose: "Sim", relevancia: "Pet",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: null, massaKg: 4,
    },
  },
  {
    id: "bovino",
    nomeComum: "Boi / Vaca",
    nomeCientifico: "Bos taurus",
    emoji: "🐄",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Artiodactyla", "Bovidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Herbívoro", zoonose: "Sim", relevancia: "Produção",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: null, massaKg: 600,
    },
  },
  {
    id: "cavalo",
    nomeComum: "Cavalo",
    nomeCientifico: "Equus caballus",
    emoji: "🐎",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Perissodactyla", "Equidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Herbívoro", zoonose: "Sim", relevancia: "Produção",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: null, massaKg: 450,
    },
  },
  {
    id: "galinha",
    nomeComum: "Galinha",
    nomeCientifico: "Gallus gallus domesticus",
    emoji: "🐔",
    revisado: true,
    taxonomia: tax("Chordata", "Aves", "Galliformes", "Phasianidae"),
    campos: {
      reino: "Animalia", grupo: "Ave", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Onívoro", zoonose: "Sim", relevancia: "Produção",
      termorregulacao: "Endotérmico", revestimento: "Penas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: null, massaKg: 2,
    },
  },
  {
    id: "morcego-vampiro",
    nomeComum: "Morcego-vampiro",
    nomeCientifico: "Desmodus rotundus",
    emoji: "🦇",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Chiroptera", "Phyllostomidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Aéreo", dieta: "Hematófago", zoonose: "Sim", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: "LC", massaKg: 0.04,
    },
  },
  {
    id: "jararaca",
    nomeComum: "Jararaca",
    nomeCientifico: "Bothrops jararaca",
    emoji: "🐍",
    revisado: true,
    taxonomia: tax("Chordata", "Reptilia", "Squamata", "Viperidae"),
    campos: {
      reino: "Animalia", grupo: "Réptil", simetria: "Bilateral",
      // Bothrops são vivíparos (viviparidade matrotrófica) — bom "pega-ratão".
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Ectotérmico", revestimento: "Escamas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: "LC", massaKg: 0.5,
    },
  },
  {
    id: "sapo-cururu",
    nomeComum: "Sapo-cururu",
    nomeCientifico: "Rhinella marina",
    emoji: "🐸",
    revisado: true,
    taxonomia: tax("Chordata", "Amphibia", "Anura", "Bufonidae"),
    campos: {
      reino: "Animalia", grupo: "Anfíbio", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Externa", desenvolvimento: "Indireto",
      habitat: "Terrestre", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Ectotérmico", revestimento: "Pele nua", respiracao: "Cutânea e pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: "LC", massaKg: 1.0,
    },
  },
  {
    id: "tilapia",
    nomeComum: "Tilápia-do-nilo",
    nomeCientifico: "Oreochromis niloticus",
    emoji: "🐟",
    revisado: true,
    taxonomia: tax("Chordata", "Actinopterygii", "Cichliformes", "Cichlidae"),
    campos: {
      reino: "Animalia", grupo: "Peixe ósseo", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Externa", desenvolvimento: "Direto",
      habitat: "Aquático (dulcícola)", dieta: "Onívoro", zoonose: "Não", relevancia: "Produção",
      termorregulacao: "Ectotérmico", revestimento: "Escamas", respiracao: "Branquial",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Amoniotélico",
      conservacao: null, massaKg: 0.8,
    },
  },
  {
    id: "tubarao-azul",
    nomeComum: "Tubarão-azul",
    nomeCientifico: "Prionace glauca",
    emoji: "🦈",
    revisado: true,
    taxonomia: tax("Chordata", "Chondrichthyes", "Carcharhiniformes", "Carcharhinidae"),
    campos: {
      reino: "Animalia", grupo: "Peixe cartilaginoso", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Aquático (marinho)", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Ectotérmico", revestimento: "Escamas", respiracao: "Branquial",
      esqueleto: "Endoesqueleto cartilaginoso", excrecao: "Ureotélico",
      conservacao: "NT", massaKg: 80,
    },
  },
  {
    id: "carrapato-estrela",
    nomeComum: "Carrapato-estrela",
    nomeCientifico: "Amblyomma sculptum",
    emoji: "🕷️",
    revisado: true,
    taxonomia: tax("Arthropoda", "Arachnida", "Ixodida", "Ixodidae"),
    campos: {
      reino: "Animalia", grupo: "Aracnídeo", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Indireto",
      habitat: "Parasitário", dieta: "Hematófago", zoonose: "Sim", relevancia: "Vetor",
      termorregulacao: "Ectotérmico", revestimento: "Exoesqueleto quitinoso", respiracao: "Traqueal",
      esqueleto: "Exoesqueleto quitinoso", excrecao: "Uricotélico",
      conservacao: null, massaKg: null,
    },
  },
  {
    id: "aedes",
    nomeComum: "Mosquito-da-dengue",
    nomeCientifico: "Aedes aegypti",
    emoji: "🦟",
    revisado: true,
    taxonomia: tax("Arthropoda", "Insecta", "Diptera", "Culicidae"),
    campos: {
      reino: "Animalia", grupo: "Inseto", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Indireto",
      habitat: "Aéreo", dieta: "Hematófago", zoonose: "Sim", relevancia: "Vetor",
      termorregulacao: "Ectotérmico", revestimento: "Exoesqueleto quitinoso", respiracao: "Traqueal",
      esqueleto: "Exoesqueleto quitinoso", excrecao: "Uricotélico",
      conservacao: null, massaKg: null,
    },
  },
  {
    id: "toxocara",
    nomeComum: "Lombriga-do-cão",
    nomeCientifico: "Toxocara canis",
    emoji: "🪱",
    revisado: true,
    taxonomia: tax("Nematoda", "Chromadorea", "Ascaridida", "Toxocaridae"),
    campos: {
      reino: "Animalia", grupo: "Nematódeo", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Indireto",
      habitat: "Parasitário", dieta: "Parasita", zoonose: "Sim", relevancia: "Parasita",
      termorregulacao: "Ectotérmico", revestimento: "Cutícula", respiracao: "Cutânea",
      esqueleto: "Hidrostático", excrecao: "Amoniotélico",
      conservacao: null, massaKg: null,
    },
  },
  {
    id: "dipylidium",
    nomeComum: "Tênia-do-cão",
    nomeCientifico: "Dipylidium caninum",
    emoji: "🪱",
    revisado: true,
    taxonomia: tax("Platyhelminthes", "Cestoda", "Cyclophyllidea", "Dipylidiidae"),
    campos: {
      reino: "Animalia", grupo: "Cestódeo", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Indireto",
      habitat: "Parasitário", dieta: "Parasita", zoonose: "Sim", relevancia: "Parasita",
      termorregulacao: "Ectotérmico", revestimento: "Tegumento", respiracao: "Anaeróbia",
      esqueleto: "Hidrostático", excrecao: "Amoniotélico",
      conservacao: null, massaKg: null,
    },
  },
  {
    id: "toxoplasma",
    nomeComum: "Toxoplasma",
    nomeCientifico: "Toxoplasma gondii",
    emoji: "🦠",
    revisado: true,
    taxonomia: tax("Apicomplexa", "Conoidasida", "Eucoccidiorida", "Sarcocystidae"),
    campos: {
      reino: "Protozoa", grupo: "Protozoário", simetria: "Assimétrica",
      reproducao: "Sexuada e assexuada", fecundacao: null, desenvolvimento: null,
      habitat: "Parasitário", dieta: "Parasita", zoonose: "Sim", relevancia: "Agente",
      termorregulacao: null, revestimento: null, respiracao: null,
      esqueleto: null, excrecao: null,
      conservacao: null, massaKg: null,
    },
  },
  {
    id: "trypanosoma",
    nomeComum: "Trypanosoma (doença de Chagas)",
    nomeCientifico: "Trypanosoma cruzi",
    emoji: "🦠",
    revisado: true,
    taxonomia: tax("Euglenozoa", "Kinetoplastea", "Trypanosomatida", "Trypanosomatidae"),
    campos: {
      reino: "Protozoa", grupo: "Protozoário", simetria: "Assimétrica",
      reproducao: "Assexuada", fecundacao: null, desenvolvimento: null,
      habitat: "Parasitário", dieta: "Parasita", zoonose: "Sim", relevancia: "Agente",
      termorregulacao: null, revestimento: null, respiracao: null,
      esqueleto: null, excrecao: null,
      conservacao: null, massaKg: null,
    },
  },
  {
    id: "microsporum",
    nomeComum: "Fungo da dermatofitose",
    nomeCientifico: "Microsporum canis",
    emoji: "🍄",
    revisado: true,
    taxonomia: tax("Ascomycota", "Eurotiomycetes", "Onygenales", "Arthrodermataceae"),
    campos: {
      reino: "Fungi", grupo: "Fungo", simetria: null,
      reproducao: "Sexuada e assexuada", fecundacao: null, desenvolvimento: null,
      habitat: "Parasitário", dieta: "Parasita", zoonose: "Sim", relevancia: "Agente",
      termorregulacao: null, revestimento: null, respiracao: null,
      esqueleto: null, excrecao: null,
      conservacao: null, massaKg: null,
    },
  },
  {
    id: "brucella",
    nomeComum: "Brucella (brucelose)",
    nomeCientifico: "Brucella abortus",
    emoji: "🦠",
    revisado: true,
    taxonomia: tax("Pseudomonadota", "Alphaproteobacteria", "Hyphomicrobiales", "Brucellaceae"),
    campos: {
      reino: "Bacteria", grupo: "Bactéria", simetria: null,
      reproducao: "Assexuada", fecundacao: null, desenvolvimento: null,
      habitat: "Parasitário", dieta: "Parasita", zoonose: "Sim", relevancia: "Agente",
      termorregulacao: null, revestimento: null, respiracao: null,
      esqueleto: null, excrecao: null,
      conservacao: null, massaKg: null,
    },
  },

  // ===========================================================================
  // Pets exóticos
  // ===========================================================================
  {
    id: "coelho",
    nomeComum: "Coelho",
    nomeCientifico: "Oryctolagus cuniculus",
    emoji: "🐰",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Lagomorpha", "Leporidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Herbívoro", zoonose: "Não", relevancia: "Pet",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: null, massaKg: 2,
    },
  },
  {
    id: "hamster",
    nomeComum: "Hamster-sírio",
    nomeCientifico: "Mesocricetus auratus",
    emoji: "🐹",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Rodentia", "Cricetidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Onívoro", zoonose: "Não", relevancia: "Pet",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: null, massaKg: 0.12,
    },
  },
  {
    id: "calopsita",
    nomeComum: "Calopsita",
    nomeCientifico: "Nymphicus hollandicus",
    emoji: "🦜",
    revisado: true,
    taxonomia: tax("Chordata", "Aves", "Psittaciformes", "Cacatuidae"),
    campos: {
      reino: "Animalia", grupo: "Ave", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Aéreo", dieta: "Herbívoro", zoonose: "Não", relevancia: "Pet",
      termorregulacao: "Endotérmico", revestimento: "Penas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: null, massaKg: 0.09,
    },
  },
  {
    id: "iguana",
    nomeComum: "Iguana-verde",
    nomeCientifico: "Iguana iguana",
    emoji: "🦎",
    revisado: true,
    taxonomia: tax("Chordata", "Reptilia", "Squamata", "Iguanidae"),
    campos: {
      reino: "Animalia", grupo: "Réptil", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Herbívoro", zoonose: "Não", relevancia: "Pet",
      termorregulacao: "Ectotérmico", revestimento: "Escamas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: null, massaKg: 5,
    },
  },
  {
    id: "betta",
    nomeComum: "Peixe-betta",
    nomeCientifico: "Betta splendens",
    emoji: "🐠",
    revisado: true,
    taxonomia: tax("Chordata", "Actinopterygii", "Anabantiformes", "Osphronemidae"),
    campos: {
      reino: "Animalia", grupo: "Peixe ósseo", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Externa", desenvolvimento: "Direto",
      habitat: "Aquático (dulcícola)", dieta: "Carnívoro", zoonose: "Não", relevancia: "Pet",
      termorregulacao: "Ectotérmico", revestimento: "Escamas", respiracao: "Branquial",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Amoniotélico",
      conservacao: null, massaKg: 0.004,
    },
  },

  // ===========================================================================
  // Cerrado brasileiro
  // ===========================================================================
  {
    id: "lobo-guara",
    nomeComum: "Lobo-guará",
    nomeCientifico: "Chrysocyon brachyurus",
    emoji: "🐺",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Carnivora", "Canidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Onívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: "NT", massaKg: 23,
    },
  },
  {
    id: "tamandua-bandeira",
    nomeComum: "Tamanduá-bandeira",
    nomeCientifico: "Myrmecophaga tridactyla",
    emoji: "🐜",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Pilosa", "Myrmecophagidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: "VU", massaKg: 30,
    },
  },
  {
    id: "tatu-canastra",
    nomeComum: "Tatu-canastra",
    nomeCientifico: "Priodontes maximus",
    emoji: "🐾",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Cingulata", "Chlamyphoridae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: "VU", massaKg: 30,
    },
  },
  {
    id: "seriema",
    nomeComum: "Seriema",
    nomeCientifico: "Cariama cristata",
    emoji: "🐦",
    revisado: true,
    taxonomia: tax("Chordata", "Aves", "Cariamiformes", "Cariamidae"),
    campos: {
      reino: "Animalia", grupo: "Ave", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Penas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: "LC", massaKg: 1.5,
    },
  },
  {
    id: "jabuti",
    nomeComum: "Jabuti-piranga",
    nomeCientifico: "Chelonoidis carbonarius",
    emoji: "🐢",
    revisado: true,
    taxonomia: tax("Chordata", "Reptilia", "Testudines", "Testudinidae"),
    campos: {
      reino: "Animalia", grupo: "Réptil", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Onívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Ectotérmico", revestimento: "Escamas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: null, massaKg: 5,
    },
  },

  // ===========================================================================
  // Amazônia
  // ===========================================================================
  {
    id: "onca-pintada",
    nomeComum: "Onça-pintada",
    nomeCientifico: "Panthera onca",
    emoji: "🐆",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Carnivora", "Felidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Terrestre", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Pelos", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: "NT", massaKg: 90,
    },
  },
  {
    id: "boto-cor-de-rosa",
    nomeComum: "Boto-cor-de-rosa",
    nomeCientifico: "Inia geoffrensis",
    emoji: "🐬",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Cetacea", "Iniidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Aquático (dulcícola)", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Pele nua", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: "EN", massaKg: 100,
    },
  },
  {
    id: "arara-azul",
    nomeComum: "Arara-azul-grande",
    nomeCientifico: "Anodorhynchus hyacinthinus",
    emoji: "🦜",
    revisado: true,
    taxonomia: tax("Chordata", "Aves", "Psittaciformes", "Psittacidae"),
    campos: {
      reino: "Animalia", grupo: "Ave", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Aéreo", dieta: "Herbívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Penas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: "VU", massaKg: 1.5,
    },
  },
  {
    id: "sucuri",
    nomeComum: "Sucuri-verde",
    nomeCientifico: "Eunectes murinus",
    emoji: "🐍",
    revisado: true,
    taxonomia: tax("Chordata", "Reptilia", "Squamata", "Boidae"),
    campos: {
      reino: "Animalia", grupo: "Réptil", simetria: "Bilateral",
      // Boídeos são vivíparos.
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Aquático (dulcícola)", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Ectotérmico", revestimento: "Escamas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: null, massaKg: 30,
    },
  },
  {
    id: "pirarucu",
    nomeComum: "Pirarucu",
    nomeCientifico: "Arapaima gigas",
    emoji: "🐟",
    revisado: true,
    taxonomia: tax("Chordata", "Actinopterygii", "Osteoglossiformes", "Arapaimidae"),
    campos: {
      reino: "Animalia", grupo: "Peixe ósseo", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Externa", desenvolvimento: "Direto",
      habitat: "Aquático (dulcícola)", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Ectotérmico", revestimento: "Escamas", respiracao: "Branquial",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Amoniotélico",
      conservacao: null, massaKg: 100,
    },
  },

  // ===========================================================================
  // Litoral brasileiro
  // ===========================================================================
  {
    id: "tartaruga-verde",
    nomeComum: "Tartaruga-verde",
    nomeCientifico: "Chelonia mydas",
    emoji: "🐢",
    revisado: true,
    taxonomia: tax("Chordata", "Reptilia", "Testudines", "Cheloniidae"),
    campos: {
      reino: "Animalia", grupo: "Réptil", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Aquático (marinho)", dieta: "Herbívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Ectotérmico", revestimento: "Escamas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: "EN", massaKg: 130,
    },
  },
  {
    id: "golfinho",
    nomeComum: "Golfinho-nariz-de-garrafa",
    nomeCientifico: "Tursiops truncatus",
    emoji: "🐬",
    revisado: true,
    taxonomia: tax("Chordata", "Mammalia", "Cetacea", "Delphinidae"),
    campos: {
      reino: "Animalia", grupo: "Mamífero", simetria: "Bilateral",
      reproducao: "Vivíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Aquático (marinho)", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Pele nua", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Ureotélico",
      conservacao: "LC", massaKg: 250,
    },
  },
  {
    id: "pinguim-magalhaes",
    nomeComum: "Pinguim-de-magalhães",
    nomeCientifico: "Spheniscus magellanicus",
    emoji: "🐧",
    revisado: true,
    taxonomia: tax("Chordata", "Aves", "Sphenisciformes", "Spheniscidae"),
    campos: {
      reino: "Animalia", grupo: "Ave", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Direto",
      habitat: "Aquático (marinho)", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Endotérmico", revestimento: "Penas", respiracao: "Pulmonar",
      esqueleto: "Endoesqueleto ósseo", excrecao: "Uricotélico",
      conservacao: "LC", massaKg: 4,
    },
  },
  {
    id: "polvo",
    nomeComum: "Polvo-comum",
    nomeCientifico: "Octopus vulgaris",
    emoji: "🐙",
    revisado: true,
    taxonomia: tax("Mollusca", "Cephalopoda", "Octopoda", "Octopodidae"),
    campos: {
      reino: "Animalia", grupo: "Molusco", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Indireto",
      habitat: "Aquático (marinho)", dieta: "Carnívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Ectotérmico", revestimento: "Pele nua", respiracao: "Branquial",
      esqueleto: "Hidrostático", excrecao: "Amoniotélico",
      conservacao: null, massaKg: 3,
    },
  },
  {
    id: "siri-azul",
    nomeComum: "Siri-azul",
    nomeCientifico: "Callinectes sapidus",
    emoji: "🦀",
    revisado: true,
    taxonomia: tax("Arthropoda", "Malacostraca", "Decapoda", "Portunidae"),
    campos: {
      reino: "Animalia", grupo: "Crustáceo", simetria: "Bilateral",
      reproducao: "Ovíparo", fecundacao: "Interna", desenvolvimento: "Indireto",
      habitat: "Aquático (marinho)", dieta: "Onívoro", zoonose: "Não", relevancia: "Silvestre",
      termorregulacao: "Ectotérmico", revestimento: "Exoesqueleto quitinoso", respiracao: "Branquial",
      esqueleto: "Exoesqueleto quitinoso", excrecao: "Amoniotélico",
      conservacao: null, massaKg: 0.15,
    },
  },
];

/** Apenas entradas revisadas participam do jogo (sorteio e chutes). */
export const PLAYABLE = ANIMALS.filter((a) => a.revisado);
