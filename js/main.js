/* =========================================================
   MOTOR PRINCIPAL DE LA PLANTILLA
   peluqueria-template

   Este archivo NO contiene información específica
   de ningún negocio.

   Los datos vienen desde:
   config/site-config.js
   ========================================================= */


/* =========================================================
   1. INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initSite();
});


function initSite() {

    if (!window.siteConfig) {
        console.error("siteConfig no está disponible.");
        return;
    }

    renderPageMetadata();

    renderHeader();

    renderHero();

    renderSocialProof();

    renderAbout();

    renderWhyUs();

    renderServices();

    renderTestimonials();

    renderTeam();

    renderAcademy();

    renderSocial();

    renderLocation();

    renderFinalCTA();

    renderFooter();

    initSmoothScroll();
}


/* =========================================================
   2. METADATOS
   ========================================================= */

function renderPageMetadata() {

    const config = window.siteConfig;

    if (config.business?.name) {
        document.title = `${config.business.name} | ${config.business.tagline || ""}`;
    }

    const description = document.querySelector(
        'meta[name="description"]'
    );

    if (
        description &&
        config.business?.description
    ) {
        description.setAttribute(
            "content",
            config.business.description
        );
    }

    const themeColor = document.querySelector(
        'meta[name="theme-color"]'
    );

    if (
        themeColor &&
        config.branding?.colors?.primary
    ) {
        themeColor.setAttribute(
            "content",
            config.branding.colors.primary
        );
    }
}


/* =========================================================
   3. HEADER
   ========================================================= */

function renderHeader() {

    const container = document.getElementById("site-header");

    if (!container) return;

    const config = window.siteConfig;

    container.innerHTML = `
        <div class="container header-container">

            <a
                href="#hero"
                class="site-logo"
                aria-label="Ir al inicio"
            >
                ${
                    config.branding?.logo
                    ? `
                        <img
                            src="${config.branding.logo}"
                            alt="${config.business.name}"
                        >
                    `
                    : `
                        <span>
                            ${config.business.name}
                        </span>
                    `
                }
            </a>


            <nav
                class="main-nav"
                aria-label="Navegación principal"
            >

                <a href="#about">Nosotros</a>

                <a href="#services">Servicios</a>

                <a href="#gallery">Trabajos</a>

                <a href="#testimonials">Opiniones</a>

                <a href="#location">Ubicación</a>

                ${renderButton(
                    config.hero?.primaryButton,
                    "header-cta"
                )}

            </nav>


            <button
                class="menu-toggle"
                type="button"
                aria-label="Abrir menú"
                aria-expanded="false"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </div>
    `;

    initMobileMenu();
}


/* =========================================================
   4. HERO
   ========================================================= */

function renderHero() {

    const container = document.getElementById("hero");

    if (!container) return;

    const config = window.siteConfig;
    const hero = config.hero;

    if (!config.sections?.hero) {
        container.remove();
        return;
    }

    container.innerHTML = `

        <div class="hero-background">

            ${
                hero.image
                ? `
                    <img
                        src="${hero.image}"
                        alt="${config.business.name}"
                        class="hero-image"
                    >
                `
                : ""
            }

        </div>


        <div class="hero-overlay"></div>


        <div class="container hero-content">

            <div class="hero-text">

                <span class="hero-label">
                    ${config.business.type || ""}
                </span>

                <h1>
                    ${hero.title || config.business.tagline || ""}
                </h1>

                <p>
                    ${hero.subtitle || ""}
                </p>


                <div class="hero-actions">

                    ${renderButton(
                        hero.primaryButton,
                        "btn btn-primary"
                    )}

                    ${renderButton(
                        hero.secondaryButton,
                        "btn btn-secondary"
                    )}

                </div>

            </div>

        </div>
    `;
}


/* =========================================================
   5. SOCIAL PROOF
   ========================================================= */

function renderSocialProof() {

    const container = document.getElementById("social-proof");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.socialProof) {
        container.remove();
        return;
    }

    const proof = config.socialProof;

    container.innerHTML = `

        <div class="container social-proof-container">

            <div class="social-proof-rating">

                <strong>
                    ${proof.rating || ""}
                </strong>

                <span class="stars">
                    ★★★★★
                </span>

            </div>


            <div class="social-proof-divider"></div>


            <div class="social-proof-reviews">

                <strong>
                    ${proof.reviewCount || ""}
                </strong>

                <span>
                    ${proof.label || "opiniones"}
                </span>

            </div>


            ${
                proof.platform
                ? `
                    <div class="social-proof-platform">
                        ${proof.platform}
                    </div>
                `
                : ""
            }

        </div>
    `;
}


