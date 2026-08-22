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
];

/** Apenas entradas revisadas participam do jogo (sorteio e chutes). */
export const PLAYABLE = ANIMALS.filter((a) => a.revisado);
