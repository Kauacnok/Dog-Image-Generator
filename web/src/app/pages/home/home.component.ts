import { Component, OnInit } from '@angular/core';

import { Dog } from 'src/app/interfaces/Dog'
import { DogService } from 'src/app/services/dog.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	dogImage!: Dog
	btnText = 'Gerar uma nova Imagem/Gif/Vídeo'

	constructor(private dogService: DogService) {}

	ngOnInit() {
		this.getNewDog()
	}

	getNewDog() {
		this.btnText = 'Carregando imagem...'
		this.dogService.getDog().subscribe((item) => {
			item.type = ''
			if (item.url.endsWith('mp4')) {
				item.type = 'mp4'
			}
			this.dogImage = {url: item.url, fileSizeBytes: item.fileSizeBytes, type: item.type}

			this.btnText = 'Gerar uma nova Imagem/Gif/Vídeo'
		})
	}
}
