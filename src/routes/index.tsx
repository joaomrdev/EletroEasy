import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap, FileText, Gauge, Wrench, Lightbulb, Fan, ShieldCheck, Award, BadgeCheck,
  Clock, MessageCircle, Menu, X, Play,
} from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";
import projeto from "@/assets/projeto.jpeg.asset.json";
import v1 from "@/assets/video1.mp4.asset.json";
import v2 from "@/assets/video2.mp4.asset.json";
import v3 from "@/assets/video3.mp4.asset.json";
import v4 from "@/assets/video4.mp4.asset.json";
import v5 from "@/assets/video5.mp4.asset.json";
import p1 from "@/assets/poster1.jpg.asset.json";
import p2 from "@/assets/poster2.jpg.asset.json";
import p3 from "@/assets/poster3.jpg.asset.json";
import p4 from "@/assets/poster4.jpg.asset.json";
import p5 from "@/assets/poster5.jpg.asset.json";

const WHATSAPP = "https://contate.me/5521966372706";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Eletro Easy | Serviços Elétricos" },
      { name: "description", content: "Desde 2010 oferecendo serviços elétricos para residências, apartamentos, comércios e indústrias. Solicite seu orçamento grátis pelo WhatsApp." },
      { property: "og:title", content: "Eletro Easy | Serviços Elétricos" },
      { property: "og:description", content: "Soluções elétricas com qualidade e confiança desde 2010. Orçamento grátis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Trabalhos realizados" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#contato", label: "Contato" },
];

const services = [
  { icon: Zap, title: "Instalações elétricas", text: "Instalações elétricas, desde tomadas até projetos elétricos completos." },
  { icon: FileText, title: "Projetos elétricos", text: "Execução de projetos elétricos de acordo com a necessidade do cliente." },
  { icon: Gauge, title: "Padrão de entrada de energia", text: "Instalação de padrão de entrada monofásico, bifásico e trifásico." },
  { icon: Wrench, title: "Reformas de PC", text: "Reformas de PC." },
  { icon: Lightbulb, title: "Projetos de iluminação LED", text: "Projetos e instalações de iluminação em LED." },
  { icon: Fan, title: "Instalação de chuveiros e ventiladores", text: "Instalação de chuveiros e ventiladores." },
];

const videos = [
  { src: v1.url, poster: p1.url },
  { src: v2.url, poster: p2.url },
  { src: v3.url, poster: p3.url },
  { src: v4.url, poster: p4.url },
  { src: v5.url, poster: p5.url },
];

function WhatsButton({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "whatsapp"; className?: string }) {
  const styles = variant === "primary"
    ? "bg-primary text-primary-foreground shadow-glow hover:brightness-110"
    : "bg-whatsapp text-whatsapp-foreground hover:brightness-110";
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${styles} ${className}`}>
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 font-display text-4xl font-bold uppercase sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#inicio" className="flex shrink-0 items-center gap-2">
          <img src={logo.url} alt="Logo Eletro Easy" className="h-11 w-11 rounded-md object-cover" />
          <span className="font-display text-xl font-bold uppercase">Eletro <span className="text-primary">Easy</span></span>
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 text-sm font-medium">
            {nav.map((n) => <li key={n.href}><a href={n.href} className="text-muted-foreground transition hover:text-primary">{n.label}</a></li>)}
          </ul>
        </nav>
        <WhatsButton className="hidden px-4 py-2 text-sm lg:inline-flex">Solicitar orçamento grátis</WhatsButton>
        <button type="button" className="rounded-md p-2 lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu móvel" className="border-t border-border bg-background px-4 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {nav.map((n) => <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block py-3 font-medium">{n.label}</a></li>)}
          </ul>
          <WhatsButton className="w-full">Solicitar orçamento grátis</WhatsButton>
        </nav>
      )}
    </header>
  );
}

function VideoCard({ src, poster, index }: { src: string; poster: string; index: number }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-video bg-surface-deep">
        {playing ? (
          <video src={src} poster={poster} controls autoPlay playsInline preload="metadata" className="h-full w-full object-contain">
            Seu navegador não suporta vídeos.
          </video>
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring" aria-label={`Reproduzir vídeo ${index + 1}`}>
            <img src={poster} alt={`Trabalho realizado pela Eletro Easy – vídeo ${index + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            <span className="absolute inset-0 bg-surface-deep/40 transition group-hover:bg-surface-deep/20" />
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
              <Play className="ml-1 h-7 w-7" fill="currentColor" aria-hidden />
            </span>
          </button>
        )}
      </div>
      <p className="px-4 py-3 text-sm font-medium text-muted-foreground">Vídeo {index + 1}</p>
    </div>
  );
}

