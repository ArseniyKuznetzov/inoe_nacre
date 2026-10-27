import { useEffect, useState } from "react";
import aboutPortrait from "@/imports/inga-about-new.jpg";
import heroPortrait from "@/imports/inga-hero-new.jpg";
import contentProjectImage from "@/imports/project-content.png";
import digitalProjectImage from "@/imports/project-digital.png";
import graphicProjectImage from "@/imports/project-graphic.jpg";
import identityProjectImage from "@/imports/project-identity.png";
import smmProjectImage from "@/imports/project-smm.webp";

type Project = {
  slug: string;
  name: string;
  category: "SMM и социальные сети" | "Контент и креатив" | "Визуальная айдентика" | "Графический дизайн" | "Арт-дирекшн и концепции" | "Цифровые и ИИ-визуалы";
  niche: string;
  role: string;
  previewTitle: string;
  previewDescription: string;
  image?: string;
  secondImage: string;
  task: string;
  concept: string;
  direction: string;
  content: string;
  conclusion: string;
  shape: string;
  previewType?: "document";
};

const nav = [
  ["Обо мне", "about"],
  ["Проекты", "projects"],
  ["Подход", "approach"],
  ["Контакты", "contact"],
];

const projects: Project[] = [
  {
    slug: "forme",
    name: "FORME",
    category: "SMM и социальные сети",
    niche: "Wellness · Social media",
    role: "Визуальная система аккаунта, публикации и Stories.",
    previewTitle: "Digital Flow",
    previewDescription: "Стратегия продвижения, оформление профиля, публикации и Stories.",
    image: smmProjectImage,
    secondImage: "https://images.unsplash.com/photo-1667933518535-db844f8043a2?auto=format&fit=crop&w=1400&q=85",
    task: "Создать спокойный и тактильный образ бренда в социальных сетях.",
    concept: "Ритм природных форм, молочные поверхности и выразительная предметная съёмка.",
    direction: "SMM объединяет стратегию, визуальный образ и живую коммуникацию с аудиторией. Задача направления — сделать социальные сети бренда узнаваемыми, последовательными и полезными для роста.",
    content: "Работа началась с анализа бренда, аудитории и конкурентов. Затем были определены контентные опоры, тон коммуникации и визуальная система, после чего подготовлены публикации, Stories и рекомендации для регулярного ведения.",
    conclusion: "Концепция показывает, как единый визуальный ритм может связать разные форматы аккаунта.",
    shape: "portrait",
  },
  {
    slug: "objects",
    name: "OBJECTS 02",
    category: "Контент и креатив",
    niche: "Lifestyle · Content creation",
    role: "Карусели, обложки и рекламные креативы.",
    previewTitle: "Fresh Ideas",
    previewDescription: "Контент-планы, креативные идеи, сценарии Reels и тексты.",
    image: contentProjectImage,
    secondImage: "https://images.unsplash.com/photo-1679710531428-b4e2b8fe532f?auto=format&fit=crop&w=1400&q=85",
    task: "Найти нешаблонный визуальный язык для авторского lifestyle-проекта.",
    concept: "Редакционный натюрморт, неожиданные сочетания объектов и строгая типографика.",
    direction: "Контент превращает идеи бренда в понятные и интересные истории. В этом направлении соединяются стратегия, тексты и креативные форматы, которые удерживают внимание и вовлекают аудиторию.",
    content: "Сначала были собраны темы и смыслы, важные для аудитории. На их основе разработаны рубрики, контент-план, идеи публикаций, сценарии Reels и тексты с единым характером и интонацией.",
    conclusion: "Проект исследует, как отдельные публикации могут складываться в цельную визуальную историю.",
    shape: "landscape",
  },
  {
    slug: "marea",
    name: "MAREA",
    category: "Визуальная айдентика",
    niche: "Objects · Brand visual identity",
    role: "Палитра, типографика и графический язык бренда.",
    previewTitle: "Brand Essence",
    previewDescription: "Логотип, цветовая палитра, типографика и визуальный стиль бренда.",
    image: identityProjectImage,
    secondImage: "https://images.unsplash.com/photo-1646920470420-8f78bc86202d?auto=format&fit=crop&w=1400&q=85",
    task: "Собрать атмосферную коммуникацию вокруг коллекции природных объектов.",
    concept: "Много воздуха, светлая фактура и тонкие графические детали.",
    direction: "Визуальная айдентика передаёт характер бренда через цвет, типографику, графику и детали. Она формирует цельный образ, который легко узнаётся и последовательно работает во всех точках контакта.",
    content: "Работа началась с исследования ценностей и настроения бренда. Затем были собраны референсы, разработаны палитра, типографика и графические элементы, после чего решения объединились в единую визуальную систему.",
    conclusion: "Концепция формирует узнаваемую основу, которую можно развивать в разных digital-форматах.",
    shape: "square",
  },
  {
    slug: "context",
    name: "CONTEXT",
    category: "Графический дизайн",
    niche: "Fashion · SMM strategy",
    role: "Контент-план, рубрикатор и структура коммуникации.",
    previewTitle: "Visual Impact",
    previewDescription: "Макеты для социальных сетей, рекламные креативы и презентации.",
    image: graphicProjectImage,
    secondImage: "https://images.unsplash.com/photo-1646326992462-0a0358875bb2?auto=format&fit=crop&w=1400&q=85",
    task: "Выстроить понятную систему тем и форматов для регулярной коммуникации fashion-бренда.",
    concept: "Стратегия как редакционный план: ключевые смыслы, постоянные рубрики и сезонные акценты.",
    direction: "Графический дизайн помогает быстро и точно передать сообщение бренда. Композиция, типографика и визуальные акценты выстраиваются в ясную систему, которая работает в digital- и рекламных форматах.",
    content: "Для работы была определена главная коммуникационная задача и собрана визуальная концепция. После этого разработаны модульная сетка, типографика и ключевые макеты с адаптациями для социальных сетей, рекламы и презентаций.",
    conclusion: "Документ демонстрирует структуру работы; фактические показатели не заявлены.",
    shape: "document",
    previewType: "document",
  },
  {
    slug: "soft-signal",
    name: "SOFT SIGNAL",
    category: "Арт-дирекшн и концепции",
    niche: "Beauty · Creative campaign",
    role: "Идея кампании и серия тематических публикаций.",
    previewTitle: "АРТ-ДИРЕКШН И КОНЦЕПЦИИ",
    previewDescription: "Креативная концепция, арт-дирекшн и визуальная история кампании.",
    image: "https://images.unsplash.com/photo-1777795530504-51ba79d2305e?auto=format&fit=crop&w=1400&q=85",
    secondImage: "https://images.unsplash.com/photo-1782380370784-bb0e957dc9df?auto=format&fit=crop&w=1400&q=85",
    task: "Разработать сезонный digital-сюжет, который объединяет продукт и настроение бренда.",
    concept: "Мягкий сигнал перемен через цвет, фактуру и серию связанных визуальных историй.",
    direction: "Тёплые природные объекты, контрастная типографика и неожиданный масштаб.",
    content: "Key visual, серия публикаций, Stories и направления коротких видео.",
    conclusion: "Кампания показывает, как одна идея может последовательно раскрываться в нескольких форматах.",
    shape: "wide",
  },
  {
    slug: "other-form",
    name: "OTHER FORM",
    category: "Цифровые и ИИ-визуалы",
    niche: "Culture · Experimental digital art",
    role: "AI-assisted imagery и серия экспериментальных постеров.",
    previewTitle: "Beyond Reality",
    previewDescription: "AI-визуалы, digital-эксперименты и новые форматы контента.",
    image: digitalProjectImage,
    secondImage: "https://images.unsplash.com/photo-1759179075763-03faf36c627c?auto=format&fit=crop&w=1400&q=85",
    task: "Исследовать непривычную цифровую форму для культурного проекта.",
    concept: "Текучая поверхность как метафора постоянно меняющегося визуального языка.",
    direction: "Цифровые и AI-визуалы расширяют привычный язык бренда и помогают создавать образы, которые сложно получить традиционными способами. Технологии здесь становятся инструментом авторской идеи, а не заменой дизайна.",
    content: "Сначала были сформулированы идея, настроение и визуальные ограничения проекта. Затем через серию AI-экспериментов отобраны сильные образы, доработаны композиция и цвет, а финальные решения адаптированы для публикаций и digital-форматов.",
    conclusion: "Эксперимент показывает, как AI-инструменты могут дополнять, а не заменять авторскую арт-дирекцию.",
    shape: "portrait",
  },
];

