import { ArrowDown, ArrowRight, ArrowUpRight, Award, BrainCircuit, Braces, Cloud, Code2, Database, ExternalLink, GitBranch, Github, Layers3, Linkedin, Mail, Phone, Sparkles, Workflow, Zap } from 'lucide-react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import { projects } from './data/projects'

const experienceAreas = [
  { duration: '2 years', title: 'Microsoft Power Platform', description: 'Enterprise low-code development and business process automation.', technologies: ['Power Apps', 'Power Automate', 'Dataverse', 'Power Fx', 'PCF'], featured: true },
  { duration: '1 year', title: '.NET + Angular', description: 'Full-stack application development across backend services and web interfaces.', technologies: ['C#', '.NET', 'ASP.NET', 'Angular', 'TypeScript'], featured: false },
  { duration: '1 year', title: 'Java + Spring Boot', description: 'Backend application development and service-oriented programming.', technologies: ['Java', 'Spring Boot', 'REST APIs'], featured: false },
]

const credentials = [
  { title: 'PL-400', name: 'Microsoft Power Platform Developer', issuer: 'Microsoft', icon: Award, featured: true, description: 'Validates skills in building, extending and configuring Microsoft Power Platform solutions.' },
  { title: 'Claude 101', name: 'Claude 101', issuer: 'Claude learning', icon: Sparkles, featured: false, description: 'Foundational learning focused on working effectively with Claude.' },
  { title: 'Claude Certified Architect', name: 'Claude Certified Architect', issuer: 'Claude', icon: BrainCircuit, featured: false, description: 'Certification focused on architecting solutions with Claude.' },
  { title: 'Gen AI Professional', name: 'Infosys Certified Gen AI Professional', issuer: 'Infosys', icon: Braces, featured: false, description: 'Professional certification in generative AI concepts and applications.' },
]

const skills = [
  { icon: Layers3, title: 'Power Platform', items: 'Power Apps · Canvas & Model-Driven · Power Fx · PCF' },
  { icon: Workflow, title: 'Automation', items: 'Power Automate · Approvals · Error handling · Orchestration' },
  { icon: Database, title: 'Data & Dataverse', items: 'Dataverse · Relationships · Web API · FetchXML · SQL' },
  { icon: Braces, title: 'Software engineering', items: 'C# · .NET · Java · Spring Boot · Angular · React · TypeScript' },
  { icon: Cloud, title: 'Integration & cloud', items: 'REST APIs · JSON · Webhooks · Azure services' },
  { icon: GitBranch, title: 'ALM & delivery', items: 'Git · Azure DevOps · CI/CD · Solution management' },
]

