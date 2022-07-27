// constructor=>pascal case means fiirst leter in capital case

const product={
    itemName:'flower',
    price:50,
    discount:20,
    itemCode:'F40'
}
// factory function
function createProduct(name,price,discount,itemCode){
    return{
        itemName:name,
        price:price,
        discount:discount,
        itemCode:itemCode
    }
}
const football=createProduct('football',400,10,'F30')

// constructor
function Product(name,price,discount,itemCode){
    this.itemName=name,
    this.price=price,
    this.discount=discount,
    this.itemCode=itemCode
    this.discountValue=function(){
        return price*discount/100
    }
}

const mobile=new  Product('one plus Nord',30000,5,'op20')
 console.log(mobile);




