export const Default = {
  default : "font-poppins font-medium py-2 px-4 filter shadow-3xl capitalize"
}

export const ButtonType = {
  // untuk button login di navbar
  navLogin : "bg-3F70F9 text-white hover:border-blue-500 hover:bg-blue-400 w-full lg:w-24 rounded-full", 
  // untuk button signup di navbar
  navSignUpBlue : "bg-transparent text-3F70F9 border border-3F70F9 hover:bg-blue-100 w-full lg:w-24 rounded-full",
  // untuk button sign up di navbar Home 
  navSignUpWhite : "bg-transparent text-white border border-white hover:bg-white hover:text-3F70F9 w-full md:w-24 rounded-full", 
  // untuk button di page login, signup, contact
  loginSignUpSend : "bg-3F70F9 text-white hover:border-blue-500 hover:bg-blue-400 w-full rounded", 
  // untuk button buy di card Home
  cardBuy : "bg-3F70F9 text-white hover:border-blue-500 hover:bg-blue-400 w-full rounded-full",
  // untuk button checkout detail product
  detailCheckout : "bg-3F70F9 text-white hover:border-blue-500 hover:bg-blue-400 w-full lg:w-1/2 rounded-full py-2 capitalize",
  // untuk button checkout page cart 
  cartCheckout : "bg-3F70F9 text-white hover:border-blue-500 hover:bg-blue-400 w-1/2 lg:w-32 rounded-full", 
  // untuk button remove & remove all page cart
  cartRemove : "bg-transparent text-3F70F9 border border-3F70F9 hover:bg-blue-100 w-1/2 lg:w-32 rounded-full", 
}

// contoh cara pakai :
{/* 
<Button type="cartRemove" def="default">remove</Button> 
<Button type="cartRemove" def="default">remove all</Button> 
*/}
  