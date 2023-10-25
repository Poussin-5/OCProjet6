import './banner.css'

function Banner({ src, alt, text, classDiv, classText, classOpacity }) {
  return (
    <div className={classDiv}>
      <div className={classOpacity}></div>
      <img src={src} alt={alt} />
      <p className={classText}>{text}</p>
    </div>
  )
}

export default Banner
