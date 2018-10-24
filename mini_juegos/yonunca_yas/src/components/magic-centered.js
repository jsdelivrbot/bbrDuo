export function registerMagicCentered() {
    yasgo.writeCss(`
    `);
    xtag.create('magic-centered', class extends XTagElement {
        constructor() {
            super();
            this.style.display = "block";
            this.parentElement.style.position = "relative"
            this.resizeTimeout = {};

            var myElement = this;

            this.consideredElements = [];
            this.substractAmount = 0;

            this.resize();

            var timeout;
            window.addEventListener("resize", function () {
                clearTimeout(timeout);
                this.setTimeout(function (e) {
                    myElement.resize();
                }, 500);
            });
        }
        resize() {
            var me = this;
            clearTimeout(this.resizeTimeout)
            this.resizeTimeout = setTimeout(function () {
                var parent = $(me.parentElement);
                var child = $(me);
                child.css("position", "absolute");
                child.css("top", ((parent.height() - child.outerHeight()) / 2) + parent.scrollTop() + "px");
                child.css("left", ((parent.width() - child.outerWidth()) / 2) + parent.scrollLeft() + "px");
            }, 200)
        }
    });
}