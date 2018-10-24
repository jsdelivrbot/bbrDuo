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
        }
        '::template(true)'() {
            return `
        <div class="_xyas_navBarContainer">
            <div class="_xyas_navBarContainer_menuButtonLeft">
                <i class="fa fa-bars" class="_xyas_navBarContainer_menuButtonLeft_icon" style="font-size: 40px;"></i>
            </div>
        </div>`
        }
    });
}