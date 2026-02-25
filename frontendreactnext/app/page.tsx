"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registra o GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    // Garante os cálculos de altura
    setTimeout(() => ScrollTrigger.refresh(), 500);

    // ===============================================
    // 1. A MÁGICA DA MÁSCARA (Zoom Through Perfeito)
    // ===============================================
    const introTl = gsap.timeline({
        scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=2000", // Distância do scroll para o zoom acontecer
            pin: true,     // Trava a tela enquanto dá o zoom
            scrub: 1       // Segue o scroll de forma suave (ida e volta perfeita)
        }
    });

    // Dá um zoom extremo na palavra. O "ease: power3.in" faz ela começar devagar e explodir de tamanho no final
    introTl.to(".dev-text", {
        scale: 300, 
        duration: 1,
        ease: "power3.in"
    })
    // Remove a máscara preta no último milissegundo para liberar os cliques no site
    .to(".intro-overlay", {
        autoAlpha: 0,
        duration: 0.1
    });

    // ===============================================
    // 2. ANIMAÇÕES DO RESTO DO SITE
    // ===============================================
    gsap.from(".skill-card", {
        scrollTrigger: { trigger: ".skills", start: "top 85%", toggleActions: "play none none reverse" },
        y: 40, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "all"
    });

    gsap.from(".project-card", {
        scrollTrigger: { trigger: ".projects", start: "top 85%", toggleActions: "play none none reverse" },
        y: 50, autoAlpha: 0, duration: 0.7, stagger: 0.15, ease: "power2.out", clearProps: "all"
    });

    gsap.from(".gsap-footer", {
        scrollTrigger: { trigger: "#fale_conosco", start: "top 95%", toggleActions: "play none none reverse" },
        y: 30, autoAlpha: 0, duration: 0.8, ease: "power2.out", clearProps: "all"
    });

  }, { scope: container }); 

  return (
    <>
      <div className="bg-animated"></div>

      <div ref={container} style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        
        {/* === TELA DE MÁSCARA (O SEGREDO DO EFEITO ESTÁ AQUI) === */}
        <div className="intro-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#000000', // Fundo super preto
            mixBlendMode: 'multiply',   // TRUQUE DE MESTRE: O branco fica transparente, o preto fica opaco
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
        }}>
            <h1 className="dev-text" style={{
                fontSize: 'clamp(8rem, 25vw, 25rem)', 
                fontWeight: 900,
                letterSpacing: '10px',
                color: '#ffffff', // Branco (com o multiply, isso vira um "buraco" pro site embaixo)
                margin: 0,
                lineHeight: 1,
                transformOrigin: '50% 50%',
                willChange: 'transform'
            }}>DEV</h1>
        </div>
        
        {/* === O SITE FICA MONTADO NORMALMENTE AQUI EMBAIXO === */}
        <div className="main-site">
            <header className="gsap-header">
                <div className="container">
                    <nav className="navbar">
                        <h2>Portfólio<span>.Dev</span></h2>
                        <ul>
                            <li><a href="#inicio">Início</a></li>
                            <li><a href="#skills">Habilidades</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                            <li><a href="#fale_conosco" className="btn-contact">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            <main>
                <section id="inicio" className="hero">
                <div className="container">
                    <div className="hero-flex">
                        <div className="hero-text">
                            <span className="tag" style={{ display: 'inline-block', marginBottom: '12px' }}>Backend Developer</span>
                            <h2>Olá, sou <br /> <span className="gradient-text">João Vitor</span></h2>
                            <p style={{ margin: '20px 0', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Especialista em Backend Java. Crio a arquitetura que move aplicações modernas utilizando <strong>Spring Boot</strong>, <strong>Docker</strong> e <strong>SQL</strong>, priorizando código limpo, segurança e alta performance.
                            </p>
                            <div className="btns-wrapper">
                                <a href="#projetos" className="btn-primary">Ver Projetos</a>
                                <a href="https://github.com/Joaovirone" target="_blank" rel="noreferrer" style={{ color: '#0f172a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src="/img_tools/joao.jpeg" alt="Foto João Vitor" />
                        </div>
                    </div>
                </div>
                </section>

                <section id="skills" className="skills">
                <div className="container">
                    <h2 className="section-title gsap-title">Tech <span className="gradient-text">Stack</span></h2>
                    <div className="skills-grid">
                        <div className="skill-card">
                            <img src="/img_tools/html_foto.png" alt="HTML" />
                            <p>HTML5</p>
                        </div>
                        <div className="skill-card">
                            <img src="/img_tools/css_foto.png" alt="CSS" />
                            <p>CSS3</p>
                        </div>
                        <div className="skill-card">
                            <img src="/img_tools/Javascript_foto.png" alt="JS" />
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-card">
                            <img src="/img_tools/java_foto.png" alt="Java" />
                            <p>Java</p>
                        </div>
                        <div className="skill-card">
                            <img src="/img_tools/python_foto.png" alt="Python" />
                            <p>Python</p>
                        </div>
                        <div className="skill-card">
                            <i className="fas fa-database" style={{ color: '#1d4ed8', fontSize: '50px' }}></i>
                            <p>SQL</p>
                        </div>
                    </div>
                </div>
                </section>
                
                <section id="projetos" className="projects">
                <div className="container">
                    <h2 className="section-title gsap-title">Projetos <span className="gradient-text">Recentes</span></h2>
                    
                    <div className="projects-grid">
                        <article className="project-card">
                            <div className="card-img">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="card-content">
                                <span className="tag">Backend</span>
                                <h3>InvestTracker-API</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '10px 0' }}>API REST para consumo e integração de dados de investimentos com Spring Boot e Docker.</p>
                                <a href="https://github.com/Joaovirone/InvestTracker-API" target="_blank" rel="noreferrer">Ver Código &rarr;</a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="card-img">
                                <i className="fas fa-university"></i>
                            </div>
                            <div className="card-content">
                                <span className="tag">Backend</span>
                                <h3>Finteh-API</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '10px 0' }}>Sistema robusto para transações financeiras com validações de segurança e PostgreSQL.</p>
                                <a href="https://github.com/Joaovirone/fintech-api" target="_blank" rel="noreferrer">Ver Código &rarr;</a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="card-img">
                                <img src="/img_tools/calculadora1.jpg" alt="Calculadora" />
                            </div>
                            <div className="card-content">
                                <span className="tag">Frontend</span>
                                <h3>Calculadora Web</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '10px 0' }}>Aplicação interativa para cálculos matemáticos básicos com interface responsiva.</p>
                                <a href="/calculadora.html">Testar &rarr;</a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="card-img">
                                <img src="/img_tools/aluguel.jfif" alt="Carros" />
                            </div>
                            <div className="card-content">
                                <span className="tag">Design</span>
                                <h3>Motors Vendas</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '10px 0' }}>Plataforma visual para visualização de disponibilidade de veículos.</p>
                                <a href="/CARROS.html">Ver Detalhes &rarr;</a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="card-img">
                                <img src="/img_tools/IMC1.jpg" alt="Calculadora IMC" />
                            </div>
                            <div className="card-content">
                                <span className="tag">JavaScript Logic</span>
                                <h3>Calculadora IMC</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '10px 0' }}>Ferramenta interativa para monitoramento de saúde. Processa peso e altura para calcular o IMC via lógica JavaScript.</p>
                                <a href="/IMC.html">Calcular &rarr;</a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="card-img">
                                <img src="/img_tools/cardapio.webp" alt="Cardápio Digital" />
                            </div>
                            <div className="card-content">
                                <span className="tag">Frontend UI</span>
                                <h3>Cardápio Digital</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '10px 0' }}>Interface moderna e intuitiva para a cantina do CEEP. Otimiza o atendimento e melhora a experiência.</p>
                                <a href="/cardapio.html">Ver Menu &rarr;</a>
                            </div>
                        </article>
                    </div>
                </div>
                </section>
            </main>

            <footer id="fale_conosco">
                <div className="container">
                    <div className="footer-box gsap-footer">
                        <h3>Vamos construir algo juntos?</h3>
                        <p style={{ marginTop: '10px' }}>Entre em contato para discutirmos seu próximo projeto.</p>
                        <div className="footer-icons">
                            <a href="mailto:jovmamikl@gmail.com"><i className="fas fa-envelope"></i></a>
                            <a href="#"><i className="fas fa-phone"></i></a>
                            <a href="https://linkedin.com/in/joaovirone"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <p style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.7 }}>&copy; 2026 João Vitor. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
      </div>
    </>
  );
}