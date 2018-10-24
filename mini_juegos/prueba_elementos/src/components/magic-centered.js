export function registerMagicCentered() {
    yasgo.writeCss(`
    `);
    xtag.create('magic-centered', class extends XTagElement {
        constructor() {
            super();
            this.style.display = "block";
            this.parentElement.style.position = "relative";
            var myElement = this;
            this.consideredElements = [];

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
            var parent = $(this.parentElement);
            var child = $(this);
            var topDiff = 0;

            for (var i = 0; i < this.consideredElements.length; i++) {
                topDiff += ($(this.consideredElements[i]).height());
            }

            child.css("position", "absolute");
            child.css("top", ((parent.height() + topDiff - child.outerHeight()) / 2) + parent.scrollTop() + "px");
            child.css("left", ((parent.width() - child.outerWidth()) / 2) + parent.scrollLeft() + "px");
        }
        set 'consider::attr'(value) {
            this.consideredElements = [];
            for (var i = 0; i < value.split(",").length; i++) {
                if ($(value.split(",")[i])[0] !== undefined) {
                    this.consideredElements.push(value.split(",")[i]);
                }
            }
            this.resize();
            var me = this;
            setTimeout(function () {
                me.resize.apply(me)
            }, 1000);

        }
    });
}