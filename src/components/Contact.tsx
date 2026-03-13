import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: "", company: "", email: "", message: "" });
      } else {
        setStatus('error');
        setErrorMessage(data.error || "Une erreur est survenue.");
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Impossible de contacter le serveur.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-brand-red uppercase tracking-[0.3em] mb-4">Contactez-Nous</h2>
            <p className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8">
              PARLONS DE VOTRE <br />
              <span className="text-brand-red">PROJET</span>
            </p>
            <p className="text-brand-black/60 text-lg mb-12 max-w-md">
              Besoin d'un conseil technique ou d'un devis personnalisé ? Notre équipe est à votre disposition pour vous accompagner.
            </p>

            <div className="space-y-8">
              <p className="text-brand-black/80 font-medium">
                Notre équipe technique est prête à répondre à toutes vos questions concernant nos machines et solutions d'emballage.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-black p-8 md:p-12 rounded-3xl text-white"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Message Envoyé !</h3>
                <p className="text-white/60 mb-8">
                  Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais à l'adresse {formData.email}.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brand-red font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">Nom Complet</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-red outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest opacity-60">Entreprise</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-red outline-none transition-colors"
                      placeholder="Nom de votre société"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-red outline-none transition-colors"
                    placeholder="contact@entreprise.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-brand-red outline-none transition-colors resize-none"
                    placeholder="Décrivez votre besoin..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-brand-red text-sm font-bold">{errorMessage}</p>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-red text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white hover:text-brand-black transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>Envoi en cours... <Loader2 size={20} className="animate-spin" /></>
                  ) : (
                    <>Envoyer le Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
