 /* =========================================================
    GALERÍA
    peluqueria-template

    Este archivo controla exclusivamente:
    - categorías
    - filtros
    - imágenes
    - interacción de la galería
    ========================================================= */


/* =========================================================
   1. INICIALIZACIÓN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initGallery();
});


function initGallery() {

    const container = document.getElementById("gallery");

    if (!container) return;

    const config = window.siteConfig;

    if (!config) {
        console.error("siteConfig no está disponible.");
        return;
    }

    if (!config.sections?.gallery) {
        container.remove();
        return;
    }

    renderGallery(container, config.gallery);

    setupGalleryFilters();
}


/* =========================================================
   2. RENDERIZAR GALERÍA
   ========================================================= */

function renderGallery(container, galleryConfig) {

    const items = galleryConfig?.items || [];
    const categories = (galleryConfig?.categories || [])
        .map(normalizeGalleryCategory);

    container.innerHTML = `

        <div class="container">

            <!-- =============================================
                 ENCABEZADO
                 ============================================= -->

            <div class="section-heading">

                <span class="section-label">
                    Nuestros trabajos
                </span>

                <h2>
                    ${galleryConfig.title || "Inspiración"}
                </h2>

                ${
                    galleryConfig.description
                    ? `
                        <p>
                            ${galleryConfig.description}
                        </p>
                    `
                    : ""
                }

            </div>


            <!-- =============================================
                 FILTROS
                 ============================================= -->

            <div
                class="gallery-filters"
                role="group"
                aria-label="Filtrar trabajos"
            >

                ${
                    categories.map((category, index) => `

                        <button
                            type="button"
                            class="gallery-filter ${
                                index === 0 ? "active" : ""
                            }"
                            data-filter="${category.slug}"
                        >
                            ${category.name}
                        </button>

                    `).join("")
                }

            </div>


            <!-- =============================================
                 GALERÍA
                 ============================================= -->

            <div class="gallery-grid">

                ${renderGalleryItems(items)}

            </div>

        </div>
    `;
}


/* =========================================================
   3. RENDERIZAR IMÁGENES
   ========================================================= */

function renderGalleryItems(items) {

    if (!items.length) {

        return `
            <div class="gallery-empty">
                No hay trabajos disponibles todavía.
            </div>
        `;
    }


    return items.map((item, index) => `

        <article
            class="gallery-item"
            data-category="${slugify(item.category || "all")}"
        >

            <button
                type="button"
                class="gallery-image-button"
                data-gallery-index="${index}"
                aria-label="Ver ${item.title || "trabajo"}"
            >

                <img
                    src="${item.image}"
                    alt="${item.title || "Trabajo de peluquería"}"
                    loading="${index < 3 ? "eager" : "lazy"}"
                >

            </button>


            <div class="gallery-item-info">

                ${
                    item.categoryName
                    ? `
                        <span>
                            ${item.categoryName}
                        </span>
                    `
                    : ""
                }

                ${
                    item.title
                    ? `
                        <h3>
                            ${item.title}
                        </h3>
                    `
                    : ""
                }

            </div>

        </article>

    `).join("");
}


/* =========================================================
   4. FILTROS
   ========================================================= */

function setupGalleryFilters() {

    const filters = document.querySelectorAll(
        ".gallery-filter"
    );

    const items = document.querySelectorAll(
        ".gallery-item"
    );

    if (!filters.length || !items.length) {
        return;
    }


    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            const selectedCategory =
                filter.dataset.filter;


            /* ---------------------------------------------
               ACTUALIZAR BOTÓN ACTIVO
               --------------------------------------------- */

            filters.forEach(button => {

                button.classList.remove("active");

            });

            filter.classList.add("active");


            /* ---------------------------------------------
               FILTRAR ELEMENTOS
               --------------------------------------------- */

            items.forEach(item => {

                const itemCategory =
                    item.dataset.category;


                if (
                    selectedCategory === "all" ||
                    itemCategory === selectedCategory
                ) {

                    item.classList.remove("hidden");

                } else {

                    item.classList.add("hidden");

                }

            });

        });

    });
}


/* =========================================================
   5. LIGHTBOX
   ========================================================= */

document.addEventListener("click", event => {

    const button =
        event.target.closest(
            ".gallery-image-button"
        );

    if (!button) return;

    const image =
        button.querySelector("img");

    if (!image) return;

    openLightbox(
        image.src,
        image.alt
    );
});


function openLightbox(imageSrc, imageAlt) {

    const existing =
        document.querySelector(".gallery-lightbox");

    if (existing) {
        existing.remove();
    }


    const lightbox =
        document.createElement("div");

    lightbox.className =
        "gallery-lightbox";


    lightbox.innerHTML = `

        <div
            class="lightbox-overlay"
            data-lightbox-close
        ></div>


        <div
            class="lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada"
        >

            <button
                type="button"
                class="lightbox-close"
                aria-label="Cerrar imagen"
                data-lightbox-close
            >
                ×
            </button>


            <img
                src="${imageSrc}"
                alt="${imageAlt}"
            >

        </div>

    `;


    document.body.appendChild(lightbox);


    document.body.classList.add(
        "lightbox-open"
    );


    setupLightboxEvents(lightbox);
}


/* =========================================================
   6. CERRAR LIGHTBOX
   ========================================================= */

function setupLightboxEvents(lightbox) {

    const closeElements =
        lightbox.querySelectorAll(
            "[data-lightbox-close]"
        );


    closeElements.forEach(element => {

        element.addEventListener(
            "click",
            closeLightbox
        );

    });


    document.addEventListener(
        "keydown",
        handleLightboxKeyboard
    );
}


function handleLightboxKeyboard(event) {

    if (event.key === "Escape") {

        closeLightbox();

    }
}


function closeLightbox() {

    const lightbox =
        document.querySelector(
            ".gallery-lightbox"
        );

    if (!lightbox) return;


    lightbox.remove();


    document.body.classList.remove(
        "lightbox-open"
    );


    document.removeEventListener(
        "keydown",
        handleLightboxKeyboard
    );
}


/* =========================================================
   3.1 NORMALIZAR CATEGORÍAS
   Acepta tanto "Balayage" como { name, slug } para que
   la configuración siga siendo cómoda de editar.
   ========================================================= */

function normalizeGalleryCategory(category) {

    if (typeof category === "string") {

        const name = category;

        return {
            name,
            slug: /^todos?$/i.test(name) ? "all" : slugify(name)
        };
    }

    const name = category?.name || "Todos";

    return {
        name,
        slug: category?.slug || (/^todos?$/i.test(name) ? "all" : slugify(name))
    };
}


function slugify(value) {

    return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "all";
}
