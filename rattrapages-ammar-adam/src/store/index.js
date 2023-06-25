import { createStore } from 'vuex'

export default createStore({
  state: { 
    bases:[
      { name: 'Riz brun' },
      { name: 'Quinoa'},
      { name: 'Pâtes de blé entier' },
    ],
    bleuIngredients : [
      { name: 'Fromage bleu', category: 'Bleu' },
      { name: 'Noix de pécan caramélisées', category: 'Bleu' },
      { name: 'Raisins secs', category: 'Bleu' },
    ],
    vertIngredients : [
      { name: 'Avocat', category: 'Vert' },
      { name: 'Épinards frais', category: 'Vert' },
      { name: 'Brocoli', category: 'Vert' },
    ],
    drinks : [
      {  name: 'Eau' },
      { name: 'Soda' },
      { name: 'Jus de fruits' },
    ],
  stock:'',
  found:''
},
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