function App() {
  return (
    <div id="home" className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <Navbar />
      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO INTERNATIONAL OPPORTUNITIES</div>
            <p className="hero-kicker">POWER PLATFORM ENGINEER <span>·</span> FULL-STACK DEVELOPMENT</p>
            <span className="handwritten hero-note">low-code, full-code & everything between</span>
            <h1>Engineering<br /><span className="gradient-text">solutions beyond</span><br />low-code.</h1>
            <p className="hero-description">I build enterprise applications across low-code and traditional software engineering—using Microsoft Power Platform, .NET, Angular, Java and Spring Boot to automate processes and connect systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
            <div className="hero-meta"><span><i /> Based in Pune, India</span><span>Open to Germany · New Zealand · Remote</span></div>
          </div>
          <div className="hero-visual" aria-label="Abstract technology illustration">
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="visual-core"><div className="core-mark">P<span>.</span></div><span>BUILD · INTEGRATE · AUTOMATE</span></div>
            <div className="float-card float-top"><span className="float-icon"><Layers3 size={16}/></span><div><b>Power Platform</b><small>Apps · Automate · Dataverse</small></div></div>
            <div className="float-card float-bottom"><span className="float-icon blue"><Code2 size={16}/></span><div><b>Full-stack mindset</b><small>Architecture · APIs · .NET</small></div></div>
            <div className="visual-caption">TURNING BUSINESS NEEDS INTO<br/>ENGINEERED SOLUTIONS</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
        </section>

        <section className="impact-strip container" aria-label="Selected impact">
          <div className="impact-intro"><span className="eyebrow">SELECTED IMPACT</span><p>Technology measured<br/>by outcomes.</p></div>
          <div className="impact-item"><strong>95<span>%</span></strong><small>Up to manual effort reduction<br/>in a delivered solution</small></div>
          <div className="impact-item"><strong>100<span>K+</span></strong><small>Users impacted by the<br/>solution</small></div>
          <div className="impact-item"><strong>PL-400</strong><small>Microsoft Power Platform<br/>Developer certification</small></div>
        </section>

        <section id="about" className="section container">
          <SectionHeading eyebrow="01 / ABOUT" title="A builder's mindset. An engineer's approach." description="I enjoy working at the intersection of business problems, application engineering and automation." />
          <div className="about-grid">
            <div className="about-main"><p className="lead">I'm a .NET Full Stack Digital Specialist Engineer with experience across Microsoft Power Platform and traditional full-stack development. I enjoy choosing the right technology for the problem, whether that means a low-code business application or a custom-built software service.</p><p>My work spans Canvas Apps, Model-Driven Apps, Dataverse and Power Automate, as well as .NET and Angular application development and Java with Spring Boot. I also work with API integrations, data processing and application performance improvements. I approach every solution with a focus on architecture, maintainability and reliability.</p><p>I’m interested in teams solving meaningful enterprise problems through thoughtful technology—not just building another app.</p></div>
            <aside className="about-aside"><div className="aside-line"><span>01</span><div><b>Understand the problem</b><small>Start with the business outcome.</small></div></div><div className="aside-line"><span>02</span><div><b>Engineer the solution</b><small>Choose the right architecture and tools.</small></div></div><div className="aside-line"><span>03</span><div><b>Deliver measurable value</b><small>Build for users, scale and maintainability.</small></div></div></aside>
          </div>
        </section>

        <section id="expertise" className="section section-muted">
          <div className="container"><SectionHeading eyebrow="02 / TECHNICAL EXPERTISE" title="The tools behind the solutions." description="A blend of Microsoft business applications, software development and integration technologies." />
            <div className="experience-heading"><div><span className="eyebrow">EXPERIENCE BY TECHNOLOGY</span><p>My hands-on experience across different development stacks.</p></div><span className="handwritten">different tools, one engineering mindset</span></div>
            <div className="experience-grid">{experienceAreas.map((area) => <article className={`experience-card ${area.featured ? 'experience-featured' : ''}`} key={area.title}><div className="experience-card-top"><span className="experience-duration">{area.duration}</span><span className="experience-label">HANDS-ON EXPERIENCE</span></div><h3>{area.title}</h3><p>{area.description}</p><div className="tag-list">{area.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></article>)}</div>
            <div className="skills-heading"><span className="eyebrow">BROADER TOOLKIT</span><p>Technologies and engineering practices I use across projects.</p></div>
            <div className="skills-grid">{skills.map(({icon: Icon, title, items}, i) => <article className="skill-card reveal" key={title}><div className="skill-top"><span className="skill-icon"><Icon size={19}/></span><span className="skill-index">0{i+1}</span></div><h3>{title}</h3><p>{items}</p></article>)}</div>
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Problems solved. Systems improved." description="A selection of enterprise application, automation and integration work across my development experience. Project details are intentionally anonymised; deeper case studies can be added as they are prepared for public sharing." />
          <div className="projects-list">{projects.map(project => <article className="project-card reveal" key={project.number}>
            <div className="project-number">{project.number}</div><div className="project-content"><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-outcome"><small>HIGHLIGHT</small><strong>{project.outcome}</strong><p>{project.detail}</p></div>
          </article>)}</div>
          <p className="project-note"><Zap size={15}/> Case studies are editable starter content. Validate metrics, personal contribution and technology attribution before publishing.</p>
        </section>

        <section id="certifications" className="section credential-section">
          <div className="container">
            <SectionHeading eyebrow="04 / CERTIFICATIONS" title="Certified. Curious. Always building." description="A growing set of credentials across business applications and emerging AI technologies." />
            <div className="credential-grid">
              {credentials.map(({ title, name, issuer, icon: Icon, featured, description }) => (
                <article className={`credential-card ${featured ? 'credential-featured' : ''}`} key={title}>
                  <div className="credential-card-top"><span className="credential-icon"><Icon size={20} /></span><span className="credential-type">{issuer}</span></div>
                  <div className="credential-title">{title}</div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  {featured && <span className="credential-feature-label">POWER PLATFORM</span>}
                </article>
              ))}
            </div>
            <p className="credential-footnote">Add credential links, issue dates or certificate IDs where available. Only publish details that match your certificate records.</p>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <SectionHeading eyebrow="05 / CONTACT" title="Have a problem worth solving?" description="I'm open to conversations about Power Platform engineering, enterprise automation and international opportunities." />
          <div className="contact-panel"><div><span className="eyebrow">LET'S BUILD SOMETHING USEFUL</span><h3>Good engineering starts with a conversation.</h3><p>Based in Pune, India · Open to hybrid, remote and relocation opportunities.</p></div><div className="contact-links"><a href="mailto:prajwaldhebe024@gmail.com"><Mail size={17}/> prajwaldhebe024@gmail.com <ArrowUpRight size={15}/></a><a href="tel:+917263999213"><Phone size={17}/> +91 7263999213 <ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/in/prajwal-dhebe-69082420a/" target="_blank" rel="noreferrer"><Linkedin size={17}/> linkedin.com/in/prajwal-dhebe-69082420a <ExternalLink size={14}/></a><a href="https://github.com/prajwaldhebe024-gif" target="_blank" rel="noreferrer"><Github size={17}/> github.com/PrajwalDhebe <ExternalLink size={14}/></a></div></div>
          <p className="contact-edit-note">Prefer email or LinkedIn? Feel free to reach out for engineering opportunities and collaborations. <span className="handwritten">always happy to connect!</span></p>
        </section>
      </main>
      <footer className="footer container"><a className="brand" href="#home">P<span>.</span></a><p>Designed & built with intention.</p><span>© {new Date().getFullYear()} Prajwal</span></footer>
    </div>
  )
}

export default App
