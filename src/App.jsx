import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Download, Phone, MapPin, Globe, Sun, Moon } from "lucide-react";

// === هذا هو السطر الجديد الذي تمت إضافته ===
import profilePhoto from "./assets/profile.png";
// ===========================================

// === Quick personal config (edit these) ===
const PROFILE = {
  name: "Abdelaziz Hassan",
  title: "Networking | Cloud | DevOps Engineer",
  location: "Cairo, Egypt",
  email: "abdelazizhassan333@gmail.com",
  phone: "01158347057",
  github: "https://github.com/Abdel-3ziz",
  linkedin: "https://www.linkedin.com/in/abdelaziz-hassan-266a62313/",
  website: "https://abdel-3ziz.github.io",
  cvUrl:
    "https://drive.google.com/file/d/14_-51ptmaQ4PygJdDQeD_R_np6qv1Oue/view?usp=sharing",
  photo: profilePhoto, // تم تعديل هذا السطر لاستخدام الصورة المستوردة
};

// === USP statements ===
const USP_EN =
  "I combine strong networking and systems foundations with cloud and DevOps skills to design, deploy, and optimize scalable infrastructure efficiently.";
const USP_AR =
  "أنا متميز لأني جامع بين أساسيات قوية في الشبكات والأنظمة مع مهارات في الـCloud والـDevOps، وده بيديّني القدرة إني أُصمّم وأُشغّل وأُحسّن بنية تحتية قابلة للتوسع بكفاءة.";

// === About Me ===
const ABOUT_ME =
  "I am a Telecommunications Engineering senior with a solid foundation in networking (CCNA), Linux, and AWS (Cloud Practitioner & Solutions Architect). Currently deepening my DevOps skills, I enjoy building hands‑on labs that bridge theory and real‑world infrastructure—containers, CI/CD, and cloud networking. I value clean automation, reliability, and scalable design.";

// === Certifications & Courses ===
const CERTS = [
  { name: "CCNA (Cisco Certified Network Associate)", year: "2024" },
  { name: "Linux Fundamentals", year: "2024" },
  { name: "AWS Cloud Practitioner", year: "2024" },
  { name: "AWS Solutions Architect (Associate)", year: "2025" },
  { name: "DevOps (in progress)", year: "2025" },
];

// === Skills (grouped) ===
const SKILLS = [
  {
    group: "Networking",
    items: [
      "Routing & Switching",
      "VLANs / STP / EtherChannel",
      "Subnetting & IPv4/IPv6",
      "ACLs, NAT, DHCP, OSPF",
      "Packet Tracer / GNS3",
    ],
  },
  {
    group: "Linux & Systems",
    items: [
      "Bash scripting",
      "Users/Permissions",
      "Systemd & Logs",
      "Filesystems",
      "SSH",
    ],
  },
  {
    group: "Cloud (AWS)",
    items: ["EC2", "S3", "IAM", "VPC", "CloudFront", "Route 53"],
  },
  {
    group: "DevOps & Tools",
    items: [
      "Git/GitHub",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Containers & Images",
      "Basic Monitoring",
    ],
  },
];

