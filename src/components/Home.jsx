import "./home.css";
import "animate.css/animate.min.css";
import calendar from "../assets/calendar.png";

const Home = () => {
  return (
    <>
    {/* INICIO DE CUERPO */ }

              {/* SECCION 1 */ }
      <div className="headerDown d-flex justify-content-center flex-column align-items-center">
        <h1>Lorem Ipsum</h1>
        <p className="w-25 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem a
          temporibus assumenda, aspernatur dolore, velit iste et veritatis
          facilis possimus iure ad veniam sed. Omnis consectetur a amet
          architecto dignissimos.
        </p>
      </div>

          {/* SECCIÓN 2 */ }
      <div className="doc-fact d-flex justify-content-around align-items-center">
        <div className="d-flex flex-column w-25">
          <h1>lorem</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda debitis consequatur provident impedit ab, quia laboriosam alias blanditiis iure, fuga exercitationem.
          Repellat, asperiores vitae enim natus iste harum tenetur!</p>
        </div>
        <img src={calendar} alt="" />
      </div>


              {/* SECCIÓN 3 */ }
      <div className="circle">
        <div className="circle-1 animate__animated animate__fadeInDown animate__delay-1s">
          <h2>100M</h2>
          <p>Lorem Ipsum</p>
        </div>
        <div className="circle-1 animate__animated animate__fadeInDown animate__delay-1s">
          <h2>+1M</h2>
          <p>Lorem Ipsum</p>
        </div>
        <div className="circle-1 animate__animated animate__fadeInDown animate__delay-1s">
          <h2>100%</h2>
          <p>Lorem Ipsum</p>
        </div>
      </div>


      {/* SECCIÓN 4 */ }
      <div className="prices d-flex justify-content-around">
        <div className="priceUnique animate__animated animate__fadeIn">
          <h2>Lorem Ipsum</h2>
          <p>5.00€</p>
        </div>
        <div className="priceUnique animate__animated animate__fadeIn animate__delay-1s">
          <h2>Lorem Ipsum</h2>
          <p>15.00€</p>
        </div>
        <div className="priceUnique  animate__animated animate__fadeIn animate__delay-2s">
          <h2>Lorem Ipsum</h2>
          <p>25.00€</p>
        </div>
      </div>

    {/* FIN DE CUERPO */ }
    </>
  );
};

export default Home;
