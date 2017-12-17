declare var GAME;

export class GameStart
{
	static StartIntro()
	{
		GAME.clearOutput();
		GAME.output("There are many, many worlds.");

		GAME.output("\n\nOne, called Mareth, was perhaps the heart of them all. Cracks in the space between worlds, called portals, all seemed to lead there. Through one of these cracks fell a group of human mages who thought themselves as mighty as the gods. Yet even with all their power, the mages could not return them to their homeworld. Many portals led to Mareth, but none left it.");

		GAME.output("\n\nThe mages never stopped trying to find a way home, and as the years passed, their experiments became ever more obscene. The mages were twisted and corrupted by their own desires, and the taint of their black magics spread across Mareth like wildfire. They became <b>demons</b>, shedding their humanity at the command of their new queen, Lethice.");

		GAME.output("\n\nThere was no way for these mages to return home, Lethice had come to realize. Not without fueling their corrupted power with thousands of souls. So Lethice turned her sights to Mareth, to the gods and people of the virgin realm, and began a war to conquer and corrupt all she laid eyes upon. The demonic horde swept out over the landscape, blighting the land and leaving in their wake a scarred wasteland. Even the portals could not escape the spreading taint, and were soon bent to the demons' purpose: though they could not leave, the demons would barter with those on other worlds foolish enough to listen to their whispers, and who would sacrifice innocent lives in exchange for power and dark magics.");

		GAME.output("\n\nOne such sacrifice came from the village of Ingnam. This so-called ‘Champion’ was but a pawn in the village elders' long plot to extend their lives, each year exchanging a helpless and unarmed teenager for potions of longevity and vitality. Ingnam's final Champion escaped [champ.hisHer] fate by beating back the demons' minions waiting on the other side of the portal, and set out on a one [champ.manWoman] crusade to bring an end to the Demon menace once and for all.");

		GAME.output("\n\nThat was a year ago, and a world away.");
		
		GAME.addButton(0, "Next", GAME.clearOutput);
	}
}