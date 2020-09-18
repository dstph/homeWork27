class  Greeter{
	constructor(guests){
		this.guest = guests;
	}
	greet(){
		this.guest = this.guest.map(function(x){ return capitalize(x.toUpperCase().toLowerCase()); })					
	}
	sendGreeting(){
		this.greet();
		for (let value of this.guest){
			document.body.innerHTML += `<p>Hi ${value}!</p>`;
		}
	}
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const guests = ['baLOO', 'chARliE', 'BEth'];

let example = new Greeter(guests);
example.sendGreeting();





