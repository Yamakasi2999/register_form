<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Создание клиента</span>

<!----------------------------------------------------------------------------------->
<!--БЛОК КЛИЕНТ-->
      <div class="input-field"> <!-- ФАМИЛИЯ-->
        <input
            id="surname"
            type="text"
            class="validate"
            pattern="[А-Яа-яЁёA-Za-z]{1,10}"
            title="Можно использовать только кирилицу и латиницу"
            v-model="surname"
            :class="{invalid: ($v.surname.$dirty && $v.surname.required) || ($v.surname.$dirty && !$v.surname.minLength) }"
        >
        <label for="surname">Фамилия</label>
        <small
        class="helper-text invalid"
        v-if="$v.surname.$dirty && !$v.surname.required"
       >Поле не должно быть пустым</small>
        <small
        class="helper-text invalid"
        v-else-if="$v.surname.$dirty && !$v.surname.minLength"
        >Введите корретную Фамилию</small>
      </div>

      <div class="input-field"> <!-- ИМЯ-->
        <input
            id="name"
            type="text"
            class="validate"
            pattern="[А-Яа-яЁёA-Za-z]{1,10}"
            title="Можно использовать только кирилицу и латиницу"
            v-model="name"
            :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength) }"
        >
        <label for="name">Имя</label>
        <small
        class="helper-text invalid"
        v-if="$v.name.$dirty && !$v.name.required"
       >Поле не должно быть пустым</small>
        <small
        class="helper-text invalid"
        v-else-if="$v.name.$dirty && !$v.name.minLength"
        >Введите корретное Имя</small>
      </div>

      <div class="input-field"> <!-- ОТЧЕСТВО-->
        <input
            id="secondname"
            type="text"
            class="validate"
            pattern="[А-Яа-яЁёA-Za-z]{1,10}"
            title="Можно использовать только кирилицу и латиницу"
        >
        <label for="secondname">Отчество</label>
        <small class="helper-text">*Не обязательно для заполнения</small>
      </div>
      <br>

      <div class="input-field"> <!--ДАТА РОЖДЕНИЯ-->
        <input
            id="date_of_birth"
            type="date"
            class="validate"
            v-model="date_of_birth"
            :class="{invalid: ($v.date_of_birth.$dirty && !$v.date_of_birth.required)}"
        >
        <label for="date_of_birth">Дата рождения</label>
        <small
        class="helper-text invalid"
        v-if="$v.date_of_birth.$dirty && !$v.date_of_birth.required"
        >Поле не должно быть пустым</small>
      </div>

      <div class="input-field"> <!--MOBILE-->
        <input
            id="mobile"
            type="tel" 
            name="tel"
            class="validate"
            pattern="[+]7[0-9]{10}"
            title="Можно использовать только 0-9, заполнение начинается с +7"
            maxlength="12"
            v-model="mobile"
            :class="{invalid: ($v.mobile.$dirty && !$v.mobile.required)}"
        >
          <label for="mobile">Номер телефона</label>
          <small class="helper-text">*Формат данных: +7XXXXXXXXXX</small>
          <small
            class="helper-text invalid"
            v-if="$v.mobile.$dirty && !$v.mobile.required"
            >Поле не должно быть пустым</small>
      </div>
      <br>

      <div class="input-field"> <!--EMAIL-->
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
        >
        <label for="email">Email</label>
        <small 
        class="helper-text invalid"
        v-if="$v.email.$dirty && !$v.email.required"
        >Поле не должно быть пустым</small>
         <small 
        class="helper-text invalid"
        v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корректный e-mail</small>
      </div>


      <div class="input-field">   <!--УКАЗАТЬ ПОЛ-->
         <multiselect v-model="value1" :options="options1" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a value"></multiselect>
          <small class="helper-text">*Не обязательно для заполнения</small>
      </div>

     <div class="input-field">  <!-- УКАЗАТЬ ГРУППУ КЛИЕНТОВ-->
         <multiselect 
         v-model="value2"
         :options="options2" 
         :searchable="false" 
         :multiple="true" 
         :close-on-select="true" 
         :show-labels="false"
         placeholder='Группа клиентов' 
         @input='$v.value2.$touch()'
         :class="{invalid: invalid}"
         ></multiselect>
          <small 
          class="helper-text invalid"
          v-if="invalid"
          >*Необходимо выбрать группу клиентов!</small>
      </div>


      <div class="input-field">   <!--ЛЕЧАЩИЙ ВРАЧ-->
         <multiselect v-model="value3" 
         :options="options3" 
         :searchable="false" 
         :multiple="false" 
         :close-on-select="true" 
         :show-labels="true" 
         placeholder="Pick a value"
         ></multiselect>
         <small class="helper-text">*Нажмите, чтобы выбрать лечащего врача</small>
      </div>


      <div class="input-field"> <!--ЧЕКБОКС-->
        <p>
          <label>
          <input type="checkbox" />
          <span>Не отправлять смс</span>
         </label>
        </p>
      </div>

