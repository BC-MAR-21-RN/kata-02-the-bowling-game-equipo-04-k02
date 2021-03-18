export class Shot {
	constructor() {
		this.maxScore = 10;
		this.pinsLeft = this.maxScore;
		this.score = 0;
	}
	setPinsLeft( pinsLeft ) {
		this.pinsLeft = pinsLeft;
	}

	setScore( score ) {
		this.score = score;
	}

	performShot() {
		let number = Math.floor( Math.random() * ( this.maxScore - this.score + 1 ) );
		this.setPinsLeft( this.pinsLeft -= number );
		this.setScore( this.score + number );
		return this.pinsLeft;
	}
}
