import heroImg from './assets/image-loading.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>react projects</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            voluptas ullam distinctio, laboriosam placeat ad eos mollitia,
            recusandae obcaecati a voluptate, dolor ab! Mollitia, deleniti natus
            optio animi nisi debitis! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Dicta voluptas ullam distinctio, laboriosam
            placeat ad eos mollitia, recusandae obcaecati a voluptate, dolor ab!
            Mollitia, deleniti natus optio animi nisi debitis!
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
