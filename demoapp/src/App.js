import './App.css';
import Products from './components/Products';
import NewProduct from './components/newProduct';

function App() {

  const products = [
    {
      id: "P1",
      title: "nirma",
      amount: 100,
      date: new Date(2001,3,29),
    },
    {
      id: "P2",
      title: "Maggie",
      amount: 55,
      date: new Date(2010,5,20),
    },
    {
      id: "P3",
      title: "Tide",
      amount: 150,
      date: new Date(2004,8,12),
    },
    {
      id: "P4",
      title: "HeadPhones",
      amount: 1000,
      date: new Date(2005,12,24),
    },
  ];

  const updateProduct = (newProduct)=>{
    console.log("inside app.js");
    console.log(newProduct);
  }


  return (
    <div className='h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  flex justify-center items-center flex-row gap-20 '>
         <Products items ={products} />  
         <NewProduct newdata={updateProduct}></NewProduct>
    </div>
  );
}

export default App;
