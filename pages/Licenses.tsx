import React from 'react';
import PageLayout from '../components/PageLayout';

const Licenses: React.FC = () => {
  return (
    <PageLayout>
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-steady-teal">Legal</p>
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Licenses
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-wider">Open source acknowledgments</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Steady is built with the help of many open source projects. We're grateful to the developers and communities who make their work freely available. Below is a list of the major open source libraries we use.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-tight">Open Source Libraries</h2>

                {[
                  { name: 'React', license: 'MIT License', url: 'https://reactjs.org' },
                  { name: 'React Router', license: 'MIT License', url: 'https://reactrouter.com' },
                  { name: 'Tailwind CSS', license: 'MIT License', url: 'https://tailwindcss.com' },
                  { name: 'Vite', license: 'MIT License', url: 'https://vitejs.dev' },
                  { name: 'Recharts', license: 'MIT License', url: 'https://recharts.org' },
                  { name: 'Iconify', license: 'MIT License', url: 'https://iconify.design' }
                ].map((lib, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-gray-100 last:border-0">
                    <div>
                      <h3 className="font-black uppercase tracking-tight">{lib.name}</h3>
                      <p className="text-sm text-gray-400">{lib.license}</p>
                    </div>
                    <a href={lib.url} target="_blank" rel="noopener noreferrer" className="text-steady-teal font-bold text-sm hover:underline mt-2 md:mt-0">
                      {lib.url.replace('https://', '')}
                    </a>
                  </div>
                ))}
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">MIT License</h2>
                <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm text-gray-600 leading-relaxed">
                  <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
                  <p className="mt-4">The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
                  <p className="mt-4">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black uppercase tracking-tight">Questions</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about the licenses of any software we use, please contact us at legal@steady.app
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Licenses;