const services = [
  ["SMM и социальные сети", "SMM & Social Media", "Социальные сети с характером и стратегией.", "Я разрабатываю контент-стратегии и помогаю брендам привлекать внимание, формировать доверие и расти в социальных сетях."],
  ["Контент и креатив", "Content & Creative", "Идеи, которые хочется смотреть и читать.", "Я создаю цепляющие тексты, контент-планы и креативные идеи, которые передают характер бренда."],
  ["Визуальная айдентика", "Visual Identity", "Визуальный образ, который узнают.", "Я нахожу уникальную эстетику бренда через цвет, типографику и детали, создавая целостный визуальный стиль."],
  ["Графический дизайн", "Graphic Design", "Дизайн, который говорит за бренд.", "Я разрабатываю рекламные креативы, digital-макеты и визуальные материалы, которые выделяются среди других."],
  ["Цифровые и ИИ-визуалы", "Digital & AI Visuals", "Нестандартные решения для новых идей.", "Я создаю оригинальные digital-визуалы с помощью AI и современных инструментов, экспериментируя с формами и эстетикой."],
] as const;

const projectFilters = [
  "SMM и социальные сети",
  "Контент и креатив",
  "Визуальная айдентика",
  "Графический дизайн",
  "Цифровые и ИИ-визуалы",
] as const;

