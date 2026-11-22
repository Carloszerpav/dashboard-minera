const regulations = {
  25: {
    label: "ARTÍCULOS 25 Y 26",
    status: "DOCUMENTACIÓN",
    quote:
      "Las empresas mineras deben elaborar, desarrollar y mantener reglamentos internos para operaciones críticas y un sistema documentado de procedimientos.",
    solution:
      "Acrobat permite crear, comparar, proteger y revisar procedimientos; Acrobat Studio facilita su análisis contextual con citas.",
    trust:
      "Acrobat Web, Acrobat Services y AI Assistant figuran con SOC 2 Type 2 e ISO 27001 en Adobe Trust Center.",
  },
  28: {
    label: "ARTÍCULO 28",
    status: "CAPACITACIÓN",
    quote:
      "Las empresas deben capacitar a sus trabajadores sobre el método y procedimiento para ejecutar correctamente su trabajo y mantener registros de asistencia y materias.",
    solution:
      "Acrobat Studio y Express Premium convierten contenido aprobado en material formativo; Acrobat Sign registra firmas y eventos de aceptación.",
    trust:
      "Acrobat Sign Solutions cuenta con informes de auditoría y figura con SOC 2 Type 2 e ISO 27001 en Adobe Trust Center.",
  },
  71: {
    label: "ARTÍCULO 71",
    status: "ESTADÍSTICAS",
    quote:
      "Las empresas deben confeccionar mensualmente estadísticas de accidentes propias y solicitar las de las empresas contratistas que trabajan en la faena.",
    solution:
      "PDF Services API aplica OCR y extrae texto, tablas y estructura para normalizar reportes y preparar estadísticas.",
    trust:
      "PDF Services API está incluido en la categoría certificada de Acrobat Services del Adobe Trust Center.",
  },
  75: {
    label: "ARTÍCULOS 75 A 77",
    status: "EMERGENCIAS",
    quote:
      "Se exigen procedimientos de emergencia y rescate, investigación de accidentes, análisis de causas, medidas correctivas e informes técnicos.",
    solution:
      "Acrobat Studio compara antecedentes con citas; Acrobat Sign gestiona aprobación y evidencia de las acciones correctivas.",
    trust:
      "Adobe no utiliza los datos del cliente para entrenar AI Assistant; Acrobat Sign genera un informe final de auditoría.",
  },
  410: {
    label: "ARTÍCULO 410",
    status: "MANTENCIÓN",
    quote:
      "Equipos, instalaciones y sistemas deben someterse a un plan riguroso de mantención, manteniendo registros actualizados disponibles para el Servicio.",
    solution:
      "Acrobat organiza y compara registros; PDF Services automatiza expedientes y Acrobat Sign deja trazabilidad de aprobaciones.",
    trust:
      "Acrobat Sign protege el documento final y registra los eventos del flujo en un informe de auditoría descargable.",
  },
};

const journeys = {
  consulta: {
    label: "FLUJO · CONSULTA OPERACIONAL",
    title: "La persona pregunta; el sistema responde con contexto.",
    steps: [
      "Teams recibe la consulta y confirma identidad y rol.",
      "El agente recupera la versión autorizada desde el almacenamiento oficial.",
      "Acrobat Studio permite profundizar y verificar la cita documental.",
    ],
  },
  incidente: {
    label: "FLUJO · ANÁLISIS DE INCIDENTES",
    title: "La evidencia histórica se convierte en aprendizaje reutilizable.",
    steps: [
      "PDF Services aplica OCR y estructura reportes heterogéneos.",
      "PDF Spaces en Acrobat Studio compara causas, controles y acciones correctivas.",
      "El especialista valida hallazgos y activa Adobe Express Premium.",
    ],
  },
  formacion: {
    label: "FLUJO · FORMACIÓN EN TERRENO",
    title: "Un procedimiento aprobado se adapta sin perder su fuente.",
    steps: [
      "Se selecciona el procedimiento vigente desde el repositorio.",
      "AI Assistant en Acrobat Studio propone resumen, pauta y preguntas.",
      "Adobe Express Premium crea la charla visual bajo revisión responsable.",
    ],
  },
};

