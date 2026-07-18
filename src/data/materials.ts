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
    name: '2-50 DINÂMICAS DE PORTUGUÊS',
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    itemsCount: 50,
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
    id: 'folder-5',
    name: '4-DINÂMICAS PRONTAS PARA AULA',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    itemsCount: 5,
    items: [
      {
        id: 'slide-1',
        title: 'Masterclass: Regência Verbal Interativa',
        category: 'Dinâmicas Prontas',
        level: 'Ensino Médio e Vestibulares',
        bncc: 'EM13LP08',
        duration: '45 min',
        objective: 'Apresentar de forma dinâmica a regência dos principais verbos cobrados em vestibulares e concursos públicos usando dinâmicas lúdicas e visuais modernos.',
        materialsNeeded: ['Quadro ou Projetor', 'Guia de Dinâmicas Prontas (incluso)'],
        stepByStep: [
          'Abra o guia interativo de regência verbal.',
          'Explique a dupla regência de verbos chave (Aspirar, Assistir, Visar, Preferir) usando imagens divertidas de duplo sentido.',
          'Peça para os alunos realizarem os desafios em conjunto.',
          'Aplique o Quiz de Verificação de Aprendizado incluso nos últimos blocos.'
        ],
        tip: 'Esqueça aulas lotadas de textos copiosos! Nossas dinâmicas são projetadas seguindo metodologias ativas para prender a atenção até do aluno mais disperso.'
      }
    ]
  }
];

export const bonusItems = [
  {
    id: 'bonus-2',
    title: '50+ Atividades de Língua Portuguesa para Imprimir',
    description: 'Atividades alinhadas à BNCC para todos os níveis do Fundamental II e Médio. Exercícios prontos com gabarito detalhado para economizar suas noites de planejamento.',
    realPrice: 'R$ 24,90',
    badge: '📝 Atividades Prontas'
  },
  {
    id: 'bonus-3',
    title: 'Dinâmicas Prontas para Aula (Editáveis)',
    description: 'Dinâmicas e jogos lúdicos de alto engajamento cobrindo os principais tópicos: análise sintática, concordância, regência, crase e coesão textual.',
    realPrice: 'R$ 18,90',
    badge: '📽️ Dinâmicas Premium'
  },
  {
    id: 'bonus-5',
    title: 'Guia de Planejamento BNCC Sem Mistério',
    description: 'Planejamento anual completo e estruturado para o Ensino Fundamental II e Médio. Códigos de habilidades e metodologias já descritos, facilitando a entrega na coordenação.',
    realPrice: 'R$ 12,90',
    badge: '📅 Alinhado à BNCC'
  }
];

export const clientTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Mariana Silva',
    role: 'Professora de Literatura',
    school: 'Ensino de Literatura e Gramática',
    text: 'Meninas, passando pra agradecer pelo material de Língua Portuguesa! É simplesmente maravilhoso e ajudou demais a organizar minhas aulas dessa semana. Muito obrigada mesmo! 😍🙌',
    replyText: 'Que alegria ler isso, Mariana! ❤️ Ficamos muito felizes em ajudar. Agradecemos muito pela compra e pela confiança no nosso trabalho!',
    date: 'Hoje',
    timeSender: '10:35',
    timeReply: '10:41',
    theme: 'whatsapp',
    whatsappScreenshot: true,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    onlineStatus: 'online'
  },
  {
    id: 'test-2',
    author: 'Ricardo Oliveira',
    role: 'Professor de Redação',
    school: 'Ensino de Língua Portuguesa e Redação',
    text: 'Boa tarde! Comprei o Kit de Redação e achei excelente. Facilitou muito a dinâmica das minhas aulas e as correções de texto. Parabéns pelo material, valeu cada centavo!',
    replyText: 'Sensacional, Ricardo! Muito obrigado pelo feedback e pela compra do material. Ficamos muito felizes que tenha gostado! 🚀',
    date: 'Hoje',
    timeSender: '15:35',
    timeReply: '15:41',
    theme: 'whatsapp',
    whatsappScreenshot: true,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    onlineStatus: 'online'
  },
  {
    id: 'test-3',
    author: 'Ana Paula Costa',
    role: 'Professora de Gramática',
    school: 'Ensino Fundamental II e Médio',
    text: 'Comprei o Pacote Completo de materiais e estou chocada com a qualidade! Muito prático, completo e já vem prontinho para imprimir e usar nas aulas. Super recomendo!',
    replyText: 'Nós que agradecemos imensamente pela compra e pela confiança, Ana Paula! 🌟 Que você tenha excelentes aulas com os materiais!',
    date: 'Hoje',
    timeSender: '10:35',
    timeReply: '10:42',
    theme: 'whatsapp',
    whatsappScreenshot: true,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    onlineStatus: 'online'
  },
  {
    id: 'test-4',
    author: 'profe_juliana',
    role: 'Professora de Língua Portuguesa',
    school: 'Ensino de Redação e Gramática',
    text: 'Oii! Só queria passar para agradecer por esse material de Português maravilhoso. Ele economizou muito o meu tempo de planejamento essa semana. Gratidão! ❤️',
    replyText: 'Ficamos com o coração super quentinho com isso, Juliana! 🥰 Muito obrigado pela compra e por nos escolher como parceiros das suas aulas!',
    date: 'Hoje 16:15',
    timeSender: '16:15',
    theme: 'instagram',
    instagramUsername: 'profe_juliana',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150',
    onlineStatus: 'Online agora'
  },
  {
    id: 'test-5',
    author: 'eduardo_prof',
    role: 'Professor de Literatura',
    school: 'Ensino Médio e Pré-Vestibular',
    text: 'Cara, que material excelente! Comprei para usar com as minhas turmas de português e o engajamento foi total. Parabéns pela qualidade das atividades!',
    replyText: 'Que massa, Eduardo! Muito obrigado pelo apoio e pela compra do material. Desejamos muito sucesso com suas turmas! 🚀📚',
    date: 'Hoje 19:32',
    timeSender: '19:32',
    theme: 'instagram',
    instagramUsername: 'eduardo_prof',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    onlineStatus: 'Online há 1 h'
  }
];

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'O acesso chega na hora?',
    answer: 'Sim! Assim que o seu pagamento for aprovado (o Pix é aprovado em menos de 2 minutos), você é direcionado automaticamente para a página de download imediato para baixar o material.'
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
    answer: 'O Pacote Básico (R$ 10) inclui o arquivo principal com +50 Dinâmicas Prontas e o caderno com +50 Atividades para Imprimir. Já o Pacote Completo (R$ 27,90) é a nossa melhor escolha e inclui tudo isso mais os 3 Bônus Exclusivos (Dinâmicas Prontas para Aula, Guia BNCC Anual e Atividades Prontas para Imprimir).'
  },
  {
    id: 'faq-5',
    question: 'E se eu não gostar do material?',
    answer: 'Oferecemos uma Garantia Incondicional de 7 dias. Se por qualquer motivo você achar que o material não serve para suas aulas ou não economizou seu tempo, basta enviar um e-mail ou mensagem no WhatsApp do suporte que devolvemos 100% do seu dinheiro, sem perguntas e sem complicação.'
  },
  {
    id: 'faq-6',
    question: 'Funciona para aulas Online e Presenciais?',
    answer: 'Com certeza! Praticamente todas as dinâmicas e jogos do kit de Português possuem instruções de adaptação tanto para o modelo presencial (usando materiais impressos e quadro) quanto para o modelo digital (usando recursos projetados, salas simultâneas de videoconferência ou quizzes digitais).'
  }
];
