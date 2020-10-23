export default class Character{
	constructor({name, image, gender,species,status}){
		this.name = name
		this.image = image
		this.status = status
		this.gender = gender
		this.species = species
		this.$characterNameContainer = document.querySelector('#character-name-container')
		this.$characterImageContainer = document.querySelector('#character-image-container')
		this.$characterNamePlaceholder = document.querySelector('#character-name-placeholder')
		this.$characterDescriptionContainer = document.querySelector('#character-description-container')
		this.render()
	}
	buildImage(){
		return `<img class="character-image" src=${this.image} alt=${this.name}>`
	}
	buildName(){
		return `
			<div class="character-name">
				<h2>${this.name}</h2>
			</div>
		`
	}
	buildDescription(){
		return `
			<div class="character-labels">
				<h3 class="character-label">Genero: ${this.gender}</h3>
				<h3 class="character-label">Expecie: ${this.species}</h3>
				<h3 class="character-label">Status: ${this.status}</h3>
			</div>
		`
	}
	render(){
		this.$characterNamePlaceholder.innerHTML = this.name
		this.$characterNameContainer.innerHTML = this.buildName()
		this.$characterImageContainer.innerHTML = this.buildImage()
		this.$characterDescriptionContainer.innerHTML = this.buildDescription()
	}
}
