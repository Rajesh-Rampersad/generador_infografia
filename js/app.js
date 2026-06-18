let currentLang = 'es';
let currentArch = 'monolith';
let isChaos = false;

// Modo de trabajo
let currentMode = 'single'; // 'single' o 'versus'
let vsArchA = 'monolith';
let vsArchB = 'microservices';

// Base de datos de métricas para el Modo Versus
const archMetrics = {
    monolith: { comp: 1, scale: 1, cost: 1, pro: { es: "Súper rápido de construir al inicio, barato para MVPs.", pt: "Super rápido para construir no início, barato para MVPs." }, con: { es: "Si un módulo falla, toda la app colapsa.", pt: "Se um módulo falha, todo o app cai." } },
    microservices: { comp: 5, scale: 5, cost: 5, pro: { es: "Escalabilidad infinita, fallos aislados.", pt: "Escalabilidade infinita, falhas isoladas." }, con: { es: "Alta complejidad operativa y latencia de red.", pt: "Alta complexidade operacional e latência de rede." } },
    event_driven: { comp: 4, scale: 5, cost: 4, pro: { es: "Alta capacidad de respuesta y desacoplamiento extremo.", pt: "Alta capacidade de resposta e desacoplamento extremo." }, con: { es: "Difícil de rastrear errores y consistencia eventual.", pt: "Difícil rastrear erros e consistência eventual." } },
    layered: { comp: 2, scale: 2, cost: 2, pro: { es: "Fácil de entender y estándar en la industria.", pt: "Fácil de entender e padrão na indústria." }, con: { es: "Acoplamiento fuerte y despliegues lentos.", pt: "Acoplamento forte e implantações lentas." } },
    hexagonal: { comp: 3, scale: 3, cost: 4, pro: { es: "Código de negocio 100% aislado de frameworks.", pt: "Código de negócio 100% isolado de frameworks." }, con: { es: "Curva de aprendizaje empinada al inicio.", pt: "Curva de aprendizado íngreme no início." } },
    serverless: { comp: 3, scale: 5, cost: 3, pro: { es: "Cero gestión de servidores, pagas por uso real.", pt: "Zero gestão de servidores, paga por uso real." }, con: { es: "Vendor lock-in y cold starts molestos.", pt: "Vendor lock-in e cold starts incômodos." } },
    microkernel: { comp: 3, scale: 2, cost: 3, pro: { es: "Extensible vía plugins sin tocar el core.", pt: "Extensível via plugins sem tocar no core." }, con: { es: "El core es un punto único de fallo (SPOF).", pt: "O core é um ponto único de falha (SPOF)." } },
    soa: { comp: 5, scale: 4, cost: 5, pro: { es: "Reutilización masiva de servicios corporativos.", pt: "Reutilização massiva de serviços corporativos." }, con: { es: "El bus de servicios (ESB) es un cuello de botella.", pt: "O barramento de serviços (ESB) é um gargalo." } },
    space_based: { comp: 4, scale: 5, cost: 5, pro: { es: "Rendimiento extremo sin cuello de botella en BD.", pt: "Desempenho extremo sem gargalo no BD." }, con: { es: "Caché distribuido muy complejo de mantener.", pt: "Cache distribuído muito complexo de manter." } },
    p2p: { comp: 2, scale: 5, cost: 5, pro: { es: "Sin servidor central, altamente resiliente.", pt: "Sem servidor central, altamente resiliente." }, con: { es: "Difícil garantizar seguridad y consistencia.", pt: "Difícil garantir segurança e consistência." } },
    master_slave: { comp: 3, scale: 3, cost: 2, pro: { es: "Mejora el rendimiento de lectura masivamente.", pt: "Melhora o desempenho de leitura massivamente." }, con: { es: "El nodo master sigue siendo un cuello de botella de escritura.", pt: "O nó master continua sendo um gargalo de escrita." } },
    pipe_filter: { comp: 2, scale: 3, cost: 2, pro: { es: "Transformación de datos secuencial muy limpia.", pt: "Transformação de dados sequencial muito limpa." }, con: { es: "No apto para interfaces interactivas (UI).", pt: "Não adequado para interfaces interativas (UI)." } }
};

