import { Frame } from "./Frame.js";

export class GameHandler {
	constructor( shotAmount ) {
		this.shotAmount = shotAmount;
		this.frames = [];
		this.globalScore = 0;
	}

	countFrames() {
		for ( let i = 1; i <= 10; i++ ) {
			if ( i < 10 ) {
				this.takeTurn( this.shotAmount );
			} else {
				this.takeTurn( this.shotAmount + 1 );
			}
		}
	}

	takeTurn( shotAmount ) {
		let frame = new Frame( this.shotAmount );
		for ( let i = 0; i < shotAmount; i++ ) {
			frame.performShot();
		}
		this.frames.push( frame );
		return frame;
	}

	applyBonus() {
	}

}
