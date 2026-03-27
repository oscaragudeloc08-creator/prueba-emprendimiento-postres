import './Testimonials.css'

const reviews = [
  { name: 'Valentina R.', avatar: '👩', rating: 5, text: 'La torta de fresas para el cumpleaños de mi hija fue espectacular. Todos preguntaron de dónde era. ¡Volvería a pedir mil veces!' },
  { name: 'Camilo M.', avatar: '👨', rating: 5, text: 'Pedí los macarons para un evento corporativo y quedaron perfectos. La presentación fue impecable y el sabor increíble.' },
  { name: 'Sofía P.', avatar: '👩‍🦱', rating: 5, text: 'El cheesecake de limón es lo mejor que he probado. Fresco, cremoso y con una base perfecta. Mi postre favorito ahora.' },
  { name: 'Andrés G.', avatar: '🧑', rating: 5, text: 'Atención personalizada de 10. Me ayudaron a elegir el postre ideal para la propuesta de matrimonio. Fue mágico.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section testimonials">
        <div className="testimonials__header">
          <p className="section-tag">Reseñas</p>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <div className="divider" />
        </div>

        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <div key={i} className="testimonial__card">
              <div className="testimonial__stars">
                {'★'.repeat(r.rating)}
              </div>
              <p className="testimonial__text">"{r.text}"</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{r.avatar}</div>
                <span className="testimonial__name">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
