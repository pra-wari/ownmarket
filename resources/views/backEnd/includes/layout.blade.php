@include('backEnd.includes.head')

@include('backEnd.includes.sidebar')

@include('backEnd.includes.header')
 <!-- Content -->
 <div class="content">

    @yield('content')

 </div>

<!-- /.content -->
<div class="clearfix"></div>

@include('backEnd.includes.footer')
@include('backEnd.includes.foot')