/* =========================================================
   6. ABOUT
   ========================================================= */

function renderAbout() {

    const container = document.getElementById("about");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.about) {
        container.remove();
        return;
    }

    const about = config.about;

    container.innerHTML = `

        <div class="container section-grid">

            <div class="section-image">

                ${
                    about.image
                    ? `
                        <img
                            src="${about.image}"
                            alt="${about.title || "Nuestro salón"}"
                            loading="lazy"
                        >
                    `
                    : ""
                }

            </div>


            <div class="section-content">

                <span class="section-label">
                    Conócenos
                </span>

                <h2>
                    ${about.title || ""}
                </h2>

                <p>
                    ${about.description || ""}
                </p>


                ${
                    about.highlights?.length
                    ? `
                        <div class="about-highlights">

                            ${about.highlights.map(item => `
                                <div class="highlight-item">

                                    <span class="highlight-icon">
                                        ✓
                                    </span>

                                    <span>
                                        ${item}
                                    </span>

                                </div>
                            `).join("")}

                        </div>
                    `
                    : ""
                }

            </div>

        </div>
    `;
}


/* =========================================================
   7. WHY US
   ========================================================= */

function renderWhyUs() {

    const container = document.getElementById("why-us");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.whyUs) {
        container.remove();
        return;
    }

    const section = config.whyUs;

    container.innerHTML = `

        <div class="container">

            <div class="section-heading">

                <span class="section-label">
                    Nuestra diferencia
                </span>

                <h2>
                    ${section.title || ""}
                </h2>

                <p>
                    ${section.description || ""}
                </p>

            </div>


            <div class="why-us-grid">

                ${
                    section.items?.map(item => `
                        <article class="why-us-card">

                            <div class="why-us-icon">
                                ${getIcon(item.icon)}
                            </div>

                            <h3>
                                ${item.title || ""}
                            </h3>

                            <p>
                                ${item.description || ""}
                            </p>

                        </article>
                    `).join("") || ""
                }

            </div>

        </div>
    `;
}


/* =========================================================
   8. SERVICIOS
   ========================================================= */

function renderServices() {

    const container = document.getElementById("services");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.services) {
        container.remove();
        return;
    }

    const servicesConfig = config.services || {};
    const services = servicesConfig.items || [];

    container.innerHTML = `

        <div class="container">

            <div class="section-heading">

                <span class="section-label">
                    Nuestros servicios
                </span>

                <h2>
                    ${servicesConfig.title || "Nuestros servicios"}
                </h2>

                <p>
                    ${config.business.description || ""}
                </p>

            </div>


            <div class="services-grid">

                ${services.map(service => `

                    <article class="service-card">

                        ${
                            service.image
                            ? `
                                <div class="service-image">

                                    <img
                                        src="${service.image}"
                                        alt="${service.name || service.title || "Servicio de peluquería"}"
                                        loading="lazy"
                                    >

                                </div>
                            `
                            : ""
                        }


                        <div class="service-content">

                            <h3>
                                ${service.name || service.title || ""}
                            </h3>

                            ${
                                service.description
                                ? `
                                    <p>
                                        ${service.description}
                                    </p>
                                `
                                : ""
                            }


                            ${
                                service.price
                                ? `
                                    <span class="service-price">
                                        ${service.price}
                                    </span>
                                `
                                : ""
                            }


                            ${
                                service.button
                                ? renderButton(
                                    service.button,
                                    "btn btn-outline"
                                )
                                : ""
                            }

                        </div>

                    </article>

                `).join("")}

            </div>

        </div>
    `;
}


/* =========================================================
   9. TESTIMONIOS
   ========================================================= */