function Index() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        {/* Início */}
        <section id="inicio" className="relative overflow-hidden bg-circuit">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-3 py-1 text-sm font-semibold text-primary">
                <Zap className="h-4 w-4" aria-hidden /> Desde 2010 · Execução de projetos elétricos
              </p>
              <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
                Soluções elétricas com <span className="text-primary">qualidade</span> e confiança
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Desde 2010, oferecendo serviços elétricos para residências, apartamentos, comércios e indústrias.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsButton>Solicitar orçamento grátis</WhatsButton>
                <a href="#servicos" className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-semibold transition hover:border-primary hover:text-primary">
                  Conheça nossos serviços
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <img src={projeto.url} alt="Projeto elétrico com pontos elétricos de três pavimentos" className="aspect-[4/5] w-full rounded-2xl border border-border object-cover" />
              <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-xl border border-border bg-surface-deep p-3 sm:-left-8">
                <img src={logo.url} alt="" className="h-16 w-16 rounded-lg object-cover" />
                <div>
                  <p className="font-display text-3xl font-bold leading-none text-primary">Desde 2010</p>
                  <p className="text-sm text-muted-foreground">em serviços elétricos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle eyebrow="Serviços" title="O que fazemos" text="Serviços elétricos executados com seriedade, do pequeno reparo ao projeto completo." />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text }) => (
                <li key={title} className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/60">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-6 w-6" aria-hidden /></span>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-primary/30 bg-secondary p-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="font-display text-2xl font-bold uppercase">Precisa de um eletricista? Fale com a gente.</p>
              <WhatsButton>Solicitar orçamento grátis</WhatsButton>
            </div>
          </div>
        </section>

        {/* Trabalhos */}
        <section id="trabalhos" className="bg-surface-deep py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle eyebrow="Portfólio" title="Trabalhos realizados" text="Vídeos reais de serviços executados pela equipe Eletro Easy." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v, i) => <VideoCard key={v.src} {...v} index={i} />)}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
            <img src={logo.url} alt="Logo Eletro Easy – Elétrica Geral" loading="lazy" className="mx-auto w-full max-w-sm rounded-2xl border border-border" />
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">Sobre nós</p>
              <h2 className="mt-2 font-display text-4xl font-bold uppercase sm:text-5xl">Experiência que gera confiança</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Atuando desde 2010, a Eletro Easy trabalha para oferecer soluções elétricas com honestidade, seriedade e compromisso com cada serviço realizado.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nosso foco é a execução de projetos elétricos com atendimento profissional, do primeiro contato à entrega do serviço.
              </p>
            </div>
          </div>
        </section>

        {/* Por que escolher */}
        <section aria-labelledby="porque" className="border-y border-border bg-secondary py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="porque" className="font-display text-4xl font-bold uppercase sm:text-5xl">Por que escolher a <span className="text-primary">Eletro Easy?</span></h2>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { icon: Award, t: "Experiência desde 2010", d: "Mais de uma década realizando serviços elétricos." },
                { icon: ShieldCheck, t: "Honestidade e seriedade", d: "Trabalho transparente e compromisso com cada serviço." },
                { icon: BadgeCheck, t: "Orçamento grátis", d: "Fale com a gente e solicite seu orçamento sem custo." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground"><Icon className="h-7 w-7" aria-hidden /></span>
                  <h3 className="mt-4 font-display text-2xl font-bold uppercase">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="bg-circuit py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">Contato</p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase sm:text-6xl">Faça seu orçamento grátis</h2>
            <p className="mt-4 text-lg text-muted-foreground">Eletro Easy — fale com a gente pelo WhatsApp.</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-medium">
              <Clock className="h-5 w-5 text-primary" aria-hidden /> Horário de atendimento: das 8h às 18h
            </p>
            <div className="mt-8"><WhatsButton variant="whatsapp" className="px-8 py-4 text-lg">Falar pelo WhatsApp</WhatsButton></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface-deep">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="Logo Eletro Easy" loading="lazy" className="h-12 w-12 rounded-md object-cover" />
              <span className="font-display text-xl font-bold uppercase">Eletro <span className="text-primary">Easy</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Serviços elétricos com honestidade e seriedade desde 2010. Especialistas em execução de projetos elétricos.</p>
          </div>
          <nav aria-label="Rodapé">
            <h2 className="font-display text-lg font-bold uppercase">Navegação</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((n) => <li key={n.href}><a href={n.href} className="text-muted-foreground hover:text-primary">{n.label}</a></li>)}
            </ul>
          </nav>
          <div>
            <h2 className="font-display text-lg font-bold uppercase">Atendimento</h2>
            <p className="mt-3 text-sm text-muted-foreground">Das 8h às 18h</p>
            <WhatsButton variant="whatsapp" className="mt-4">Falar pelo WhatsApp</WhatsButton>
          </div>
        </div>
        <p className="border-t border-border py-6 text-center text-sm text-muted-foreground">© {year} Eletro Easy. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
