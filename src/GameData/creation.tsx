import * as _ from "./Content/BaseContent";

export function StartIntro():void {
    _.flags["KYS_RETARD"] = true;
    _.ui.clearOutput();
    _.ui.output("This is a test. The PC's name is: " + _.pc.name);
    _.ui.output("\n\nThere are many, many worlds.");
    _.ui.output("\n\nOne, called Mareth, was perhaps the heart of them all. Cracks in the space between worlds, called portals, all seemed to lead there. Through one of these cracks fell a group of human mages who thought themselves as mighty as the gods. Yet even with all their power, the mages could not return them to their homeworld. Many portals led to Mareth, but none left it.");
    _.ui.output("\n\nThe mages never stopped trying to find a way home, and as the years passed, their experiments became ever more obscene. The mages were twisted and corrupted by their own desires, and the taint of their black magics spread across Mareth like wildfire. They became <b>demons</b>, shedding their humanity at the command of their new queen, Lethice.");
    _.ui.output("\n\nThere was no way for these mages to return home, Lethice had come to realize. Not without fueling their corrupted power with thousands of souls. So Lethice turned her sights to Mareth, to the gods and people of the virgin realm, and began a war to conquer and corrupt all she laid eyes upon. The demonic horde swept out over the landscape, blighting the land and leaving in their wake a scarred wasteland. Even the portals could not escape the spreading taint, and were soon bent to the demons' purpose: though they could not leave, the demons would barter with those on other worlds foolish enough to listen to their whispers, and who would sacrifice innocent lives in exchange for power and dark magics.");
    _.ui.output("\n\nOne such sacrifice came from the village of Ingnam. This so-called ‘Champion’ was but a pawn in the village elders' long plot to extend their lives, each year exchanging a helpless and unarmed teenager for potions of longevity and vitality. Ingnam's final Champion escaped [champ.hisHer] fate by beating back the demons' minions waiting on the other side of the portal, and set out on a one [champ.manWoman] crusade to bring an end to the Demon menace once and for all.");
    _.ui.output("\n\nThat was a year ago, and a world away.");
    _.ui.clearMenu();
    _.ui.addButton(0, "Next", () => StartII());
    _.ui.render();
}

export function StartII():void {
    _.ui.clearOutput();
    _.ui.output("This is a test. flags['KYS_RETARD']: " + _.flags["KYS_RETARD"]);
    _.ui.output("\n\nYou have never heard of a world called Mareth, nor a village named Ingnam.");
    _.ui.output("\n\nNearly a year ago, you set off on your own, leaving your former life behind to seek your fortunes on the wild frontier -- a year of traveling, exploring, fighting, and surviving alone. You've earned yourself a little coin in your travels, enough to book passage to the furthest reaches of the known world: the Frost Marches.");
    _.ui.output("\n\nYou had just made it to the village of Hawkethorne, a little hamlet nestled between a range of craggy mountains in the east and the endless forests of the north, when the weather turned foul. What started as an autumn downpour has turned into an unseasonable snowstorm, several months earlier than you'd expected first snow. The snow has come down harder and harder in the last few days, building up to a furious storm that's made continuing your journey risky proposition. Lucky for you, the tavern in town -- a little place called the Frost Hound -- had several rooms for let.");
    _.ui.output("\n\nA towering old wolf-man named Garth runs the place along with his daughter Gwyneth, the serving girl. She's pregnant, mere days from being due she says, and is the most cheerful person you've seen so far in the wintery town. Her father is gruff and speaks little, but the two of them are your only company most days. At night, a few of the local shopkeepers and traders will come in for a drink, but the storm makes even small ventures down the dirt-packed road a less than appealing proposition.");
    _.ui.output("\n\nIt’s been a quiet, lonely couple of days that lend themselves to contemplation about the year you’ve spent on the road, and the life you left behind...");
    _.ui.clearMenu();
    _.ui.addButton(0, "Next");
    _.ui.render();
}