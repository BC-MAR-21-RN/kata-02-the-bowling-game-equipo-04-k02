import { Shot } from "./Shot.js";

export class Strike extends Shot {
	constructor() {
		super();
		this.symbol = "X";
		this.bonusScore = 10;
		this.bonus1 = 0;
		this.bonus2 = 0;
	}

	setBonus1( bonus1 ) {
		this.bonus1 = bonus1;
	}

	setBonus2( bonus2 ) {
		this.bonus2 = bonus2;
	}
}
