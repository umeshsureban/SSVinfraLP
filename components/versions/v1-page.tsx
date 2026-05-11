"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Wind, Sun, Wrench, Phone, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";
import { FlipCard } from "@/components/ui/flip-card";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
});

const fadeIn = (i = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
});

export default function V1Page() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* NAV — glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-[6%] bg-[rgba(11,22,9,0.45)] backdrop-blur-xl border-b border-white/10 shadow-lg">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white bg-[rgba(46,81,15,0.85)] backdrop-blur-md border border-[#B4BCA0]/25">SSV</div>
          <span className="text-[17px] font-bold text-white tracking-wide">SSV<span className="text-[#B4BCA0]">Infra</span></span>
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {["Why SSV","Services","Track Record","FAQ"].map(l => (
            <li key={l}><a href="#" className="text-[13px] text-white/55 hover:text-white font-medium no-underline transition-colors">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a href="tel:+918088744581" className="hidden md:block text-[13px] font-semibold text-[#B4BCA0] hover:text-white no-underline transition-colors">📞 +91 80887 44581</a>
          <a href="#contact" className="px-5 py-2 rounded-full text-[13px] font-bold no-underline bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-white/25 transition-all">Contact Us ↗</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="pt-16 bg-[#0B1609]">
        <ContainerScroll
          titleComponent={
            <div className="text-center px-4">
              <motion.div {...fadeIn(0)} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-[rgba(46,81,15,0.3)] backdrop-blur-xl border border-[#B4BCA0]/30">
                <span className="w-2 h-2 rounded-full bg-[#B4BCA0] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#B4BCA0] tracking-[1.5px] uppercase">Wind EPC · Hybrid Solar · O&M</span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.03] tracking-[-2px] mb-5">
                India's Most Trusted<br />
                <span className="text-[#B4BCA0]">Wind & Hybrid EPC</span><br />
                Partner
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
                <strong className="text-white/80">Tired of EPC firms that disappear after commissioning?</strong> SSV Infra owns the full lifecycle — from site feasibility to 25-year O&M.
              </motion.p>
              <motion.div {...fadeUp(3)} className="flex flex-wrap gap-3 justify-center">
                <a href="#contact" className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full text-[15px] font-bold no-underline bg-[rgba(46,81,15,0.75)] backdrop-blur-md border border-[#698B57]/50 shadow-[0_8px_32px_rgba(46,81,15,0.3)] hover:bg-[rgba(46,81,15,0.92)] transition-all">
                  Get Free Feasibility Report <ArrowUpRight size={16} />
                </a>
                <a href="https://wa.me/918088744581" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold no-underline text-[#25D366] bg-[rgba(37,211,102,0.12)] backdrop-blur-md border border-[#25D366]/50 hover:bg-[rgba(37,211,102,0.22)] transition-all">
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80"
            alt="Wind farm aerial view"
            width={1400} height={720}
            className="w-full h-full object-cover rounded-2xl"
            unoptimized
          />
        </ContainerScroll>
      </div>

      {/* TICKER */}
      <div className="py-3.5 overflow-hidden bg-[rgba(46,81,15,0.85)] backdrop-blur-md border-y border-white/8">
        <div className="flex gap-12 animate-[ticker_30s_linear_infinite] whitespace-nowrap">
          {["Wind Energy EPC","Hybrid Solar + Wind","O&M Services","MNRE Compliant","Performance-Guaranteed","Pan-India Operations","Government & PSU Projects","Hospitals & Institutions","Real Estate Developers",
            "Wind Energy EPC","Hybrid Solar + Wind","O&M Services","MNRE Compliant","Performance-Guaranteed","Pan-India Operations"].map((item, i) => (
            <span key={i} className="text-[12.5px] text-white/65 flex items-center gap-2.5 flex-shrink-0">⚡ {item}</span>
          ))}
        </div>
      </div>

      {/* STATS — animated glass cards */}
      <section className="py-20 px-[6%] bg-[#0f1e0c]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { num: "300+", unit: "MW", label: "Capacity commissioned" },
            { num: "8+", unit: "yrs", label: "EPC expertise" },
            { num: "25+", unit: "proj", label: "Pan-India projects" },
            { num: "97%", unit: "", label: "Plant availability SLA" },
          ].map((s, i) => (
            <motion.div key={s.label} {...fadeUp(i)} className="text-center py-8 px-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-[#B4BCA0]/12 shadow-lg hover:bg-white/[0.08] transition-all">
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
                {s.num}<span className="text-2xl text-[#698B57] ml-1">{s.unit}</span>
              </div>
              <div className="text-[11px] text-[#698B57] mt-1.5 tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS — animated glass cards */}
      <section className="py-24 px-[6%] bg-[#FCFCFA]">
        <div className="text-center mb-14">
          <motion.div {...fadeIn(0)} className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[2px] uppercase text-[#526B58] mb-4 bg-[#B4BCA0]/20 backdrop-blur-sm border border-[#B4BCA0]/35">
            How it works
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="text-4xl md:text-5xl font-bold tracking-tight text-[#0B1609] mb-3">From site to power — three steps</motion.h2>
          <motion.p {...fadeUp(2)} className="text-[#698B57] max-w-lg mx-auto leading-relaxed">Every engagement follows a proven, milestone-tracked process with contractual accountability at every stage.</motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { num: "01", icon: "🔍", title: "Assess", desc: "Wind & solar resource mapping, micrositing, grid feasibility, regulatory review, and detailed cost estimate.", chip: "Free for qualified projects" },
            { num: "02", icon: "🏗️", title: "Build", desc: "End-to-end EPC — civil works, WTG foundations, turbine erection, SCADA, MNRE & CEIG approvals, grid commissioning.", chip: "Avg 12–18 months" },
            { num: "03", icon: "⚡", title: "Operate", desc: "In-house O&M team, 24×7 remote SCADA, preventive maintenance, spare parts management, SLA-backed performance reporting.", chip: "97% availability guarantee" },
          ].map((step, i) => (
            <motion.div key={step.num} {...fadeUp(i)}>
              <FlipCard
                front={
                  <div className="text-center p-8 rounded-2xl bg-white/65 backdrop-blur-xl border border-[#B4BCA0]/30 shadow-md cursor-default">
                    <div className="text-6xl font-black text-[#2E510F]/10 leading-none mb-[-8px]">{step.num}</div>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 bg-[rgba(232,240,227,0.8)] backdrop-blur-sm border border-[#698B57]/20">{step.icon}</div>
                    <h3 className="text-xl font-bold text-[#0B1609] mb-3">{step.title}</h3>
                    <span className="text-[11px] font-bold text-[#2E510F] bg-[#E8F0E3] rounded-full px-4 py-1">{step.chip}</span>
                  </div>
                }
                back={
                  <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#2e510f] to-[#4a7c20] flex flex-col items-center justify-center gap-3 cursor-default">
                    <span className="text-[10px] font-bold tracking-[2px] uppercase text-[#b4bca0]">Step {step.num}</span>
                    <p className="text-[14px] text-white/85 leading-relaxed">{step.desc}</p>
                    <span className="text-[11px] font-bold text-[#2E510F] bg-[#E8F0E3] rounded-full px-4 py-1">{step.chip}</span>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES — animated glass cards */}
      <section className="py-24 px-[6%] bg-white">
        <div className="text-center mb-14">
          <motion.div {...fadeIn(0)} className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[2px] uppercase text-[#526B58] mb-4 bg-[#B4BCA0]/20 backdrop-blur-sm border border-[#B4BCA0]/35">
            Our services
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="text-4xl md:text-5xl font-bold tracking-tight text-[#0B1609] mb-3">Full-spectrum renewable EPC</motion.h2>
          <motion.p {...fadeUp(2)} className="text-[#698B57] max-w-lg mx-auto leading-relaxed">One partner, complete accountability — from site resource assessment to long-term O&M.</motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { dot: "bg-[#4CAF50]", iconColor: "text-[#4CAF50]", Icon: Wind, name: "Wind Energy EPC", desc: "End-to-end wind farm development — micrositing, WTG foundations, crane hardstands, erection, SCADA integration, and grid commissioning.", specs: ["On-shore WTG","Up to 5+ MW turbines","ISTS grid tie"] },
            { dot: "bg-[#F9A825]", iconColor: "text-[#F9A825]", Icon: Sun, name: "Hybrid Solar + Wind", desc: "Co-located solar PV and wind turbine plants sharing civil infrastructure — maximise PLF, reduce per-unit cost, smooth generation variability.", specs: ["Optimised PLF","BESS ready","Shared infra savings"] },
            { dot: "bg-[#1E88E5]", iconColor: "text-[#1E88E5]", Icon: Wrench, name: "O&M Services", desc: "Preventive & corrective maintenance, 24×7 remote SCADA, spare parts management, and SLA-backed 97% plant availability guarantee.", specs: ["97% availability SLA","24×7 SCADA","AMC contracts"] },
          ].map((svc, i) => (
            <motion.div key={svc.name} {...fadeUp(i)}>
              <FlipCard
                front={
                  <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-xl border border-[#E8EDE3]/80 shadow-sm cursor-default">
                    <div className={`w-3 h-3 rounded-full mb-5 ${svc.dot}`} />
                    <svc.Icon size={28} className={`mb-3 ${svc.iconColor}`} />
                    <h3 className="text-xl font-bold text-[#0B1609] mb-3">{svc.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.specs.map(s => (
                        <span key={s} className="text-[11px] px-3 py-1 rounded-full font-semibold bg-[#F2F5EE]/90 border border-[#B4BCA0]/25 text-[#698B57]">{s}</span>
                      ))}
                    </div>
                  </div>
                }
                back={
                  <div className="rounded-2xl p-8 bg-gradient-to-br from-[#0b1609] to-[#1a2e16] flex flex-col justify-center gap-3 cursor-default">
                    <span className="text-[10px] font-bold tracking-[2px] uppercase text-[#698b57]">{svc.name}</span>
                    <p className="text-[14px] text-white/80 leading-relaxed">{svc.desc}</p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY SSV — animated glass compare */}
      <section className="py-24 px-[6%] bg-[#0B1609]">
        <div className="text-center mb-14">
          <motion.div {...fadeIn(0)} className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[2px] uppercase text-[#B4BCA0] mb-4 bg-[#B4BCA0]/8 backdrop-blur-sm border border-[#B4BCA0]/18">
            Why SSV Infra
          </motion.div>
          <motion.h2 {...fadeUp(1)} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">Not all EPC partners are equal</motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)} className="rounded-2xl p-8 bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-xl">
            <div className="text-[10px] font-bold text-[#B4BCA0] tracking-[2px] uppercase mb-3">Others</div>
            <h3 className="text-lg font-extrabold text-white mb-5">Typical EPC Contractor</h3>
            <ul className="space-y-3">
              {["Sub-contracted labour with no direct accountability","No in-house O&M — third-party handoff post-commissioning","Delayed projects due to supply chain gaps","Reactive maintenance only, no performance SLA","One-size-fits-all financing — no CAPEX/RESCO advisory"].map(item => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-white/55">
                  <XCircle size={16} className="text-red-400/70 flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp(1)} className="rounded-2xl p-8 relative overflow-hidden bg-[rgba(46,81,15,0.35)] backdrop-blur-xl border border-[#698B57]/40 shadow-[0_8px_40px_rgba(46,81,15,0.25)]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#698B57]/60 to-transparent" />
            <div className="absolute top-4 right-4 text-white text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wide uppercase bg-[#698B57]/50 backdrop-blur-sm border border-[#B4BCA0]/30">Recommended</div>
            <div className="text-[10px] font-bold text-[#B4BCA0] tracking-[2px] uppercase mb-3">SSV Infra</div>
            <h3 className="text-lg font-extrabold text-white mb-5">Full-Lifecycle EPC Partner</h3>
            <ul className="space-y-3">
              {["In-house certified teams — full contractual accountability","Own O&M division, 25-year plant life support","Pre-negotiated supply chain — 12–18 month delivery","97% SLA-backed availability with financial penalties","CAPEX / RESCO / PPA advisory for optimal ROI"].map(item => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-white/75">
                  <CheckCircle2 size={16} className="text-[#B4BCA0] flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-[6%] bg-[#FCFCFA] text-center">
        <motion.div {...fadeIn(0)} className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[2px] uppercase text-[#526B58] mb-5 bg-[#B4BCA0]/20 backdrop-blur-sm border border-[#B4BCA0]/35">
          Get started
        </motion.div>
        <motion.h2 {...fadeUp(1)} className="text-4xl md:text-5xl font-bold tracking-tight text-[#0B1609] mb-4">Ready to go renewable?</motion.h2>
        <motion.p {...fadeUp(2)} className="text-[#698B57] max-w-md mx-auto leading-relaxed mb-8">Get your free site feasibility report within 48 hours. No commitment required.</motion.p>
        <motion.div {...fadeUp(3)} className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+918088744581" className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full text-[15px] font-bold no-underline bg-[rgba(11,22,9,0.85)] backdrop-blur-md border border-[#B4BCA0]/20 shadow-xl hover:bg-[rgba(46,81,15,0.9)] transition-all">
            <Phone size={16} /> +91 80887 44581
          </a>
          <a href="https://wa.me/918088744581" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold no-underline text-[#25D366] bg-[rgba(37,211,102,0.08)] backdrop-blur-md border border-[#25D366]/45 hover:bg-[rgba(37,211,102,0.18)] transition-all">
            Chat on WhatsApp
          </a>
        </motion.div>
        <p className="text-[12px] text-[#909163] mt-5">📍 Vijayapur, Karnataka · Pan-India operations</p>
      </section>

      <footer className="bg-[#0B1609] text-white/30 text-center py-6 text-[13px]">
        © 2025 SSV Infra. All rights reserved. MNRE Empanelled. Karnataka Registered.
      </footer>

      <style>{`
        @keyframes ticker { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
      `}</style>
    </div>
  );
}
