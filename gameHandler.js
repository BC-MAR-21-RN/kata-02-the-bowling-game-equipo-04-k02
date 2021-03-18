import { Frame } from "./frame.js";

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

		return this.frames;
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
		for ( let i = 0; i < this.frames.length; i++ ) {
			if ( this.frames[ i ].shots[ 0 ] == 10 ) {
				this.frames[ i ].score += this.frames[ i + 1 ].shots[ 0 ] + this.frames[ i + 1 ].shots[ 1 ];
				this.frames[ i ].score += this.trycatcher( i );
			} else if ( this.frames[ i ].shots[ 0 ] + this.frames[ i ].shots[ 1 ] == 10 ) {
				this.frames[ i ].score += this.frames[ i + 1 ].shots[ 0 ];
				this.frames[ i ].score += this.trycatcher( i );
			} else {
				this.frames[ i ].score += this.trycatcher( i );
			}
		}
		return true;
	}

	trycatcher( i ) {
		try {
			return this.frames[ i - 1 ].score;
		} catch ( error ) {
			return 0;
		}
	}

	showTable() {
		let matrix = [];
		for ( let i = 0; i < this.frames.length; i++ ) {
			let ar = [];
			ar.push( this.frames[ i ].shots );
			ar.push( this.frames[ i ].score );

			matrix.push( ar );
		}
		return matrix;
	}

}
