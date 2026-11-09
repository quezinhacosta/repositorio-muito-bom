# Quezia's • Interactive AI & Full-Stack Portfolio

> Portfólio web de alta performance, não-tradicional e altamente interativo desenvolvido para **Quezia Costa** — Engenheira de Inteligência Artificial, Pesquisadora em Machine Learning (PIBIC) e Desenvolvedora Full-Stack.

---

## 🎨 Linguagem Visual & Design System

Inspirado na estética moderna e refinada do **TeamCamp.app** com toques elegantes de **Material/Google UI**:
- **Canvas Base:** Off-white suave (`#F8F9FA`) com malha arquitetural de pontos (dot grid reativa à proximidade do mouse).
- **Cards & Módulos:** Branco puro (`#FFFFFF`) com bordas sutis (`border: 1px solid rgba(226, 232, 240, 0.8)`), cantos arredondados generosos (`border-radius: 16px` a `24px`) e sombras difusas para sensação tridimensional de profundidade.
- **Cores de Acento:** Harmonização entre **Branco**, **Azul Moderno** (`#2563EB`) e **Rosa Vibrante** (`#EC4899`).
- **Identity:** Título da aba padronizado para `Quezia's`, com foco puramente em dados, métricas, código, pesquisas e conexões reais (sem fotos pessoais).

---

## ⚡ Efeitos Criativos & Interatividade

1. **Interactive Mesh Gradient Background:**
   - Canvas com interpolação suave (lerp) que reage em tempo real às coordenadas do mouse (`clientX`, `clientY`) com gravidade sutil e orbs pastéis.
2. **3D Tilt Cards com Iluminação Dinâmica:**
   - Efeito de inclinação tridimensional (`perspective(1000px) rotateX/rotateY`) com spot radial de luz que segue o cursor e elevação física no hover.
3. **Smooth Scroll com Inércia:**
   - Integração com **Lenis Scroll** para rolagem com peso e inércia orgânica.
4. **Live GitHub Telemetry (Terminal & API):**
   - Conexão em tempo real com `https://api.github.com/users/quezinhacosta/events/public`.
   - Card interativo estilo terminal retro-moderno exibindo os últimos commits com hashes, mensagens, branches e horários relativos.
5. **Island Nav Flutuante:**
   - Barra em ilha com *glassmorphism* (`backdrop-filter: blur(14px)`), indicador ativo em transição com gradiente Azul/Rosa e botão de **cópia de e-mail com 1 clique** que dispara animação e efeito de confetti.
6. **Bento Grid de Habilidades (Tech Stack):**
   - Organização modular categorizada (*Artificial Intelligence & ML*, *Web & Full-Stack*, *DevOps & Cloud*) com badges dinâmicos e micro-animações.
7. **Integração com LinkedIn:**
   - Card dedicado com preview instantâneo da trajetória profissional e direcionamento com feedback tátil.

---

## 🛠️ Stack Tecnológica

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Física & Animações:** Framer Motion, Lenis Scroll (`lenis`)
- **Efeitos de Partículas:** Canvas Confetti
- **Ícones:** Lucide React & Vetores SVG customizados

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ ou 20+
- npm, pnpm ou yarn

### Instalação e Execução

```bash
# Entre na pasta do projeto
cd portnew

# Instale as dependências (se necessário)
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o portfólio.

### Build para Produção

```bash
npm run build
npm run start
```

---

## 📬 Contato & Conexões

- **GitHub:** [@quezinhacosta](https://github.com/quezinhacosta)
- **LinkedIn:** [Quezia Costa](https://www.linkedin.com/in/quezia-costa-5195342b3/)
- **E-mail Institucional:** [quezia.costa@unicap.br](mailto:quezia.costa@unicap.br)
