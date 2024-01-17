import heroImg from './assets/react.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>react projects for beginners</h1>
          <p>
            React is a JavaScript library that allows you to create dynamic,
            interactive web pages that can respond to user input and changes in
            data. These projects will help you learn the basics of React,
            including JSX, components, props, and state.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="image" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
