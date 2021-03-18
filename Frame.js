export class Frame {
	constructor( shotAmount ) {
		this.shotAmount = shotAmount;
		this.shots = [];
		this.maxScore = 10;
		this.pinsLeft = this.maxScore;
		this.score = 0;
	}

	setScore( score ) {
		this.score = score;
	}

	setPinsLeft( pinsLeft ) {
		this.pinsLeft = pinsLeft;
	}

	performShot() {
		let number = Math.floor( Math.random() * ( this.maxScore - this.score + 1 ) );
		this.setPinsLeft( this.pinsLeft -= number );
		this.setScore( this.score + number );
		this.shots.push( number );

		return this.pinsLeft;
	}
}