<!----------------------------------------------------------------------------------->
<!--БЛОК АДРЕС-->

    <span class="card-title">Адрес</span> 
        
      <div class="input-field"> <!--ИНДЕКС-->
        <input
            id="index"
            type="text"
            class="validate"
        >
        <label for="index">Индекс</label> 
        <small class="helper-text">*Не обязательно для заполнения</small>
      </div>

      <div class="input-field"> <!--СТРАНА-->
        <input
            id="contry"
            type="text"
            class="validate"
        >
        <label for="contry">Страна</label>
        <small class="helper-text">*Не обязательно для заполнения</small>
      </div>

      <div class="input-field"><!--ОБЛАСТЬ-->
        <input
            id="obl"
            type="text"
            class="validate"
        >
        <label for="obl">Область</label>
        <small class="helper-text">*Не обязательно для заполнения</small>

      <div class="input-field"><!--ГОРОД-->
        <input
            id="city"
            type="text"
            class="validate"
            pattern="[А-Яа-яЁёA-Za-z]{1,20}"
            title="Можно использовать только кирилицу и латиницу"
            v-model="city"
            :class="{invalid: ($v.city.$dirty && !$v.city.required) || ($v.city.$dirty && !$v.city.minLength) }"
        >
        <label for="city">Город</label>
        <small
        class="helper-text invalid"
        v-if="$v.city.$dirty && !$v.city.required"
       >Поле не должно быть пустым</small>
        <small
        class="helper-text invalid"
        v-else-if="$v.city.$dirty && !$v.city.minLength"
        >Введите корректный город</small>
        

      </div>  

      <div class="input-field"> <!--УЛИЦА-->
        <input
            id="street"
            type="text"
            class="validate"
        >
        <label for="street">Улица</label>
        <small class="helper-text">*Не обязательно для заполнения</small>
      </div>

      <div class="input-field"> <!--ДОМ-->
        <input
            id="house"
            type="text"
            class="validate"
        >
        <label for="house">Дом</label>
        <small class="helper-text">*Не обязательно для заполнения</small>
      </div>
       <br>
<!----------------------------------------------------------------------------------->
<!--БЛОК ДОКУМЕНТЫ-->
        <span class="card-title">Документ личности</span>
        
        
        <div class="input-field"> <!--ВЫБОР ДОКУМЕНТА-->
          <multiselect 
          v-model="value" 
          :options="options" 
          :searchable="false" 
          :close-on-select="true" 
          :show-labels="false" 
          placeholder="Тип паспорта"
          @input='$v.value.$touch()'
          :class="{invalid: pas_invalid}"
         ></multiselect>
          <small 
          class="helper-text invalid"
          v-if="pas_invalid"
          >*Необходимо выбрать тип документа</small>
        </div>
        <br>

        <div class="input-field"> <!--СЕРИЯ-->
          <input
              id="serias"
              type="text"
              class="validate"
          >
          <label for="serias">Серия</label> 
          <small class="helper-text">*Не обязательно для заполнения</small>
        </div>

        <div class="input-field"> <!--НОМЕР-->
          <input
              id="number"
              type="text"
              class="validate"
          >
          <label for="number">Номер</label>
          <small class="helper-text">*Не обязательно для заполнения</small>
        </div>

        <div class="input-field"> <!--КЕМ ВЫДАН-->
          <input
              id="issued"
              type="text"
              class="validate"
          >
          <label for="issued">Кем выдан</label>
          <small class="helper-text">*Не обязательно для заполнения</small>
        </div>

        <div class="input-field"> <!--ДАТА ВЫДАЧИ -->
          <input
              id="date_of_issued"
              type="date"
              class="validate"
              v-model="date_of_issued"
              :class="{invalid: ($v.date_of_issued.$dirty && !$v.date_of_issued.required)}"
          >
          <label for="date_of_issued">Дата выдачи</label>
          <small
          class="helper-text invalid"
          v-if="$v.date_of_issued.$dirty && !$v.date_of_issued.required"
          >Поле не должно быть пустым</small>
          </div>
      </div>
      </div>

    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Создать клиента
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </form> 
</template>

<script>
import Multiselect from 'vue-multiselect'

import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  //name: 'Home',
  validations: {
    email:          {email, required},
    surname:        {required, minLength: minLength(1)},
    name:           {required, minLength: minLength(1)},
    date_of_birth:  {required},
    date_of_issued: {required},
    mobile:         {required},
    city:           {required, minLength: minLength(1)},
    value:{required},
    value2:{required},
    
  },
  computed:{
   invalid() {return !this.value2.length},
   pas_invalid() {return !this.value.length}

  },
  methods: {
    submitHandler () {
      console.log(this.$v.options2)
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        surname: this.surname,
        name: this.name,
        date_of_birth: this.date_of_birth,
        date_of_issued: this.date_of_issued,
        mobile: this.mobile,
        city: this.city,
        value: this.value,
        value2: this.value2,
      }

      console.log(formData)
      alert("Форма создана успешно")
      return
      //this.$router.push('/yes')
    }
  },

  components: { Multiselect },
  data: () => ( {
        value:  [],
        value1: "Выберите пол",
        value2 : [],
        value3: "Лечащий врач:",
        options: ['Паспорт', 'Свидетельство о рождении', 'Водительское удостоверение'],
        options1: ['Муж','Жен'],
        options2: ['VIP','Проблемные','ОМС'],
        options3: ['Иванов','Захаров','Чернышева'],
        email:'',
        surname:'',
        name:'',
        date_of_birth:'',
        mobile:'',
        city:'',
        date_of_issued:'',
      
    }),
}

</script>

