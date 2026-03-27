import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-blob hero__bg-blob--1" />
      <div className="hero__bg-blob hero__bg-blob--2" />
      <div className="hero__bg-blob hero__bg-blob--3" />

      <div className="hero__content">
        <p className="hero__tag">✨ Postres Artesanales</p>
        <h1 className="hero__title">
          Endulza cada<br />
          <em>momento especial</em>
        </h1>
        <p className="hero__desc">
          Creamos postres con amor, ingredientes frescos y una pizca de magia.
          Cada bocado es una experiencia que merece ser recordada.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn btn-primary">Ver menú</a>
          <a href="#about" className="btn btn-outline">Conocernos</a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">200+</span>
            <span className="hero__stat-label">Clientes felices</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">30+</span>
            <span className="hero__stat-label">Sabores únicos</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">100%</span>
            <span className="hero__stat-label">Ingredientes frescos</span>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__plate">
          <div className="hero__emoji-big">🎂</div>
          <div className="hero__floating hero__floating--1">🍓</div>
          <div className="hero__floating hero__floating--2">🌸</div>
          <div className="hero__floating hero__floating--3">🍰</div>
          <div className="hero__floating hero__floating--4">🧁</div>
          <div className="hero__floating hero__floating--5">✨</div>
        </div>
      </div>
    </section>
  )
}
