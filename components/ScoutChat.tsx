
import React, { useState, useRef, useEffect } from 'react';
import { getScoutResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ScoutChatProps {
  onClose: () => void;
}

const ScoutChat: React.FC<ScoutChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hey! I'm Scout. How can I help you navigate your money today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getScoutResponse(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', text: response || "I'm not sure about that." }]);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-full bg-white max-w-md mx-auto relative shadow-2xl">
      {/* Header */}
      <div className="p-8 bg-steady-charcoal text-white flex justify-between items-center shrink-0 rounded-b-[3rem]">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-steady-teal flex items-center justify-center">
            <iconify-icon icon="solar:chat-round-dots-bold-duotone" width="32"></iconify-icon>
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter">Scout</h2>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-steady-success animate-pulse"></div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Online Now</p>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-2xl transition-colors">
          <iconify-icon icon="solar:close-circle-bold-duotone" width="28"></iconify-icon>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-6 rounded-4xl font-medium leading-relaxed shadow-sm border ${
              m.role === 'user' 
                ? 'bg-steady-teal text-white rounded-tr-none border-steady-teal' 
                : 'bg-gray-50 text-steady-charcoal rounded-tl-none border-gray-100'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{m.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-50 p-6 rounded-4xl rounded-tl-none flex gap-1 items-center border border-gray-100">
              <div className="w-1.5 h-1.5 bg-steady-teal rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-steady-teal rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-steady-teal rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input */}
      <div className="p-8 bg-white border-t border-gray-50 shrink-0">
        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="ASK SCOUT ANYTHING..."
            className="flex-1 bg-gray-50 px-6 py-4 rounded-3xl text-xs font-black uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-steady-teal/5 transition-all border border-transparent focus:border-steady-teal/20"
          />
          <button 
            onClick={handleSend}
            className="bg-steady-teal text-white w-14 h-14 rounded-3xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-lg shadow-steady-teal/20"
          >
            <iconify-icon icon="solar:round-alt-arrow-right-bold-duotone" width="32"></iconify-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoutChat;