const uiTexts = {
    es: {
        modeSingle: "📄 Individual",
        modeVersus: "⚔️ Versus",
        btnExportPNG: "💾 Descargar Pantalla",
        btnExportZip: "📚 Exportar Carrusel",
        vsProLabel: "Ventaja Principal",
        vsConLabel: "Desventaja Principal",
        vsCompLabel: "Complejidad",
        vsScaleLabel: "Escalabilidad",
        vsCostLabel: "Costo Inicial",
        chaosBtnOn: "⛔ Detener Fallo",
        chaosBtnOff: "🔥 Simular Fallo BD"
    },
    pt: {
        modeSingle: "📄 Individual",
        modeVersus: "⚔️ Versus",
        btnExportPNG: "💾 Baixar Tela",
        btnExportZip: "📚 Exportar Carrossel",
        vsProLabel: "Vantagem Principal",
        vsConLabel: "Desvantagem Principal",
        vsCompLabel: "Complexidade",
        vsScaleLabel: "Escalabilidade",
        vsCostLabel: "Custo Inicial",
        chaosBtnOn: "⛔ Parar Falha",
        chaosBtnOff: "🔥 Simular Falha no BD"
    }
};

// Set Mode UI
function setMode(mode) {
    currentMode = mode;

    // Toggle active classes on mode buttons
    const activeClass = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-500 text-white transition-all";
    const inactiveClass = "px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-all";

    document.getElementById('mode-single').className = (mode === 'single') ? activeClass : inactiveClass;
    document.getElementById('mode-versus').className = (mode === 'versus') ? activeClass : inactiveClass;

    // Toggle control panels
    document.getElementById('controls-single').classList.toggle('hidden', mode === 'versus');
    document.getElementById('controls-versus').classList.toggle('hidden', mode === 'single');

    // Toggle cards
    document.getElementById('infographic-card').classList.toggle('hidden', mode === 'versus');
    document.getElementById('versus-card').classList.toggle('hidden', mode === 'single');

    // Toggle Carousel button (only makes sense in single mode)
    document.getElementById('btn-export-carousel').classList.toggle('hidden', mode === 'versus');

    if (mode === 'versus') {
        renderVersus();
    }

    setTimeout(adjustScale, 50); // Re-ajustar escala tras cambio de modo visual
}

// Render Versus View
function renderVersus() {
    vsArchA = document.getElementById('vs-selector-a').value;
    vsArchB = document.getElementById('vs-selector-b').value;

    const dataA = architectures[vsArchA][currentLang];
    const dataB = architectures[vsArchB][currentLang];
    const metricA = archMetrics[vsArchA];
    const metricB = archMetrics[vsArchB];

    // Titles
    document.getElementById('vs-main-title').innerText = `${dataA.mainTitle.replace('Arquitectura ', '')} VS ${dataB.mainTitle.replace('Arquitectura ', '')}`;
    document.getElementById('vs-a-title').innerText = dataA.mainTitle.replace('Arquitectura ', '');
    document.getElementById('vs-b-title').innerText = dataB.mainTitle.replace('Arquitectura ', '');

    // Pros & Cons
    document.getElementById('vs-a-pro').innerText = metricA.pro[currentLang];
    document.getElementById('vs-a-con').innerText = metricA.con[currentLang];
    document.getElementById('vs-b-pro').innerText = metricB.pro[currentLang];
    document.getElementById('vs-b-con').innerText = metricB.con[currentLang];

    // Metrics Text A
    document.getElementById('vs-a-comp-text').innerText = `${metricA.comp}/5`;
    document.getElementById('vs-a-scale-text').innerText = `${metricA.scale}/5`;
    document.getElementById('vs-a-cost-text').innerText = `${metricA.cost}/5`;
    // Metrics Bars A
    document.getElementById('vs-a-comp-bar').style.width = `${(metricA.comp / 5) * 100}%`;
    document.getElementById('vs-a-scale-bar').style.width = `${(metricA.scale / 5) * 100}%`;
    document.getElementById('vs-a-cost-bar').style.width = `${(metricA.cost / 5) * 100}%`;

    // Metrics Text B
    document.getElementById('vs-b-comp-text').innerText = `${metricB.comp}/5`;
    document.getElementById('vs-b-scale-text').innerText = `${metricB.scale}/5`;
    document.getElementById('vs-b-cost-text').innerText = `${metricB.cost}/5`;
    // Metrics Bars B
    document.getElementById('vs-b-comp-bar').style.width = `${(metricB.comp / 5) * 100}%`;
    document.getElementById('vs-b-scale-bar').style.width = `${(metricB.scale / 5) * 100}%`;
    document.getElementById('vs-b-cost-bar').style.width = `${(metricB.cost / 5) * 100}%`;

    // Real Cases
    const casesA = architectures[vsArchA].realCases || [];
    const casesB = architectures[vsArchB].realCases || [];

    const badgeHtml = (cases) => cases.map(c => `<span class="px-2 py-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded text-[9px] font-mono text-slate-700 dark:text-slate-300">${c}</span>`).join('');

    const vsCasesA = document.getElementById('vs-a-cases');
    const vsCasesB = document.getElementById('vs-b-cases');
    if (vsCasesA) vsCasesA.innerHTML = badgeHtml(casesA);
    if (vsCasesB) vsCasesB.innerHTML = badgeHtml(casesB);
}


