import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.components.html',
	styleUrls: ['./footer.components.css']
})

export class FooterComponent implements OnInit {
	
	ngOnInit(){

		$(document).ready(function(){
			
			$('#link7').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#redes').offset().top - 100 }, 1000);
			});

			$('#link8').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#radio').offset().top - 100 }, 1000);
			});

			$('#link9').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#pgweb').offset().top - 100 }, 1000);
			});

			$('#link10').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#publicidad').offset().top - 100 }, 1000);
			});

			$('#link11').on('click', function(e) {
    			e.preventDefault();
    			$("html, body").animate({scrollTop: $('#servicios').offset().top - 100 }, 1000);
			});


		})

	}
}