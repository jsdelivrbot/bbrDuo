export function registerNavBar() {
    yasgo.writeCss(`
    ._xyas_navBarContainer {
        background: #29b6f6;
        height: 60px;
        width: 100%;
        position: relative;
        z-index: 1;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
    ._xyas_navBarContainer_menuButtonLeft {
        margin-left: 10px;
        float: left;
        padding-top: 10px;
        color: white;
        cursor: pointer;
    }
    ._xyas_navBarContainer_menuButtonLeft_icon {
        cursor: pointer;
    }
    `);
    xtag.create('nav-bar', class extends XTagElement {
        constructor() {
            super();
            this.style.display = "block";
            this.style.width = "100%";
        }
        '::template(true)'() {
            return `
        <div class="_xyas_navBarContainer">
            <div class="_xyas_navBarContainer_menuButtonLeft">
                <i class="fa fa-bars _xyas_navBarContainer_menuButtonLeft_icon" style="font-size: 40px;"></i>
            </div>
        </div>`
        }
        set 'left-icon::attr'(value) {
            switch (value) {
                case "none":
                    var me = this;
                    setTimeout(function () {
                        $(me).find("._xyas_navBarContainer_menuButtonLeft_icon").removeClass().addClass("_xyas_navBarContainer_menuButtonLeft_icon");
                    }, 20);
                    break;
                default:
                    var me = this;
                    setTimeout(function () {
                        $(me).find("._xyas_navBarContainer_menuButtonLeft_icon").removeClass().addClass("fa").addClass("fa-" + value).addClass("_xyas_navBarContainer_menuButtonLeft_icon");
                    }, 20);
                    break;
            }
        }
    });
}