function renderTestimonials() {

    const container = document.getElementById("testimonials");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.testimonials) {
        container.remove();
        return;
    }

    const testimonialsConfig = config.testimonials || {};
    const testimonials = testimonialsConfig.items || [];

    container.innerHTML = `

        <div class="container">

            <div class="section-heading">

                <span class="section-label">
                    Opiniones
                </span>

                <h2>
                    ${testimonialsConfig.title || "Lo que dicen nuestras clientas"}
                </h2>

            </div>


            <div class="testimonials-grid">

                ${testimonials.map(testimonial => `

                    <article class="testimonial-card">

                        <div class="testimonial-stars">
                            ${"★".repeat(testimonial.rating || 5)}
                        </div>

                        <p>
                            “${testimonial.text || ""}”
                        </p>

                        <div class="testimonial-author">

                            <strong>
                                ${testimonial.name || ""}
                            </strong>

                            ${
                                testimonial.date
                                ? `
                                    <span>
                                        ${testimonial.date}
                                    </span>
                                `
                                : ""
                            }

                        </div>

                    </article>

                `).join("")}

            </div>

        </div>
    `;
}


/* =========================================================
   10. EQUIPO
   ========================================================= */

function renderTeam() {

    const container = document.getElementById("team");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.team) {
        container.remove();
        return;
    }

    const teamConfig = config.team || {};
    const team = teamConfig.members || [];

    container.innerHTML = `

        <div class="container">

            <div class="section-heading">

                <span class="section-label">
                    Nuestro equipo
                </span>

                <h2>
                    ${teamConfig.title || "Personas detrás de cada transformación"}
                </h2>

            </div>


            <div class="team-grid">

                ${team.map(member => `

                    <article class="team-card">

                        ${
                            member.image
                            ? `
                                <img
                                    src="${member.image}"
                                    alt="${member.name}"
                                    loading="lazy"
                                >
                            `
                            : ""
                        }

                        <h3>
                            ${member.name || ""}
                        </h3>

                        <p>
                            ${member.role || ""}
                        </p>

                    </article>

                `).join("")}

            </div>

        </div>
    `;
}


/* =========================================================
   11. ACADEMIA
   ========================================================= */

function renderAcademy() {

    const container = document.getElementById("academy");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.academy) {
        container.remove();
        return;
    }

    const academy = config.academy;

    container.innerHTML = `

        <div class="container academy-container">

            ${
                academy.image
                ? `
                    <div class="academy-image">

                        <img
                            src="${academy.image}"
                            alt="${academy.title || "Academia"}"
                            loading="lazy"
                        >

                    </div>
                `
                : ""
            }


            <div class="academy-content">

                <span class="section-label">
                    Formación
                </span>

                <h2>
                    ${academy.title || ""}
                </h2>

                <p>
                    ${academy.description || ""}
                </p>


                ${
                    academy.button
                    ? renderButton(
                        academy.button,
                        "btn btn-primary"
                    )
                    : ""
                }

            </div>

        </div>
    `;
}


/* =========================================================
   12. REDES SOCIALES
   ========================================================= */

function renderSocial() {

    const container = document.getElementById("social");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.social) {
        container.remove();
        return;
    }

    const social = config.social;

    const networks = [
        {
            name: "Instagram",
            url: social?.instagram,
            icon: "◎",
            description: "Mira nuestros trabajos"
        },
        {
            name: "Facebook",
            url: social?.facebook,
            icon: "f",
            description: "Síguenos en Facebook"
        },
        {
            name: "TikTok",
            url: social?.tiktok,
            icon: "♪",
            description: "Descubre más contenido"
        }
    ];

    const availableNetworks = networks.filter(
        network => network.url
    );

    container.innerHTML = `

        <div class="container social-container">

            <div class="section-heading">

                <span class="section-label">
                    Síguenos
                </span>

                <h2>
                    Mira nuestros últimos trabajos
                </h2>

            </div>


            <div class="social-links">

                ${availableNetworks.map(network => `

                    <a
                        href="${network.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-link"
                    >
                        <span class="social-icon" aria-hidden="true">
                            ${network.icon}
                        </span>

                        <span class="social-link-copy">
                            <strong>${network.name}</strong>
                            <small>${network.description}</small>
                        </span>

                        <span class="social-arrow" aria-hidden="true">
                            ↗
                        </span>
                    </a>

                `).join("")}

            </div>

        </div>
    `;
}


/* =========================================================
   13. UBICACIÓN
   ========================================================= */

