<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Home Page</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/home">Home</router-link></li>
                            <li class="breadcrumb-item active">Home Page</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"><i class="fa fa-home"></i>&nbsp;Home</h3>

                    <div class="card-tools">
                        <router-link to="/home" class="btn btn-tool" title="Refresh">
                            <i class="fa fa-recycle"></i>
                        </router-link>
                    </div>
                </div>
                <div class="card-body">
                    Start creating your amazing application!
                    <p>This is <b>Home</b> page</p>
                </div>
                <div class="card-footer">
                    Footer
                </div>
            </div>
        </section>
    </div>
</template>
