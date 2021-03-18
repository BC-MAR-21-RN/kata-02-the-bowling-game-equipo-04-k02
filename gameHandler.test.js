import {
	expect
} from "@jest/globals";
import {
	GameHandler
} from "./gameHandler";

let gh = new GameHandler( 2 );

test( 'contar frames', () => {
	expect( gh.countFrames() ).toBeDefined();
} );

test( 'realizar turno', () => {
	expect( gh.takeTurn( 2 ) ).toBeDefined();

} );

test( 'aplicar bonus', () => {
	expect( gh.applyBonus() ).toBeTruthy();
} );

test( 'try catcher', () => {
	expect( gh.trycatcher( 1 ) ).toBeDefined;
	expect( gh.trycatcher() ).toBe( 0 );
} );

test( 'show table', () => {
	let a = gh.showTable();

	expect( gh.showTable() ).toBeDefined();
	expect( a[ 0 ] ).toBeDefined();
} );