// Set toggle UI based on class presence
function toggleTheme() {
    const html = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggleBtn.innerText = '🌙';
    } else {
        html.classList.add('dark');
        toggleBtn.innerText = '🌞';
    }
}

function toggleChaos() {
    isChaos = !isChaos;
    const chaosBtn = document.getElementById('chaos-btn');
    const alertBox = document.getElementById('chaos-alert');
    const config = architectures[currentArch].chaos;

    // Clean state
    const allNodes = ['core-box', 'node-1-box', 'node-2-box', 'node-3-box'];
    const allLines = ['conn-1', 'conn-2', 'conn-3'];

    allNodes.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('node-chaos');
    });
    allLines.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('text-red-500');
    });

    if (isChaos) {
        chaosBtn.innerHTML = uiTexts[currentLang].chaosBtnOn;
        chaosBtn.className = "bg-red-500 text-white px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2";

        config.affectedNodes.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('node-chaos');
        });

        if (config.lines) {
            config.lines.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.add('text-red-500');
            });
        }

        alertBox.innerText = config.message;
        alertBox.classList.remove('hidden');
    } else {
        chaosBtn.innerHTML = uiTexts[currentLang].chaosBtnOff;
        chaosBtn.className = "bg-red-500/10 text-red-600 dark:text-red-500 border border-red-500/30 hover:bg-red-500/20 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2";
        alertBox.classList.add('hidden');
    }
}

function changeArchitecture() {
    currentArch = document.getElementById('arch-selector').value;
    renderTexts();
}

function changeLanguage(lang) {
    currentLang = lang;

    const activeClass = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-white dark:text-slate-950 transition-all";
    const inactiveClass = "px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-all";

    document.querySelectorAll('[id^="lang-"]').forEach(btn => {
        btn.className = inactiveClass;
    });
    document.getElementById(`lang-${lang}`).className = activeClass;

    // Actualizar UI general
    const t = uiTexts[currentLang];

    const singleBtn = document.getElementById('mode-single');
    const versusBtn = document.getElementById('mode-versus');
    const exportBtn = document.getElementById('btn-export-png');
    const carouselBtn = document.getElementById('btn-export-carousel');

    if (singleBtn) singleBtn.innerHTML = t.modeSingle;
    if (versusBtn) versusBtn.innerHTML = t.modeVersus;
    if (exportBtn) exportBtn.innerHTML = t.btnExportPNG;
    if (carouselBtn) carouselBtn.innerHTML = t.btnExportZip;

    // Actualizar labels de Versus si existen en el DOM
    const vsProA = document.getElementById('vs-a-pro-label');
    const vsConA = document.getElementById('vs-a-con-label');
    const vsCompA = document.getElementById('vs-a-comp-label');
    const vsScaleA = document.getElementById('vs-a-scale-label');
    const vsCostA = document.getElementById('vs-a-cost-label');

    const vsProB = document.getElementById('vs-b-pro-label');
    const vsConB = document.getElementById('vs-b-con-label');
    const vsCompB = document.getElementById('vs-b-comp-label');
    const vsScaleB = document.getElementById('vs-b-scale-label');
    const vsCostB = document.getElementById('vs-b-cost-label');

    if (vsProA) vsProA.innerText = t.vsProLabel;
    if (vsConA) vsConA.innerText = t.vsConLabel;
    if (vsCompA) vsCompA.innerText = t.vsCompLabel;
    if (vsScaleA) vsScaleA.innerText = t.vsScaleLabel;
    if (vsCostA) vsCostA.innerText = t.vsCostLabel;

    if (vsProB) vsProB.innerText = t.vsProLabel;
    if (vsConB) vsConB.innerText = t.vsConLabel;
    if (vsCompB) vsCompB.innerText = t.vsCompLabel;
    if (vsScaleB) vsScaleB.innerText = t.vsScaleLabel;
    if (vsCostB) vsCostB.innerText = t.vsCostLabel;

    renderTexts();
    renderVersus();
}

