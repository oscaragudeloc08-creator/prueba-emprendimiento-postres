import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">🍰 Dulce Encanto</span>
          <p className="footer__slogan">Postres artesanales con amor, para cada momento especial.</p>
        </div>

        <nav className="footer__links">
          <a href="#hero">Inicio</a>
          <a href="#about">Nosotros</a>
          <a href="#menu">Menú</a>
          <a href="#testimonials">Reseñas</a>
          <a href="#contact">Contacto</a>
        </nav>

        <div className="footer__socials">
          <a href="#" aria-label="Instagram" className="footer__social">📸</a>
          <a href="#" aria-label="Facebook" className="footer__social">💙</a>
          <a href="#" aria-label="WhatsApp" className="footer__social">📱</a>
          <a href="#" aria-label="TikTok" className="footer__social">🎵</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Dulce Encanto — Hecho con 🍓 y mucho amor</p>
      </div>
    </footer>
  )
}
