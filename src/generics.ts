// Generics in typescript

function getSearchProducts<T>(products: T[]): T {
  // Do some database operations

  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // Do some database operations


    const myIndex = 4;
    return products[myIndex]

};

interface User{
    type:string,
}


interface Admin{
    name:string,
    account:number,
}

// In operators just check wether the value is present in accordance to the operators in the interface type
// It is used by checking the value by putting in in the arguments

const checkAdminAccount = (admin:User | Admin) =>{
    if("account" in admin){
        return admin.account + 1
    }
}

