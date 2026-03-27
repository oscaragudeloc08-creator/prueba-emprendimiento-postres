import './About.css'

const features = [
  { icon: '🌿', title: 'Ingredientes naturales', desc: 'Seleccionamos solo lo mejor: frutas frescas, chocolates premium y sin conservadores artificiales.' },
  { icon: '🤍', title: 'Hecho con amor', desc: 'Cada postre es elaborado a mano con dedicación y cuidado, como si fuera para nuestra propia familia.' },
  { icon: '🎁', title: 'Pedidos personalizados', desc: 'Hacemos realidad tus ideas para cumpleaños, bodas, baby showers y toda ocasión especial.' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section about">
        <div className="about__text">
          <p className="section-tag">Sobre nosotros</p>
          <h2 className="section-title">Una historia de sabor y pasión</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Nació de un sueño sencillo: compartir la alegría que un buen postre puede traer.
            Somos un pequeño emprendimiento artesanal donde cada receta es un pedacito de cariño.
          </p>
          <p className="about__text-extra">
            Trabajamos desde nuestra cocina con procesos artesanales que garantizan
            frescura y calidad en cada mordida. Sin fábricas, sin prisa — solo amor y buen sabor.
          </p>
          <a href="#contact" className="btn btn-primary about__cta">Hacer un pedido</a>
        </div>

        <div className="about__cards">
          {features.map(f => (
            <div key={f.title} className="about__card">
              <div className="about__card-icon">{f.icon}</div>
              <h3 className="about__card-title">{f.title}</h3>
              <p className="about__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
