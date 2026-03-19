"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setIsMessageSent(true);
    
    setTimeout(() => {
      setIsMessageSent(false);
      e.target.reset();
    }, 5000);
  };

  return (
    // පසුබිම bg-gray-50 කළා කොටු කැපී පේන්න
    <div className="bg-gray-50 min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* පිටුවේ මාතෘකාව */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">
            Have a question about our collections, your order, or just want to join the clan? Drop us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* පරතරය gap-16 ඉඳන් gap-24 ට වැඩි කළා, items-start දැම්මා */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* වම් පැත්ත: Contact Form එක (සුදු පාට ලොකු කොටුව) */}
          <div className="bg-white p-10 lg:p-14 border border-gray-200 shadow-2xl rounded-sm">
            <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-black border-b pb-4">Send a Message</h2>
            
            {isMessageSent ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-12 text-center rounded-sm">
                <svg className="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="text-2xl font-black uppercase tracking-wider mb-2">Message Sent!</h3>
                <p className="font-medium text-gray-600">Thank you for reaching out. We will respond to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Your Name</label>
                    <input required type="text" className="w-full border-b-2 border-gray-200 p-3 focus:border-black outline-none transition bg-transparent" placeholder="Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Email Address</label>
                    <input required type="email" className="w-full border-b-2 border-gray-200 p-3 focus:border-black outline-none transition bg-transparent" placeholder="Email" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Subject</label>
                  <input required type="text" className="w-full border-b-2 border-gray-200 p-3 focus:border-black outline-none transition bg-transparent" placeholder="Order Inquiry / General Question" />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase mb-3 text-gray-500 tracking-widest">Message</label>
                  <textarea required rows="4" className="w-full border-2 border-gray-200 p-4 focus:border-black outline-none transition bg-transparent resize-none mt-2" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-black hover:bg-red-600 text-white font-black uppercase tracking-[0.3em] py-5 mt-4 transition duration-300 shadow-xl active:scale-95">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* දකුණු පැත්ත: Contact Details */}
          <div className="flex flex-col space-y-12 lg:py-6">
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white shadow-md border border-gray-100 flex items-center justify-center rounded-full flex-shrink-0 text-black group-hover:bg-red-600 group-hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-black mb-2">Headquarters</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Batgolla Junction, Kirindiwela Road,<br />
                    Yakkala, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white shadow-md border border-gray-100 flex items-center justify-center rounded-full flex-shrink-0 text-black group-hover:bg-red-600 group-hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-black mb-2">WhatsApp / Phone</h3>
                  <p className="text-gray-500 font-medium text-lg">+94 7X XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white shadow-md border border-gray-100 flex items-center justify-center rounded-full flex-shrink-0 text-black group-hover:bg-red-600 group-hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-black mb-2">Email</h3>
                  <p className="text-gray-500 font-medium text-lg">info@vikings.lk</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-black text-white p-10 shadow-2xl mt-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-10">
                <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z" /></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-gray-800 pb-4 relative z-10">Business Hours</h3>
              <ul className="space-y-4 text-sm font-medium text-gray-400 relative z-10">
                <li className="flex justify-between items-center">
                  <span className="uppercase tracking-wider">Mon - Fri</span>
                  <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="uppercase tracking-wider">Saturday</span>
                  <span className="text-white font-bold">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="uppercase tracking-wider">Sunday</span>
                  <span className="text-red-500 font-black uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-sm">Closed</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}