const useCases = [
  {
    id: "tarea-critica",
    category: "seguridad",
    title: "Consulta previa a una tarea crítica",
    description:
      "Encontrar rápidamente el procedimiento vigente y abrir la sección exacta antes de ejecutar.",
    tech: ["Agente", "Acrobat Studio"],
    article: "Arts. 25–26",
    value: "Alta prioridad",
    problem:
      "Antes de intervenir una correa transportadora, un chancador o un tablero eléctrico, supervisores y contratistas deben consultar procedimientos de bloqueo, permisos de trabajo y manuales del fabricante. Cuando existen cientos de PDFs distribuidos por faena, una búsqueda manual puede devolver una revisión obsoleta o forzar al trabajador a depender del conocimiento informal de otra persona.",
    solution:
      "SharePoint conserva la versión oficial y sus permisos. El agente corporativo localiza el documento autorizado y Acrobat Studio reúne, en un PDF Space acotado, el procedimiento de trabajo seguro, la matriz de riesgos y el manual técnico. AI Assistant responde sobre ese corpus y entrega citas que llevan a la página exacta; Acrobat permite comparar revisiones y proteger el PDF aprobado.",
    workflow: [
      "Validar identidad, rol, faena y equipo.",
      "Recuperar únicamente la revisión vigente.",
      "Consultar requisitos y abrir cada cita crítica.",
      "Confirmar el procedimiento antes de autorizar la tarea.",
    ],
    guardrail:
      "La respuesta de IA orienta la consulta, pero no reemplaza el permiso de trabajo, el bloqueo físico ni la autorización del supervisor.",
  },
  {
    id: "fiscalizacion",
    category: "cumplimiento",
    title: "Expediente para fiscalización",
    description:
      "Reunir procedimientos, registros y evidencias en un espacio acotado y navegable.",
    tech: ["SharePoint", "Acrobat Studio"],
    article: "Arts. 26 y 410",
    value: "Quick win",
    problem:
      "Preparar una fiscalización de SERNAGEOMIN puede exigir consolidar procedimientos críticos, registros de mantención, capacitaciones, certificados de equipos y antecedentes de contratistas provenientes de múltiples áreas. Parte de la evidencia suele llegar escaneada, con nombres inconsistentes o sin una estructura que permita comprobar rápidamente su vigencia y completitud.",
    solution:
      "PDF Services API puede aplicar OCR, convertir formatos y extraer texto o tablas para normalizar el expediente. Acrobat permite combinar, ordenar, comparar y redactar información sensible. En Acrobat Studio, el equipo revisor consulta el conjunto con citas y detecta brechas documentales; Acrobat Sign puede gestionar aprobaciones y conservar el informe de auditoría del flujo.",
    workflow: [
      "Definir checklist normativo y periodo auditado.",
      "Normalizar archivos y metadatos de evidencia.",
      "Revisar faltantes y vigencia en un espacio controlado.",
      "Aprobar y devolver el expediente al repositorio oficial.",
    ],
    guardrail:
      "La solución prepara y revisa evidencia; la determinación final de cumplimiento corresponde a los responsables legales, HSE y a la autoridad.",
  },
  {
    id: "contratistas",
    category: "aprendizaje",
    title: "Contratistas: firma e inducción",
    description:
      "Acelerar contratos, acreditación e inducción sin perder trazabilidad documental.",
    tech: ["Acrobat Sign", "Acrobat Studio"],
    article: "Art. 28",
    value: "Alta adopción",
    problem:
      "El ingreso de empresas contratistas se retrasa cuando contratos, anexos HSE, declaraciones, acreditaciones e inducciones circulan por correo y requieren firmas secuenciales. Una observación en un documento puede reiniciar el circuito, mientras prevención necesita demostrar quién recibió cada procedimiento y qué versión aceptó.",
    solution:
      "Acrobat Sign automatiza rutas de firma y aprobación, recordatorios, autenticación e informes de auditoría. Acrobat Studio resume obligaciones por perfil y permite consultar los anexos con citas. Adobe Express Premium transforma los procedimientos aprobados en material visual de inducción, manteniendo un enlace hacia el documento fuente.",
    workflow: [
      "Generar contrato y anexos desde plantillas controladas.",
      "Enviar firma secuencial y registrar cada evento.",
      "Asignar inducción específica por faena y función.",
      "Archivar acuerdo e informe de auditoría en SharePoint.",
    ],
    guardrail:
      "La identidad, validez de firma y retención deben configurarse según la política contractual y jurídica de la compañía minera.",
  },
  {
    id: "incidentes",
    category: "seguridad",
    title: "Lecciones de incidentes",
    description:
      "Comparar reportes históricos para identificar causas, controles y acciones recurrentes.",
    tech: ["PDF Services API", "Acrobat Studio"],
    article: "Arts. 76–77",
    value: "Alto impacto",
    problem:
      "Los informes de incidentes y casi accidentes combinan narrativas, fotografías, declaraciones, árboles causales y acciones correctivas en formatos heterogéneos. Revisar años de antecedentes para detectar controles repetidamente incumplidos exige muchas horas y puede dejar conocimiento preventivo atrapado en archivos individuales.",
    solution:
      "PDF Services API aplica OCR y extrae estructura de informes históricos. Acrobat Studio trabaja sobre un conjunto delimitado para comparar causas declaradas, barreras fallidas y acciones correctivas, siempre con citas a la evidencia. Adobe Express Premium ayuda a convertir los hallazgos validados en una pieza de lecciones aprendidas para terreno.",
    workflow: [
      "Anonimizar y normalizar informes seleccionados.",
      "Clasificar evento, tarea, peligro y barrera crítica.",
      "Comparar patrones y verificar citas en cada informe.",
      "Validar hallazgos y publicar la lección aprobada.",
    ],
    guardrail:
      "AI Assistant no determina la causa raíz. La investigación y las medidas correctivas permanecen bajo responsabilidad del equipo experto.",
  },
  {
    id: "mantenimiento",
    category: "cumplimiento",
    title: "Control documental de mantención",
    description:
      "Detectar registros ausentes y preparar evidencia trazable por equipo o instalación.",
    tech: ["PDF Services API", "SharePoint"],
    article: "Art. 410",
    value: "Escalable",
    problem:
      "Una intervención mayor reúne órdenes de trabajo, checklists, certificados de calibración, manuales OEM, fotografías y actas de entrega. Cuando la evidencia queda distribuida entre el CMMS, SharePoint y correos, demostrar que un equipo fue mantenido y liberado con todos sus controles puede convertirse en un cuello de botella.",
    solution:
      "PDF Services API convierte y estructura documentos de distintas fuentes; Acrobat combina el dossier y compara manuales o revisiones. Acrobat Studio permite consultar el expediente técnico y señalar respaldos ausentes. Acrobat Sign registra la entrega, aprobación y recepción mediante un flujo con informe de auditoría.",
    workflow: [
      "Asociar documentos al activo y orden de trabajo.",
      "Convertir y aplicar OCR a registros de terreno.",
      "Contrastar el dossier con el checklist de liberación.",
      "Firmar la entrega y conservar evidencia en el sistema oficial.",
    ],
    guardrail:
      "Adobe complementa al CMMS o EAM; no reemplaza la planificación, telemetría ni gestión maestra del activo.",
  },
  {
    id: "charla-operacional",
    category: "aprendizaje",
    title: "Charla operacional visual",
    description:
      "Transformar un procedimiento extenso en presentación o infografía revisada por el experto.",
    tech: ["Acrobat Studio", "Express Premium"],
    article: "Art. 28",
    value: "Quick win",
    problem:
      "Los procedimientos técnicos extensos no siempre se traducen bien a una charla de cinco minutos para distintos turnos, niveles de experiencia o empresas contratistas. Preparar manualmente cada presentación consume tiempo y aumenta el riesgo de simplificar demasiado una advertencia o perder la conexión con la fuente vigente.",
    solution:
      "Acrobat Studio resume el procedimiento, extrae puntos críticos y propone una estructura con citas. Adobe Express Premium utiliza plantillas de marca para crear una presentación, infografía o ficha de terreno. El responsable HSE revisa el material, Acrobat lo publica como PDF protegido y Acrobat Sign puede registrar la recepción cuando el proceso lo requiera.",
    workflow: [
      "Seleccionar el procedimiento vigente y la audiencia.",
      "Generar pauta y mensajes críticos con citas.",
      "Diseñar la pieza visual bajo identidad corporativa.",
      "Aprobar, distribuir y registrar participación.",
    ],
    guardrail:
      "Todo contenido generado debe pasar por revisión técnica antes de utilizarse en una capacitación o charla de seguridad.",
  },
];

