<div id="switcher">
    <div class="switcher box-color dark-white text-color" id="sw-theme">
        <a href ui-toggle-class="active" target="#sw-theme" class="box-color dark-white text-color sw-btn">
            <i class="fa fa-gear"></i>
        </a>
        <div class="box-header">
            <h2>{{ trans('backLang.themeSwitcher') }}</h2>
        </div>
        <div class="box-divider"></div>
        <div class="box-body">
            <p class="hidden-md-down">
                <label class="md-check m-y-xs" data-target="folded">
                    <input type="checkbox">
                    <i class="green"></i>
                    <span class="hidden-folded">{{ trans('backLang.foldedAside') }}</span>
                </label>
                <label class="md-check m-y-xs" data-target="boxed">
                    <input type="checkbox">
                    <i class="green"></i>
                    <span class="hidden-folded">{{ trans('backLang.boxedLayout') }}</span>
                </label>
            </p>


            <p>{{ trans('backLang.themes') }}:</p>
            <div data-target="bg" class="text-u-c text-center _600 clearfix">
                <label class="p-a col-xs-6 light pointer m-a-0">
                    <input type="radio" name="theme" value="" hidden>
                    {{ trans('backLang.themes1') }}
                </label>
                <label class="p-a col-xs-6 grey pointer m-a-0">
                    <input type="radio" name="theme" value="grey" hidden>
                    {{ trans('backLang.themes2') }}
                </label>
                <label class="p-a col-xs-6 dark pointer m-a-0">
                    <input type="radio" name="theme" value="dark" hidden>
                    {{ trans('backLang.themes3') }}
                </label>
                <label class="p-a col-xs-6 black pointer m-a-0">
                    <input type="radio" name="theme" value="black" hidden>
                    {{ trans('backLang.themes4') }}
                </label>
            </div>
            <br>
        </div>
    </div>

</div>