function ShellMark({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={`shell-mark ${compact ? "compact" : ""}`} viewBox="0 0 120 128" aria-hidden="true">
      <path className="shell-base" d="M31 90v20c0 7 4 11 11 11h36c7 0 11-4 11-11V90" />
      <path d="M60 122 10 76C0 67 1 50 18 53L60 122Z" />
      <path d="M60 122 18 53c-8-13 1-28 18-23l24 92Z" />
      <path d="M60 122 36 30C33 18 42 10 51 22l9 100Z" />
      <path d="M60 122 51 22C50 11 55 5 60 5s10 6 9 17l-9 100Z" />
      <path d="M60 122 69 22c9-12 18-4 15 8l-24 92Z" />
      <path d="M60 122 84 30c17-5 26 10 18 23l-42 69Z" />
      <path d="m60 122 42-69c17-3 18 14 8 23l-50 46Z" />
    </svg>
  );
}

function Logo({ vertical = false, markOnly = false }: { vertical?: boolean; markOnly?: boolean }) {
  if (markOnly) return <ShellMark compact />;
  return (
    <span className={`brand-logo ${vertical ? "vertical" : ""}`}>
      <ShellMark compact={!vertical} />
      <strong>INÓE</strong>
    </span>
  );
}

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 28 12" aria-hidden="true">
      <path d="M0 6h26M21 1l5 5-5 5" />
    </svg>
  );
}

