import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', postre: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{ background: 'linear-gradient(135deg, var(--lavender) 0%, var(--pink-light) 100%)' }}>
      <div className="section contact">
        <div className="contact__info">
          <p className="section-tag">Contáctanos</p>
          <h2 className="section-title">¿Lista para pedir tu postre soñado?</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Escríbenos, cuéntanos la ocasión y lo que tienes en mente.
            Con gusto te ayudamos a elegir o crear algo especial.
          </p>

          <div className="contact__channels">
            <a href="https://wa.me/573000000000" className="contact__channel" target="_blank" rel="noreferrer">
              <div className="contact__channel-icon">📱</div>
              <div>
                <p className="contact__channel-label">WhatsApp</p>
                <p className="contact__channel-value">+57 300 000 0000</p>
              </div>
            </a>
            <div className="contact__channel">
              <div className="contact__channel-icon">📍</div>
              <div>
                <p className="contact__channel-label">Ubicación</p>
                <p className="contact__channel-value">Tu ciudad, Colombia</p>
              </div>
            </div>
            <div className="contact__channel">
              <div className="contact__channel-icon">🕐</div>
              <div>
                <p className="contact__channel-label">Horario pedidos</p>
                <p className="contact__channel-value">Lun – Sáb, 8am – 6pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">🎉</div>
              <h3>¡Pedido recibido!</h3>
              <p>Te contactaremos pronto para confirmar los detalles. ¡Gracias por confiar en nosotros!</p>
              <button className="btn btn-primary" onClick={() => setSent(false)}>Hacer otro pedido</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Solicitar pedido</h3>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" placeholder="Tu nombre" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">WhatsApp / Teléfono</label>
                <input id="phone" name="phone" type="tel" placeholder="+57 300 000 0000" value={form.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="postre">¿Qué postre deseas?</label>
                <input id="postre" name="postre" type="text" placeholder="Torta de fresas, cupcakes..." value={form.postre} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Detalles adicionales</label>
                <textarea id="message" name="message" rows="4" placeholder="Fecha de entrega, cantidad, decoración, mensaje..." value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary contact__submit">Enviar solicitud 🍰</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
