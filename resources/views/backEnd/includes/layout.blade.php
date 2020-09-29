@include('backEnd.includes.head')

@include('backEnd.includes.sidebar')

@include('backEnd.includes.header')
 <!-- Content -->
 <div class="content">
 <div id="overlay"><div id="loader"></div></div>

    @yield('content')

 </div>

<!-- /.content -->
<div class="clearfix"></div>

@include('backEnd.includes.footer')