// === Projects (add your GitHub links) ===
const PROJECTS = [
  {
    title: "Containerized WordPress + MySQL",
    summary:
      "Deployed WordPress with a production-like MySQL backend using Docker, volumes, and custom networks. Focus on data persistence, port mapping, and environment security.",
    stack: ["Docker", "Compose", "MySQL", "WordPress"],
    link: "https://github.com/Abdel-3ziz?tab=repositories",
    impact:
      "Repeatable local lab to demonstrate container orchestration fundamentals and infra-as-code mindset.",
  },
  {
    title: "AWS Static Site with CDN",
    summary:
      "Hosted a static portfolio on S3 with CloudFront and Route 53 for custom domain and HTTPS. Automated invalidations and versioned assets.",
    stack: ["AWS S3", "CloudFront", "Route 53"],
    link: "https://github.com/Abdel-3ziz?tab=repositories",
    impact: "Low-cost, globally cached website with high availability and performance.",
  },
  {
    title: "CI/CD Pipeline (GitHub Actions)",
    summary:
      "Built a pipeline to run tests, lint, build Docker images, and push to a registry on each commit. Optional auto-deploy to a staging VM.",
    stack: ["GitHub Actions", "Docker", "Bash"],
    link: "https://github.com/Abdel-3ziz?tab=repositories",
    impact: "Faster iteration and reliable releases with automated checks.",
  },
  {
    title: "Networking Lab (GNS3/Packet Tracer)",
    summary:
      "Designed a small network with VLAN segmentation, inter-VLAN routing, OSPF, and ACLs. Documented topology and configs.",
    stack: ["Cisco IOS", "GNS3", "Packet Tracer"],
    link: "https://github.com/Abdel-3ziz?tab=repositories",
    impact: "Shows practical CCNA-level configuration and troubleshooting skills.",
  },
  {
    title: "Bash-based Mini DBMS",
    summary:
      "Developed CLI scripts to create tables, validate schemas, and CRUD records with metadata files and robust input handling.",
    stack: ["Bash", "Linux", "awk/sed"],
    link: "https://github.com/Abdel-3ziz?tab=repositories",
    impact: "Demonstrates Linux scripting, text processing, and state management.",
  },
];

// === Workshops / Hands‑on Labs ===
const WORKSHOPS = [
  {
    when: "2025",
    title: "Docker Deep Dive: Images, Volumes, Logs",
    details:
      "Practiced docker run/exec/logs, multi-container setups, connecting containers to custom networks, and inspecting runtime behavior.",
  },
  {
    when: "2025",
    title: "Switch Access via Console & PuTTY",
    details:
      "Hands-on with console access, basic IOS setup, IP assignment, and reachability testing (ping/Telnet/SSH).",
  },
  {
    when: "2024",
    title: "AWS Foundations",
    details:
      "IAM best practices, secure S3 hosting, VPC basics, and setting up CloudFront distributions.",
  },
  {
    when: "2024",
    title: "Linux Essentials",
    details:
      "File permissions, processes, services, and shell scripting for automation.",
  },
];

// === Education ===
const EDUCATION = [
  {
    degree: "B.Sc. in Telecommunications Engineering (Senior Year)",
    school: "Ahram Canadian University",
    year: "Expected 2026",
    details: "GPA: 3.72/4.00",
  },
];

// === Simple components ===
const Container = ({ children }) => (
  <div className="max-w-6xl mx-auto px-6 lg:px-8">{children}</div>
);

const SectionTitle = ({ children, sub }) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
      {children}
    </h2>
    {sub && <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">{sub}</p>}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-slate-700 px-3 py-1 text-xs md:text-sm bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur shadow-sm p-6 hover:shadow-md transition-shadow">
    {children}
  </div>
);

