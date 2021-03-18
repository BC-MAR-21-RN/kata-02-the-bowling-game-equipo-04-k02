import { Shot } from "./Shot.js";

export class Spare extends Shot {
	constructor() {
		super();
		this.symbol = "/";
		this.bonusScore = 10;
		this.bonus1 = 0;
	}

	setBonus1( bonus1 ) {
		this.bonus1 = bonus1;
	}
}
