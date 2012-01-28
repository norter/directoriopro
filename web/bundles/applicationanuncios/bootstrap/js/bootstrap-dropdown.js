/* ============================================================
 * bootstrap-dropdown.js v1.3.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdown
 * ============================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

var timer_menu = false;
var is_mobile = ( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) );

(function( $ ){

  var d = 'a.menu, .dropdown-toggle'
  
  // si no es movil mostrar opciones menu ocultas
  if( is_mobile ){
  	$('.dropdown .hide_op').css('display','block');
  	$('.dropdown .dropdown-toggle').attr('href','#');
	$('#topbar').css('position','absolute');
  }

  function clearMenus() {
    $(d).parent('li').removeClass('open')
  }

  $(function () {
    $('html').bind("click", clearMenus)
    $('body').dropdown( '[data-dropdown] a.menu, [data-dropdown] .dropdown-toggle' )
  })

  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function ( selector ) {
    return this.each(function () {

      
      
      // solo activar click si es dispositivo movil
      if( is_mobile ){
	      $(this).delegate(selector || d, 'click', function (e) {
	        var li = $(this).parent('li')
	          , isActive = li.hasClass('open')
	
	        clearMenus()
	        !isActive && li.toggleClass('open')
	        return false
	      });
      }else{
      	
	      $(this).delegate(selector || d, 'mouseover', function (e) {
			if( timer_menu ) clearTimeout( timer_menu );
			clearMenus();
	        var li = $(this).parent('li').addClass('open');
	        return false
	      });
	
	      $(this).delegate(selector || d, 'mouseout', function (e) {
			timer_menu = setTimeout(function(){
				clearMenus();
			},2000);
	        return false
	      });
      	
      	
      }
      

    })
  }

})( window.jQuery || window.ender )