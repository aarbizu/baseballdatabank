
import axios from 'axios';
import * as M from 'materialize-css'; // eslint-disable-line no-unused-vars
import Vue from 'vue';

new Vue( {
  computed: {
    somePlayers(): boolean {
      return this.isLoading === false && this.players.length > 0;
    },
    noPlayers(): boolean {
      return this.isLoading === false && this.players.length === 0;
    },
  },
  data() {
    return {
      name: '',
      bats: '',
      throws: '',
      debut: '',
      retroid: '',
      bbrefid: '',
      players: [],
      isLoading: true,
      selectedPlayer: '',
      selectedPlayerId: 0,
    };
  },
  el: '#app',
  methods: {
    getPlayers() {
      axios
          .get( '/api/baseball/people' )
          .then( (res: any) => {
            this.isLoading = false;
            this.players = res.data;
          })
          .catch( (err: any) => {
            console.log(err);
          });
    },
  },
  mounted() {
    return this.getPlayers();
  },
});
