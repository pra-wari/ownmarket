@extends('layouts.app')

@section('content')
<link rel="stylesheet" type="text/css" href="assets/login/css/util.css">
<link rel="stylesheet" type="text/css" href="assets/login/css/main.css">

<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <form class="login100-form validate-form"  method="POST" action="{{ route('login') }}">
                {{ csrf_field() }}
                <span class="login100-form-title p-b-26">
                    <img style="max-width: 200px;"src="images/logo.png"/>
                </span>
               

                <div class="wrap-input100 validate-input {{ $errors->has('email') ? ' has-error' : '' }}" data-validate = "Valid email is: a@b.c">
                    <input class="input100" type="text" name="email" placeholder="Email">
                    <!-- <span class="focus-input100" data-placeholder="Email"></span> -->
                    @if ($errors->has('email'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                    @endif
                </div>

                <div class="wrap-input100 validate-input{{ $errors->has('password') ? ' has-error' : '' }}" data-validate="Enter password">
                    <span class="btn-show-pass">
                        <i class="zmdi zmdi-eye"></i>
                    </span>
                    <input class="input100" type="password" name="password" id="password" placeholder="Password">
                    <!-- <span class="focus-input100" data-placeholder="Passsword"></span> -->
                    @if ($errors->has('password'))
                    <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
                </div>

                <div class="container-login100-form-btn">
                    <div class="wrap-login100-form-btn">
                        <div class="login100-form-bgbtn"></div>
                        <button type="submit" class="login100-form-btn">
                            Login
                        </button>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                            </label>
                        </div>
                    </div>
                </div>
                <a class="btn btn-link" href="{{ route('password.request') }}">
                    Forgot Your Password?
                </a>
                <div class="container-login100-form-btn">
                    <div class="google-btn">
                        <a href="{{ url('auth/google') }}">
                            <div class="google-icon-wrapper">
                            <img class="google-icon" src="assets/login/images/Google__G__Logo.svg"/>
                            </div>
                            <p class="btn-text"><b>Sign in with google</b></p>
                        </a>   
                    </div>
                </div>

                {{-- <div class="text-center p-t-115">
                    <span class="txt1">
                        Don’t have an account?
                    </span>

                    <a class="txt2" href="#">
                        Sign Up
                    </a>
                </div> --}}
            </form>
        </div>
    </div>
</div>


<div id="dropDownSelect1"></div>
<script src="assets/login/js/main.js"></script>
@endsection
