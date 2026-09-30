import { Component, inject } from '@angular/core';
import { AppIntersectDirective } from '../../directives/intersect-view.directive';
import { TranslatePipe } from '../../services/translate.pipe';
import { LanguageService } from '../../services/language.service';
interface IExperience {
  company: { En: string; Ru: string };
  logo: string;
  logo_backgroud?: string;
  padding?: string;
  position: { En: string; Ru: string };
  period: string;
  period2?: string;
  periodRu?:string,
  bullets: { En: string; Ru: string }[];
}
@Component({
  selector: 'app-timeline-experience',
  templateUrl: './timeline-experience.component.html',
  styleUrls: ['./timeline-experience.component.scss'],
  imports: [AppIntersectDirective, TranslatePipe],
})
export class TimelineExperienceComponent {
  public expData: IExperience[];
  public lang = inject(LanguageService).currentLang
  constructor() {
    this.expData = [
      {
        company: {'En':'System Solutions','Ru':'Системные решения'},
        logo: 'pro.svg',
        logo_backgroud: '#ffffff',
        padding: '2px',
        position: {'En':'Full-Stack / Frontend Engineer','Ru':'Full-Stack / Frontend разработчик'},
        period: '02/2025 - Present',
        period2: '2025 - Present',
        periodRu: '2025 - Сейчас',
        bullets: [
          {
            En: 'Architected and developed an in-house data visualization library using Konva, Elk, and Dagre, enabling interactive management of complex business process diagrams and contracts',
            Ru: 'Спроектировал и разработал внутреннюю библиотеку визуализации данных на базе Konva, Elk и Dagre, обеспечив интерактивное управление сложными диаграммами бизнес-процессов и контрактов',
          },
          {
            En: 'Led a major architectural refactoring to integrate modern Angular best practices, migrating the codebase to Standalone components, implementing `@defer` loading, and leveraging RxJS for reactive state management',
            Ru: 'Успешно провел масштабный рефакторинг архитектуры для интеграции современных лучших практик Angular: перевел кодовую базу на Standalone-компоненты, внедрил ленивую загрузку через `@defer` и оптимизировал реактивное управление состоянием с помощью RxJS',
          },
          {
            En: 'Drove a 6.5x reduction in bundle size, breaking down a single 10MB chunk into 5.5MB of optimized small chunks, and further compressing it to 1.5MB via Brotli, significantly improving initial page load time',
            Ru: 'Добился 6.5-кратного уменьшения размера бандла, разбив один монолитный чанк размером 10 МБ на оптимизированные мелкие чанки общей емкостью 5.5 МБ с последующим сжатием до 1.5 МБ с помощью Brotli, что критически ускорило первичную загрузку приложения',
          },
          {
            En: 'Successfully assembled, updated, and containerized a complex Python (Flask) backend comprising 6 microservices from fragmented source pieces to set up a fully functional, localized live staging environment',
            Ru: 'Успешно собрал, обновил и контейнеризировал сложный бэкенд на Python (Flask), состоящий из 6 микросервисов, из разрозненных частей исходного кода для развертывания полноценной локальной стейджинг-среды',
          },
          {
            En: 'Optimized infrastructure footprint by cutting Docker image sizes from 1.44 GB to 300 MB per image and established secure service communication across 3 distinct Docker networks/volumes',
            Ru: 'Оптимизировал инфраструктурный след, сократив размер Docker-образов с 1.44 ГБ до 300 МБ на каждый образ, и настроил безопасное изолированное взаимодействие сервисов внутри 3 отдельных сетей/томов Docker',
          },
          {
            En: 'Proactively detected and resolved critical memory leaks and rendering bottlenecks, ensuring long-session application stability and smooth UI performance',
            Ru: 'Проактивно выявлял и устранял критические утечки памяти (memory leaks) и узкие места при рендеринге, обеспечив стабильность приложения при длительных сессиях и плавность UI',
          },
          {
            En: 'Engineered a high-frequency real-time stock quote system utilizing WebSockets with updates up to 50ms; optimized rendering performance via RxJS buffering, throttling, and state caching to prevent UI freezing',
            Ru: 'Разработал высокочастотную систему обработки биржевых котировок в реальном времени через WebSockets с частотой обновления до 50 мс; оптимизировал рендеринг страниц с помощью буферизации, троттлинга и кэширования состояний в потоках RxJS, предотвратив зависание интерфейса',
          },
        ],
      },
      {
        company: {'En':'3A Solutions Inc','Ru':'3A Solutions'},
        logo: '3A.png',
        logo_backgroud: '#add8e6',
        position: {'En':'FullStack Developer','Ru':'FullStack Разработчик'},
        period: '2023 - 12/2024',
        period2: '2023 - 2024',
        bullets: [
          {
            En: 'Architected and engineered the comprehensive FinTech platform from scratch, delivering a fully decoupled, scalable architecture to manage the full investment cycle and double-entry accounting',
            Ru: 'С нуля спроектировал и разработал комплексную FinTech-платформу, создав полностью разделенную (decoupled) масштабируемую архитектуру для ведения полного инвестиционного цикла и двойной бухгалтерии',
          },
          {
            En: 'Designed and deployed a highly secure, scalable PostgreSQL architecture comprising 69 tables, 100 constraints, 13 triggers, and 18 Row-Level Security (RLS) policies to guarantee absolute multi-tenant data isolation',
            Ru: 'Разработал и развернул безопасную, масштабируемую архитектуру PostgreSQL, включающую 69 таблиц, 100 ограничений (constraints), 13 триггеров и 18 политик Row-Level Security (RLS) для обеспечения абсолютной изоляции данных в многопользовательской среде (multi-tenancy)',
          },
          {
            En: 'Developed 82 custom database functions and procedural scripts to shift heavy financial math to the database layer, automating FIFO calculations, balance projections, and model-portfolio-based order execution under tight investment restrictions',
            Ru: 'Написал 82 кастомные функции базы данных и процедурные скрипты, перенеся сложные финансовые вычисления на уровень БД; автоматизировал расчеты по методу FIFO, проекции баланса и расчет ордеров на основе модельного портфеля с учетом жестких инвестиционных ограничений',
          },
          {
            En: 'Engineered an automated rebalancing and order routing engine that overlays model portfolio structures onto active client accounts, calculates asset deviations against live market data, aggregates individual orders into bulk trade tickets, and executes multi-client allocations post-trade',
            Ru: 'Спроектировал автоматизированный движок ребалансировки и маршрутизации ордеров, который накладывает структуры модельных портфелей на активные клиентские счета, рассчитывает отклонения активов на основе рыночных данных в реальном времени, объединяет индивидуальные ордера в общие торговые тикеты (bulk trade tickets) и осуществляет пост-трейд аллокацию между клиентами',
          },
          {
            En: 'Built a proprietary FinTech analytics engine capable of calculating complex fee structures (including Management/Performance fees, High-Water Mark, and sliding scales) and analyzing portfolio performance via Time-Weighted Rate of Return (TWRR) and P&L factor analysis',
            Ru: 'Создал проприетарный аналитический модуль FinTech, способный рассчитывать сложные структуры комиссионных (включая комиссии за управление/успех, High-Water Mark и скользящие шкалы) и анализировать эффективность портфеля с помощью взвешенной по времени доходности (TWRR) и факторного анализа P&L',
          },
          {
            En: 'Built a robust Node.js REST API layer with 100+ endpoints, integrating secure session authentication via Passport.js and third-party market data API integrations',
            Ru: 'Построил отказоустойчивый слой REST API на Node.js со 100+ эндпоинтами, внедрив безопасную сессионную аутентификацию через Passport.js и интеграцию со сторонними API рыночных данных',
          },
          {
            En: 'Implemented an advanced security pattern that dynamically switches the database query pool for each incoming request, mapping application-level user roles directly to 6 database group roles',
            Ru: 'Реализовал продвинутый паттерн безопасности, который динамически переключает пул запросов к базе данных для каждого входящего запроса, сопоставляя роли пользователей на уровне приложения напрямую с 6 групповыми ролями БД',
          },
          {
            En: 'Created a high-performance, responsive Angular Frontend utilizing Material Design and RxJS streams, optimizing complex financial dashboards, return-rate graphs, and multi-asset data visualization for high-velocity user workflows',
            Ru: 'Создал высокопроизводительный, отзывчивый Frontend на Angular с использованием Material Design и потоков RxJS, оптимизировав перегруженные данными финансовые дашборды, графики доходности и мульти-активные визуализации под высокоинтенсивные рабочие процессы пользователей',
          },
        ],
      },
      {
        company: {'En':'Proprietary Infrastructure R&D','Ru':'Собственная разработка инфраструктуры (Proprietary R&D)'},
        logo: '3A.png',
        logo_backgroud: '#add8e6',
        position:{'En':'Главный архитектор ПО','Ru':'Главный архитектор ПО'},
        period: '09/2024 - 12/2024',
        bullets: [
          {
            En: 'Architected and developed a standalone Central Authentication Service (IdP) designed as a highly reusable infrastructure component for cross-origin enterprise applications',
            Ru: 'Спроектировал и разработал изолированный центральный сервис аутентификации, созданный как переиспользуемый инфраструктурный модуль для кросс-доменных корпоративных приложений',
          },
          {
            En: 'Implemented a robust client-side security architecture using an HttpOnly, Secure, and SameSite=Lax cookie-encapsulated JWT strategy, eliminating local storage token footprint to guarantee absolute protection against XSS vulnerabilities',
            Ru: 'Реализовал строгую архитектуру безопасности на стороне клиента с использованием JWT-стратегии, инкапсулированной в куки HttpOnly, Secure и SameSite=Lax, полностью исключив хранение токенов в local/session storage для гарантированной защиты от XSS-уязвимостей',
          },
          {
            En: 'Engineered a non-blocking, lockless token synchronization engine using the RxJS `exhaustMap` Semaphore Pattern inside global Angular Functional Interceptors (`HttpInterceptorFn`); effectively manages queued in-flight requests and prevents API token-refresh flooding during expired sessions',
            Ru: 'Разработал неблокирующий потоковый движок синхронизации токенов на базе паттерна семафора RxJS `exhaustMap` внутри функциональных интерцепторов Angular (`HttpInterceptorFn`); модуль эффективно выстраивает очередь из параллельных запросов «на лету» и предотвращает спам-флуд к API при обновлении истекших сессий',
          },
          {
            En: 'Designed an automated transport-level handler via an isolated `withCredentials` interceptor chain, dynamically modifying cross-origin CORS pipelines without leaking environment-specific configs into business logic',
            Ru: 'Настроил автоматический транспортный обработчик через цепочку изолированных интерцепторов `withCredentials`, динамически модифицирующий CORS-пайплайны без завязки бизнес-логики на конфигурации окружения',
          },
          {
            En: 'Developed dynamic polymorphic subsystems, including an interactive Admin Role Guard system and a single-view adaptive credential restoration module morphing states based on active route parameters and anti-spam cooldown mechanisms',
            Ru: 'Создал динамические полиморфные подсистемы, включая адаптивный модуль восстановления учетных записей (меняющий состояние валидации на основе параметров роутинга) и систему ролевой защиты административных панелей (`roleGuard`)',
          },
        ],
      },
      {
        company: {'En':'BNP Paribas','Ru':'БНП Париба'},
        logo: 'BNP.png',
        position:{'En':'Operations Automator & Back-Office Specialist','Ru':'Специалист по автоматизации операционных процессов и специалист бэк-офиса'},
        period: '2021 - 2023',
        bullets: [
          {
            En: 'Leveraged a lifelong passion for software development to identify operational bottlenecks and independently build custom automation tools that optimized core banking workflows',
            Ru: 'Использовал страсть к разработке программного обеспечения для самостоятельного поиска операционных узких мест и инициативной разработки кастомных инструментов автоматизации, оптимизировавших ключевые банковские процессы',
          },
          {
            En: 'Developed a tax suspension verification service for clients applying for deposits (Browser Automation - Scripting)',
            Ru: 'Engineered a custom BackOffice Dashboard utilizing a Vanilla Web UI, Node.js, and SQL Server, delivering a flexible interface for real-time visualization and processing of global trades and payments',
          },
          {
            En: 'Developed an automated tax suspension verification service using browser automation and custom scripting, eliminating intensive manual verification cycles for clients applying for deposits',
            Ru: 'Создал автоматизированный сервис верификации приостановки налогообложения для клиентов, подающих заявки на депозиты, с помощью автоматизации браузера (Browser Automation) и кастомных скриптов, что полностью устранило трудоемкие циклы ручной проверки',
          },
          {
            En: 'Designed and implemented an internal trade confirmation tracking module, creating an intuitive interface for real-time status management, document workflows, and automated transaction reconciliation',
            Ru: 'Спроектировал и внедрил модуль отслеживания подтверждений сделок, создав интуитивно понятный интерфейс для управления статусами в реальном времени, документооборота и автоматической сверки (реконсиляции) транзакций',
          },
        ],
      },
      {
        company: {'En':'Own Asset Portfolio (Self-Employed)','Ru':'Собственный инвестиционный портфель (Самозанятость)'},
        logo: 'OWN.png',
        position: {'En':'Quantitative Developer & Private Investor','Ru':'Quantitative Developer и Частный инвестор'},
        period: '2016 - 2021',
        bullets: [
          {
            En: 'Designed and built proprietary algorithmic trading scripts and data parsers to automate market data collection, technical analysis, and portfolio risk management',
            Ru: 'Проектировал и собирал скрипты для торговли и парсеры данных, автоматизировав сбор рыночной информации, технический анализ и управление рисками портфеля',
          },
          {
            En: 'Developed custom analytical dashboards (Node.js/SQL) to track asset allocations, evaluate historical performance metrics, and model multi-asset investment strategies',
            Ru: 'Разработал кастомные аналитические панели (Node.js/SQL) для мониторинга аллокации активов, оценки исторических метрик эффективности и моделирования инвестиционных стратегий для портфелей с множеством активов',
          },
          {
            En: 'Successfully managed an independent multi-asset investment portfolio, applying analysis, modeling, and risk-mitigation frameworks',
            Ru: 'Успешно управлял независимым диверсифицированным инвестиционным портфелем, применяя методы анализа, моделирование и подходы к минимизации рисков',
          },
          {
            En: 'Dedicated extensive depth to technical self-education, mastering advanced database management (SQL), data structures, and architectural software patterns applied to financial systems',
            Ru: 'Посвятил значительное время углубленному техническому самообразованию, освоив на продвинутом уровне управление базами данных (SQL), структуры данных и архитектурные паттерны ПО, применимые в финансовых системах',
          },
        ],
      },
      {
        company:{'En':'Renaissance Investment Management','Ru':'Ренессанс Инвестмент Менеджмент'},
        logo: 'RIM RND.png',
        position: {'En':'Head of Operations & Support / "Shadow IT"','Ru':'Руководитель мидл- и бэк-офиса / Разработчик "Shadow IT"'},
        period: '2006 - 2011',
        bullets: [
          {
            'En': 'Managed the launch of 2 critical middle-office platforms to support the consecutive growth of the private client asset management business.',
            'Ru': 'Руководил техническим запуском и развертыванием 2 критически важных мидл-офисных платформ, обеспечивших непрерывный рост бизнеса управления активами частных клиентов.'
          },
          {
            'En':'Independently coded and developed a crucial extension module for the core middle-office platform under tight deadlines, preventing launch delays and enabling continuous iterative upgrades aligned with business demands.',
            'Ru':'Самостоятельно написал и внедрил ключевой модуль расширения для основной мидл-офисной платформы в условиях жестких дедлайнов, предотвратив задержку запуска и обеспечив его непрерывную итеративную модернизацию под требования бизнеса.'
          },
          {
            'En':'Translated complex business requirements into software logic, designing, testing, and continuously improving the portfolio management system for traders and portfolio managers.',
            'Ru':'Транслировал сложные бизнес-требования в логику программного обеспечения, проектируя, тестируя и непрерывно улучшая систему управления портфелями для трейдеров и портфельных менеджеров.'
          },
          {
            'En':'Created automated workflows for investment declaration compliance, implementing programmatic controls to monitor investment restrictions within clients orders and strategies.',
            'Ru':'Разработал механизмы контроля соответствия инвестиционных деклараций, внедрив программные фильтры для мониторинга инвестиционных ограничений в рамках клиентских ордеров или стратегий.'
          },
          {
            'En':'Maintained the portfolio management application, managed live data feeds, and built custom reporting tools for the active trading floor.',
            'Ru':'Поддерживал систему управления портфелями, обеспечивая целостность данных, оптимизируя разрабатывая кастомные модули отчетности для трейдеров.'
          },
        ],
      },
    ];
  }
}