function renderRegulation(key) {
  const item = regulations[key];
  const detail = document.querySelector("#regDetail");
  detail.innerHTML = `
    <header><strong>${item.label}</strong><span>${item.status}</span></header>
    <p class="reg-quote">“${item.quote}”</p>
    <div class="reg-mapping">
      <div>
        <span>SOLUCIÓN ADOBE</span>
        <strong>${item.solution}</strong>
      </div>
      <div class="reg-proof">
        <span>RESPALDO ADOBE TRUST</span>
        <strong>${item.trust}</strong>
      </div>
    </div>
  `;
}

function renderJourney(key) {
  const item = journeys[key];
  document.querySelector("#journeyLabel").textContent = item.label;
  document.querySelector("#journeyTitle").textContent = item.title;
  document.querySelector("#journeySteps").innerHTML = item.steps
    .map((step, index) => `<li><b>0${index + 1}</b>${step}</li>`)
    .join("");
}

function renderUseCases() {
  document.querySelector("#useCaseGrid").innerHTML = useCases
    .map(
      (item, index) => `
        <button
          type="button"
          class="use-case-card"
          data-category="${item.category}"
          data-case="${item.id}"
          aria-haspopup="dialog"
          aria-label="Abrir caso: ${item.title}"
        >
          <div class="use-card-top">
            <span class="use-category">${item.category}</span>
            <span class="use-priority"><i></i>${item.value}</span>
          </div>
          <span class="use-case-index">0${index + 1}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="use-tech">${item.tech.map((tech) => `<span>${tech}</span>`).join("")}</div>
          <div class="use-footer">
            <span>BASE REGULATORIA</span><b>${item.article}</b><i>Ver detalle ↗</i>
          </div>
        </button>
      `,
    )
    .join("");
}

