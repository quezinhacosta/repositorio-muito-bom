export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <span className="tag">CIÊNCIA DA COMPUTAÇÃO • IA • DESENVOLVIMENTO</span>

        <h1>
          Olá, eu sou <span>Quézia Costa</span>
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

      <section className="about">
        <h2>Sobre Mim</h2>

        <p>
          Sou estudante de Ciência da Computação, apaixonada por tecnologia,
          inteligência artificial e desenvolvimento de software.
        </p>

        <p>
          Atualmente participo de projetos envolvendo IA e pesquisa acadêmica,
          além de desenvolver aplicações web, mobile e sistemas utilizando Java,
          Python, JavaScript e TypeScript.
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
        <h2>Projetos</h2>

        <div className="cards">
          <article className="card">
            <h3>Pig Me Up</h3>
            <p>
              Aplicação de organização financeira pessoal focada em simplicidade
              e planejamento financeiro.
            </p>
          </article>

          <article className="card">
            <h3>Pesquisa em Dislexia</h3>
            <p>
              Desenvolvimento de soluções tecnológicas voltadas para pessoas
              com dislexia.
            </p>
          </article>

          <article className="card">
            <h3>Labirinto da Autoestima</h3>
            <p>
              Jogo em Java com foco em autoconfiança e tomada de decisões.
            </p>
          </article>

          <article className="card">
            <h3>Sites e Aplicações Web</h3>
            <p>
              Desenvolvimento de interfaces modernas utilizando tecnologias
              front-end atuais.
            </p>
          </article>
        </div>
      </section>

      <section className="vision">
        <h2>Meu Objetivo</h2>

        <p>
          Quero construir soluções que impactem pessoas de verdade, unindo
          desenvolvimento de software, inteligência artificial e ciência de
          dados para resolver problemas reais.
        </p>
      </section>

      <section id="contato" className="contact">
        <h2>Vamos Conversar?</h2>

        <form>
          <input type="text" placeholder="Seu nome" />

          <input type="email" placeholder="Seu e-mail" />

          <textarea
            rows="6"
            placeholder="Escreva sua mensagem..."
          ></textarea>

          <button type="submit">
            Enviar Mensagem
          </button>
        </form>
      </section>
    </main>
  );
}