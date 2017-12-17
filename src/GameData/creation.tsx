import {Interface} from "./Interface";

export class GameStart extends Interface {

	static StartIntro()
	{
		this.addButton(0, "Test");
		this.output("\n\nLora is a very lewd girl.");
		this.output("\n\nLora is a cute dog.");
	}
}