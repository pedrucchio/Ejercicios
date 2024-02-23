const order = {
    customer:{
        address:{
            
        }
    }
};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }

const cityName = order.customer.address?.city;
if (cityName == undefined) {
    console.log('City is required');
}