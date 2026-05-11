"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Wind, Sun, Wrench, Phone, ArrowRight, Zap, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { FlipCard } from "@/components/ui/flip-card";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
});

const fadeIn = (i = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
});

export default function V2Page() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">

      {/* NAV — light glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-[6%] bg-white/82 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white bg-gradient-to-br from-teal-500/90 to-blue-600/90 backdrop-blur-md border border-white/20">SSV</div>
          <span className="text-[17px] font-bold text-slate-800 tracking-wide">SSV<span className="text-teal-500">Infra</span></span>
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {["Why SSV","Services","Track Record","FAQ"].map(l => (
            <li key={l}><a href="#" className="text-[13px] text-slate-500 hover:text-slate-900 font-medium no-underline transition-colors">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="tel:+918088744581" className="hidden md:flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 hover:text-slate-900 no-underline transition-colors">
            <Phone size={14} /> +91 80887 44581
          </a>
          <a href="#contact" className="text-white px-5 py-2 rounded-full text-[13px] font-bold no-underline bg-gradient-to-r from-teal-500/90 to-blue-600/90 backdrop-blur-md border border-white/20 shadow-md hover:opacity-90 transition-opacity">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="pt-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <ContainerScroll
          titleComponent={
            <div className="text-center px-4">
              <motion.div {...fadeIn(0)} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-teal-500/12 backdrop-blur-xl border border-teal-500/30">
                <Zap size={12} className="text-teal-400" />
                <span className="text-[11px] font-semibold text-teal-400 tracking-[1.5px] uppercase">India's #1 Wind & Hybrid EPC</span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-5">
                Renewable Energy<br />
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Delivered End-to-End</span>
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
                300+ MW commissioned across India. Single-window EPC accountability with in-house O&M — from feasibility to 25-year plant life.
              </motion.p>
              <motion.div {...fadeUp(3)} className="flex flex-wrap gap-3 justify-center">
                <a href="#contact" className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full text-[15px] font-bold no-underline bg-gradient-to-r from-teal-500/85 to-blue-600/85 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(20,184,166,0.25)] hover:opacity-90 transition-opacity">
                  Free Feasibility Report <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/918088744581" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold no-underline text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/18 transition-all">
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
            alt="Solar and wind hybrid farm"
            width={1400} height={720}
            className="w-full h-full object-cover rounded-2xl"
            unoptimized
          />
        </ContainerScroll>
      </div>

      {/* STATS STRIP — animated */}
      <section className="py-16 px-[6%] bg-white border-b border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { Icon: TrendingUp, value: "300+ MW", label: "Commissioned capacity", color: "text-teal-500" },
            { Icon: Shield,     value: "97% SLA",  label: "Plant availability guarantee", color: "text-blue-500" },
            { Icon: Zap,        value: "8+ Years",  label: "EPC expertise across India", color: "text-violet-500" },
            { Icon: Wind,       value: "25+ Proj",  label: "Pan-India installations", color: "text-emerald-500" },
          ].map(({ Icon, value, label, color }, i) => (
            <motion.div key={label} {...fadeUp(i)} className="text-center">
              <Icon size={28} className={`${color} mx-auto mb-3`} />
              <div className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">{value}</div>
              <div className="text-[12px] text-slate-500 mt-1 leading-tight">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES — animated glass cards */}
      <section className="py-24 px-[6%] bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.span {...fadeIn(0)} className="text-[11px] font-bold tracking-[3px] uppercase text-teal-600 mb-3 block">What we do</motion.span>
            <motion.h2 {...fadeUp(1)} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">Full-spectrum renewable EPC</motion.h2>
            <motion.p {...fadeUp(2)} className="text-slate-500 max-w-md mx-auto">One partner. Complete accountability. From resource mapping to 25-year O&M.</motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { iconBg: "from-emerald-400/85 to-teal-500/85",  Icon: Wind,   name: "Wind Energy EPC",      desc: "End-to-end onshore wind farm development — micrositing, WTG foundations, crane hardstands, turbine erection, SCADA integration, and grid commissioning.", tags: ["On-shore WTG","Up to 5+ MW","ISTS grid tie"] },
              { iconBg: "from-amber-400/85 to-orange-500/85",  Icon: Sun,    name: "Hybrid Solar + Wind",  desc: "Co-located solar PV and wind plants sharing civil infrastructure — maximise PLF, reduce per-unit cost, smooth variability. BESS integration ready.", tags: ["Optimised PLF","BESS ready","Shared infra"] },
              { iconBg: "from-blue-400/85 to-violet-500/85",   Icon: Wrench, name: "O&M Services",          desc: "In-house O&M division with 24×7 remote SCADA monitoring, preventive maintenance schedules, spare parts management, and SLA-backed performance.", tags: ["97% availability","24×7 SCADA","AMC contracts"] },
            ].map((svc, i) => (
              <motion.div key={svc.name} {...fadeUp(i)}>
                <FlipCard
                  front={
                    <div className="rounded-2xl p-8 bg-white/75 backdrop-blur-xl border border-slate-200/70 shadow-sm cursor-default">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${svc.iconBg} backdrop-blur-md border border-white/20`}>
                        <svc.Icon size={22} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{svc.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {svc.tags.map(t => (
                          <span key={t} className="text-[11px] px-3 py-1 rounded-full font-semibold bg-teal-50/90 border border-teal-200/40 text-teal-700">{t}</span>
                        ))}
                      </div>
                    </div>
                  }
                  back={
                    <div className="rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-center gap-3 cursor-default">
                      <span className="text-[10px] font-bold tracking-[2px] uppercase text-teal-400">{svc.name}</span>
                      <p className="text-[14px] text-slate-300 leading-relaxed">{svc.desc}</p>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — animated glass cards */}
      <section className="py-24 px-[6%] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <motion.span {...fadeIn(0)} className="text-[11px] font-bold tracking-[3px] uppercase text-teal-600 mb-3 block">How it works</motion.span>
            <motion.h2 {...fadeUp(1)} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Three steps to power</motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", emoji: "🔍", title: "Assess", desc: "Wind & solar resource mapping, micrositing, grid feasibility, regulatory review, and detailed project cost estimate.", note: "Free for qualified projects" },
              { step: "02", emoji: "🏗️", title: "Build",  desc: "End-to-end EPC — civil works, foundations, turbine erection, electrical systems, SCADA, MNRE & CEIG approvals, grid commissioning.", note: "Avg 12–18 months" },
              { step: "03", emoji: "⚡", title: "Operate", desc: "In-house O&M, 24×7 SCADA monitoring, preventive maintenance, spare parts management, SLA-backed performance reporting.", note: "97% availability guarantee" },
            ].map((s, i) => (
              <motion.div key={s.step} {...fadeUp(i)}>
                <FlipCard
                  front={
                    <div className="relative rounded-2xl p-8 bg-slate-50/72 backdrop-blur-xl border border-teal-100/60 shadow-sm cursor-default text-center">
                      <div className="absolute -top-4 left-8 text-white text-xs font-black px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/90 to-blue-600/90 backdrop-blur-md border border-white/20">{s.step}</div>
                      <div className="text-4xl mb-4 mt-2">{s.emoji}</div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                      <span className="inline-block text-[11px] font-bold text-teal-700 rounded-full px-3 py-1 bg-teal-50/90 border border-teal-200/40">{s.note}</span>
                    </div>
                  }
                  back={
                    <div className="rounded-2xl p-8 bg-gradient-to-br from-teal-600 to-blue-700 flex flex-col items-center justify-center text-center gap-3 cursor-default">
                      <span className="text-[10px] font-bold tracking-[2px] uppercase text-teal-200">Step {s.step}</span>
                      <p className="text-[14px] text-white/85 leading-relaxed">{s.desc}</p>
                      <span className="inline-block text-[11px] font-bold text-teal-700 rounded-full px-3 py-1 bg-teal-50/90">{s.note}</span>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SSV — animated glass grid */}
      <section className="py-24 px-[6%] bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <motion.span {...fadeIn(0)} className="text-[11px] font-bold tracking-[3px] uppercase text-teal-400 mb-3 block">Our edge</motion.span>
          <motion.h2 {...fadeUp(1)} className="text-4xl md:text-5xl font-bold tracking-tight text-white">Why leading developers choose SSV</motion.h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            { icon: "🏆", title: "In-house certified teams",   desc: "No sub-contracting. Full accountability across civil, electrical, and SCADA work." },
            { icon: "📡", title: "24×7 SCADA monitoring",      desc: "Real-time plant monitoring with instant alerts and remote diagnostics." },
            { icon: "📋", title: "97% availability SLA",       desc: "Financial penalties if we miss — our SLA has teeth, not just words." },
            { icon: "⚡", title: "Pre-qualified supply chain", desc: "Pre-negotiated OEM agreements enabling 12–18 month delivery timelines." },
            { icon: "🌏", title: "Pan-India operations",       desc: "Active in Rajasthan, Gujarat, Karnataka, TN, AP, Maharashtra, MP." },
            { icon: "💼", title: "CAPEX / RESCO advisory",     desc: "Independent financing model advisory — we recommend what's best for your ROI." },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeIn(i)}>
              <FlipCard
                front={
                  <div className="rounded-2xl p-6 bg-white/[0.05] backdrop-blur-xl border border-white/10 cursor-default">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                  </div>
                }
                back={
                  <div className="rounded-2xl p-6 bg-teal-500/[0.15] backdrop-blur-xl border border-teal-500/30 flex items-center cursor-default">
                    <p className="text-[13px] text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-[6%] bg-white text-center">
        <div className="max-w-xl mx-auto">
          <motion.div {...fadeIn(0)} className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-teal-400/85 to-blue-600/85 backdrop-blur-md border border-white/20 shadow-lg">
            <Zap size={28} className="text-white" />
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Start your renewable journey</motion.h2>
          <motion.p {...fadeUp(2)} className="text-slate-500 leading-relaxed mb-8">Free site feasibility report in 48 hours. Talk to our EPC experts today — no commitment required.</motion.p>
          <motion.div {...fadeUp(3)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918088744581" className="inline-flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-full text-[15px] font-bold no-underline bg-gradient-to-r from-teal-500/85 to-blue-600/85 backdrop-blur-md border border-white/20 shadow-lg hover:opacity-90 transition-opacity">
              <Phone size={16} /> Call +91 80887 44581
            </a>
            <a href="https://wa.me/918088744581" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold no-underline text-[#25D366] bg-[rgba(37,211,102,0.08)] backdrop-blur-md border border-[#25D366]/45 hover:bg-[rgba(37,211,102,0.18)] transition-all">
              WhatsApp Us
            </a>
          </motion.div>
          <motion.div {...fadeIn(4)} className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[12px] text-slate-400">
            {["MNRE Empanelled","ISO Certified","Pan-India Operations"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-teal-500" />{badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-500 text-center py-6 text-[13px]">
        © 2025 SSV Infra. All rights reserved. · Vijayapur, Karnataka · +91 80887 44581
      </footer>
    </div>
  );
}
