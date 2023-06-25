<template>
  <div>
    <h2>Personnaliser votre salade</h2>

    <form ref="form" @submit.prevent="submitForm">
      <!-- Partie 1 : Choix de la base de salade -->
      <div>
        <label for="base">Base de salade :</label>
        <select id="base" v-model="selectedBase" required>
          <option value="">Sélectionnez une base</option>
          <option v-for="base in bases" :value="base.id" :key="base.id">{{ base.name }}</option>
        </select>
      </div>

    <!-- Partie 2 : Ingrédients (choisissez au moins 4) -->
    <div>
  <label for="ingredients">Ingrédients (choisissez au moins 4) :</label>
  <select id="ingredients" v-model="selectedIngredients" name="ingredients" multiple required>
    <option v-for="ingredient in selectedIngredientsList" :value="ingredient.id" :key="ingredient.id">
      {{ ingredient.name }}
    </option>
  </select>
</div>

      <!-- Partie 3 : Choix de la boisson -->
      <div>
        <label for="drink">Boisson :</label>
        <select id="drink" v-model="selectedDrink" required>
          <option value="">Sélectionnez une boisson</option>
          <option v-for="drink in drinks" :value="drink.id" :key="drink.id">{{ drink.name }}</option>
        </select>
      </div>

      <!-- Partie 4 : Heure de livraison -->
      <div>
        <label for="deliveryTime">Heure de livraison :</label>
        <select id="deliveryTime" v-model="selectedDeliveryTime" name="deliveryTime" required>
          <option value="" disabled>Sélectionnez une heure</option>
          <option v-for="time in deliveryTimes" :value="time" :key="time">{{ time }}</option>
        </select>
      </div>

      <!-- Partie 5 : Informations personnelles -->
      <div>
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="name" name="name" required>

        <label for="firstName">Prénom :</label>
        <input type="text" id="firstName" v-model="firstName" name="firstName" required>

        <label for="address">Adresse :</label>
        <input type="text" id="address" v-model="address" name="address" required>

        <label for="tel">Téléphone :</label>
        <input type="tel" id="tel" v-model="tel" name="tel" required>
      </div>


      <!-- Bouton Envoyer -->
      <button type="submit" :disabled="!isFormValid">Envoyer</button>    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';



export default {

  watch: {
    selectedBase() {
      this.validateForm();
    },
    selectedIngredients() {
      this.validateForm();
    },
    selectedDrink() {
      this.validateForm();
    },
    selectedDeliveryTime() {
      this.validateForm();
    },
    name() {
      this.validateForm();
    },
    firstName() {
      this.validateForm();
    },
    address() {
      this.validateForm();
    },
    tel() {
      this.validateForm();
    }
  },

  computed: {
  ...mapState(['bases', 'bleuIngredients', 'vertIngredients', 'drinks']),
    selectedIngredientsList() {
    return this.selectedCategory === 'Bleu' ? this.bleuIngredients : this.vertIngredients;
  },
  deliveryTimes() {
    return [
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00'
    ];
  },
},
  methods: {
    // ... Le reste du code ...

    validateForm() {
      this.$nextTick(() => {
        this.$refs.form.reportValidity();
      });
    }
  }
};
</script>
