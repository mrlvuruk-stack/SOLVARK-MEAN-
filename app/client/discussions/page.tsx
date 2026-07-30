'use client';

import * as React from 'react';
import { ALL_AGENCY_SERVICES } from '@/lib/constants';
import { Send, Paperclip, User, Shield } from 'lucide-react';

const DEMO_MESSAGES = [
  { sender: 'admin', name: 'Solvark Team', text: 'Welcome! Please share your project requirements and we will prepare a detailed scope document.', time: '10:00 AM' },
  { sender: 'client', name: 'You', text: 'Hi, I need a complete website redesign for my e-commerce business. I want modern UI with payment integration.', time: '10:05 AM' },
  { sender: 'admin', name: 'Solvark Team', text: 'Great! We can help with that. Could you share your current website URL and any design references you like?', time: '10:12 AM' },
  { sender: 'client', name: 'You', text: 'Sure, here is the link: www.example.com. I like the style of minimal SaaS dashboards with dark mode.', time: '10:18 AM' },
  { sender: 'admin', name: 'Solvark Team', text: 'Perfect. We will prepare a scope document with timeline and cost estimate. You will receive it in the Agreements section within 24 hours.', time: '10:25 AM' },
];

export default function ClientDiscussions() {
  const [selectedService, setSelectedService] = React.useState('web-redesign');
  const [messages, setMessages] = React.useState(DEMO_MESSAGES);
  const [newMessage, setNewMessage] = React.useState('');

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: 'client', name: 'You', text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setNewMessage('');
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white font-heading">Project Discussions</h1>
        <p className="text-sm text-zinc-400 mt-1">Collaborate with the Solvark team on your project scope and requirements.</p>
      </div>

      {/* Service Selector */}
      <div className="flex items-center gap-3">
        <label className="text-xs font-mono text-zinc-500 uppercase">Service:</label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-2 rounded-lg focus:outline-none focus:border-[#0052FF]"
        >
          {ALL_AGENCY_SERVICES.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      {/* Chat Area */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg flex flex-col" style={{ height: '500px' }}>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] ${msg.sender === 'client' ? 'order-2' : ''}`}>
                <div className="flex items-center gap-2 mb-1">
                  {msg.sender === 'admin' ? (
                    <Shield className="w-3 h-3 text-[#0052FF]" />
                  ) : (
                    <User className="w-3 h-3 text-[#FF2A85]" />
                  )}
                  <span className="text-[10px] font-mono text-zinc-500">{msg.name} • {msg.time}</span>
                </div>
                <div className={`px-4 py-3 rounded-lg text-sm ${
                  msg.sender === 'client'
                    ? 'bg-[#0052FF]/20 border border-[#0052FF]/30 text-white'
                    : 'bg-zinc-800 border border-zinc-700 text-zinc-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 border-t border-zinc-800 flex items-center gap-3">
          <button type="button" className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-zinc-950 border border-zinc-800 text-white text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#0052FF]"
          />
          <button type="submit" className="w-10 h-10 rounded-lg flex items-center justify-center text-white cursor-pointer" style={{ background: 'linear-gradient(135deg, #0052FF 0%, #FF2A85 100%)' }}>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
