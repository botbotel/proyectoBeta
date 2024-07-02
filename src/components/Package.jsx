import ShoppingCart from "./ShoppingCart";

      {/* RECIBE PROPIEDADES DE COMPONENTE PADRE @Packages 
      PASA PROPS @handleClick A COMPONENTE @ShoppingCart PARA QUE PUEDA SER ENVIADO A @App */ }

const Package = ({ name, description, price, handleClick }) => {
  return (

        <div className="card mt-4">
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text align-items-center">{description}</p>
            <p className="price">{price}.00 €</p>

            {/* COMPONENTE @ShoppingCart */ }
            <div>
              <ShoppingCart handleClick={handleClick}/>
            </div>
          </div>
        </div>
  );
};

export default Package;
