import { useState, useEffect } from 'react';
import { CheckoutState } from '../types';
import { 
  X, 
  ChevronRight, 
  CreditCard, 
  CheckCircle2, 
  Smartphone, 
  Mail, 
  User, 
  Copy, 
  Check, 
  Clock, 
  Download,
  Lock
} from 'lucide-react';

interface CheckoutModalProps {
  state: CheckoutState;
  onClose: () => void;
}

export default function CheckoutModal({ state, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [pixTimeLeft, setPixTimeLeft] = useState(599); // 9 min 59 sec
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');

  // Errors
  const [errors, setErrors] = useState<string | null>(null);

  // PIX countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 2 && paymentMethod === 'pix' && pixTimeLeft > 0) {
      interval = setInterval(() => {
        setPixTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, paymentMethod, pixTimeLeft]);

  const handleNextStep = () => {
    if (step === 1) {
      if (!name.trim() || !email.trim() || !whatsapp.trim()) {
        setErrors('Por favor, preencha todos os campos obrigatórios para receber o material.');
        return;
      }
      if (!email.includes('@')) {
        setErrors('Insira um endereço de e-mail válido.');
        return;
      }
      setErrors(null);
      setStep(2);
    }
  };

  const handleConfirmPayment = () => {
    if (paymentMethod === 'card') {
      if (!cardNum.trim() || !cardExp.trim() || !cardCvv.trim() || !cardName.trim()) {
        setErrors('Por favor, preencha todos os dados do cartão de crédito.');
        return;
      }
    }
    setErrors(null);
    setStep(3);
  };

  const copyPixKey = () => {
    const mockPixKey = "00020101021226830014br.gov.bcb.pix2561api.dinamicasportugues.com.br/v2/cob/843749750ee948cc94c424d92e8d05cd520400005303986540527.905802BR5924DINAMICAS_PORTUGUES_20266009SAO_PAULO62070503***6304D1A2";
    navigator.clipboard.writeText(mockPixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const formatPixTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleDownloadSample = () => {
    // Generate a beautiful mock dynamics PDF content in a text file
    const sampleText = `=====================================================
DINÂMICAS DE PORTUGUÊS NA PRÁTICA - AMOSTRA DO ACERVO
=====================================================
Obrigado por adquirir/testar nosso material pedagógico!

Aqui estão 2 dinâmicas prontas para aplicar em suas turmas:

-----------------------------------------------------
DINÂMICA 1: O DETETIVE DAS ARMADILHAS LINGUÍSTICAS
-----------------------------------------------------
Público-Alvo: 6º ao 9º Ano e Ensino Médio
Habilidade BNCC: EF69LP55 / EM13LP06
Duração Estimada: 50 minutos
Objetivo: Identificar e corrigir vícios de linguagem e ambiguidades.

PASSO A PASSO:
1. Divida a turma em equipes de "detetives" com 4 a 5 integrantes.
2. Entregue para cada grupo uma "Ficha de Caso" com manchetes erradas:
   - "Vi o cachorro do vizinho" (Quem era o cachorro?)
   - "Vende-se casas" (Erro de voz passiva sintética)
   - "O paciente queixou-se de dor duas vezes na semana"
3. Dê 15 minutos para decifrar os erros e reescrever na norma padrão.
4. Peça para cada equipe apresentar a sua resolução do "crime".

DICA DO PROFESSOR:
Crie um bônus de 0.5 ponto para quem fotografar e trouxer um erro real visto na rua!

-----------------------------------------------------
DINÂMICA 2: BATALHA CAMPAL DA REGÊNCIA E CRASE
-----------------------------------------------------
Público-Alvo: 9º Ano e Ensino Médio
Habilidade BNCC: EM13LP08
Duração Estimada: 45 minutos
Objetivo: Dominar regência e crase de forma física e divertida.

PASSO A PASSO:
1. Trace duas linhas no chão com fita crepe, dividindo a sala em dois campos.
2. O professor lê uma frase com uma lacuna, ex: "Fomos ___ feira."
3. Um representante de cada time corre à linha média e ergue a placa: "A" ou "À".
4. Quem levantar a placa certa e souber justificar a regência verbal pontua.

=====================================================
CONTATO DO SUPORTE: mateusravagni@gmail.com
Desejamos a você domingos mais livres e aulas incríveis!
=====================================================`;

    const blob = new Blob([sampleText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Amostra_Dinamicas_Portugues_Pratica_2026.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!state.isOpen) return null;

  return (
    <div 
      id="checkout-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div 
        id="checkout-modal-body"
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-gray-100 overflow-hidden relative flex flex-col justify-between my-8 animate-fade-in"
      >
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-blue-400">Checkout Seguro</span>
            <h3 className="font-extrabold text-lg sm:text-xl text-white">
              {state.packageType === 'complete' ? 'Pacote Completo VIP' : 'Pacote Básico Essencial'}
            </h3>
          </div>
          
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
            id="close-checkout-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps Breadcrumb */}
        <div className="bg-slate-50 px-5 py-3 border-b border-gray-200/50 flex items-center justify-between text-xs font-mono text-gray-500">
          <span className={`flex items-center gap-1 ${step >= 1 ? 'text-blue-600 font-bold' : ''}`}>
            {step > 1 ? <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" /> : '1.'} Identificação
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className={`flex items-center gap-1 ${step >= 2 ? 'text-blue-600 font-bold' : ''}`}>
            {step > 2 ? <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" /> : '2.'} Pagamento
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className={`flex items-center gap-1 ${step >= 3 ? 'text-blue-600 font-bold' : ''}`}>
            3. Download
          </span>
        </div>

        {/* Modal Content */}
        <div className="p-6 flex-1 min-h-[300px] text-gray-700">
          
          {errors && (
            <div className="bg-red-50 text-red-700 p-3 rounded-xl text-xs font-semibold mb-4 border border-red-100">
              ⚠️ {errors}
            </div>
          )}

          {/* STEP 1: Identification Form */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-xs text-gray-500 leading-normal">
                Insira seus dados abaixo para liberarmos o seu link de download exclusivo no seu WhatsApp e e-mail.
              </p>

              <div className="space-y-3">
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                    id="checkout-name-input"
                  />
                </div>

                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    placeholder="E-mail de Entrega (onde chegarão os PDFs)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                    id="checkout-email-input"
                  />
                </div>

                <div className="relative">
                  <Smartphone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    placeholder="WhatsApp com DDD (ex: 11 99999-9999)"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                    id="checkout-whatsapp-input"
                  />
                </div>
              </div>

              {/* Package Summary Box */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="text-gray-500 block">Produto Selecionado</span>
                  <strong className="text-blue-900">
                    {state.packageType === 'complete' ? 'Pacote Completo (+6 Bônus Inclusos)' : 'Pacote Básico Essencial'}
                  </strong>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 block">Total Único</span>
                  <strong className="text-lg text-emerald-600 font-extrabold font-mono">
                    R$ {state.price.toFixed(2).replace('.', ',')}
                  </strong>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Simulated Payment Selection */}
          {step === 2 && (
            <div className="space-y-4">
              
              {/* Tabs */}
              <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer ${
                    paymentMethod === 'pix' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                  }`}
                  id="tab-pix-btn"
                >
                  <Smartphone className="w-3.5 h-3.5 text-teal-600" />
                  PIX (Imediato)
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer ${
                    paymentMethod === 'card' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                  }`}
                  id="tab-card-btn"
                >
                  <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                  Cartão de Crédito
                </button>
              </div>

              {/* PIX Render */}
              {paymentMethod === 'pix' && (
                <div className="space-y-4 text-center">
                  <div className="flex flex-col items-center">
                    {/* Simulated QR Code */}
                    <div className="bg-slate-100 p-4 rounded-2xl inline-block border-2 border-slate-200 shadow-inner">
                      <svg className="w-32 h-32 text-gray-900" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M5 5h30v30H5V5zm4 4v22h22V9H9zm57-4h30v30H66V5zm4 4v22h22V9H70zM5 66h30v30H5V66zm4 4v22h22V70H9zm57-4h30v30H66V66zm4 4v22h22V70H70zm-26-47h8v8h-8V19zm13 13h8v8h-8V32zm-13 13h8v8h-8V45zm26 0h8v8h-8V45zm13 13h8v8h-8V58zm-39 0h8v8h-8V58zm13 13h8v8h-8V71zm-26 12h8v8h-8V83z" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-amber-600 font-mono font-bold mt-3 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                      <Clock className="w-3.5 h-3.5 animate-spin" />
                      <span>Aguardando Pix: {formatPixTime(pixTimeLeft)}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <span className="text-xs text-gray-400 font-mono block">CÓDIGO PIX COPIA E COLA</span>
                    
                    <div className="flex items-center gap-2 bg-slate-50 border border-gray-200 rounded-xl p-2.5">
                      <input 
                        type="text" 
                        readOnly 
                        value="00020101021226830014br.gov.bcb.pix2561api..." 
                        className="bg-transparent border-none text-xs text-gray-500 flex-1 select-all focus:outline-none"
                      />
                      <button
                        onClick={copyPixKey}
                        className="bg-gray-900 text-white p-2 rounded-lg hover:scale-105 active:scale-95 transition flex items-center justify-center gap-1 text-xs font-bold font-mono whitespace-nowrap shrink-0"
                        id="copy-pix-btn"
                      >
                        {copiedPix ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedPix ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* CARD Render */}
              {paymentMethod === 'card' && (
                <div className="space-y-3">
                  <div className="relative">
                    <CreditCard className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      placeholder="Número do Cartão"
                      value={cardNum}
                      onChange={(e) => setCardNum(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none"
                      id="card-num-input"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Nome Impresso no Cartão"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none"
                    id="card-name-input"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Validade (MM/AA)"
                      value={cardExp}
                      onChange={(e) => setCardExp(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none"
                      id="card-exp-input"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none"
                      id="card-cvv-input"
                    />
                  </div>
                </div>
              )}

              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 flex items-center gap-2 text-[10px] text-gray-500 leading-normal">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Simulação Segura: Seus dados estão criptografados de ponta a ponta. Clique no botão de confirmação para testar o recebimento dos materiais pedagógicos.</span>
              </div>

            </div>
          )}

          {/* STEP 3: SUCCESS STATE & SAMPLE DOWNLOAD */}
          {step === 3 && (
            <div className="text-center space-y-5 py-4 animate-scale-up">
              
              {/* Success Icon animation */}
              <div className="inline-flex bg-emerald-50 text-emerald-500 p-4 rounded-full border-4 border-emerald-100 animate-bounce">
                <CheckCircle2 className="w-12 h-12 fill-emerald-50" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-2xl font-black text-gray-900">Pagamento Confirmado!</h4>
                <p className="text-xs text-gray-500 px-4 leading-relaxed">
                  Parabéns, Professor(a) <strong>{name}</strong>! Enviamos a confirmação oficial de acesso no e-mail <strong>{email}</strong> e no seu número <strong>{whatsapp}</strong>.
                </p>
              </div>

              {/* Download block */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3.5 max-w-sm mx-auto text-left">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white p-2 rounded-xl">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 font-bold block">Amostra do Acervo</span>
                    <strong className="text-xs text-gray-800 font-bold block">PDF_Dinâmicas_Português_2026.txt</strong>
                  </div>
                </div>

                <p className="text-[11px] text-gray-500 leading-normal">
                  Como este é um ambiente de demonstração interativo, você pode baixar agora mesmo um arquivo de texto completo contendo as 2 dinâmicas premium mais bem avaliadas pelos professores para aplicar em sala de aula imediatamente.
                </p>

                <button
                  onClick={handleDownloadSample}
                  className="w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm rounded-xl transition shadow flex items-center justify-center gap-1.5 cursor-pointer"
                  id="modal-download-sample-btn"
                >
                  <Download className="w-4 h-4" />
                  Baixar Amostra de Atividades agora
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer (Only shown for step 1 and 2) */}
        {step < 3 && (
          <div className="bg-slate-50 p-5 border-t border-gray-200/50 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">Etapa {step} de 2</span>
            
            <button
              onClick={step === 1 ? handleNextStep : handleConfirmPayment}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center gap-1 cursor-pointer"
              id="checkout-confirm-btn"
            >
              {step === 1 ? 'Avançar para Pagamento' : 'Confirmar Pagamento Simulado'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