function renderTexts() {
    // Force disable chaos when changing arch
    if (isChaos) toggleChaos();

    const dict = architectures[currentArch][currentLang];
    const chaosConfig = architectures[currentArch].chaos;
    const t = uiTexts[currentLang];

    if (!isChaos) {
        document.getElementById('chaos-btn').innerHTML = t.chaosBtnOff;
    } else {
        document.getElementById('chaos-btn').innerHTML = t.chaosBtnOn;
    }

    document.getElementById('info-main-title').innerText = dict.mainTitle;
    document.getElementById('info-subtitle').innerText = dict.subtitle;

    document.getElementById('card-l1-title').innerText = dict.l1_title;
    document.getElementById('card-l1-desc').innerText = dict.l1_desc;
    document.getElementById('card-l2-title').innerText = dict.l2_title;
    document.getElementById('card-l2-desc').innerText = dict.l2_desc;
    document.getElementById('card-l3-title').innerText = dict.l3_title;
    document.getElementById('card-l3-desc').innerText = dict.l3_desc;

    document.getElementById('card-r1-title').innerText = dict.r1_title;
    document.getElementById('card-r1-desc').innerText = dict.r1_desc;
    document.getElementById('card-r2-title').innerText = dict.r2_title;
    document.getElementById('card-r2-desc').innerText = dict.r2_desc;
    document.getElementById('card-r3-title').innerText = dict.r3_title;
    document.getElementById('card-r3-desc').innerText = dict.r3_desc;

    document.getElementById('label-chef').innerText = dict.labelChef;
    document.getElementById('label-db').innerText = dict.labelDb;
    document.getElementById('label-ui').innerText = dict.labelUi;
    document.getElementById('label-logic').innerText = dict.labelLogic;
    document.getElementById('footer-type').innerText = dict.footerType;

    // Real Cases
    const realCases = architectures[currentArch].realCases || [];
    const badgesContainer = document.getElementById('real-cases-badges');
    if (badgesContainer) {
        badgesContainer.innerHTML = realCases.map(c => `<span class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-[10px] font-mono text-slate-700 dark:text-slate-300 shadow-sm">${c}</span>`).join('');
    }

    const labelCases = document.getElementById('label-real-cases');
    if (labelCases) {
        labelCases.innerText = currentLang === 'es' ? 'Implementado por:' : 'Implementado por:';
    }

    // Explanation Section
    const explainTitle = document.getElementById('explain-title');
    const explainContent = document.getElementById('explain-content');

    if (explainTitle && explainContent) {
        explainTitle.innerText = dict.explainTitle || '';
        explainContent.innerHTML = dict.explainContent || '';
    }
}

function setAspect(aspect) {
    const activeClass = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-white dark:text-slate-950 transition-all";
    const inactiveClass = "px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-all";

    document.querySelectorAll('[id^="aspect-"]').forEach(btn => {
        btn.className = inactiveClass;
    });
    document.getElementById(`aspect-${aspect}`).className = activeClass;

    const cards = [document.getElementById('infographic-card'), document.getElementById('versus-card')];

    cards.forEach(card => {
        if (aspect === '16-9') {
            card.style.width = '1200px';
            card.style.height = '675px';
            card.classList.remove('p-8');
            card.classList.add('p-12');
        } else if (aspect === '1-1') {
            card.style.width = '1080px';
            card.style.height = '1080px';
            card.classList.remove('p-12');
            card.classList.add('p-8');
        }
    });

    adjustScale(); // Re-ajustar al cambiar proporción de pantalla
}

