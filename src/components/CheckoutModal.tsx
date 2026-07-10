import { useState, useEffect } from 'react';
import { CheckoutState } from '../types';
import { 
  X, 
  CreditCard, 
  CheckCircle2, 
  Smartphone, 
  Mail, 
  User, 
  Copy, 
  Check, 
  Clock, 
  Download,
  Lock,
  ArrowRight
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

  // Countdown timer for PIX simulation
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
    if (!name.trim() || !whatsapp.trim() || !email.trim()) {
      setErrors('Preencha os campos obrigatórios para continuar.');
      return;
    }
    if (!email.includes('@')) {
      setErrors('Insira um e-mail válido.');
      return;
    }
    setErrors(null);
    setStep(2);
  };

  const handleConfirmPayment = () => {
    if (paymentMethod === 'card') {
      if (!cardNum.trim() || !cardExp.trim() || !cardCvv.trim() || !cardName.trim()) {
        setErrors('Preencha todos os dados do cartão de crédito.');
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
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div 
        id="checkout-modal-body"
        className="bg-white rounded-[28px] w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden relative flex flex-col my-auto animate-fade-in"
      >
        
        {/* Modal Close Button (Floating Top Right) */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200/80 p-1.5 rounded-full transition-all duration-200 z-30 cursor-pointer"
          id="close-checkout-btn"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Dynamic header summary */}
        <div className="p-6 bg-[#f8fafc] border-b border-slate-100 text-center">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2">
            <Lock className="w-3 h-3" />
            CHECKOUT 100% SEGURO
          </div>
          <h3 className="font-black text-xl text-slate-900 tracking-tight leading-snug">
            {state.packageType === 'complete' ? 'Pacote Completo VIP' : 'Pacote Básico'}
          </h3>
          <p className="text-sm font-semibold text-[#16a34a] mt-1">
            Valor Único: R$ {state.price.toFixed(2).replace('.', ',')}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 text-slate-700 space-y-4">
          
          {errors && (
            <div className="bg-rose-50 text-rose-700 p-3 rounded-xl text-xs font-bold border border-rose-100">
              ⚠️ {errors}
            </div>
          )}

          {/* STEP 1: Quick details */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Informe seus dados para receber o link de acesso aos materiais em PDF.
                </p>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Seu Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    id="checkout-name-input"
                  />
                </div>

                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="Seu melhor E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    id="checkout-email-input"
                  />
                </div>

                <div className="relative">
                  <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    placeholder="WhatsApp com DDD"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    id="checkout-whatsapp-input"
                  />
                </div>
              </div>

              {/* Bullet indicators */}
              <div className="flex justify-center gap-1.5 pt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              </div>

              {/* Big objective CTA */}
              <button
                onClick={handleNextStep}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-md hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 transform active:scale-95"
                id="checkout-next-btn"
              >
                Prosseguir para o Pagamento
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          )}

          {/* STEP 2: Simplificado Método de Pagamento */}
          {step === 2 && (
            <div className="space-y-4">
              
              {/* Simple Tabs switcher */}
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer ${
                    paymentMethod === 'pix' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                  }`}
                  id="tab-pix-btn"
                >
                  <Smartphone className="w-3.5 h-3.5 text-teal-600" />
                  PIX (Imediato)
                </button>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer ${
                    paymentMethod === 'card' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                  }`}
                  id="tab-card-btn"
                >
                  <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                  Cartão de Crédito
                </button>
              </div>

              {/* Render PIX view */}
              {paymentMethod === 'pix' && (
                <div className="space-y-4 text-center">
                  <div className="flex flex-col items-center justify-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    
                    {/* Simulated elegant minimalist QR code */}
                    <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 select-none">
                      <svg className="w-24 h-24 text-slate-800" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M5 5h30v30H5V5zm4 4v22h22V9H9zm57-4h30v30H66V5zm4 4v22h22V9H70zM5 66h30v30H5V66zm4 4v22h22V70H9zm57-4h30v30H66V66zm4 4v22h22V70H70zm-26-47h8v8h-8V19zm13 13h8v8h-8V32zm-13 13h8v8h-8V45zm26 0h8v8h-8V45zm13 13h8v8h-8V58zm-39 0h8v8h-8V58zm13 13h8v8h-8V71zm-26 12h8v8h-8V83z" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-amber-600 font-bold mt-2.5">
                      <Clock className="w-3.5 h-3.5 animate-spin" />
                      <span>Expira em: {formatPixTime(pixTimeLeft)}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <span className="text-[11px] text-slate-400 font-extrabold block uppercase tracking-wide">Código PIX Copia e Cola</span>
                    
                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2">
                      <input 
                        type="text" 
                        readOnly 
                        value="00020101021226830014br.gov.bcb.pix2561api..." 
                        className="bg-transparent border-none text-xs text-slate-500 flex-1 font-mono focus:outline-none select-all"
                      />
                      <button
                        onClick={copyPixKey}
                        className="bg-slate-900 hover:bg-slate-800 text-white py-1.5 px-3 rounded-lg hover:scale-105 active:scale-95 transition flex items-center justify-center gap-1 text-xs font-bold"
                        id="copy-pix-btn"
                      >
                        {copiedPix ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        {copiedPix ? 'Copiado!' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Render credit card form */}
              {paymentMethod === 'card' && (
                <div className="space-y-3">
                  <div className="relative">
                    <CreditCard className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      placeholder="Número do Cartão"
                      value={cardNum}
                      onChange={(e) => setCardNum(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition"
                      id="card-num-input"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Nome Impresso no Cartão"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    id="card-name-input"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Validade (MM/AA)"
                      value={cardExp}
                      onChange={(e) => setCardExp(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition"
                      id="card-exp-input"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-blue-500 focus:bg-white transition"
                      id="card-cvv-input"
                    />
                  </div>
                </div>
              )}

              {/* Bullet indicators */}
              <div className="flex justify-center gap-1.5 pt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              </div>

              {/* Action trigger button */}
              <button
                onClick={handleConfirmPayment}
                className="w-full py-3.5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-sm sm:text-base rounded-2xl shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 transform active:scale-95"
                id="checkout-confirm-btn"
              >
                {paymentMethod === 'pix' ? 'Simular Confirmação do Pix' : 'Simular Pagamento no Cartão'}
              </button>
            </div>
          )}

          {/* STEP 3: Beautiful immediate download page */}
          {step === 3 && (
            <div className="text-center space-y-5 py-4 animate-scale-up">
              <div className="inline-flex bg-[#effaf3] text-[#22c55e] p-4 rounded-full border-4 border-[#d1fae5] animate-bounce">
                <CheckCircle2 className="w-12 h-12 fill-emerald-50" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-2xl font-black text-slate-900 leading-tight">Acesso Autorizado!</h4>
                <p className="text-xs text-slate-500 px-4 leading-relaxed font-semibold">
                  Parabéns, Professor(a) <strong className="text-slate-800">{name}</strong>! Seu material está pronto. Clique abaixo para fazer o download imediato em PDF.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3.5 max-w-sm mx-auto text-left">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white p-2.5 rounded-xl">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-wider text-blue-600 font-black block">PDF_AMOSTRA_PRONTA.txt</span>
                    <strong className="text-xs text-slate-800 font-bold block">2 Dinâmicas Completas de Amostra</strong>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 font-medium leading-normal">
                  Como este é um ambiente de demonstração, preparamos as melhores e mais bem avaliadas dinâmicas lúdicas em um arquivo pronto para você baixar e testar a aplicação agora mesmo.
                </p>

                <button
                  onClick={handleDownloadSample}
                  className="w-full py-3 px-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-sm rounded-xl transition shadow flex items-center justify-center gap-1.5 cursor-pointer"
                  id="modal-download-sample-btn"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  Baixar Amostra Completa em PDF
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Back navigation only if in Step 2 */}
        {step === 2 && (
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-between items-center text-xs">
            <button 
              onClick={() => { setErrors(null); setStep(1); }}
              className="text-slate-400 hover:text-slate-600 font-black uppercase tracking-wider cursor-pointer"
            >
              ← Voltar aos Dados
            </button>
            <span className="text-slate-400 font-mono font-bold">Etapa 2 de 2</span>
          </div>
        )}

      </div>
    </div>
  );
}
