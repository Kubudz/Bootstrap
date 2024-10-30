import 'bootstrap/dist/css/bootstrap.min.css'
import orzel from './pobrane.jpg'

export const Zadanie1 =() =>{

  return (
    <>
     
      {/*1 Zadanie */}
      <div className="container-fluid">
      
      <header className="bg-success text-white text-center py-5">
        <h1>Witamy na stronie!</h1>
      </header>

    
      <section className="row my-5">
        <div className="col-md-6">
          <h2>Przykładowy tekst</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor
          </p>
        </div>
        <div className="col-md-6">
          <img src={orzel} width={600} height={100} alt=" obrazek" className="img-fluid" />
        </div>
      </section>

      
      <section className="row my-5">
        <div className="col-md-4 text-center">
          <h3>Kontakt 1</h3>
          <p>Email: kontakt1@example.com</p>
        </div>
        <div className="col-md-4 text-center">
          <h3>Kontakt 2</h3>
          <p>Email: kontakt2@example.com</p>
        </div>
        <div className="col-md-4 text-center">
          <h3>Kontakt 3</h3>
          <p>Email: kontakt3@example.com</p>
        </div>
      </section>
    </div>
    </>
  )
}


