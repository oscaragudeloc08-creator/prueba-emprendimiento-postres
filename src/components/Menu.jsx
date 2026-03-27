import { useState } from 'react'
import './Menu.css'

const categories = ['Todos', 'Tortas', 'Cupcakes', 'Cheesecakes', 'Galletas']

const products = [
  { id: 1, name: 'Torta de Fresas', emoji: '🍓', category: 'Tortas', price: '$28.000', desc: 'Esponjosa, rellena de crema chantilly y fresas frescas de temporada.', tag: 'Favorita', tagColor: 'pink' },
  { id: 2, name: 'Torta de Chocolate', emoji: '🍫', category: 'Tortas', price: '$26.000', desc: 'Triple capa de chocolate belga con ganache suave y cobertura de cacao.', tag: 'Clásico', tagColor: 'lavender' },
  { id: 3, name: 'Cupcake Vainilla', emoji: '🧁', category: 'Cupcakes', price: '$6.500', desc: 'Suave bizcocho de vainilla con frosting de buttercream y confeti.', tag: 'Nuevo', tagColor: 'mint' },
  { id: 4, name: 'Cupcake Red Velvet', emoji: '❤️', category: 'Cupcakes', price: '$7.000', desc: 'Húmedo red velvet con cream cheese frosting y decoración especial.', tag: '', tagColor: '' },
  { id: 5, name: 'Cheesecake Limón', emoji: '🍋', category: 'Cheesecakes', price: '$22.000', desc: 'Cremoso cheesecake con toque de limón y base de galleta crujiente.', tag: 'Top', tagColor: 'peach' },
  { id: 6, name: 'Cheesecake Frutos Rojos', emoji: '🫐', category: 'Cheesecakes', price: '$24.000', desc: 'Cheesecake sin horno con coulis de frutos rojos y flores comestibles.', tag: '', tagColor: '' },
  { id: 7, name: 'Galletas de Mantequilla', emoji: '🍪', category: 'Galletas', price: '$3.500', desc: 'Galletas decoradas a mano, perfectas para regalar o disfrutar.', tag: '', tagColor: '' },
  { id: 8, name: 'Macarons', emoji: '🎀', category: 'Galletas', price: '$4.500', desc: 'Delicados macarons franceses en sabores de temporada.', tag: 'Premium', tagColor: 'lavender' },
]

const tagColors = {
  pink: { bg: 'var(--pink-light)', color: 'var(--pink-dark)' },
  lavender: { bg: 'var(--lavender)', color: '#7a5fc7' },
  mint: { bg: 'var(--mint)', color: '#2a8a6c' },
  peach: { bg: 'var(--peach)', color: '#c07040' },
}

export default function Menu() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? products : products.filter(p => p.category === active)

  return (
    <section id="menu" style={{ background: 'var(--pink-light)', padding: '0' }}>
      <div className="section menu">
        <div className="menu__header">
          <p className="section-tag">Nuestro menú</p>
          <h2 className="section-title">Postres que enamoran</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Elaborados con recetas únicas y mucho cariño. ¡Hay algo para cada antojo!
          </p>
        </div>

        <div className="menu__filters">
          {categories.map(c => (
            <button
              key={c}
              className={`menu__filter ${active === c ? 'menu__filter--active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {filtered.map(p => (
            <div key={p.id} className="menu__card">
              <div className="menu__card-img">
                <span className="menu__card-emoji">{p.emoji}</span>
                {p.tag && (
                  <span
                    className="menu__card-tag"
                    style={{ background: tagColors[p.tagColor]?.bg, color: tagColors[p.tagColor]?.color }}
                  >
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="menu__card-body">
                <h3 className="menu__card-name">{p.name}</h3>
                <p className="menu__card-desc">{p.desc}</p>
                <div className="menu__card-footer">
                  <span className="menu__card-price">{p.price}</span>
                  <a href="#contact" className="menu__card-btn">Pedir</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
