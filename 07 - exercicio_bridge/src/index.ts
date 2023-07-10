import IConsole from "./consoles/IConsole";
import Play from "./plays/Play";
import AdvancedPlay from "./plays/AdvancedPlay";
import Xbox from "./consoles/Xbox";
import Playstation from "./consoles/Playstation";
import SouljaGame from "./consoles/SouljaGame";

function startPlaying(platform: IConsole) {
	console.log("\nAguarde...");
	const play = new Play(platform);
	play.playing();
	play.result();
	console.log();
}

function startAdvancedPlay(platform: IConsole) {
	console.log("Aguarde o desafio...");
	const play = new AdvancedPlay(platform);
	play.playing();
	play.result();
	play.challenge();
	console.log();
}

startPlaying(new Xbox());
startPlaying(new Playstation());
startPlaying(new SouljaGame());

startAdvancedPlay(new Xbox());
startAdvancedPlay(new Playstation());
startAdvancedPlay(new SouljaGame());
