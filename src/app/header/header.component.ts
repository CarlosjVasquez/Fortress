import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

	ngOnInit(){

		$(document).ready(function(){

			var flag = false;
			var cont = $('#header');
			var img1 = $('#img1');
			var img2 = $('#img2');
			var scrolltop ;

			$(window).scroll(function(){

				
				scrolltop =  $(window).scrollTop();

				if(scrolltop > 150){

					if(!flag){

						
						setTimeout(function(){
							img1.fadeOut(500);
						}, 50);

						setTimeout(function(){
							img2.fadeIn(1000);
						}, 50);

						cont.css({
							'height':'30px',
							'background':'#174866'
						});


						


					}

					flag = true;
					
				} else {

					if(flag){

						setTimeout(function(){
							img1.fadeIn(1000);
						}, 50);

						setTimeout(function(){
							img2.fadeOut(500);
						}, 50);

						cont.css({
							'height':'70px',
							'background':'rgba(23,72,102,0.5)'
						});

						


					}	

					flag = false;

				}


			})


			$('#link1').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#redes').offset().top - 100 }, 1000);
			});

			$('#link2').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#radio').offset().top - 100 }, 1000);
			});

			$('#link3').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#pgweb').offset().top - 100 }, 1000);
			});

			$('#link4').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#publicidad').offset().top - 100 }, 1000);
			});

			$('#link5').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#servicios').offset().top - 100 }, 1000);
			});

			$('#link6').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#contacto').offset().top - 100 }, 1000);
			});

		})	
	}
	
	

}