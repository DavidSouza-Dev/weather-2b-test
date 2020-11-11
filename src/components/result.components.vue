<template>
  <div data-cy="find-test" class="weather-2b">
    <div data-cy="click-test" class="weather-2b__return" @click="backPage()">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="20px" height="20px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
      <g>
        <g id="reply">
          <path d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z"
            />
        </g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      </svg>

    </div>
    <h1 class="weather-2b__city">
      {{city}}, {{uf}}
    </h1>
    <p class="weather-2b__date">
      <span class="weather-2b__date--info" v-text="getCompleteDateInfo()"></span>
    </p>
    <img class="weather-2b__img" :src="icon">
    <div data-cy="info-test" class="weather-2b__info">
      <p class="weather-2b__info--temp-min">
        <span>Mínima</span> 
        {{tempMin}}°C
      </p>
      <h1 data-cy="temp-test" class="weather-2b__info--temp">
        <strong>{{temp}}°C</strong>
        <span>{{descrip}}</span>
      </h1>
      <p class="weather-2b__info--temp-max">
        <span>Máxima</span> 
        {{tempMax}}°C
      </p>
    </div>
    <p class="weather-2b__humidity"><span>Humidade</span>{{humidity}}%</p>
    <p class="weather-2b__sunrise"><span>Nascer do Sol</span>{{sunrise}}</p>
    <p class="weather-2b__sunset"><span>Pôr do Sol</span>{{sunset}}</p>

    
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {

  computed:{
    /* import do getters vuex */
    ...mapGetters([
      'city',
      'uf',
      'icon',
      'descrip',
      'temp',
      'tempMin',
      'tempMax',
      'humidity',
      'sunrise',
      'sunset',
    ])
  },
  methods:{
    /* seta o date no formato */
    getCompleteDateInfo(){
      let date = new Date();
      let dias = [
        "Domingo", 
        "Segunda-feira", 
        "Terça-feira", 
        "Quarta-feira", 
        "Quinta-feira", 
        "Sexta-feira", 
        "Sábado"
        ];
      let meses = [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro"
        ];

      return `${dias[date.getDay()]}, ${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`
    },
    backPage(){
      setTimeout(() => this.$router.replace('/'), 600)
    }
  }

}
</script>

<style lang="scss">
  .weather-2b{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    height: 80vh;
    width: 80vw;
    max-width: 900px;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    &__return{
      position: absolute;
      top: -1rem;
      right: -1rem;
      cursor: pointer;
      &:hover{
        transform: scale(1.1);
      }
    }
    &__date{
      color: darkgray;
      
    }
    &__info{
      position: relative;
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      text-transform: capitalize;
      margin-bottom: 2rem;
      padding-bottom: 2.5rem;
      &--temp{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        strong{
          font-size: 50px;
        }
        span{
          margin-top: 1rem;
          font-size: 34px;
        }
      }
      &--temp-min, &--temp-max{
        margin-top: 18px;
        padding-bottom: 1rem;
        font-size: 38px;
        span{
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      &:after{
        content: '';
        position: absolute;
        height: 2px;
        width: 120%;
        background: darkgray;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &__humidity, &__sunrise, &__sunset{
      display: flex;
      width: 192px;
      font-weight: bold;
      margin: 0;
      span{
        width: 140px;
        text-align: left;
      }
    }
    
  }
</style>