const caseModal = document.querySelector("#caseModal");
const caseModalPanel = caseModal.querySelector(".case-modal-panel");
const caseCloseButton = caseModal.querySelector(".case-modal-close");
let lastCaseTrigger = null;

function openUseCase(id, trigger) {
  const item = useCases.find((useCase) => useCase.id === id);
  if (!item) return;
  const index = useCases.indexOf(item) + 1;

  document.querySelector("#caseModalIndex").textContent = `CASO 0${index}`;
  document.querySelector("#caseModalCategory").textContent = item.category.toUpperCase();
  document.querySelector("#caseModalTitle").textContent = item.title;
  document.querySelector("#caseModalSummary").textContent = item.description;
  document.querySelector("#caseModalProblem").textContent = item.problem;
  document.querySelector("#caseModalSolution").textContent = item.solution;
  document.querySelector("#caseModalGuardrail").textContent = item.guardrail;
  document.querySelector("#caseModalProducts").innerHTML = item.tech
    .map((product) => `<span>${product}</span>`)
    .join("");
  document.querySelector("#caseModalWorkflow").innerHTML = item.workflow
    .map((step, stepIndex) => `<li><b>0${stepIndex + 1}</b><span>${step}</span></li>`)
    .join("");

  lastCaseTrigger = trigger;
  caseModal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    caseModal.classList.add("open");
    caseModalPanel.scrollTop = 0;
    caseCloseButton.focus();
  });
}

function closeUseCase() {
  if (caseModal.hidden) return;
  caseModal.classList.remove("open");
  document.body.classList.remove("modal-open");
  window.setTimeout(() => {
    caseModal.hidden = true;
    lastCaseTrigger?.focus();
  }, 240);
}

document.querySelector("#regTabs").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-reg]");
  if (!button) return;
  document.querySelectorAll("#regTabs button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderRegulation(button.dataset.reg);
});

document.querySelector(".journey-selector").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-journey]");
  if (!button) return;
  document
    .querySelectorAll(".journey-selector button")
    .forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderJourney(button.dataset.journey);
});

document.querySelector("#useCaseFilters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  document
    .querySelectorAll("#useCaseFilters button")
    .forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelectorAll(".use-case-card").forEach((card) => {
    card.classList.toggle(
      "hidden",
      button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter,
    );
  });
});

document.querySelector("#useCaseGrid").addEventListener("click", (event) => {
  const card = event.target.closest(".use-case-card[data-case]");
  if (card) openUseCase(card.dataset.case, card);
});

caseModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-case-close]")) closeUseCase();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !caseModal.hidden) closeUseCase();
  if (event.key === "Tab" && !caseModal.hidden) {
    event.preventDefault();
    caseCloseButton.focus();
  }
});

document.querySelector(".view-toggle").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-view]");
  if (!button) return;
  document.querySelectorAll(".view-toggle button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.body.classList.toggle("technical-view", button.dataset.view === "technical");
});

const ranges = ["users", "queries", "current", "future", "adoption", "rate"];
const formatter = new Intl.NumberFormat("es-CL", { maximumFractionDigits: 0 });
const usd = (value) => `US$ ${formatter.format(value)}`;

