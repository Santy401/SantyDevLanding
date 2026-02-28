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

  const technologies = [
    {
      name: "Next.js",
      icon: <Image src="/nextjs.png" alt="Next.js" width={44} height={44} className="object-contain" />,
      bg: "bg-white",
      hover: { scale: 1.1, rotate: -5 }
    },
    {
      name: "TypeScript",
      icon: <Image src="/typescript.png" alt="TypeScript" width={44} height={44} className="object-contain" />,
      bg: "bg-[#3178C6]",
      hover: { scale: 1.1, rotate: 5 }
    },
    {
      name: "Node.js",
      icon: <Image src="/nodejs.png" alt="Node.js" width={44} height={44} className="object-contain" />,
      bg: "bg-[#339933]",
      hover: { scale: 1.1, rotate: -5 }
    },
    {
      name: "Tailwind CSS",
      icon: <Image src="/tailwindcss.png" alt="Tailwind CSS" width={44} height={44} className="object-contain" />,
      bg: "bg-[#0ea5e9]",
      hover: { scale: 1.1, rotate: 5 }
    },
    {
      name: "Arch Linux",
      icon: <Image src="/archlinux.png" alt="Arch Linux" width={44} height={44} className="object-contain" />,
      bg: "bg-[#1793D1]",
      hover: { scale: 1.1, rotate: -5 }
    }
  ];

  const projectCards = [
    {
      id: 1,
      title: "Plataforma SaaS",
      desc: "Diseño y desarrollo de una landing page optimizada para conversiones con animaciones fluidas.",
      fullDesc: "Una solución integral para empresas que buscan automatizar sus procesos de marketing. Incluye analíticas avanzadas, integraciones con CRM y un sistema de gestión de contenidos intuitivo.",
      images: ["/"],
      demoUrl: "#"
    },
    {
      id: 2,
      title: "E-commerce Moderno",
      desc: "Interfaz intuitiva enfocada en la experiencia de usuario y arquitectura de microservicios.",
      fullDesc: "Tienda online construida con las últimas tecnologías de renderizado para asegurar tiempos de carga mínimos. Cuenta con carrito de compras reactivo, pasarela de pagos y panel de administración.",
      images: ["/"],
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Dashboard Analítico",
      desc: "Visualización de datos compleja con componentes interactivos y tiempo real.",
      fullDesc: "Panel de control diseñado para la toma de decisiones basada en datos. Utiliza gráficos interactivos y actualizaciones en tiempo real mediante Sockets para mostrar métricas clave de negocio.",
      images: ["/"],
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
              {technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={tech.hover}
                  className={`${tech.bg} p-6 rounded-3xl border border-white/5 flex items-center justify-center cursor-default transition-all shadow-lg ${tech.className || ""}`}
                >
                  <div className="bg-white p-2 rounded-full shadow-sm flex items-center justify-center">
                    {tech.icon}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {['Adaptable', 'Resolución de problemas', 'Enfoque En Diseño', 'Orientación al detalle', 'Aprendizaje continuo'].map((skill) => (
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
              {/* <div className="relative pl-12 group">
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
 */}
              <div className="relative pl-12 group">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-green-400/50 to-transparent" />
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="absolute top-0 left-[-6px] w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div className="space-y-2 transition-transform group-hover:translate-x-2">
                    <p className="text-green-400 font-mono text-sm font-bold uppercase tracking-widest">2026 - Presente</p>
                    <h3 className="text-4xl font-bold">Simplapp</h3>
                    <p className="text-xl text-neutral-400 font-medium">Desarrollador Principal</p>
                  </div>
                </div>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">Lidero el desarrollo de un sistema de facturación integral con integración directa de la DIAN.</p>
              </div>
            </div>
          </motion.section>

          {/* F. Contact Section */}
          <motion.section
            variants={itemVariants}
            className="order-6 space-y-12 pt-8 border-t border-white/5"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-serif">Contacto</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="https://wa.me/573238357780" target="_blank" className="flex items-center gap-4 group">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-xs text-neutral-400">WhatsApp</p>
                    <p className="font-medium text-sm">+573238357780</p>
                  </div>
                </a>
                <a href="mailto:santiprocastellar7@gmail.com" className="flex items-center gap-4 group">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-[#EA4335] rounded-full flex items-center justify-center transition-transform">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.075 3 1.5 3h.563l10 7.188L22.063 3H22.5c.425 0 .8.162 1.069.432.269.268.431.643.431 1.068z" /></svg>
                  </motion.div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-neutral-400">Email</p>
                    <p className="font-medium text-[10px] sm:text-xs truncate max-w-[150px]">santiprocastellar7@gmail.com</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center transition-transform">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" /></svg>
                  </motion.div>
                  <div>
                    <p className="text-xs text-neutral-400">Instagram</p>
                    <p className="font-medium text-sm">@santy.dev</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Premium Contact Form */}
            <div className="bg-[#111] border border-white/5 rounded-[40px] p-8 md:p-12 space-y-10 group/form transition-all hover:bg-[#151515]">
              <div className="space-y-4">
                <h3 className="text-4xl font-serif">Hablemos de tu proyecto</h3>
                <p className="text-neutral-400 max-w-md italic">¿Tienes una idea en mente? Envíame un mensaje y la haremos realidad.</p>
              </div>

              <form
                action="https://formspree.io/f/mykdvljj"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-500 transition-all text-sm placeholder:text-neutral-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-500 transition-all text-sm placeholder:text-neutral-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Mensaje</label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-500 transition-all text-sm placeholder:text-neutral-700 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black font-bold py-5 rounded-2xl hover:bg-cyan-500 hover:text-white transition-all text-lg shadow-xl shadow-cyan-500/0 hover:shadow-cyan-500/20"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
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
