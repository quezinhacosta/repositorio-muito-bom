export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <span className="tag">CIÊNCIA DA COMPUTAÇÃO • IA • DESENVOLVIMENTO</span>

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
        <h2>Principais projetos</h2>

        <div className="cards">
          <article className="card">
            <h3>Jarvis</h3>
            <p>
              Assistente virtual com inteligência artificial, capaz de realizar
              tarefas, dar feedbacks e interagir com o usuário. 
            </p>
          </article>

          <article className="card">
            <h3>Derivoz</h3>
            <p>
              plicativo educacional voltado para crianças com dislexia, desenvolvido durante minha Iniciação Científica na Universidade Católica de Pernambuco
               <a href="https://github.com/quezinhacosta/Derivoz" target="_blank" rel="noopener noreferrer">
                  link do repositorio
                </a>
            </p>
          </article>

          <article className="card">
            <h3>Modelo de Classificação de Dificuldade de Palavras</h3>
            <p>
              Algoritmo em Python capaz de classificar palavras da língua portuguesa de acordo com seu nível de dificuldade, com base em métricas linguísticas.
              <a href="https://github.com/quezinhacosta/algoritmo-analisador-palavras" target="_blank" rel="noopener noreferrer">
                  link do repositorio
                </a>
            </p>
          </article>

          <article className="card">
            <h3>Projeto Padawan ON</h3>
            <p>
                O projeto Padawan ON é uma aplicação web que possui interface front-end, estrutura para back-end e banco de dados. Basicamente, um sistema completo.
                Ele foi criado com foco em aprendizado, organização de código e boas práticas de desenvolvimento. Além disso, tem como objetivo simplificar os participantes do projeto, tornando todo o processo de adesão e organização dos integrantes automizado.
                <a href="https://github.com/quezinhacosta/padawan-projeto" target="_blank" rel="noopener noreferrer">
                  link do repositorio
                </a>
            </p>
          </article>
        </div>
      </section>

      <section className="vision">
        <h2>Meu Objetivo</h2>

        <p>
          Quero construir soluções que impactem pessoas de verdade, unindo
          desenvolvimento e inteligência artificia para problemáticas do cotidiano. Sou apaixonada por desenvolver soluções verdadeiramente uteis. 
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