import footer from '../../assets/footer-Desktop.png'
import footerMobile from '../../assets/footer-mobile.png'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
      <picture>
        <source srcSet={`${footerMobile}`} media="(max-width: 768px)" />
        <source srcSet={`${footer}`} media="(min-width: 769px)" />
        <img src={footerMobile} alt="footer kasa" />
      </picture>
    </div>
  )
}

export default Footer
