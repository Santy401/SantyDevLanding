"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Ultra-fluid Spring Transition for Layout
  const modalTransition = {
    type: "spring",
    damping: 30,
    stiffness: 150,
    mass: 1,
    restDelta: 0.001
  };

  const projectCards = [
    {
      id: 1,
      title: "Plataforma SaaS",
      desc: "Diseño y desarrollo de una landing page optimizada para conversiones con animaciones fluidas.",
      fullDesc: "Una solución integral para empresas que buscan automatizar sus procesos de marketing. Incluye analíticas avanzadas, integraciones con CRM y un sistema de gestión de contenidos intuitivo.",
      images: ["/StyleMeBlack.png"],
      demoUrl: "#"
    },
    {
      id: 2,
      title: "E-commerce Moderno",
      desc: "Interfaz intuitiva enfocada en la experiencia de usuario y arquitectura de microservicios.",
      fullDesc: "Tienda online construida con las últimas tecnologías de renderizado para asegurar tiempos de carga mínimos. Cuenta con carrito de compras reactivo, pasarela de pagos y panel de administración.",
      images: ["/StyleMeBlack.png"],
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Dashboard Analítico",
      desc: "Visualización de datos compleja con componentes interactivos y tiempo real.",
      fullDesc: "Panel de control diseñado para la toma de decisiones basada en datos. Utiliza gráficos interactivos y actualizaciones en tiempo real mediante Sockets para mostrar métricas clave de negocio.",
      images: ["/StyleMeBlack.png"],
      demoUrl: "#"
    }
  ];

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#000] text-white p-6 md:p-12 lg:p-20 font-sans selection:bg-cyan-500/30 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-[380px_1fr] lg:gap-x-24 gap-y-16 items-start">

        {/* LEFT COLUMN GROUP */}
        <div className="contents lg:flex lg:flex-col lg:space-y-24 w-full">

          {/* A. Profile & Education */}
          <motion.div variants={itemVariants} className="order-1 flex flex-col space-y-12 w-full">
            <div className="relative group">
              <div className="relative w-full h-[380px] aspect-square rounded-[40px] overflow-visible flex items-end justify-center transition-transform duration-500">
                <Image
                  src="/StyleMeBlack.png"
                  alt="Santiago Castellar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 group-hover:ring-cyan-500/50 transition-all pointer-events-none" />
              </div>
            </div>

            <section className="space-y-6">
              <div className="space-y-1">
                <p className="text-neutral-500 w-full sm:w-80 text-center mx-auto leading-relaxed italic">
                  Desarrollador web autodidacta, enfocado en construir soluciones reales y funcionales.
                </p>
              </div>
            </section>
          </motion.div>

          {/* C. Technologies */}
          <motion.section variants={itemVariants} className="order-3 space-y-8 w-full">
            <h2 className="text-4xl font-serif">Tecnologías</h2>
            <div className="grid grid-cols-3 gap-4">
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="bg-[#1E1E1E] p-4 rounded-2xl border border-white/5 flex items-center justify-center hover:bg-white/5 cursor-default transition-colors">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white"><path d="M18.66 12.5a6.16 6.16 0 1 1-12.32 0 6.16 6.16 0 0 1 12.32 0ZM12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm-.5 18h-2v-6.5l-4 6.5h-1.5V6h2v6.5l4-6.5h1.5v12Zm4.5-5.5h-2v5.5h-2V6h2v5.5h2V6h2v12h-2v-5.5Z" /></svg>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="bg-[#FACC15] p-4 rounded-2xl flex items-center justify-center cursor-default transition-colors">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black"><path d="M3 3h18v18H3V3m11.53 14.28c.13.25.32.48.57.65.25.17.5.25.75.25.26 0 .52-.08.73-.25.21-.17.34-.41.34-.73 0-.31-.13-.56-.37-.73s-.59-.26-1.07-.38c-1.39-.32-2.18-.54-2.18-1.57 0-.5.25-1 .73-1.35.48-.35 1.13-.54 1.95-.54 1.12 0 2.06.41 2.53 1.23l-1.31.81c-.28-.51-.7-.78-1.22-.78-.26 0-.5.08-.68.25-.18.17-.26.35-.26.54 0 .15.1.33.25.46s.46.22 1 .37c1.39.31 2.22.61 2.22 1.58 0 .55-.26 1.05-.73 1.34-.47.29-1.12.43-1.94.43-1.34 0-2.31-.57-2.61-1.63l1.32-.72M6.63 12h1.36v4.1c0 .48.06.84.21 1.06.15.22.42.33.81.33.26 0 .49-.06.66-.19.17-.13.28-.35.28-.61h1.32c0 .5-.21.94-.65 1.3-.44.36-1.1.54-1.95.54-1.2 0-1.9-.32-2.35-.91-.45-.59-.65-1.53-.65-2.81V12z" /></svg>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="bg-[#20232A] p-4 rounded-2xl flex items-center justify-center hover:animate-spin-slow cursor-default transition-transform">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#61DAFB]"><path d="M23.32 10.648a10.491 10.491 0 0 0-1.928-3.604c-.664-.78-1.503-1.425-2.441-1.89-1.077-.534-2.226-.811-3.376-.811-1.15 0-2.3 2.774-3.377.81-1.076.535-2.006 1.3-2.738 2.227l.119-.053-.119.053a10.491 10.491 0 0 0-1.928 3.604c-.314 1.144-.314 2.33 0 3.474a10.491 10.491 0 0 0 1.928 3.604c.664.78 1.503 1.425-2.441 1.89 1.077.534 2.226.812 3.376.812 1.15 0 2.3-.278 3.377-.812 1.076-.534 2.006-1.3 2.738-2.227A10.491 10.491 0 0 0 23.32 13.52c.314-1.144.314-2.33 0-3.474ZM12 15.174a3.174 3.174 0 1 1 0-6.348 3.174 3.174 0 0 1 0 6.348Z" /></svg>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {['Adaptable', 'Resolución de problemas', 'Trabajo en equipo', 'Orientación al detalle', 'Aprendizaje continuo'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          {/* E. Projects */}
          <motion.section variants={itemVariants} className="order-5 space-y-8 w-full">
            <h2 className="text-4xl font-serif">Proyectos</h2>
            <div className="grid grid-cols-1 gap-4">
              {projectCards.map((proj) => (
                <motion.div
                  key={proj.id}
                  layoutId={`project-${proj.id}`}
                  transition={modalTransition}
                  onClick={() => setSelectedProject(proj)}
                  whileHover={{ x: 10 }}
                  className="p-6 bg-[#111] border border-white/5 rounded-3xl group cursor-pointer transition-colors hover:bg-white/5"
                >
                  <motion.h3
                    layoutId={`title-${proj.id}`}
                    transition={modalTransition}
                    className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight"
                  >
                    {proj.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`desc-${proj.id}`}
                    transition={modalTransition}
                    className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors"
                  >
                    {proj.desc}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>

        {/* RIGHT COLUMN GROUP */}
        <div className="contents lg:flex lg:flex-col lg:space-y-24 w-full h-full">

          {/* B. Hero Header */}
          <motion.header variants={itemVariants} className="order-2 space-y-8 lg:pt-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">Hola !</h1>
            <div className="space-y-6 max-w-2xl">
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
                Soy <span className="text-white font-bold decoration-cyan-500 decoration-2 underline-offset-4 underline">Santiago Castellar</span>, desarrollador de software radicado en Colombia, apasionado por el código y la resolución de problemas. Me enfoco en transformar ideas en soluciones digitales claras, escalables y funcionales, priorizando el rendimiento y el impacto real que la tecnología puede generar en las personas y los negocios.
              </p>
              <p className="text-lg md:text-xl text-neutral-400">
                <span className="font-bold text-white">Profesión:</span> Desarrollador de Software desde 2020 hasta hoy 2026.
              </p>
            </div>
          </motion.header>

          {/* D. Experience Section */}
          <motion.section variants={itemVariants} className="order-4 space-y-12">
            <h2 className="text-5xl font-serif">Experiencia</h2>

            <div className="space-y-20">
              {/* Exp 1 */}
              <div className="relative pl-12 group">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-orange-400/50 to-transparent" />
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="absolute top-0 left-[-6px] w-3.5 h-3.5 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div className="space-y-2 transition-transform group-hover:translate-x-2">
                    <p className="text-orange-400 font-mono text-sm font-bold uppercase tracking-widest">2017 - 2019</p>
                    <h3 className="text-4xl font-bold">EcoSolutions</h3>
                    <p className="text-xl text-neutral-400 font-medium">Desarrollador Full Stack</p>
                  </div>
                </div>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">Colaboré en el desarrollo de una plataforma de gestión ambiental, implementando nuevas funcionalidades y optimizando el rendimiento del sistema.</p>
              </div>

              <div className="relative pl-12 group">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-blue-400/50 to-transparent" />
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="absolute top-0 left-[-6px] w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div className="space-y-2 transition-transform group-hover:translate-x-2">
                    <p className="text-blue-400 font-mono text-sm font-bold uppercase tracking-widest">2022 Feb - 2022 Dec</p>
                    <h3 className="text-4xl font-bold">Upcred.ai</h3>
                    <p className="text-xl text-neutral-400 font-medium">Desarrollador Frontend</p>
                  </div>
                </div>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">Mantuve la coherencia visual y el rendimiento de la plataforma web de Upcred.ai, creando componentes reutilizables y mejorando la experiencia del usuario.</p>
              </div>

              <div className="relative pl-12 group">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-green-400/50 to-transparent" />
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="absolute top-0 left-[-6px] w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div className="space-y-2 transition-transform group-hover:translate-x-2">
                    <p className="text-green-400 font-mono text-sm font-bold uppercase tracking-widest">2020 - Presente</p>
                    <h3 className="text-4xl font-bold">Simplapp</h3>
                    <p className="text-xl text-neutral-400 font-medium">Desarrollador Principal</p>
                  </div>
                </div>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">Lidero el desarrollo de un sistema de facturación integral con integración directa de la DIAN.</p>
              </div>
            </div>
          </motion.section>

          {/* F. Contact Section */}
          <motion.section variants={itemVariants} className="order-6 space-y-6 pt-8 border-t border-white/5">
            <h2 className="text-4xl font-serif">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="#" className="flex items-center gap-4 group">
                <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center transition-transform">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12.031 6.172c-2.32 0-4.591.905-6.23 2.544S3.257 12.553 3.257 14.872c0 1.259.333 2.503.967 3.601l-1.026 3.738 3.824-1.003c1.053.574 2.235.877 3.429.877 2.321 0 4.591-.905 6.23-2.544s2.544-3.844 2.544-6.163c0-2.32-.905-4.591-2.544-6.23s-3.844-2.544-6.163-2.544zm3.93 11.233c-.22.614-1.282 1.154-1.741 1.21-.459.056-.918.084-3.218-.868-2.771-1.144-4.561-3.951-4.701-4.136-.14-.185-1.127-1.498-1.127-2.859 0-1.361.699-2.032.946-2.312.247-.28.539-.35.719-.35.18 0 .36 0 .514.007.164.007.387-.063.606.467.22.53.753 1.834.817 1.968.064.134.106.29.014.474-.091.184-.134.304-.268.459-.134.155-.282.346-.401.465-.134.135-.275.283-.119.55.155.267.69 1.135 1.481 1.838.815.726 1.499.95 2.155 1.196.26.099.416.084.571-.091.155-.176.671-.784.848-1.05.176-.267.354-.226.594-.141.24.084 1.517.714 1.777.848.261.134.437.204.5.31.064.106.064.614-.156 1.228z" /></svg>
                </motion.div>
                <div>
                  <p className="text-sm text-neutral-400">WhatsApp</p>
                  <p className="font-medium">+573238357780</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 group">
                <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-[#EA4335] rounded-full flex items-center justify-center transition-transform">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.075 3 1.5 3h.563l10 7.188L22.063 3H22.5c.425 0 .8.162 1.069.432.269.268.431.643.431 1.068z" /></svg>
                </motion.div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <p className="font-medium text-xs md:text-base">santiagocastellar201022@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.section>

        </div>
      </div>

      {/* Modal / Project Detail */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Content Container */}
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={false} // This skips the entry "travel" from the card
              transition={modalTransition}
              className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Image Gallery Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full md:w-1/2 aspect-video md:aspect-auto bg-[#1a1a1a]"
              >
                <Image
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Text Side */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-4"
                >
                  <motion.h2
                    layoutId={`title-${selectedProject.id}`}
                    transition={modalTransition}
                    className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-cyan-400 uppercase"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`desc-${selectedProject.id}`}
                    transition={modalTransition}
                    className="text-lg md:text-xl text-neutral-300 leading-relaxed"
                  >
                    {selectedProject.fullDesc}
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 text-center"
                  >
                    Ver Demo en Vivo
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/30 rounded-full transition-all text-neutral-300 text-center"
                  >
                    Cerrar
                  </button>
                </motion.div>
              </div>

              {/* Close Button X (Mobile mostly) */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-all text-white md:hidden"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="fixed bottom-10 right-10 opacity-20 pointer-events-none"
      >
        <div className="w-16 h-16 border-2 border-white/20 rotate-45" />
      </motion.div>
    </motion.main>
  );
}
