import React from 'react';
import PageLayout from '../components/PageLayout';

const News: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">News</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Latest updates<br />from Steady.
            </h1>
          </div>

          {/* News Items */}
          <div className="space-y-8">
            {[
              {
                date: 'Coming Soon',
                title: 'Steady Launches on iOS and Android',
                excerpt: 'We\'re preparing to launch Steady to the world. Join the waitlist to be first in line.',
                tag: 'Announcement'
              },
              {
                date: 'In Development',
                title: 'Meet Scout: Your AI Financial Copilot',
                excerpt: 'Learn about Scout, the AI assistant that audits subscriptions, negotiates bills, and automates your financial decisions.',
                tag: 'Product'
              },
              {
                date: 'In Development',
                title: 'Why We Built Intent-Based Budgeting',
                excerpt: 'Traditional budgeting doesn\'t work. Here\'s why we chose a different approach focused on intent rather than strict limits.',
                tag: 'Philosophy'
              }
            ].map((article, idx) => (
              <article key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">{article.date}</span>
                  <span className="px-3 py-1 bg-steady-teal/10 text-steady-teal text-[10px] font-black uppercase tracking-widest rounded-full">{article.tag}</span>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight group-hover:text-steady-teal transition-colors">{article.title}</h2>
                <p className="text-gray-500 font-medium leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-steady-teal font-black text-xs uppercase tracking-widest pt-2">
                  Read More
                  <iconify-icon icon="solar:arrow-right-bold" width="16"></iconify-icon>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-steady-charcoal p-12 rounded-3xl text-center space-y-6">
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Stay in the loop</h2>
            <p className="text-gray-400 font-medium">Get product updates and company news delivered to your inbox.</p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 bg-white/10 border-2 border-white/10 focus:border-steady-teal px-6 py-4 rounded-2xl font-black text-xs tracking-widest text-white outline-none transition-all placeholder:text-white/30"
              />
              <button className="bg-steady-teal text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default News;