function NavSymbol({ index }: { index: number }) {
  return (
    <svg className="nav-symbol" viewBox="0 0 24 24" aria-hidden="true">
      {index === 0 && (
        <>
          <path d="M4 18c-1-3 0-5 2.5-6-1.5-3 1-5.5 3.5-4.5.3-3 3.7-3 4 0 2.5-1 5 1.5 3.5 4.5 2.5 1 3.5 3 2.5 6-4 2-12 2-16 0Z" />
          <path d="M12 19V6.5M12 19 7 9M12 19l10-7M12 19l5-10" />
        </>
      )}
      {index === 1 && (
        <>
          <path d="M5 17C2.5 12 5 5 11 4c6-1 11 4 9 10-1.5 5-8 7-13 4.5" />
          <path d="M8 15c-2-3 0-7 3.5-7.5 3.5-.5 6 2.5 4.5 5.5-1 2.5-5 3-6.5 1-.9-1.2-.2-3.2 1.5-3.5 1.2-.2 2.2.7 2 1.8" />
        </>
      )}
      {index === 2 && (
        <>
          <path d="M5 19c-2-5 0-12 6-15.5 5 2 9 8 8 14-4 2.5-10 3.5-14 1.5Z" />
          <path d="M7 17c1-5 3-9 6-12M10 19c1-5 3-8 5-11M13.5 19c.5-3.5 1.5-6 3-8" />
        </>
      )}
      {index === 3 && (
        <>
          <path d="M7 8c1-3.5 7-5.5 11-2l-1 3c.5 4-1.5 9-5 12-3-3-5-8-5-13Z" />
          <path d="M7 8c3 1.5 7 1.5 10 1M8.5 12.5c2 .8 5 .8 7 0M10 17c1.2.4 2.8.4 4 0M9 6.5c2.5 1 5.5.7 8-.5" />
        </>
      )}
    </svg>
  );
}

function SectionTitle({ index, kicker, children }: { index: string; kicker: string; children: React.ReactNode }) {
  return (
    <div className="section-title" data-reveal>
      <div><span>{index}</span><span>{kicker}</span></div>
      <h2>{children}</h2>
    </div>
  );
}

function DocumentPreview({ large = false }: { large?: boolean }) {
  return (
    <div className={`document-preview ${large ? "large" : ""}`} aria-label="Превью SMM-стратегии">
      <div className="document-sheet sheet-back"><span>CONTENT / 04</span></div>
      <div className="document-sheet sheet-front">
        <span>INÓE — STRATEGY</span>
        <strong>CONTEXT</strong>
        <div className="document-lines"><i /><i /><i /></div>
        <small>Communication structure & content system</small>
      </div>
    </div>
  );
}

