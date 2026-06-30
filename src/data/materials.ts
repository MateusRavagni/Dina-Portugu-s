import { DriveFolder, FAQItem, Testimonial } from '../types';

export const sampleFolders: DriveFolder[] = [
  {
    id: 'folder-1',
    name: '1-COMECE POR AQUI!',
    color: 'bg-amber-100 text-amber-800 border-amber-200',
    itemsCount: 3,
    items: [
      {
        id: 'dyn-welcome-1',
        title: 'Guia Rápido de Aplicação e Boas-Vindas',
        category: 'Instruções',
        level: 'Todos os Níveis',
        bncc: 'Geral',
        duration: '10 min',
        objective: 'Aprender a escolher a dinâmica certa para o momento pedagógico ideal e engajar a turma desde o primeiro minuto.',
        materialsNeeded: ['Acesso ao material impresso ou digital'],
        stepByStep: [
          'Leia as diretrizes de quebra-gelo para preparar o clima da sala de aula.',
          'Consulte o mapa de habilidades BNCC para alinhar a dinâmica ao seu plano de aula.',
          'Siga o passo a passo simplificado adaptando os recursos disponíveis na sua escola.'
        ],
        tip: 'Mantenha uma postura acolhedora e use tom de voz empolgante para que os alunos sintam que estão participando de um jogo, não de uma avaliação.'
      }
    ]
  },
  {
    id: 'folder-2',
    name: '2-400 DINÂMICAS DE PORTUGUÊS',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    itemsCount: 400,
    items: [
      {
        id: 'dyn-gram-1',
        title: 'O Detetive das Armadilhas Linguísticas',
        category: 'Gramática Contextualizada',
        level: '6º ao 9º Ano e Ensino Médio',
        bncc: 'EF69LP55 / EM13LP06',
        duration: '50 min',
        objective: 'Identificar e corrigir vícios de linguagem e ambiguidades em manchetes de jornais e posts de redes sociais de forma divertida.',
        materialsNeeded: ['Fichas de Caso Impressas (inclusas)', 'Lupas de Papel para os alunos (opcional)', 'Quadro ou lousa'],
        stepByStep: [
          'Divida a turma em equipes de "detetives" com 4 a 5 integrantes.',
          'Entregue para cada grupo uma Ficha de Caso contendo 5 manchetes ou tweets com desvios hilários (ex: "Vi o cachorro do vizinho", "Vende-se casas", "O paciente queixou-se de dor na cabeça duas vezes na semana passada").',
          'Os alunos têm 15 minutos para decifrar os desvios, classificá-los (ambiguidade, erro de concordância, cacofonia) e reescrevê-los respeitando a norma-padrão.',
          'Apresentação do caso: cada equipe apresenta a sua solução do crime linguístico explicando o porquê do erro.',
          'O professor consolida os conceitos na lousa aplicando pontuação para as equipes que corrigiram perfeitamente.'
        ],
        tip: 'Crie uma pontuação bônus para o aluno que trouxer um "crime linguístico" real fotografado na rua ou visto na internet na semana seguinte!'
      },
      {
        id: 'dyn-gram-2',
        title: 'Batalha Campal da Regência e Crase',
        category: 'Gramática Contextualizada',
        level: '9º Ano e Ensino Médio',
        bncc: 'EM13LP08',
        duration: '45 min',
        objective: 'Dominar as regras de regência verbal e nominal e o uso do acento grave através de um jogo ativo e competitivo.',
        materialsNeeded: ['Cartões de Regência (inclusos)', 'Fita crepe para desenhar a linha de batalha', 'Gabarito de Respostas Rápidas para o professor'],
        stepByStep: [
          'Trace duas linhas no chão da sala de aula com fita crepe, dividindo a sala em dois campos (Equipe A e Equipe B).',
          'O professor lê uma frase com uma lacuna que envolve regência e crase (ex: "Nós fomos ___ feira entregar os relatórios" ou "Assisto ___ novelas com atenção").',
          'Um representante de cada grupo corre até a linha média e deve levantar o cartão correto: "A", "À", "AO", "AS" ou "ÀS".',
          'Quem levantar o cartão correto primeiro e souber justificar a regência do verbo ou nome (ex: "quem vai, vai A; feira é substantivo feminino, logo A + A = À") pontua para seu time.',
          'A equipe vencedora ganha o troféu simbólico de "Mestre da Sintaxe".'
        ],
        tip: 'Use a "coroa da crase" (feita de cartolina simples) para coroar o aluno destaque da aula. Eles adoram tirar fotos e o engajamento aumenta drasticamente!'
      },
      {
        id: 'dyn-inter-1',
        title: 'Trilha Crítica: O Júri Literário Simulado',
        category: 'Interpretação e Literatura',
        level: '8º Ano ao Ensino Médio',
        bncc: 'EF89LP04 / EM13LP49',
        duration: '50 min',
        objective: 'Desenvolver a leitura crítica, interpretação de texto e oratória a partir do julgamento de personagens de obras clássicas da literatura brasileira.',
        materialsNeeded: ['Trechos impressos do livro selecionado', 'Martelo de papelão ou madeira', 'Ficha de argumentos do júri'],
        stepByStep: [
          'Selecione uma polêmica literária famosa (ex: "Capitu traiu Bentinho em Dom Casmurro?" ou "Aurélia Camargo agiu corretamente em Senhora?").',
          'Divida a classe em 3 grupos: Promotoria de Acusação, Advogados de Defesa e o Corpo de Jurados.',
          'Distribua trechos da obra contendo indícios, falas ou descrições que sirvam de provas textuais.',
          'Dê 20 minutos para que acusação e defesa encontrem argumentos textuais e estruturem suas falas de 3 minutos.',
          'Realize o debate mediado por você (o Juiz). O júri delibera e vota justificando sua decisão com base exclusivamente nas provas textuais apresentadas.',
          'Finalize explicando que, na literatura, as nuances interpretativas dependem do ponto de vista do leitor e do narrador.'
        ],
        tip: 'Excelente recurso para incentivar a leitura integral dos livros obrigatórios de vestibulares de forma empolgante, removendo o ranço da leitura forçada.'
      },
      {
        id: 'dyn-red-1',
        title: 'Cine-Roteiro: A Força da Coesão Textual',
        category: 'Produção Textual e Redação',
        level: 'Ensino Médio',
        bncc: 'EM13LP12 / Redação Enem',
        duration: '50 min',
        objective: 'Compreender a função dos conectivos e mecanismos de coesão textual reescrevendo descrições fragmentadas de cenas famosas de cinema.',
        materialsNeeded: ['Fichas de Cenas Desconectadas (inclusas)', 'Papel almaço ou folha de redação', 'Trilha sonora instrumental (opcional)'],
        stepByStep: [
          'Explique rapidamente que a coesão textual é o "cinto de segurança" do texto, conectando as ideias sem sobressaltos.',
          'Entregue uma ficha com um parágrafo que descreve uma cena famosa de suspense ou ação, porém totalmente fragmentado (ex: "O herói correu. O herói viu o monstro. O herói estava com medo. O herói não parou. O herói atacou. O monstro fugiu.").',
          'Desafie os alunos, em duplas, a reescreverem a cena utilizando pronomes, sinônimos e conectivos variados (de causa, tempo, oposição, consequência) para gerar fluidez, suspense e ritmo.',
          'Coloque uma trilha instrumental de cinema em volume baixo enquanto trabalham para aumentar o foco.',
          'Peça para 3 duplas lerem suas produções interpretando como narradores. Comparem como o texto flui melhor.'
        ],
        tip: 'Associe esta dinâmica diretamente à Competência 4 da Redação do ENEM (demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação).'
      }
    ]
  },
  {
    id: 'folder-3',
    name: '3-ATIVIDADES PARA IMPRIMIR',
    color: 'bg-green-100 text-green-800 border-green-200',
    itemsCount: 500,
    items: [
      {
        id: 'act-print-1',
        title: 'Caderno Prático de Sintaxe: Sujeito e Predicado Sem Mistérios',
        category: 'Gramática Prática',
        level: '6º ao 8º Ano',
        bncc: 'EF07LP06',
        duration: '40 min',
        objective: 'Praticar a identificação de termos essenciais da oração através de tirinhas de quadrinhos e letras de música atuais.',
        materialsNeeded: ['Atividade Impressa de Sintaxe (pronta para imprimir)'],
        stepByStep: [
          'Distribua a folha de exercícios ilustrada.',
          'Instrua os alunos a lerem as tirinhas do Chico Bento e do Calvin, sublinhando os verbos.',
          'Eles devem circular os sujeitos, classificar seus núcleos e pintar os predicados com cores diferentes.',
          'Correção coletiva com desafios rápidos na lousa.'
        ],
        tip: 'O uso de gêneros textuais curtos como tirinhas diminui a resistência dos alunos à análise sintática clássica.'
      }
    ]
  },
  {
    id: 'folder-4',
    name: '4-FLASHCARDS DE PORTUGUÊS',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    itemsCount: 250,
    items: [
      {
        id: 'flash-1',
        title: 'Flashcards de Figuras de Linguagem',
        category: 'Recurso de Memorização',
        level: '8º Ano ao Ensino Médio',
        bncc: 'EF89LP37 / EM13LP48',
        duration: '20 min',
        objective: 'Fixar e memorizar a diferença entre figuras de pensamento, de sintaxe, de som e de palavras com feedback imediato.',
        materialsNeeded: ['Kit de 250 Flashcards Imprimíveis de Português (cortados)'],
        stepByStep: [
          'Distribua os alunos em trios. Cada trio recebe um maço de flashcards (Frente: Frase literária ou de propaganda; Verso: Nome da figura de linguagem + breve explicação).',
          'O aluno A retira um card e lê a frase em voz alta (ex: "Estou morrendo de rir!").',
          'Os alunos B e C tentam adivinhar a figura (ex: Hipérbole). Quem acertar primeiro fica com a carta.',
          'Ganha quem acumular mais cards ao final de 15 minutos.'
        ],
        tip: 'Ótima atividade de revisão rápida para aplicar nos últimos 15 minutos de uma aula cansativa ou antes de uma prova bimestral.'
      }
    ]
  },
  {
    id: 'folder-5',
    name: '5-SLIDES DIDÁTICOS',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    itemsCount: 45,
    items: [
      {
        id: 'slide-1',
        title: 'Masterclass: Regência Verbal de Forma Visual',
        category: 'Slides Prontos',
        level: 'Ensino Médio e Vestibulares',
        bncc: 'EM13LP08',
        duration: '45 min',
        objective: 'Apresentar teoricamente a regência dos principais verbos cobrados em vestibulares e concursos públicos usando recursos visuais modernos.',
        materialsNeeded: ['Projetor', 'Arquivo de Slides Prontos (incluso)'],
        stepByStep: [
          'Abra os slides interativos de regência verbal.',
          'Explique a dupla regência de verbos chave (Aspirar, Assistir, Visar, Preferir) usando imagens divertidas de duplo sentido.',
          'Peça para os alunos lerem os exemplos projetados em conjunto.',
          'Aplique o Quiz de Verificação de Aprendizado incluso nos últimos slides.'
        ],
        tip: 'Esqueça slides lotados de textos! Nossos slides são projetados seguindo metodologias de design visual para prender a atenção até do aluno mais disperso.'
      }
    ]
  },
  {
    id: 'folder-6',
    name: '6-KIT PORTUGUÊS INTERATIVO',
    color: 'bg-pink-100 text-pink-800 border-pink-200',
    itemsCount: 30,
    items: [
      {
        id: 'kit-game-1',
        title: 'Jogo de Tabuleiro: O Caminho da Ortografia Oficial',
        category: 'Jogos Pedagógicos',
        level: '6º ao 9º Ano',
        bncc: 'EF67LP32',
        duration: '50 min',
        objective: 'Aplicar as regras do Novo Acordo Ortográfico, uso do Hífen, do S, X, Z e dos Porquês em um jogo lúdico coletivo.',
        materialsNeeded: ['Tabuleiro impresso colorido (incluso)', 'Dados e peões de papel', 'Cartas de Desafio'],
        stepByStep: [
          'Os alunos se organizam em grupos de 4 participantes.',
          'Cada grupo monta o tabuleiro de Ortografia na mesa.',
          'Ao jogar o dado, o peão avança e o aluno deve puxar uma Carta de Desafio Ortográfico correspondente à casa onde caiu (ex: "Escreva na folha de rascunho: autoestrada tem hífen ou não?").',
          'Se o grupo validar que a grafia está correta, ele permanece na casa, caso contrário, volta para a casa anterior.'
        ],
        tip: 'A competição sadia faz com que os alunos busquem justificar as regras entre si, fixando as normas ortográficas sem necessidade de decoreba passiva.'
      }
    ]
  }
];

