import '../components/packages.css'
import Package from './Package';


      {/* ARRAY DE PAQUETES */ }
const bundles = [
    {
        id:1,
        name: 'Basic bundle',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem a temporibus assumenda, aspernatur dolore, velit iste et veritatisfacilis possimus iure ad veniam sed. Omnis consectetur a ametarchitecto dignissimos.',
        price: 5.00 
    },
    {
        id:2,
        name: 'Normal bundle',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem a temporibus assumenda, aspernatur dolore, velit iste et veritatisfacilis possimus iure ad veniam sed. Omnis consectetur a ametarchitecto dignissimos.',
        price: 15.00 
    },
    {
        id:3,
        name: 'Premium bundle',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem a temporibus assumenda, aspernatur dolore, velit iste et veritatisfacilis possimus iure ad veniam sed. Omnis consectetur a ametarchitecto dignissimos.',
        price: 25.00 
    },
]


const Packages = ({addToCart}) => {

        {/* FUNCIÓN QUE PASA COMO PROP A @Package PARA SELECCIONAR CADA PAQUETE Y AÑADIR A @AddToCart  */ }
  const handleClick = (bundle) => {
    addToCart(bundle);
  };

        {/* @Packages PASA PROPIEDADES DE @bundles A @Package PARA QUE SEA REPRESENTADO*/ }
  return (
    <div className="cards mt-md-5 p-4">
      <div className="row">
        {bundles.map(bundle => {
                return (
                <div key={bundles.id} className="col-sm-6 mb-3 mb-sm-0">
                    <Package 
                            name={bundle.name}
                            description={bundle.description}
                            price={bundle.price}
                            handleClick={()=> handleClick(bundle)}
                    />        
                </div>
                )
            })}
      </div>
    </div>
  );
};

export default Packages;