// Supuestos de costo (USD). Ajustar aquí si cambian los precios cotizados.
const pricing = {
  workDays: 220,
  acrobatPerUserYear: 306,
  servicesHours: 45,
  servicesRate: 40,
  copilotPackMonth: 200, // paquete de 25.000 créditos/mes
  creditsPerPack: 25000,
  creditsPerQuery: 12, // respuesta generativa basada en documentos del repositorio
  creditMargin: 1.2, // margen por acciones del agente
};

function updateRangeFill(input) {
  const percentage =
    ((Number(input.value) - Number(input.min)) / (Number(input.max) - Number(input.min))) * 100;
  input.style.setProperty("--fill", `${percentage}%`);
}

function setText(id, text) {
  document.querySelector(`#${id}`).textContent = text;
}

function calculateValue() {
  const value = (id) => Number(document.querySelector(`#${id}`).value);
  const users = value("users");
  const queries = value("queries");
  const adoption = value("adoption") / 100;
  const minutesSaved = Math.max(0, value("current") - value("future"));

  const yearlyQueries = users * queries * pricing.workDays * adoption;
  const hours = (yearlyQueries * minutesSaved) / 60;
  const recovered = hours * value("rate");

  const monthlyCredits = (yearlyQueries / 12) * pricing.creditsPerQuery * pricing.creditMargin;
  const packs = Math.max(1, Math.ceil(monthlyCredits / pricing.creditsPerPack));
  const acrobatCost = users * pricing.acrobatPerUserYear;
  const copilotCost = packs * pricing.copilotPackMonth * 12;
  const servicesCost = pricing.servicesHours * pricing.servicesRate;
  const investment = acrobatCost + copilotCost + servicesCost;

  const roi = ((recovered - investment) / investment) * 100;
  const paybackMonths = recovered > 0 ? investment / (recovered / 12) : Infinity;

  setText("hoursResult", formatter.format(hours));
  setText("daysResult", formatter.format(hours / 8));
  setText("valueResult", usd(recovered));
  setText("investResult", usd(investment));
  setText("roiResult", `${roi >= 0 ? "+" : ""}${formatter.format(roi)}%`);
  setText(
    "paybackResult",
    paybackMonths > 36 ? "más de 36 meses" : `${paybackMonths.toFixed(1).replace(".", ",")} meses`,
  );
  document.querySelector(".roi-tile").classList.toggle("negative", roi < 0);
  setText("licCount", formatter.format(users));
  setText("packCount", formatter.format(packs));
  setText("acrobatCost", usd(acrobatCost));
  setText("copilotCost", usd(copilotCost));
  setText("servicesCost", usd(servicesCost));
}

ranges.forEach((id) => {
  const input = document.querySelector(`#${id}`);
  const output = document.querySelector(`#${id}Out`);
  const format = (v) => (id === "adoption" ? `${v}%` : id === "rate" ? `US$ ${v}` : v);
  const update = () => {
    output.textContent = format(input.value);
    updateRangeFill(input);
    calculateValue();
  };
  input.addEventListener("input", update);
  update();
});

const menuButton = document.querySelector("#menuButton");
const sidebar = document.querySelector("#sidebar");
const backdrop = document.querySelector("#sidebarBackdrop");

function toggleMenu(force) {
  const open = force ?? !sidebar.classList.contains("open");
  sidebar.classList.toggle("open", open);
  backdrop.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", () => toggleMenu());
backdrop.addEventListener("click", () => toggleMenu(false));
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

const observedSections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle("active", link.dataset.section === visible.target.id);
    });
  },
  { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5] },
);

observedSections.forEach((section) => sectionObserver.observe(section));

const benchmarkPanel = document.querySelector("#pfeifferBenchmark");
const benchmarkObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) return;
    benchmarkPanel.classList.add("visible");
    benchmarkObserver.disconnect();
  },
  { threshold: 0.25 },
);
benchmarkObserver.observe(benchmarkPanel);

renderRegulation("25");
renderJourney("consulta");
renderUseCases();

const initialCase = new URLSearchParams(window.location.search).get("case");
if (initialCase) {
  const initialTrigger = document.querySelector(`.use-case-card[data-case="${initialCase}"]`);
  if (initialTrigger) openUseCase(initialCase, initialTrigger);
}

const initialSection = new URLSearchParams(window.location.search).get("section");
if (initialSection) {
  window.setTimeout(() => document.querySelector(`#${initialSection}`)?.scrollIntoView(), 100);
}
