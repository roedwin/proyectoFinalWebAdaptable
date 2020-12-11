<template>
  <div class="container">
    <div>
      <header>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <a href="/"
            ><img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOvRd8i40EPWtyRiUErHQKX4KvCAntEhg1xg&usqp=CAU"
              alt="logo-The-Tropical-Magic2"
              border="0"
              width="125px"
              height="125px"
          /></a>
          <b-collapse id="nav-collapse" is-nav>
          <router-link to="/" class="menu-item">Inicio</router-link>
          <router-link to="/about" class="menu-item">Quienes Somos</router-link>          
          <router-link to="/productosPopulares" class="menu-item"
          >Fotos mas Vistas</router-link
          >
          <router-link to="/tienda" class="menu-item">Tienda Fotos</router-link>         
          <router-link to="/promociones" class="menu-item"
          >Promociones</router-link>
          <router-link to="/Contactanos" class="menu-item">Contactanos</router-link>   
          
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>Perfil</em>
              </template>
              <b-dropdown-item :to="{ name: 'Registrarse' }">Registrarse</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'Login' }">Iniciar Sesion</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'Admin' }">Administrador</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- <router-link to="/registrarse" class="menu-item">Registrarse</router-link>
            <router-link to="/Login" class="menu-item">Iniciar Sesion</router-link>          
            <router-link to="/admin" class="menu-item">Administrador</router-link>  --> 
          </b-collapse>        
        </b-navbar>
      </header>
      <hr />
      <center><h2 class="title">Foto Studio SAMYASED</h2></center>
      <center class="subtitle"><h4>Las Mejores Fotografias</h4></center>
      <router-view />
    </div>
    <footer class="footer">
      <div class="container">
        <div class="columns">
               <div class="column">
            <a class="icon" href="#"> <i class="fab fa-facebook"></i></a>
            <a class="icon" href="#"> <i class="fab fa-whatsapp-square"></i></a>
            <a class="icon" href="#"> <i class="fab fa-instagram"></i></a>
          
          </div>
          <div class="column">
            <p class="parrafo">
              Universidad de Oriente UNIVO. <br />
              UNIVO <br />
               Foto Studio <br />
            </p>
            <hr />
          </div>
     
        </div>
      </div>
    </footer>
  </div>
</template>

<style>

header {
  width: 100%;
  background-color: rgb(41, 117, 168);
  padding: 15px;
  display: flex;
  font-size: 12.5px;
  border-radius: 30px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #9e5b5b;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
nav a img {
  width: 65px;
  height: 65px;
}
nav .auth {
  display: inline-flex;
}
nav .auth .menu-item {
  background:  rgb(41, 117, 125);
}

.title {
  font-family: "Gold", cursive;

}

.subtitle {
  font-family: "Gold", cursive;
  text-decoration-line: underline;
}

.icon {
  font-size: 50px;
  color: rgba(198, 199, 202, 0.815);
  margin-left: 20px;
}

.footer {
  background-color: rgb(41, 117, 168);;
  margin: 3px;
  padding: 1px;
  height: 100%;
  /* IMPORTANTE */
  text-align: center;  
  border-radius: 30px;
}

.parrafo {
  color: #fff;
}
.navbar {
  width: 100%;
}
.nav-link {
  font-family: sans-serif;
  font-size: 16px;
  color: #fff;
}
</style>