<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="home" class="brand-link">
            <img
              src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
              alt="Logo" class="brand-image elevation-3"
              style="opacity: .8"
              >
            <span class="brand-text font-weight-light">AdminLTE3</span>
        </a>
        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="https://cacan.id/wp-content/uploads/my_blog/cacan-400x400.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="https://www.cacan.id" target="_blank" class="d-block">Rony Chandra Kudus</a>
                </div>
            </div>
            <nav class="mt-2">
                <ul
                  class="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview" role="menu"
                  data-accordion="false"
                  >
                    <li class="nav-item">
                        <router-link to="/home" class="nav-link">
                            <i class="nav-icon fas fa-home"></i>
                            <p>Home</p>
                        </router-link>
                    </li>
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fas fa-book"></i>
                            <p>
                                Pages
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>About</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>