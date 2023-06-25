import { createStore } from 'vuex'

export default createStore({
  state: { 
    bases:[
      { 
        id: 1, 
        name: 'Riz brun' 
      },
      { 
        id: 2, 
        name: 'Quinoa' 
      },
      { 
        id: 3, 
        name: 'Pâtes de blé entier' 
      },
    ],
    bleuIngredients : [
      { id: 1, name: 'Fromage bleu', category: 'Bleu' },
      { id: 2, name: 'Noix de pécan caramélisées', category: 'Bleu' },
      { id: 3, name: 'Raisins secs', category: 'Bleu' },
    ],
    vertIngredients : [
      { id: 1, name: 'Avocat', category: 'Vert' },
      { id: 2, name: 'Épinards frais', category: 'Vert' },
      { id: 3, name: 'Brocoli', category: 'Vert' },
    ],
    drinks : [
      { id: 1, name: 'Eau' },
      { id: 2, name: 'Soda' },
      { id: 3, name: 'Jus de fruits' },
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
