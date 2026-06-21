import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MessageSquare,
  Copy,
  Check,
  Send,
  MapPin,
  Inbox,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { contactInfo } from "../data";
import { ContactMessage } from "../types";

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localMessages, setLocalMessages] = useState<ContactMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSandboxInbox, setShowSandboxInbox] = useState(false);

  // Load messages from localStorage on load
  useEffect(() => {
    const saved = localStorage.getItem("noman_portfolio_inbox");
    if (saved) {
      try {
        setLocalMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Could not copy email", err);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "No Subject Specified",
        message: formData.message,
        timestamp: new Date().toLocaleString(),
        read: false,
      };

      const updatedInbox = [newMessage, ...localMessages];
      setLocalMessages(updatedInbox);
      localStorage.setItem("noman_portfolio_inbox", JSON.stringify(updatedInbox));

      // Reset Form fields
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);

      // Trigger beautiful mini alert notification toast
      const toast = document.createElement("div");
      toast.className = "fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-xl bg-slate-900 border border-emerald-500/30 px-5 py-4 text-xs text-white shadow-xl backdrop-blur-md animate-fade-in";
      toast.innerHTML = `
        <span class="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
        <div class="flex flex-col gap-0.5">
          <span class="font-bold text-emerald-300">Message sent successfully!</span>
          <span class="text-[10px] text-slate-400">Stored in the client-side Inbox Sandbox beneath the form.</span>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 5000);
    }, 1000);
  };

  const clearInbox = () => {
    setLocalMessages([]);
    localStorage.removeItem("noman_portfolio_inbox");
  };

  // Safe WhatsApp Link construction
  const whatsappUrl = `https://wa.me/923261619179?text=${encodeURIComponent(
    "Hi Muhammad Noman Saeed, I reviewed your premium portfolio and would love to connect!"
  )}`;

  // Safe Email Link construction
  const emailUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    "Inquiry - Portfolio Website Connection"
  )}`;

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-[20%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-indigo-500/5 blur-[8rem] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className={`font-mono text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 ${
            isDarkMode ? "text-cyan-400" : "text-indigo-600"
          }`}>
            <MessageSquare className="h-4.5 w-4.5" />
            Let's Collaborate
          </h3>
          <h2 className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel info card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Location, Phone, Email lists */}
            <div className={`p-6 rounded-2xl border backdrop-blur-md ${
              isDarkMode
                ? "bg-slate-900/40 border-white/5"
                : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h3 className={`text-lg font-bold font-display mb-6 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Contact Information
              </h3>

              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl border ${
                    isDarkMode ? "bg-slate-800/40 border-white/5 text-cyan-400" : "bg-indigo-50 border-indigo-150 text-indigo-755"
                  }`}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase tracking-wider text-slate-500`}>Location</h4>
                    <p className={`text-sm font-bold mt-1 ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                      {contactInfo.location}
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl border ${
                    isDarkMode ? "bg-slate-800/40 border-white/5 text-cyan-400" : "bg-indigo-50 border-indigo-150 text-indigo-755"
                  }`}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className={`text-xs font-mono uppercase tracking-wider text-slate-500`}>Email Address</h4>
                    <p className={`text-sm font-bold mt-1 truncate ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                      {contactInfo.email}
                    </p>
                  </div>
                </div>

                {/* WhatsApp & Call */}
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl border ${
                    isDarkMode ? "bg-slate-800/40 border-white/5 text-cyan-400" : "bg-indigo-50 border-indigo-150 text-indigo-755"
                  }`}>
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase tracking-wider text-slate-500`}>WhatsApp & Call</h4>
                    <p className={`text-sm font-bold mt-1 ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                      {contactInfo.phone}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Micro Quick Action Triggers */}
            <div className={`p-6 rounded-2xl border backdrop-blur-md ${
              isDarkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h4 className={`text-xs font-mono uppercase tracking-wider text-slate-500 mb-4`}>Direct Anchors</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 sm:hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/10 active:scale-95 transition-all text-center cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp Me
                </a>

                <a
                  href={emailUrl}
                  className={`flex items-center justify-center gap-2 px-4 py-3 border rounded-xl text-xs font-bold active:scale-95 transition-all text-center cursor-pointer ${
                    isDarkMode
                      ? "border-cyan-500/20 bg-slate-900 text-cyan-400 hover:bg-cyan-500/10"
                      : "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                  }`}
                >
                  <Mail className="h-4 w-4" /> Message Email
                </a>
              </div>

              {/* Copy Email Button Panel */}
              <button
                onClick={handleCopyEmail}
                className={`mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 border border-dashed rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isDarkMode
                    ? "border-white/10 text-slate-350 hover:bg-slate-800/20 hover:text-white"
                    : "border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" /> Copied to Clipboard
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy Email Address
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right panel interactive form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className={`p-8 rounded-2xl border backdrop-blur-md ${
              isDarkMode ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <h3 className={`text-lg font-bold font-display mb-6 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Send a Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-650"}`}>
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Noman Saeed"
                      className={`w-full text-xs px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 transition-all ${
                        isDarkMode
                          ? "bg-slate-950 border-white/5 text-white focus:ring-indigo-500/50 focus:border-indigo-500/50"
                          : "bg-slate-50 border-slate-200 text-slate-850 focus:ring-indigo-600 focus:border-indigo-600"
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-650"}`}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. user@example.com"
                      className={`w-full text-xs px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 transition-all ${
                        isDarkMode
                          ? "bg-slate-950 border-white/5 text-white focus:ring-indigo-500/50 focus:border-indigo-500/50"
                          : "bg-slate-50 border-slate-200 text-slate-850 focus:ring-indigo-600 focus:border-indigo-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-650"}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    placeholder="e.g. Collab Opportunity"
                    className={`w-full text-xs px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 transition-all ${
                      isDarkMode
                        ? "bg-slate-950 border-white/5 text-white focus:ring-indigo-500/50 focus:border-indigo-500/50"
                        : "bg-slate-50 border-slate-200 text-slate-850 focus:ring-indigo-600 focus:border-indigo-600"
                    }`}
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-650"}`}>
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Discuss task specifics, layouts, or agency scopes..."
                    className={`w-full text-xs px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 transition-all ${
                      isDarkMode
                        ? "bg-slate-950 border-white/5 text-white focus:ring-indigo-500/50 focus:border-indigo-500/50"
                        : "bg-slate-50 border-slate-200 text-slate-850 focus:ring-indigo-600 focus:border-indigo-600"
                    }`}
                  />
                </div>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 sm:hover:from-indigo-500 sm:hover:to-cyan-400 text-white font-bold rounded-xl text-xs shadow-md shadow-indigo-600/15 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>Processing Message...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 animate-pulse" /> Submit Message Proposal
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sandbox Inbox monitor drawer */}
            <div className={`p-5 rounded-2xl border ${
              isDarkMode ? "bg-slate-950/60 border-white/5" : "bg-slate-50 border-slate-200"
            }`}>
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowSandboxInbox(!showSandboxInbox)}>
                <span className="flex items-center gap-2 text-xs font-bold font-mono tracking-tight text-slate-400 select-none">
                  <Inbox className="h-4 w-4 text-cyan-400" />
                  Local Owner Inbox Sandbox ({localMessages.length})
                </span>
                <span className="text-[10px] font-mono text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded-full select-none">
                  {showSandboxInbox ? "Collapse" : "Expand"}
                </span>
              </div>

              <AnimatePresence>
                {showSandboxInbox && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.99, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-slate-500 italic leading-normal">
                        Submit a message above to verify real persistent localStorage storage. These demonstrate working DB logic.
                      </p>
                      {localMessages.length > 0 && (
                        <button
                          onClick={clearInbox}
                          className="flex items-center gap-1 text-[10px] text-red-400 hover:text-red-500 cursor-pointer"
                          title="Purge Local Database Storage"
                        >
                          <Trash2 className="h-3 w-3" /> Clear Inbox
                        </button>
                      )}
                    </div>

                    {localMessages.length === 0 ? (
                      <div className="text-center py-6 text-xs text-slate-500">
                        No messages inside local database storage yet.
                      </div>
                    ) : (
                      <div className="max-h-60 overflow-y-auto space-y-2 pr-1.5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                        {localMessages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`p-3.5 border rounded-xl text-left ${
                              isDarkMode 
                                ? "bg-slate-900/60 border-white/5" 
                                : "bg-white border-slate-250 shadow-xs"
                            }`}
                          >
                            <div className="flex justify-between items-start gap-2">
                              <div>
                                <span className="text-xs font-bold text-white block truncate">{msg.name}</span>
                                <span className="text-[9px] font-mono text-slate-500 block truncate">{msg.email}</span>
                              </div>
                              <span className="text-[9px] font-mono text-slate-500 truncate">{msg.timestamp}</span>
                            </div>
                            <div className="mt-2 text-[10px] font-bold text-cyan-400 italic">Sub: {msg.subject}</div>
                            <p className="mt-1 text-[11px] text-slate-300 leading-normal bg-black/10 p-2 rounded-lg font-mono">
                              {msg.message}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
