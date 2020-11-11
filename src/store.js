import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        weatherInfo:[]
    },
    getters:{
        /* distribuição de values do state */
        city: state => state.weatherInfo.name,
        uf: state => state.weatherInfo.sys.country,
        icon: state => `http://openweathermap.org/img/wn/${state.weatherInfo.weather[0].icon}@4x.png`,
        descrip: state => state.weatherInfo.weather[0].description,
        temp: state => state.weatherInfo.main.temp.toFixed(0),
        tempMin: state => state.weatherInfo.main.temp_min.toFixed(0),
        tempMax: state => state.weatherInfo.main.temp_max.toFixed(0),
        humidity: state => state.weatherInfo.main.humidity,
        sunrise: state => {
            let date = new Date(state.weatherInfo.sys.sunrise * 1000),
                hours = date.getHours() < 10 ? '0'+ date.getHours(): date.getHours(),
                minutes = date.getMinutes() < 10 ? '0'+ date.getMinutes(): date.getMinutes()
            return `${hours}:${minutes}`
        },
        sunset: state =>  {
            let date = new Date(state.weatherInfo.sys.sunset * 1000),
                hours = date.getHours() < 10 ? '0'+ date.getHours(): date.getHours(),
                minutes = date.getMinutes() < 10 ? '0'+ date.getMinutes(): date.getMinutes()
            return `${hours}:${minutes}`
        },
    },
    mutations:{
        /* Utiliza o response para atualiza o state */
        renderInfos: (state,  payload) => {
            state.weatherInfo = payload
        }
    }

})