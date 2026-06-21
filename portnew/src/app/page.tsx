export default function Home() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <span className="tag">
          CIÊNCIA DA COMPUTAÇÃO • IA • DESENVOLVIMENTO
        </span>

        <h1>
          Olá, eu sou <span>Quezia Costa</span>
        </h1>

        <p>
          Desenvolvedora, pesquisadora e futura cientista de dados.
          Transformando problemas reais em soluções digitais através da
          programação, inteligência artificial e inovação.
        </p>

        <div className="buttons">
          <a href="#projetos">Ver Projetos</a>

          <a href="#contato" className="secondary">
            Falar Comigo
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section className="about">
        <h2>Sobre Mim</h2>

        <p>
          Sou estudante de Ciência da Computação, apaixonada por tecnologia,
          inteligência artificial e desenvolvimento de software.
        </p>

        <p>
          Atualmente participo de projetos envolvendo IA e pesquisa acadêmica,
          além de desenvolver aplicações web, mobile e sistemas utilizando
          Java, Python, JavaScript e TypeScript.
        </p>
      </section>
      <section className="skills">
        <h2>Tecnologias</h2>

        <div className="skillsGrid">
          <div>Java</div>
          <div>Python</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>Angular</div>
          <div>.NET</div>
          <div>Git</div>
          <div>Node.js</div>
        </div>
      </section>

      <section id="projetos" className="projects">
        <h2>Principais Projetos</h2>

        <div className="cards">
          <article className="card">
            <h3>Jarvis</h3>

            <p>
              Assistente virtual com inteligência artificial capaz de realizar
              tarefas, fornecer feedbacks e interagir com o usuário.
            </p>
          </article>

          <article className="card">
            <h3>Derivoz</h3>

            <p>
              Aplicativo educacional voltado para crianças com dislexia,
              desenvolvido durante minha iniciação científica.
            </p>

            <a
              href="https://github.com/quezinhacosta/Derivoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório
            </a>
          </article>

          <article className="card">
            <h3>
              Modelo de Classificação de Dificuldade de Palavras
            </h3>

            <p>
              Algoritmo em Python capaz de classificar palavras da língua
              portuguesa de acordo com seu nível de dificuldade.
            </p>

            <a
              href="https://github.com/quezinhacosta/algoritmo-analisador-palavras"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório
            </a>
          </article>

          <article className="card">
            <h3>Projeto Padawan ON</h3>

            <p>
              Aplicação web completa com front-end, back-end e banco de dados,
              desenvolvida com foco em boas práticas e organização de equipes.
            </p>

            <a
              href="https://github.com/quezinhacosta/padawan-projeto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório
            </a>
          </article>
        </div>
      </section>

      <section className="vision">
        <h2>Meu Objetivo</h2>

        <p>
          Quero construir soluções que impactem pessoas de verdade, unindo
          desenvolvimento de software e inteligência artificial para resolver
          problemas do cotidiano. 
          Sou apaixonada por criar tecnologias
          verdadeiramente úteis.
        </p>
      </section>

      <section id="experiencias" className="experience">
        <h2>Experiências e Vivências</h2>

        <div className="timeline">

          <article className="experienceCard">
            <span className="experienceDate">
              Iniciação Científica
            </span>

            <h3>Pesquisa em Dislexia e Alfabetização</h3>

            <p>
              Desenvolvimento de aplicações educacionais voltadas para crianças
              com dislexia, com foco em apoiar o processo de alfabetização
              através da tecnologia e da inteligência artificial.
            </p>
          </article>

          <article className="experienceCard">
            <span className="experienceDate">
              Estágio
            </span>

            <h3>Centro de Inteligência Artificial da FASA</h3>

            <p>
              Atuação no desenvolvimento de soluções envolvendo inteligência
              artificial, automação, telemetria e aplicações voltadas para
              inovação tecnológica.
            </p>
          </article>

          <article className="experienceCard">
            <span className="experienceDate">
              Semana da Computação
            </span>

            <h3>Palestrante na UNICAP</h3>

            <p>
              Ministrou duas palestras sobre desenvolvimento de projetos web,
              compartilhando conhecimentos de HTML, CSS, desenvolvimento
              front-end e experiências práticas da graduação.
            </p>
          </article>

          <article className="experienceCard">
            <span className="experienceDate">
              Hackathon
            </span>

            <h3>Desenvolvimento Colaborativo</h3>

            <p>
              Participação em hackathon com foco em resolução de problemas,
              trabalho em equipe, desenvolvimento rápido de soluções e
              inovação tecnológica.
            </p>
          </article>

        </div>
      </section>

      <footer className="footer">
        <h3>Quezia Costa</h3>

        <p>
          Desenvolvedora Full Stack • Inteligência Artificial • Ciência de Dados
        </p>

        <div className="socials">
          <a
            href="https://github.com/quezinhacosta"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/seu-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:seuemail@gmail.com">
            E-mail
          </a>
        </div>

        <span>
          © 2026 Quezia Costa. Todos os direitos reservados.
        </span>
      </footer>
    </main>
  );
}