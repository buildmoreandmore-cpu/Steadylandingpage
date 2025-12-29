import React from 'react';
import PageLayout from '../components/PageLayout';

const Contact: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Contact</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Let's talk.
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              Have questions, feedback, or just want to say hi? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'solar:letter-bold-duotone',
                title: 'General Inquiries',
                description: 'For general questions and feedback',
                contact: 'hello@steady.app'
              },
              {
                icon: 'solar:shield-check-bold-duotone',
                title: 'Security',
                description: 'Report security concerns',
                contact: 'security@steady.app'
              },
              {
                icon: 'solar:newspaper-bold-duotone',
                title: 'Press',
                description: 'Media and press inquiries',
                contact: 'press@steady.app'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-steady-teal/10 rounded-2xl flex items-center justify-center text-steady-teal mx-auto">
                  <iconify-icon icon={item.icon} width="28"></iconify-icon>
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-400 font-medium">{item.description}</p>
                <a href={`mailto:${item.contact}`} className="text-steady-teal font-bold text-sm hover:underline">{item.contact}</a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 rounded-3xl border border-gray-100 space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tight">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-2 border-gray-100 focus:border-steady-teal px-6 py-4 rounded-2xl font-medium outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 border-2 border-gray-100 focus:border-steady-teal px-6 py-4 rounded-2xl font-medium outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Message</label>
                <textarea
                  className="w-full bg-gray-50 border-2 border-gray-100 focus:border-steady-teal px-6 py-4 rounded-2xl font-medium outline-none transition-all min-h-[150px] resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button type="submit" className="bg-steady-teal text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-steady-teal/20 hover:scale-105 transition-all">
                Send Message
              </button>
            </form>
          </div>

          {/* Social */}
          <div className="text-center space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tight">Follow us</h3>
            <div className="flex justify-center gap-4">
              {[
                { icon: 'ri:twitter-x-fill', label: 'Twitter' },
                { icon: 'ri:linkedin-box-fill', label: 'LinkedIn' },
                { icon: 'ri:instagram-fill', label: 'Instagram' }
              ].map((social, idx) => (
                <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-steady-teal hover:bg-steady-teal/5 transition-all">
                  <iconify-icon icon={social.icon} width="24"></iconify-icon>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
