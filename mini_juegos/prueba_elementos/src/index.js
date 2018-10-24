import { registerNavBar } from "./components/nav-bar.js";
import { registerMagicCentered } from "./components/magic-centered.js";
async function main(params) {
    await yasgo.load(yasgo.cdn["jquery"]);
    await yasgo.load("https://rawgit.com/x-tag/core/master/dist/x-tag-polyfilled.min.js");
    yasgo.loadCss("https://use.fontawesome.com/releases/v5.4.1/css/all.css");
    registerNavBar();
    registerMagicCentered();
}


yasgo(main);
