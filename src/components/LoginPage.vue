<template>
  <div class="newUser">
    <h2>Login</h2>
    <!-- Add error messages - something to do with axios error return maybe? -->
    <form>
      <table>
        <tr>
          <td class="label" for="email"><label>Email:</label></td>
          <td><input type="text" name="email" value="Enter email" id="email" v-model="email"></td>
        </tr>
        <tr>
          <td class="label" for="password"><label>Password:</label></td>
          <td><input type="password" name="password" value="Enter password" id="password" v-model="password"></td>
        </tr>
        <tr>
          <td><input @click.prevent="requestToken()" type="submit" value="Login"></td>
        </tr>
    </table>
  </form>


  </div>
</template>

<script>

export default {
  name: 'LoginPage',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    requestToken: function() {
      const request = {'auth': {'email': this.email, 'password': this.password}};
      this.$http.post('http://localhost:3000/user_token', request)
           .then(function(response) {
             console.log(response.data.jwt);
             localStorage.setItem('jwtToken', 'Bearer ' + response.data.jwt);
           })
           .catch(function(error) {
             console.warn(error);
           });
    }
  }
}
</script>

<style scoped>
.newUser {
  position: relative;
  left: calc(50vw - 250px);
  width: 500px;
}

table {
  text-align: center;
}

.label {
  border: 3px solid #779ECB;
  background-color: rgba(255,255,255,0.25);
  border-radius: 10px;
  padding: 2px;
}
</style>
