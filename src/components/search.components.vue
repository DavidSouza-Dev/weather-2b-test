<template>
    <div class="search-2b">
        <form class="search-2b__form" @submit.prevent="weather()" v-show="!withResult">
            <b-alert
                :show="dismissCountDown"
                dismissible
                variant="danger"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
                >
                <p> 
                    <strong>{{valueSearch.length > 0 ? valueSearch :'Resultado' }}</strong>
                    não encontrado, faça uma nova busca
                </p>
            </b-alert>
            <input 
                data-cy="input-test" 
                class="search-2b__form--input" 
                type="search" 
                placeholder="Buscar por cidade" 
                @input="valueSearch = $event.target.value" 
                @click="dismissCountDown=0"
            >
            <button data-cy="button-test" class="button search-2b__form--button" type="submit">Procurar</button>
        </form>
        <div class="search-2b__loading" v-show="withResult">
            <p class="search-2b__loading--info">Cidade, UF</p>
            <div class="search-2b__loading--spining">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(241, 242, 243,0) none repeat scroll 0% 0%; display: block; shape-rendering: auto; transform: scale(.5); animation-play-state: running; animation-delay: 0s;" width="197px" height="197px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <g transform="rotate(0 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="44.5" y="23.5" rx="5.5" ry="5.5" width="11" height="11" fill="#000000" style="animation-play-state: running; animation-delay: 0s;">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.875s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                    </g><g transform="rotate(45 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="44.5" y="23.5" rx="5.5" ry="5.5" width="11" height="11" fill="#000000" style="animation-play-state: running; animation-delay: 0s;">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                    </g><g transform="rotate(90 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="44.5" y="23.5" rx="5.5" ry="5.5" width="11" height="11" fill="#000000" style="animation-play-state: running; animation-delay: 0s;">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.625s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                    </g><g transform="rotate(135 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="44.5" y="23.5" rx="5.5" ry="5.5" width="11" height="11" fill="#000000" style="animation-play-state: running; animation-delay: 0s;">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                    </g><g transform="rotate(180 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="44.5" y="23.5" rx="5.5" ry="5.5" width="11" height="11" fill="#000000" style="animation-play-state: running; animation-delay: 0s;">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.375s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                    </g><g transform="rotate(225 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="44.5" y="23.5" rx="5.5" ry="5.5" width="11" height="11" fill="#000000" style="animation-play-state: running; animation-delay: 0s;">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                    </g><g transform="rotate(270 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="44.5" y="23.5" rx="5.5" ry="5.5" width="11" height="11" fill="#000000" style="animation-play-state: running; animation-delay: 0s;">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.125s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                    </g><g transform="rotate(315 50 50)" style="animation-play-state: running; animation-delay: 0s;">
                    <rect x="44.5" y="23.5" rx="5.5" ry="5.5" width="11" height="11" fill="#000000" style="animation-play-state: running; animation-delay: 0s;">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" style="animation-play-state: running; animation-delay: 0s;"></animate>
                    </rect>
                    </g>
                <!-- [ldio] generated by https://loading.io/ -->
                </svg>
            </div>
    </div>
</div>
     
</template>

<script>

export default {
    name: 'Search',
    data () {
        return {
        valueSearch:'',
        dismissSecs: 4,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        withResult:false,
        }
    },
    methods: {
        async weather(){
            
            /* bloco de declaração let */
            let proxy = 'https://cors-anywhere.herokuapp.com/', //PROXY HEROKU
                url = `${proxy}api.openweathermap.org/data/2.5/weather?q=${this.valueSearch}&units=metric&lang=pt_br&APPID=7b8c4bcd06baee3687ae1cdce846f2e3`,
                
                /* linha de comando do fetch/destructuring do response */
                res = await fetch(url), {name, sys, weather, main} = await res.json()
            
            if(res.status != 200){
                this.showAlert()
            }else{
                this.withResult = true;
                /* commita o response para o mutation>state do vuex */
                this.$store.commit('renderInfos', {name, sys, weather, main})
                setTimeout(()=>this.$router.replace("/weather"),1200)
                
            }
            
        },
        /* functions ligadas ao tratamento de erro */
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }
    },
    
    
}
</script>

<style lang="scss">
    .search-2b{
        &__form{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: absolute;
            right: 50%;
            top: 50%;
            transform: translate(50%, -50%);
            &--input{
                border: 3px solid darkgray;
                border-radius: 3px;
                outline: none;
                line-height: 3;
                width: 355px;
                display: flex;
                text-align: center;
                color: gray;
                    font-size: 20px;
                &::placeholder{
                    color: gray;
                    font-size: 20px;
                    margin: 0;
                    padding:0;
                }
            }
            &--button{
                margin-top: 1.2rem;
                width: 180px;
                height: 54px;
                background: #616161;
                border: 1px solid rgba(0, 0, 0, .36);
                border-radius: 3px;
                font-weight: bold;
                color: white;
                outline: none;
                font-size: 20px;
            }
        div[role="alert"]{
            height: 49px;
            width: 39vw;
            font-size: 11px;
            display: flex;
            p{
                line-height: 2;
                strong{
                    text-transform: capitalize;
                }
            }
        }
    }
    &__loading{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
        &--info{
            border: 3.5px solid rgb(81, 81, 81);
            border-radius: 3px;
            outline: none;
            line-height: 3;
            width: 355px;
            display: flex;
            justify-content: center;
            color: rgb(81, 81, 81);
            font-size: 20px;
            margin-bottom: -2rem;
        }
    }
}
    
</style>