import { expect } from "@jest/globals";
import { return10 } from "../prueba";

test( "return 10", () => {
	expect( return10() ).toBe( 10 );
} );
