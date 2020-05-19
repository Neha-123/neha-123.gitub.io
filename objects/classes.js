class Player
{
	constructor(name, type)
	{
		console.log('player', this);
		this.name = name;
		this.type = type;

	}

	introduce()
	{
		console.log(`Hi Im ${this.name}. Im a ${this.type}.`);
	}
}

class Wizard extends Player
{
	constructor(name, type)
	{
		super(name, type);
		console.log('Wizard', this);
	}
	play()
	{
		console.log(`WEEEEEEEE Im a ${this.type}.`);
	}
}

const Wizard1 = new Wizard("shelly", "heeler");