function renderLocation() {

    const container = document.getElementById("location");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.location) {
        container.remove();
        return;
    }

    const location = config.location;

    container.innerHTML = `

        <div class="container location-container">

            <div class="location-content">

                <span class="section-label">
                    Visítanos
                </span>

                <h2>
                    Encuéntranos
                </h2>

                <p>
                    ${location.address || ""}
                </p>

                ${
                    location.city
                    ? `
                        <p>
                            ${location.city}
                        </p>
                    `
                    : ""
                }


                ${
                    location.mapUrl
                    ? `
                        <a
                            href="${location.mapUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-outline"
                        >
                            Ver ubicación
                        </a>
                    `
                    : ""
                }

                ${
                    location.directionsUrl
                    ? `
                        <a
                            href="${location.directionsUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-primary"
                        >
                            Cómo llegar
                        </a>
                    `
                    : ""
                }

            </div>


            <div class="location-map">

                ${
                    location.mapEmbed
                    ? `
                        <iframe
                            src="${location.mapEmbed}"
                            title="Mapa de ubicación de ${config.business.name}"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    `
                    : `
                        <div class="map-placeholder">
                            Mapa
                        </div>
                    `
                }

            </div>

        </div>
    `;
}


/* =========================================================
   14. CTA FINAL
   ========================================================= */

function renderFinalCTA() {

    const container = document.getElementById("final-cta");

    if (!container) return;

    const config = window.siteConfig;

    if (!config.sections?.finalCTA) {
        container.remove();
        return;
    }

    const cta = config.finalCTA;

    container.innerHTML = `

        <div class="container final-cta-container">

            <div class="final-cta-content">

                <h2>
                    ${cta.title || ""}
                </h2>

                <p>
                    ${cta.description || ""}
                </p>


                ${
                    cta.button
                    ? renderButton(
                        cta.button,
                        "btn btn-primary"
                    )
                    : ""
                }

            </div>

        </div>
    `;
}


/* =========================================================
   15. FOOTER
   ========================================================= */

function renderFooter() {

    const container = document.getElementById("site-footer");

    if (!container) return;

    const config = window.siteConfig;

    container.innerHTML = `

        <div class="container footer-container">

            <div class="footer-brand">

                ${
                    config.branding?.logo
                    ? `
                        <img
                            src="${config.branding.logo}"
                            alt="${config.business.name}"
                        >
                    `
                    : `
                        <strong>
                            ${config.business.name}
                        </strong>
                    `
                }

                <p>
                    ${config.business.description || ""}
                </p>

            </div>


            <div class="footer-contact">

                ${
                    config.contact?.phone
                    ? `
                        <a href="tel:${config.contact.phone}">
                            ${config.contact.phone}
                        </a>
                    `
                    : ""
                }

                ${
                    config.contact?.whatsapp
                    ? `
                        <a
                            href="https://wa.me/${config.contact.whatsapp}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                    `
                    : ""
                }

            </div>


            <div class="footer-bottom">

                <p>
                    © ${new Date().getFullYear()}
                    ${config.business.name}.
                    Todos los derechos reservados.
                </p>

                <p>
                    Sitio web desarrollado por SumaqCode
                </p>

            </div>

        </div>
    `;
}


/* =========================================================
   16. GENERADOR DE BOTONES
   ========================================================= */

function renderButton(button, className = "btn") {

    if (!button) return "";

    const type = button.type || "link";
    const text = button.text || "Ver más";

    let href = "#";

    switch (type) {

        case "whatsapp":

            href = `https://wa.me/${window.siteConfig.contact.whatsapp}`;

            if (button.message) {
                href += `?text=${encodeURIComponent(button.message)}`;
            }

            break;


        case "scroll":

            href = button.target || button.url || "#";

            break;


        case "link":

            href = button.url || "#";

            break;


        default:

            href = "#";
    }


    const external =
        type === "whatsapp" ||
        type === "link";


    return `
        <a
            href="${href}"
            class="${className}"
            ${
                external
                ? `
                    target="_blank"
                    rel="noopener noreferrer"
                `
                : ""
            }
        >
            ${text}
        </a>
    `;
}


/* =========================================================
   17. ICONOS
   ========================================================= */

function getIcon(icon) {

    const icons = {

        consultation: "💬",

        color: "✦",

        care: "♡",

        experience: "★",

        default: "✦"
    };

    return icons[icon] || icons.default;
}


/* =========================================================
   18. MENÚ MÓVIL
   ========================================================= */

function initMobileMenu() {

    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {

        const isOpen =
            toggle.getAttribute("aria-expanded") === "true";

        toggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        nav.classList.toggle(
            "is-open",
            !isOpen
        );

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

            nav.classList.remove("is-open");

        });

    });
}


/* =========================================================
   19. SCROLL SUAVE
   ========================================================= */

function initSmoothScroll() {

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });
}
