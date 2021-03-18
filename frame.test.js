import {
	expect
} from "@jest/globals";
import {
	Frame
} from "./frame";

let frame = new Frame( 2 );

test( 'realizar tiro', () => {
	expect( frame.performShot() ).toBeGreaterThanOrEqual( 0 );
	expect( frame.performShot() ).toBeLessThanOrEqual( 10 );
} );