// --- RESPONSIVE DESIGN ---
// Ajusta visualmente el tamaño de las tarjetas sin afectar la calidad original de exportación
function adjustScale() {
    const main = document.querySelector('main');
    const cards = [document.getElementById('infographic-card'), document.getElementById('versus-card')];
    const availableWidth = main.clientWidth - 32; // 32px de margen por el p-4 de <main>

    cards.forEach(card => {
        if (!card) return;
        const targetWidth = card.style.width === '1080px' ? 1080 : 1200;

        if (availableWidth < targetWidth && !card.classList.contains('hidden')) {
            const scale = availableWidth / targetWidth;
            card.style.transform = `scale(${scale})`;
            card.style.transformOrigin = 'top center';

            const targetHeight = card.style.height === '1080px' ? 1080 : 675;
            card.style.marginBottom = `-${targetHeight * (1 - scale)}px`;
        } else {
            card.style.transform = 'none';
            card.style.marginBottom = '0';
        }
    });
}

window.addEventListener('resize', adjustScale);
window.addEventListener('DOMContentLoaded', adjustScale);

// Export Graphic as PNG
function exportInfographic() {
    // Turn off Chaos for clean export
    if (isChaos) toggleChaos();

    const targetId = currentMode === 'single' ? 'infographic-card' : 'versus-card';
    const card = document.getElementById(targetId);

    const isDark = document.documentElement.classList.contains('dark');
    const captureBgColor = isDark ? '#080b11' : '#ffffff';

    card.style.border = 'none';
    card.style.boxShadow = 'none';

    let filename = '';
    if (currentMode === 'single') {
        filename = `infografia-${currentArch}${isDark ? '-dark' : '-light'}.png`;
    } else {
        filename = `versus-${vsArchA}-vs-${vsArchB}${isDark ? '-dark' : '-light'}.png`;
    }

    html2canvas(card, {
        useCORS: true,
        scale: 2,
        backgroundColor: captureBgColor
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();

        card.style.border = '';
    });
}

// Export Carousel as ZIP (Only works for single mode)
async function exportCarousel() {
    const btn = document.getElementById('btn-export-carousel');
    const originalText = btn.innerHTML;
    btn.innerHTML = "⏳ Generando...";
    btn.disabled = true;

    if (isChaos) toggleChaos();

    const zip = new JSZip();
    const folder = zip.folder(`Carrusel_Arquitecturas_${currentLang.toUpperCase()}`);

    const archKeys = Object.keys(architectures);
    const originalArch = currentArch;

    const card = document.getElementById('infographic-card');
    const isDark = document.documentElement.classList.contains('dark');
    const captureBgColor = isDark ? '#080b11' : '#ffffff';

    card.style.border = 'none';
    card.style.boxShadow = 'none';

    for (let i = 0; i < archKeys.length; i++) {
        const arch = archKeys[i];
        currentArch = arch;
        // Update DOM selector if it exists
        const selector = document.getElementById('arch-selector');
        if (selector) selector.value = arch;

        renderTexts();

        // Wait for DOM updates and fonts to render properly
        await new Promise(r => setTimeout(r, 150));

        const canvas = await html2canvas(card, {
            useCORS: true,
            scale: 2,
            backgroundColor: captureBgColor
        });

        // Get base64 data without prefix
        const base64Data = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, "");

        const paddedIndex = String(i + 1).padStart(2, '0');
        folder.file(`${paddedIndex}_${arch}.png`, base64Data, { base64: true });
    }

    // Restore UI
    card.style.border = '';
    currentArch = originalArch;
    const selector = document.getElementById('arch-selector');
    if (selector) selector.value = originalArch;
    renderTexts();

    btn.innerHTML = "📦 Comprimiendo...";

    zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, `Carrusel_Arquitecturas_${currentLang.toUpperCase()}.zip`);
        btn.innerHTML = originalText;
        btn.disabled = false;
    });
}