export const bonusItems = [
  {
    id: 'bonus-1',
    title: '+250 Flashcards de Português Prontos',
    description: 'Centenas de Flashcards prontos e separados por temas para praticar figuras de linguagem, classes gramaticais e ortografia de forma divertida e memorável.',
    realPrice: 'R$ 19,90',
    badge: '🗂️ Vocabulário & Estilo'
  },
  {
    id: 'bonus-2',
    title: '500+ Atividades de Língua Portuguesa para Imprimir',
    description: 'Atividades alinhadas à BNCC para todos os níveis do Fundamental II e Médio. Exercícios prontos com gabarito detalhado para economizar suas noites de planejamento.',
    realPrice: 'R$ 24,90',
    badge: '📝 Atividades Prontas'
  },
  {
    id: 'bonus-3',
    title: 'Slides Prontos Para Aula (Editáveis)',
    description: 'Apresentações didáticas de alto impacto visual cobrindo os principais tópicos: análise sintática, concordância, regência, crase e coesão textual.',
    realPrice: 'R$ 18,90',
    badge: '📽️ Apresentações Premium'
  },
  {
    id: 'bonus-4',
    title: 'Kit Português Interativo',
    description: 'Um pacote de 30 materiais visuais, jogos lúdicos de tabuleiro, palavras cruzadas dinâmicas e quizzes rápidos prontos para imprimir e aplicar.',
    realPrice: 'R$ 15,90',
    badge: '🎮 Jogos & Ludicidade'
  },
  {
    id: 'bonus-5',
    title: 'Guia de Planejamento BNCC Sem Mistério',
    description: 'Planejamento anual completo e estruturado para o Ensino Fundamental II e Médio. Códigos de habilidades e metodologias já descritos, facilitando a entrega na coordenação.',
    realPrice: 'R$ 12,90',
    badge: '📅 Alinhado à BNCC'
  },
  {
    id: 'bonus-6',
    title: 'Kit de Aulas de Emergência',
    description: 'Pegou uma aula substituta ou teve um imprevisto na sua semana? Tenha em mãos um kit com 10 aulas independentes, altamente engajadoras e completas para aplicar imediatamente.',
    realPrice: 'R$ 4,74',
    badge: '🚨 Salva-Vidas do Professor'
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Gabrielle Menezes',
    role: 'Professora de Língua Portuguesa',
    school: 'Colégio Estadual Santos Dumont',
    text: 'Amei essa! As dinâmicas ainda vou aplicar, mas somente as atividades já valeram o valor que paguei, muito boas mesmo. Eu estava aqui preparando as aulas para amanhã, o que antes me tomava o domingo inteiro, e terminei tudo em 15 minutos usando o material de Análise Sintática contextualizada com tirinhas!',
    date: 'Hoje, há 15 minutos',
    whatsappScreenshot: true
  },
  {
    id: 'test-2',
    author: 'Renata Vasconcellos',
    role: 'Professora de Redação e Literatura',
    school: 'Escola Municipal Paulo Freire',
    text: 'O Júri Simulado de Dom Casmurro foi o maior sucesso que já tive com o 9º ano! Alunos que nunca abriam a boca para falar de clássicos trouxeram argumentos incríveis baseados nas pistas textuais que pegaram no slide. Eles pediram para ler o próximo livro correndo para termos outro tribunal. Incrível!',
    date: 'Ontem, às 19:42',
    whatsappScreenshot: false
  },
  {
    id: 'test-3',
    author: 'Marcio Silva',
    role: 'Professor de Gramática e Redação',
    school: 'Instituto de Educação do Paraná',
    text: 'Eu confesso que estava cético por causa do preço super em conta, mas o material me surpreendeu demais pela qualidade pedagógica. É tudo alinhado à BNCC, o Guia de Planejamento facilitou minha vida com a coordenação e o kit de aulas de emergência já me salvou duas vezes este mês. Vale cada centavo!',
    date: 'Há 3 dias',
    whatsappScreenshot: true
  },
  {
    id: 'test-4',
    author: 'Mariana Duarte',
    role: 'Professora do Ensino Fundamental II',
    school: 'Escola Particular Anglo-Líder',
    text: 'Meus alunos do 7º ano odiavam concordância nominal. Apliquei o "Detetive dos Vícios de Linguagem" e eles deram risada o tempo todo corrigindo os memes e manchetes com erros reais. Foi maravilhoso ver eles aprendendo sintaxe sem perceber! Recomendo a todos os professores.',
    date: 'Há 5 dias',
    whatsappScreenshot: false
  }
];

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'O acesso chega na hora?',
    answer: 'Sim! Assim que o seu pagamento for aprovado (o Pix é aprovado em menos de 2 minutos), você recebe o link de download instantaneamente no seu e-mail de cadastro e também no seu WhatsApp para maior comodidade.'
  },
  {
    id: 'faq-2',
    question: 'Serve para quais níveis e idades?',
    answer: 'O material foi projetado especificamente para o Ensino Fundamental II (6º ao 9º ano) e Ensino Médio (1ª a 3ª série). Temos dinâmicas e atividades graduadas de acordo com as diretrizes da BNCC para abranger desde a fixação básica de classes gramaticais até análises críticas e oratória avançada de literatura e redação.'
  },
  {
    id: 'faq-3',
    question: 'É pagamento único ou mensalidade?',
    answer: 'É pagamento único! Você paga apenas uma vez e tem acesso vitalício para baixar, imprimir e aplicar o material quantas vezes quiser ao longo dos anos.'
  },
  {
    id: 'faq-4',
    question: 'Qual a diferença entre o Pacote Básico e o Completo?',
    answer: 'O Pacote Básico (R$ 10) inclui o arquivo principal com +400 Dinâmicas Prontas e o caderno com +500 Atividades para Imprimir. Já o Pacote Completo (R$ 27,90) é a nossa melhor escolha e inclui tudo isso mais os 6 Bônus Exclusivos (+250 Flashcards, Slides Didáticos Editáveis, Kit de Jogos Interativos, Guia BNCC Anual, Kit Aulas de Emergência), além de atualizações semanais de conteúdo novo e suporte prioritário via WhatsApp.'
  },
  {
    id: 'faq-5',
    question: 'E se eu não gostar do material?',
    answer: 'Oferecemos uma Garantia Incondicional de 7 dias. Se por qualquer motivo você achar que o material não serve para suas aulas ou não economizou seu tempo, basta enviar um e-mail ou mensagem no WhatsApp do suporte que devolvemos 100% do seu dinheiro, sem perguntas e sem complicação.'
  },
  {
    id: 'faq-6',
    question: 'Funciona para aulas Online e Presenciais?',
    answer: 'Com certeza! Praticamente todas as dinâmicas e jogos do kit de Português possuem instruções de adaptação tanto para o modelo presencial (usando materiais impressos e quadro) quanto para o modelo digital (usando slides projetados, salas simultâneas de videoconferência ou quizzes digitais).'
  }
];
