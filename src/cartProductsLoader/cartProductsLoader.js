import { getShoppingCart } from "../utilities/fakedb";

// using custom loader to work easily
const cartProductsLoader= async () =>{

    const res=await fetch('products.json');
    const products= await res.json();

    const storedCart=getShoppingCart();
    const savedProduct=[];
    for(const id in storedCart){
        const addedProduct=products.find(product=> product.id===id);
        // console.log(addedProduct)
        if (addedProduct) {
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            savedProduct.push(addedProduct);
        }

    }
    // // console.log(products)  
    // return products;
    return savedProduct;
}

export default cartProductsLoader;