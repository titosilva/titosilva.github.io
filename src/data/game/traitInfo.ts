// Glossário das características: descrição e valores possíveis de cada uma,
// exibidos na dialog de ajuda (botão "?"). Bilíngue (pt-br / en).
//
// Os valores listados são o vocabulário canônico do jogo — mantê-los em sincronia
// com os usados em `animals.ts` garante que a comparação e a ajuda batam.

export interface TraitValueInfo {
  value: string;
  glossPt: string;
  glossEn: string;
}

export interface TraitInfo {
  descPt: string;
  descEn: string;
  values: TraitValueInfo[];
  /** Nota extra (ex.: como a seta / o "mesmo ramo" funcionam). */
  notePt?: string;
  noteEn?: string;
}

const NA = {
  value: "N/A",
  glossPt: "Não se aplica ao grupo do organismo.",
  glossEn: "Not applicable to the organism's group.",
};

export const TRAIT_INFO: Record<string, TraitInfo> = {
  reino: {
    descPt: "O agrupamento mais alto ao qual o organismo pertence — o primeiro grande filtro do jogo.",
    descEn: "The highest grouping the organism belongs to — the game's first broad filter.",
    values: [
      { value: "Animalia", glossPt: "Animais (multicelulares, heterótrofos).", glossEn: "Animals (multicellular, heterotrophic)." },
      { value: "Protozoa", glossPt: "Protozoários: eucariontes unicelulares.", glossEn: "Protozoa: single-celled eukaryotes." },
      { value: "Fungi", glossPt: "Fungos: eucariontes com parede de quitina.", glossEn: "Fungi: eukaryotes with chitin cell walls." },
      { value: "Bacteria", glossPt: "Bactérias: procariontes unicelulares.", glossEn: "Bacteria: single-celled prokaryotes." },
    ],
  },
  taxonomia: {
    descPt: "A classificação do organismo, do posto mais alto ao mais baixo: Filo › Classe › Ordem › Família.",
    descEn: "The organism's classification, from highest to lowest rank: Phylum › Class › Order › Family.",
    values: [],
    notePt: "Amarelo indica que o chute compartilha os primeiros postos com o alvo (mesmo ramo), mesmo que a família seja diferente.",
    noteEn: "Yellow means the guess shares the first ranks with the target (same branch), even if the family differs.",
  },
  grupo: {
    descPt: "O grupo biológico usual do organismo.",
    descEn: "The organism's common biological group.",
    values: [
      { value: "Mamífero", glossPt: "Vertebrado com glândulas mamárias e pelos.", glossEn: "Vertebrate with mammary glands and hair." },
      { value: "Ave", glossPt: "Vertebrado com penas.", glossEn: "Vertebrate with feathers." },
      { value: "Réptil", glossPt: "Vertebrado ectotérmico com escamas.", glossEn: "Ectothermic vertebrate with scales." },
      { value: "Anfíbio", glossPt: "Vertebrado de pele úmida, geralmente com metamorfose.", glossEn: "Moist-skinned vertebrate, usually with metamorphosis." },
      { value: "Peixe ósseo", glossPt: "Peixe com esqueleto ósseo (Actinopterygii).", glossEn: "Fish with a bony skeleton (Actinopterygii)." },
      { value: "Peixe cartilaginoso", glossPt: "Tubarões e raias (Chondrichthyes).", glossEn: "Sharks and rays (Chondrichthyes)." },
      { value: "Aracnídeo", glossPt: "Artrópode de 8 patas (ex.: carrapatos).", glossEn: "Eight-legged arthropod (e.g. ticks)." },
      { value: "Inseto", glossPt: "Artrópode de 6 patas.", glossEn: "Six-legged arthropod." },
      { value: "Crustáceo", glossPt: "Artrópode geralmente aquático (ex.: siris, caranguejos).", glossEn: "Usually aquatic arthropod (e.g. crabs, shrimps)." },
      { value: "Molusco", glossPt: "Invertebrado de corpo mole (ex.: polvos, lulas).", glossEn: "Soft-bodied invertebrate (e.g. octopuses, squids)." },
      { value: "Nematódeo", glossPt: "Verme cilíndrico (Nematoda).", glossEn: "Roundworm (Nematoda)." },
      { value: "Cestódeo", glossPt: "Verme achatado segmentado (tênias).", glossEn: "Segmented flatworm (tapeworms)." },
      { value: "Protozoário", glossPt: "Eucarionte unicelular.", glossEn: "Single-celled eukaryote." },
      { value: "Fungo", glossPt: "Organismo do reino Fungi.", glossEn: "Organism of kingdom Fungi." },
      { value: "Bactéria", glossPt: "Procarionte unicelular.", glossEn: "Single-celled prokaryote." },
    ],
  },
  simetria: {
    descPt: "Como o corpo se organiza em relação a eixos.",
    descEn: "How the body is organized around axes.",
    values: [
      { value: "Bilateral", glossPt: "Dois lados espelhados (esquerdo/direito).", glossEn: "Two mirrored sides (left/right)." },
      { value: "Radial", glossPt: "Partes dispostas ao redor de um eixo central.", glossEn: "Parts arranged around a central axis." },
      { value: "Assimétrica", glossPt: "Sem plano de simetria definido.", glossEn: "No defined symmetry plane." },
      NA,
    ],
  },
  reproducao: {
    descPt: "Como o organismo gera descendentes.",
    descEn: "How the organism produces offspring.",
    values: [
      { value: "Vivíparo", glossPt: "Embrião se desenvolve dentro da mãe; nascem filhotes.", glossEn: "Embryo develops inside the mother; live birth." },
      { value: "Ovíparo", glossPt: "Põe ovos; desenvolvimento fora do corpo.", glossEn: "Lays eggs; development outside the body." },
      { value: "Ovovivíparo", glossPt: "Ovos eclodem dentro da mãe.", glossEn: "Eggs hatch inside the mother." },
      { value: "Assexuada", glossPt: "Sem gametas (ex.: divisão binária).", glossEn: "No gametes (e.g. binary fission)." },
      { value: "Sexuada e assexuada", glossPt: "Alterna as duas formas no ciclo de vida.", glossEn: "Alternates both modes in its life cycle." },
    ],
  },
  fecundacao: {
    descPt: "Onde ocorre o encontro dos gametas.",
    descEn: "Where the gametes meet.",
    values: [
      { value: "Interna", glossPt: "Dentro do corpo da fêmea.", glossEn: "Inside the female's body." },
      { value: "Externa", glossPt: "No meio (ex.: na água).", glossEn: "In the environment (e.g. in water)." },
      NA,
    ],
  },
  desenvolvimento: {
    descPt: "Como o indivíduo se desenvolve após o nascimento/eclosão.",
    descEn: "How the individual develops after birth/hatching.",
    values: [
      { value: "Direto", glossPt: "Jovem semelhante ao adulto, sem metamorfose.", glossEn: "Young resembles the adult, no metamorphosis." },
      { value: "Indireto", glossPt: "Passa por larva/metamorfose.", glossEn: "Goes through a larval stage/metamorphosis." },
      NA,
    ],
  },
  habitat: {
    descPt: "O ambiente onde o organismo vive.",
    descEn: "The environment where the organism lives.",
    values: [
      { value: "Terrestre", glossPt: "Vive em terra firme.", glossEn: "Lives on land." },
      { value: "Aéreo", glossPt: "Vida associada ao voo.", glossEn: "Life associated with flight." },
      { value: "Aquático (dulcícola)", glossPt: "Água doce.", glossEn: "Freshwater." },
      { value: "Aquático (marinho)", glossPt: "Água salgada.", glossEn: "Saltwater." },
      { value: "Parasitário", glossPt: "Vive dentro/sobre um hospedeiro.", glossEn: "Lives in/on a host." },
    ],
  },
  dieta: {
    descPt: "O tipo de alimentação predominante.",
    descEn: "The predominant feeding type.",
    values: [
      { value: "Onívoro", glossPt: "Come de tudo (vegetal e animal).", glossEn: "Eats both plants and animals." },
      { value: "Carnívoro", glossPt: "Alimenta-se de outros animais.", glossEn: "Feeds on other animals." },
      { value: "Herbívoro", glossPt: "Alimenta-se de vegetais.", glossEn: "Feeds on plants." },
      { value: "Hematófago", glossPt: "Alimenta-se de sangue.", glossEn: "Feeds on blood." },
      { value: "Parasita", glossPt: "Obtém nutrientes de um hospedeiro.", glossEn: "Obtains nutrients from a host." },
    ],
  },
  zoonose: {
    descPt: "Zoonose é uma doença transmissível entre animais e humanos. Aqui indica se a espécie está envolvida (como reservatório, vetor ou agente).",
    descEn: "A zoonosis is a disease transmissible between animals and humans. Here it flags whether the species is involved (as reservoir, vector or agent).",
    values: [
      { value: "Sim", glossPt: "Envolvida em alguma zoonose.", glossEn: "Involved in some zoonosis." },
      { value: "Não", glossPt: "Sem envolvimento zoonótico relevante.", glossEn: "No relevant zoonotic involvement." },
    ],
  },
  relevancia: {
    descPt: "O papel do organismo do ponto de vista veterinário.",
    descEn: "The organism's role from a veterinary standpoint.",
    values: [
      { value: "Pet", glossPt: "Animal de companhia.", glossEn: "Companion animal." },
      { value: "Produção", glossPt: "Animal de produção/pecuária.", glossEn: "Livestock/production animal." },
      { value: "Silvestre", glossPt: "Animal selvagem.", glossEn: "Wild animal." },
      { value: "Vetor", glossPt: "Transmite um agente (ex.: mosquito, carrapato).", glossEn: "Transmits an agent (e.g. mosquito, tick)." },
      { value: "Parasita", glossPt: "Verme/parasita metazoário.", glossEn: "Metazoan parasite/worm." },
      { value: "Agente", glossPt: "Agente etiológico (protozoário, fungo, bactéria).", glossEn: "Etiologic agent (protozoan, fungus, bacterium)." },
    ],
  },
  termorregulacao: {
    descPt: "Como o organismo regula a temperatura corporal.",
    descEn: "How the organism regulates body temperature.",
    values: [
      { value: "Endotérmico", glossPt: "Produz o próprio calor (\"sangue quente\").", glossEn: "Produces its own heat (\"warm-blooded\")." },
      { value: "Ectotérmico", glossPt: "Depende do ambiente (\"sangue frio\").", glossEn: "Depends on the environment (\"cold-blooded\")." },
      NA,
    ],
  },
  revestimento: {
    descPt: "O que reveste o corpo.",
    descEn: "What covers the body.",
    values: [
      { value: "Pelos", glossPt: "Cobertura de pelos (mamíferos).", glossEn: "Hair covering (mammals)." },
      { value: "Penas", glossPt: "Penas (aves).", glossEn: "Feathers (birds)." },
      { value: "Escamas", glossPt: "Escamas (répteis, peixes).", glossEn: "Scales (reptiles, fish)." },
      { value: "Pele nua", glossPt: "Pele úmida sem anexos (anfíbios).", glossEn: "Bare moist skin (amphibians)." },
      { value: "Exoesqueleto quitinoso", glossPt: "Carapaça de quitina (artrópodes).", glossEn: "Chitin exoskeleton (arthropods)." },
      { value: "Cutícula", glossPt: "Cutícula resistente (nematódeos).", glossEn: "Tough cuticle (roundworms)." },
      { value: "Tegumento", glossPt: "Tegumento absortivo (cestódeos).", glossEn: "Absorptive tegument (tapeworms)." },
      NA,
    ],
  },
  respiracao: {
    descPt: "Como ocorrem as trocas gasosas.",
    descEn: "How gas exchange occurs.",
    values: [
      { value: "Pulmonar", glossPt: "Pulmões.", glossEn: "Lungs." },
      { value: "Branquial", glossPt: "Brânquias.", glossEn: "Gills." },
      { value: "Cutânea e pulmonar", glossPt: "Pela pele e pulmões (anfíbios).", glossEn: "Through skin and lungs (amphibians)." },
      { value: "Traqueal", glossPt: "Sistema de traqueias (insetos, aracnídeos).", glossEn: "Tracheal system (insects, arachnids)." },
      { value: "Cutânea", glossPt: "Difusão pela superfície do corpo.", glossEn: "Diffusion across the body surface." },
      { value: "Anaeróbia", glossPt: "Metabolismo sem oxigênio (alguns parasitas).", glossEn: "Oxygen-independent metabolism (some parasites)." },
      NA,
    ],
  },
  esqueleto: {
    descPt: "O tipo de suporte estrutural do corpo.",
    descEn: "The body's structural support.",
    values: [
      { value: "Endoesqueleto ósseo", glossPt: "Esqueleto interno de osso.", glossEn: "Internal bony skeleton." },
      { value: "Endoesqueleto cartilaginoso", glossPt: "Esqueleto interno de cartilagem.", glossEn: "Internal cartilaginous skeleton." },
      { value: "Exoesqueleto quitinoso", glossPt: "Carapaça externa de quitina.", glossEn: "External chitin shell." },
      { value: "Hidrostático", glossPt: "Suporte por pressão de fluidos (vermes).", glossEn: "Fluid-pressure support (worms)." },
      NA,
    ],
  },
  excrecao: {
    descPt: "O principal produto nitrogenado excretado.",
    descEn: "The main nitrogenous waste excreted.",
    values: [
      { value: "Ureotélico", glossPt: "Excreta ureia como principal composto nitrogenado.", glossEn: "Excretes urea as its main nitrogenous compound." },
      { value: "Uricotélico", glossPt: "Excreta ácido úrico como principal composto nitrogenado.", glossEn: "Excretes uric acid as its main nitrogenous compound." },
      { value: "Amoniotélico", glossPt: "Excreta amônia como principal composto nitrogenado.", glossEn: "Excretes ammonia as its main nitrogenous compound." },
      NA,
    ],
  },
  conservacao: {
    descPt: "Categoria de risco de extinção segundo a Lista Vermelha da IUCN.",
    descEn: "Extinction-risk category per the IUCN Red List.",
    values: [
      { value: "LC", glossPt: "Pouco preocupante.", glossEn: "Least Concern." },
      { value: "NT", glossPt: "Quase ameaçada.", glossEn: "Near Threatened." },
      { value: "VU", glossPt: "Vulnerável.", glossEn: "Vulnerable." },
      { value: "EN", glossPt: "Em perigo.", glossEn: "Endangered." },
      { value: "CR", glossPt: "Criticamente em perigo.", glossEn: "Critically Endangered." },
      NA,
    ],
    notePt: "A seta indica se o alvo é mais (↑) ou menos (↓) ameaçado que o seu chute.",
    noteEn: "The arrow shows whether the target is more (↑) or less (↓) threatened than your guess.",
  },
  massaKg: {
    descPt: "Massa corporal aproximada do organismo, em quilogramas.",
    descEn: "Approximate body mass of the organism, in kilograms.",
    values: [NA],
    notePt: "Verde quando o valor é próximo (±15%). A seta indica se o alvo é mais pesado (↑) ou mais leve (↓) que o seu chute. Não se aplica a micro-organismos.",
    noteEn: "Green when the value is close (±15%). The arrow shows whether the target is heavier (↑) or lighter (↓) than your guess. Not applicable to micro-organisms.",
  },
};
