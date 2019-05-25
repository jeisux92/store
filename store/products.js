export const state = () => ({
  counter: 0,
  subLevel: 0,
  filter: {
    price: [0, 100000],
    quantity: 0,
    available: true
  },
  cart: [],
  criteria: {}
})

export const mutations = {
  initialiseStore(state) {
    // Check if the ID exists
    if (localStorage.getItem('products')) {
      state.cart = JSON.parse(localStorage.getItem('products'));
    }
  },
  clearCart(state) {
    state.cart = [];    
    localStorage.removeItem('products')
  },
  increment(state) {
    state.counter++
  },
  setSubLevel(state, id) {
    state.subLevel = id;
  },
  setFilter(state, filter) {
    state.filter = { ...state.filter, ...filter };
  },
  addProduct(state, product) {
    const productInCar = state.cart.find(p => p.id == product.id)
    if (productInCar) {
      productInCar.count++;
    }
    else {
      product.count = 1;
      state.cart.push(product);
    }
  },
  setCriteriaFilter(state, criteria) {
    state.criteria = criteria;
  },
  incrementProduct(state, id) {
    const productInCar = state.cart.find(p => p.id === id);
    productInCar.count++;

  },
  decrementProduct(state, id) {
    const productInCar = state.cart.find(p => p.id === id);
    if (productInCar.count === 1) {
      const productIndex = state.cart.findIndex(p => p.id == id);
      state.cart.splice(productIndex, 1);
    }
    else {
      productInCar.count--;
    }
  }
}
