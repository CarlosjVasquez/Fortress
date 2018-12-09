import { Component, OnInit } from '@angular/core'; 
import * as $ from 'jquery';


@Component({
	selector: 'app-servicios',
	templateUrl: './servicios.component.html',
	styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent implements OnInit {
	
	ngOnInit(){

		$(document).ready(function(){

			var flag = false;
			var servicios = $('#servicios').offset().top;
			var scroll;
			var hoja1 = $('#hoja1');
			var hoja2 = $('#hoja2');
			var hoja3 = $('#hoja3');
			var hoja4 = $('#hoja4');

		$(window).scroll(function(){

			scroll = $(window).scrollTop();


			if(scroll > servicios - 150){

				if (!flag) { 

				hoja1.css({

					'margin-right' : '0%'

				});

				hoja2.css({

					'margin-right' : '0%'

				});

				hoja3.css({

					'margin-left' : '0%'

				});

				hoja4.css({

					'margin-left' : '0%'

				});

			}

			flag = true;

			}else{

				if (flag) { 

				hoja1.css({

					'margin-right' : '75%'

				});

				hoja2.css({

					'margin-right' : '75%'

				});

				hoja3.css({

					'margin-left' : '75%'

				});

				hoja4.css({

					'margin-left' : '75%'

				});

			}

			flag = false;

			}

		})

		})

	}

}