function ProjectPage({ project, close }: { project: Project; close: () => void }) {
  return (
    <div className="case-page">
      <header className="case-header">
        <a href="#top" onClick={close}><Logo /></a>
        <button type="button" onClick={close}>Вернуться к проектам <span>×</span></button>
      </header>
      <main>
        <section className="case-hero">
          <span>Демонстрационный концепт · 2025</span>
          <h1>{project.name}</h1>
          <div className="case-meta"><span>{project.niche}</span><span>{project.category} · Creative direction by INÓE</span></div>
          <p className="case-intro">{project.role} {project.task}</p>
          {project.previewType === "document"
            ? <DocumentPreview large />
            : <img src={project.image} alt={`Концепт ${project.name}`} />}
        </section>
        <section className="case-story">
          <div><span>01 / Задача</span><p>{project.task}</p></div>
          <div><span>02 / Идея</span><p>{project.concept}</p></div>
          <div><span>03 / Визуальное направление</span><p>{project.direction}</p></div>
          <div><span>04 / Созданный контент</span><p>{project.content}</p></div>
        </section>
        <section className="case-visual">
          <img src={project.secondImage} alt="" />
          <div>
            <span className="case-label">Цветовая палитра</span>
            <div className="case-palette"><i /><i /><i /><i /></div>
            <ShellMark />
            <p>Не реальный клиентский кейс, а демонстрация возможного направления и подхода.</p>
          </div>
        </section>
        <section className="case-outcome">
          <span>05 / Результат и вывод</span>
          <h2>{project.conclusion}</h2>
          <p>Подтверждённые количественные результаты для концептуального проекта отсутствуют.</p>
        </section>
      </main>
      <button className="case-back" type="button" onClick={close}>Смотреть все проекты <Arrow /></button>
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [projectFilter, setProjectFilter] = useState<(typeof projectFilters)[number]>("SMM и социальные сети");
  const visibleProjects = projects.filter((project) => project.category === projectFilter);
  const activeDirection = services.find(([title]) => title === projectFilter);
  const activeProjectPreview = visibleProjects[0];

  useEffect(() => {
    document.title = "INÓE — SMM & Creative · Инга Парилова";
    const description = document.querySelector('meta[name="description"]') ?? document.createElement("meta");
    description.setAttribute("name", "description");
    description.setAttribute("content", "INÓE — личный creative-бренд Инги Париловой. SMM, визуальные концепции и контент.");
    if (!description.parentNode) document.head.appendChild(description);

    const readHash = () => {
      const slug = window.location.hash.replace("#project/", "");
      setActiveProject(window.location.hash.startsWith("#project/") ? projects.find((item) => item.slug === slug) ?? null : null);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu, activeProject]);

  useEffect(() => {
    if (activeProject) window.scrollTo(0, 0);
  }, [activeProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [activeProject, projectFilter]);

  const openProject = (project: Project) => {
    window.location.hash = `project/${project.slug}`;
    setActiveProject(project);
  };

  const closeProject = () => {
    setActiveProject(null);
    window.history.replaceState(null, "", `${window.location.pathname}#projects`);
    setTimeout(() => document.getElementById("projects")?.scrollIntoView(), 0);
  };

  if (activeProject) return <ProjectPage project={activeProject} close={closeProject} />;

  return (
    <div className="inoe-site" id="top">
      <header className="main-header">
        <a href="#top" aria-label="INÓE — на главную"><Logo /></a>
        <nav aria-label="Основная навигация">
          {nav.map(([label, id], index) => (
            <a className="nav-orb" href={`#${id}`} key={id}>
              <NavSymbol index={index} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <a className="contact-link" href="#contact">Начать проект <Arrow /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenu(!menu)} aria-label="Открыть меню"><i /><i /></button>
      </header>

      <div className={`mobile-nav ${menu ? "open" : ""}`}>
        <Logo vertical />
        {nav.map(([label, id], index) => (
          <a href={`#${id}`} onClick={() => setMenu(false)} key={id}><span>0{index + 1}</span>{label}</a>
        ))}
      </div>

      <main>
        <section className="hero">
          <div className="hero-caption"><span>Инга Парилова</span><span>SMM & Creative</span></div>
          <div className="hero-copy" data-reveal>
            <span className="overline">Personal creative brand</span>
            <h1>Иной взгляд<br />на <em>digital</em></h1>
            <p>Создаю визуальные концепции, контент и коммуникацию, которые помогают брендам находить собственный характер в социальных сетях.</p>
            <a className="text-link" href="#projects">Смотреть проекты <Arrow /></a>
          </div>
          <div className="hero-art" data-reveal>
            <div className="hero-image">
              <img src={heroPortrait} alt="Инга Парилова" />
            </div>
            <div className="hero-shell"><ShellMark /></div>
            <span className="image-note">Inga Parilova / personal portrait</span>
          </div>
          <div className="hero-brand"><Logo vertical /></div>
        </section>

        <section className="about section" id="about">
          <SectionTitle index="01" kicker="Обо мне">Привет, я Инга.</SectionTitle>
          <div className="about-layout">
            <div className="portrait-photo" data-reveal>
              <img src={aboutPortrait} alt="Портрет Инги Париловой" loading="lazy" />
              <span>Инга Парилова · Author of INÓE</span>
            </div>
            <div className="about-text" data-reveal>
              <p className="lead">Я соединяю визуальное мышление, понимание социальных сетей и внимательную работу с контентом.</p>
              <p>В каждом проекте мне важно сначала увидеть характер бренда: погрузиться в его задачи, найти точную интонацию и собрать визуальную подачу в целостный образ. Не повторять готовые решения, а искать то самое — своё, иное.</p>
              <div className="signature"><span>Инга Парилова</span><i /><span>Author of INÓE</span></div>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <SectionTitle index="02" kicker="Избранные проекты">Selected Works</SectionTitle>
          <p className="portfolio-subtitle">A selection of ideas, visuals & creative projects.</p>
          <p className="portfolio-russian">Проекты, в которых идея обретает форму.</p>
          <div className="project-filters" role="group" aria-label="Фильтры проектов">
            {projectFilters.map((filter) => (
              <button
                className={projectFilter === filter ? "active" : ""}
                type="button"
                key={filter}
                onClick={() => setProjectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          {activeDirection && (
            <div className="direction-summary" data-reveal>
              <span>{activeDirection[1]}</span>
              <p>{activeDirection[2]}</p>
            </div>
          )}
          {activeProjectPreview && (
            <div className="direction-showcase" data-reveal>
              <div className="direction-gallery">
                <div className="direction-main-visual">
                  <img
                    src={activeProjectPreview.image}
                    alt={`Пример работы ${activeProjectPreview.previewTitle}`}
                  />
                  <span>Concept Project</span>
                </div>
              </div>
              <div className="direction-project-copy">
                <span>
                  {activeProjectPreview.slug === "forme"
                    ? "01 / Social media"
                    : `0${projects.indexOf(activeProjectPreview) + 1} / ${activeProjectPreview.niche}`}
                </span>
                <h3>{activeProjectPreview.previewTitle}</h3>
                <p>{activeProjectPreview.previewDescription}</p>
                <div>
                  <small>О направлении</small>
                  <p>{activeProjectPreview.direction}</p>
                </div>
                <div>
                  <small>Как создавалась работа</small>
                  <p>{activeProjectPreview.content}</p>
                </div>
              </div>
            </div>
          )}
          <p className="concept-note">Все представленные проекты — реальные клиентские кейсы, созданные и реализованные в рамках работы с заказчиками.</p>
          <div className="portfolio-final" data-reveal>
            <p>Каждый проект начинается с идеи. Дальше — поиск формы, визуального языка и решений, которые подходят именно этому бренду.</p>
            <a className="text-link" href="#contact">Обсудить проект <Arrow /></a>
          </div>
        </section>

        <section className="approach section" id="approach">
          <div className="approach-shell"><ShellMark /></div>
          <SectionTitle index="03" kicker="Мой подход">У каждого бренда —<br />своё <em>ИНОЕ.</em></SectionTitle>
          <div className="approach-list">
            {[
              ["Погружение", "В характер и реальные задачи бренда."],
              ["Поиск", "Индивидуальной идеи и визуального языка."],
              ["Система", "Целостного и узнаваемого контента."],
              ["Коммуникация", "Последовательная и понятная аудитории."],
            ].map(([title, text], index) => (
              <article key={title} data-reveal><strong>0{index + 1}</strong><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-mark"><Logo vertical /></div>
          <span className="contact-kicker">Давайте поговорим</span>
          <h2 data-reveal>Создадим что-то<br /><em className="contact-inoe">ИНОЕ?</em></h2>
          <p>Расскажите о своём проекте — обсудим идеи и найдём подходящее направление.</p>
          <a className="phone-link" href="tel:+79641094459">+7 (964) 109-44-59 <Arrow /></a>
          <div className="contact-socials">
            <a href="https://instagram.com/inoe_nacre" target="_blank" rel="noreferrer">Instagram · @inoe_nacre</a>
            <a href="mailto:inoe.nacre@mail.ru">Email · inoe.nacre@mail.ru</a>
          </div>
        </section>
      </main>

      <footer>
        <Logo />
        <div><span>Инга Парилова</span><span>SMM · Content · Creative</span></div>
        <span>© INÓE, 2026</span>
        <a href="#top">Наверх ↑</a>
      </footer>
    </div>
  );
}
