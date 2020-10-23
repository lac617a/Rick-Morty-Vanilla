export default class API {
	constructor(url){
		this.url = url
	}
	async getCharacter (id){
		const response = await fetch(`${this.url}character/${id}`)
		const data = await response.json()
		return data
			// .then(response => response.json())
			// .then(data => console.log(data))
	}
}