// === Main Page ===
export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("theme");
      return savedMode === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-white dark:selection:bg-white dark:selection:text-slate-900">
      {/* Header / Hero */}
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-gray-200 dark:border-slate-800">
        <Container>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 grid place-items-center font-bold">AH</div>
              <div>
                <div className="text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400">Portfolio</div>
                <div className="font-medium">{PROFILE.name}</div>
              </div>
            </div>
            <nav className="flex items-center gap-5 text-sm">
              <div className="hidden md:flex items-center gap-5">
                <a href="#about" className="hover:underline">About</a>
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#skills" className="hover:underline">Skills</a>
                <a href="#workshops" className="hover:underline">Workshops</a>
                <a href="#certs" className="hover:underline">Certifications</a>
                <a href="#contact" className="hover:underline">Contact</a>
              </div>
              <button onClick={toggleDarkMode} className="size-8 rounded-full grid place-items-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                {isDarkMode ? <Sun className="size-5 text-yellow-500" /> : <Moon className="size-5 text-slate-700" />}
              </button>
            </nav>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3"
            >
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight dark:text-white">
                {PROFILE.title}
              </h1>
              <p className="mt-5 text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
                {USP_EN}
              </p>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed" dir="rtl">
                {USP_AR}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={PROFILE.cvUrl}
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:shadow bg-white dark:bg-slate-800"
                >
                  <Download className="size-4" /> Download CV
                </a>
                <a
                  href={PROFILE.github}
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:shadow bg-white dark:bg-slate-800"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:shadow bg-white dark:bg-slate-800"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-2"><MapPin className="size-4" /> {PROFILE.location}</span>
                <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${PROFILE.email}`}><Mail className="size-4" /> {PROFILE.email}</a>
                <span className="inline-flex items-center gap-2"><Phone className="size-4" /> {PROFILE.phone}</span>
                <a className="inline-flex items-center gap-2 hover:underline" href={PROFILE.website}><Globe className="size-4" /> Website</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2"
            >
              <div className="aspect-[4/5] w-full rounded-3xl border border-gray-200 dark:border-slate-700 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img src={PROFILE.photo} alt="Profile" className="object-cover w-full h-full" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* About Me */}
      <section id="about" className="py-12">
        <Container>
          <SectionTitle sub="Who I am">About Me</SectionTitle>
          <Card>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{ABOUT_ME}</p>
          </Card>
        </Container>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12">
        <Container>
          <SectionTitle sub="What I work with">Skills</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((s) => (
              <Card key={s.group}>
                <h3 className="font-semibold mb-3 dark:text-white">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12">
        <Container>
          <SectionTitle sub="Selected, hands-on, end-to-end">Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <Card key={p.title}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.summary}</p>
                  </div>
                  <a
                    href={p.link}
                    className="shrink-0 inline-flex items-center gap-1 text-sm hover:underline"
                  >
                    Repo <ExternalLink className="size-4" />
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{p.impact}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Workshops */}
      <section id="workshops" className="py-12">
        <Container>
          <SectionTitle sub="Practical labs and workshops">Workshops</SectionTitle>
          <div className="space-y-4">
            {WORKSHOPS.map((w, idx) => (
              <Card key={idx}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold dark:text-white">{w.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{w.details}</p>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{w.when}</div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section id="certs" className="py-12">
        <Container>
          <SectionTitle sub="Verified learning and credentials">Certifications</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTS.map((c) => (
              <Card key={c.name}>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium dark:text-white">{c.name}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{c.year}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="py-12">
        <Container>
          <SectionTitle sub="Academic background">Education</SectionTitle>
          <div className="grid gap-6">
            {EDUCATION.map((e) => (
              <Card key={e.degree}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium dark:text-white">{e.degree}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{e.school}</p>
                    {e.details && <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{e.details}</p>}
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{e.year}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <Container>
          <SectionTitle sub="Let’s build something reliable and scalable">Contact</SectionTitle>
          <Card>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Email</div>
                <a className="font-medium hover:underline dark:text-white" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </div>
              <div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Phone</div>
                <div className="font-medium dark:text-white">{PROFILE.phone}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 dark:text-slate-400">GitHub</div>
                <a className="font-medium hover:underline dark:text-white" href={PROFILE.github}>{PROFILE.github}</a>
              </div>
              <div>
                <div className="text-sm text-slate-600 dark:text-slate-400">LinkedIn</div>
                <a className="font-medium hover:underline dark:text-white" href={PROFILE.linkedin}>{PROFILE.linkedin}</a>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <footer className="py-10 border-t border-gray-200 dark:border-slate-800">
        <Container>
          <div className="text-sm text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} {PROFILE.name}</span>
            <span className="hidden md:inline">•</span>
            <span>Built with React + Tailwind</span>
          </div>
        </Container>
      </footer>
    </div>
  );
}