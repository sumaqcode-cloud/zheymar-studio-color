/* =========================================================
   PELUQUERÍA TEMPLATE
   Configuración principal del sitio

   Este archivo contiene únicamente información del negocio.
   La estructura, lógica y diseño están en:
   - index.html
   - main.js
   - gallery.js
   - style.css
   - responsive.css

   Para reutilizar la plantilla:
   1. Copia el proyecto.
   2. Modifica este archivo.
   3. Reemplaza las imágenes de assets/.
   4. No necesitas modificar la estructura principal.
   ========================================================= */

window.siteConfig = {

    /* =====================================================
       1. INFORMACIÓN DEL NEGOCIO
       ===================================================== */

    business: {
        name: "Zheymar Studio Color",
        type: "Peluquería",
        tagline: "Tu cabello. Tu color. Tu mejor versión.",
        description:
            "Especialistas en color y cuidado capilar, creando resultados personalizados según el estilo y las necesidades de cada cliente."
    },


    /* =====================================================
       2. IDENTIDAD VISUAL
       ===================================================== */

    branding: {
        logo: "assets/images/logo/logo.png",
        favicon: "assets/images/logo/logo.png",

        primaryColor: "#1A1A1A",
        secondaryColor: "#F5F1EE",
        accentColor: "#B88A6A",

        font: "Montserrat"
    },


    /* =====================================================
       3. HERO
       Primera impresión + conversión
       ===================================================== */

    hero: {

        title: "Tu cabello. Tu color. Tu mejor versión.",

        subtitle:
            "Realzamos tu estilo con color, técnica y asesoría personalizada.",

        image: "assets/images/hero/hero.webp",

        primaryButton: {
            text: "Reservar cita",
            type: "whatsapp",
            url: ""
        },

        secondaryButton: {
            text: "Ver trabajos",
            type: "scroll",
            url: "#gallery"
        }
    },


    /* =====================================================
       4. SOCIAL PROOF
       Prueba rápida de confianza
       ===================================================== */

    socialProof: {

        rating: 4.8,

        reviewCount: 244,

        platform: "Google",

        label: "Clientes que ya confiaron en nosotros."
    },


    /* =====================================================
       5. ABOUT
       Propuesta / presentación
       ===================================================== */

    about: {

        title: "Tu cabello merece una atención personalizada.",

        description:
            "Cada cabello es diferente. Por eso trabajamos a partir de tus características, tu estilo y el resultado que deseas conseguir.",

        image: "assets/images/about.webp",

        highlights: [
            "Asesoría personalizada",
            "Especialización en color",
            "Resultados adaptados a cada cliente"
        ]
    },


    /* =====================================================
       6. WHY US
       Diferenciadores comerciales
       ===================================================== */

    whyUs: {

        title: "¿Por qué elegirnos?",

        description:
            "Buscamos que cada visita sea una experiencia personalizada, desde la asesoría inicial hasta el resultado final.",

        items: [

            {
                title: "Asesoría personalizada",

                description:
                    "Te orientamos para encontrar una opción adecuada para tu cabello y el resultado que buscas.",

                icon: "consultation"
            },

            {
                title: "Especialización en color",

                description:
                    "Trabajamos el color buscando resultados personalizados y acordes a tu estilo.",

                icon: "color"
            },

            {
                title: "Cuidado capilar",

                description:
                    "La transformación también debe considerar la salud y el cuidado de tu cabello.",

                icon: "care"
            }
        ]
    },


    /* =====================================================
       7. SERVICIOS
       ===================================================== */

    services: {

        title: "Nuestros servicios",

        description:
            "Encuentra el servicio ideal para transformar y cuidar tu cabello.",

        items: [

            {
                name: "Balayage",

                description:
                    "Iluminación personalizada para conseguir un resultado natural y adaptado a tu estilo.",

                image: "assets/images/services/balayage.webp",

                price: "",

                priceLabel: "Consultar",

                button: {
                    text: "Consultar",
                    type: "whatsapp",
                    url: ""
                }
            },

            {
                name: "Coloración",

                description:
                    "Creamos y renovamos tu color buscando un resultado acorde a tu estilo y cabello.",

                image: "assets/images/services/coloracion.webp",

                price: "",

                priceLabel: "Consultar",

                button: {
                    text: "Consultar",
                    type: "whatsapp",
                    url: ""
                }
            },

            {
                name: "Cortes",

                description:
                    "Cortes pensados para complementar tu estilo y personalidad.",

                image: "assets/images/services/corte.webp",

                price: "",

                priceLabel: "Consultar",

                button: {
                    text: "Consultar",
                    type: "whatsapp",
                    url: ""
                }
            },

            {
                name: "Tratamientos",

                description:
                    "Opciones de cuidado para mantener tu cabello saludable y con una mejor apariencia.",

                image: "assets/images/services/tratamientos.webp",

                price: "",

                priceLabel: "Consultar",

                button: {
                    text: "Consultar",
                    type: "whatsapp",
                    url: ""
                }
            }
        ]
    },


    /* =====================================================
       8. GALERÍA
       Transformaciones / trabajos
       ===================================================== */

    gallery: {

        title: "Transformaciones que hablan por sí solas.",

        description:
            "Descubre algunos de nuestros trabajos y encuentra inspiración para tu próximo look.",

        categories: [
            "Todos",
            "Balayage",
            "Color",
            "Cortes",
            "Peinados"
        ],

        items: [

            {
                image: "assets/images/gallery/corte-capas.webp",
                title: "Corte en capas",
                category: "Cortes"
            },

            {
                image: "assets/images/gallery/color-rojo.webp",
                title: "Coloración roja",
                category: "Color"
            },

            {
                image: "assets/images/gallery/rizos-definidos.webp",
                title: "Rizos definidos",
                category: "Peinados"
            },

            {
                image: "assets/images/gallery/color-cobrizo.webp",
                title: "Color cobrizo",
                category: "Color"
            },

            {
                image: "assets/images/gallery/color-morado.webp",
                title: "Color morado",
                category: "Color"
            },

            {
                image: "assets/images/gallery/balayage-ondas.webp",
                title: "Balayage con ondas",
                category: "Balayage"
            }
        ]
    },


    /* =====================================================
       9. TESTIMONIOS
       ===================================================== */

    testimonials: {

        title: "Lo que dicen nuestros clientes.",

        items: [

            {
                name: "Cliente",

                text:
                    "Excelente atención y asesoría. El resultado fue justo lo que estaba buscando.",

                rating: 5,

                date: ""
            },

            {
                name: "Cliente",

                text:
                    "Muy buena atención y trabajo profesional. Me explicaron todo antes de realizar el servicio.",

                rating: 5,

                date: ""
            },

            {
                name: "Cliente",

                text:
                    "Estoy muy contenta con el resultado y con la atención recibida.",

                rating: 5,

                date: ""
            }
        ]
    },


    /* =====================================================
       10. EQUIPO
       OPCIONAL
       ===================================================== */

    team: {

        title: "Nuestro equipo",

        members: [

            {
                name: "Nombre",

                role: "Especialista",

                image: "assets/images/team/member-01.jpg",

                description: ""
            }
        ]
    },


    /* =====================================================
       11. ACADEMIA
       OPCIONAL
       ===================================================== */

    academy: {

        title: "Zheymar Academy Color",

        description:
            "Formación especializada para profesionales interesados en perfeccionar sus conocimientos en color.",

        image: "assets/images/academy/academy.jpg",

        button: {
            text: "Conocer la academia",
            type: "link",
            url: ""
        }
    },


    /* =====================================================
       12. REDES SOCIALES
       ===================================================== */

    social: {

        instagram:
            "https://www.instagram.com/zheymar_studio_color/?hl=es",

        facebook:
            "https://www.facebook.com/zheymarstudiocolor/?locale=es_LA",

        tiktok: "",

        youtube: ""
    },


    /* =====================================================
       13. UBICACIÓN
       ===================================================== */

    location: {

        address: "María Nieves y Bustamante 110",

        city: "Arequipa 04013",

        mapUrl:
            "https://www.google.com/maps/search/?api=1&query=Mar%C3%ADa+Nieves+y+Bustamante+110%2C+Arequipa+04013",

        mapEmbed:
            "https://www.google.com/maps?q=Mar%C3%ADa+Nieves+y+Bustamante+110%2C+Arequipa+04013&output=embed",

        directionsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Mar%C3%ADa+Nieves+y+Bustamante+110%2C+Arequipa+04013"
    },


    /* =====================================================
       14. CONTACTO
       ===================================================== */

    contact: {

        phone: "961712546",

        whatsapp: "51961712546",

        email: "",

        bookingUrl: ""
    },


    /* =====================================================
       15. CTA FINAL
       Elemento estructural de conversión
       ===================================================== */

    finalCTA: {

        title: "¿Lista para tu próxima transformación?",

        description:
            "Reserva tu cita y déjanos ayudarte a encontrar el look ideal para ti.",

        button: {
            text: "Reservar por WhatsApp",
            type: "whatsapp",
            url: ""
        }
    },


    /* =====================================================
       16. CONTROL DE SECCIONES
       ===================================================== */

    sections: {

        hero: true,

        socialProof: true,

        about: true,

        whyUs: true,

        services: true,

        gallery: true,

        testimonials: true,

        team: false,

        academy: false,

        social: true,

        location: true,

        finalCTA: true

    }

};
