"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AvatarButtonClass {
    constructor(container) {
        this.container = container;
        this.render();
        this.upload = {
            class: this.container + " .upload",
            element: document.querySelector(this.container + " .upload"),
        };
        this.delete = {
            class: this.container + " .delete",
            element: document.querySelector(this.container + " .delete"),
        };
        this.edit = {
            class: this.container + " .edit",
            element: document.querySelector(this.container + " .edit"),
        };
        this.reset = {
            class: this.container + " .reset",
            element: document.querySelector(this.container + " .reset"),
        };
        this.disableEdit();
    }
    getUpload() {
        return this.upload;
    }
    getDelete() {
        return this.delete;
    }
    getEdit() {
        return this.edit;
    }
    getReset() {
        return this.reset;
    }
    disableDelete() {
        $(this.getDelete().class).hide();
    }
    enableDelete() {
        $(this.getDelete().class).css({
            "display": "flex"
        });
    }
    disableEdit() {
        $(this.getEdit().class).hide();
    }
    enableEdit() {
        $(this.getEdit().class).css({
            "display": "flex"
        });
    }
    render() {
        const style = document.createElement("style");
        style.textContent = this.css();
        document.head.append(style);
        const $container = $(this.container);
        $container.append(this.html());
    }
    html() {
        return `
            <div class="avaBtn upload"><i class="fa-solid fa-arrow-up"></i> Upload</div>
            <div class="avaBtn delete"><i class="fa-solid fa-trash"></i></div>
            <div class="avaBtn edit">Edit</div>
            <div class="avaBtn reset">Reset</div>
        `;
    }
    css() {
        return `
            ${this.container} {
                position: relative;
            }
            ${this.container} .avaBtn {
                position: absolute;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                padding: 10px;
                background: #fff;
                border-radius: 20px;
                z-index: 20;
                cursor: pointer;
            }
            ${this.container} .upload {
                top: 5%;
                right: -20%;
            }
            ${this.container} .delete {
                top: 5%;
                left: 5%;
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: red;
                color: #fff;
            }
            ${this.container} .edit {
                bottom: 5%;
                right: 0%;
            }
            ${this.container} .reset {
                bottom: 5%;
                left: 0%;
            }
        `;
    }
}
exports.default = AvatarButtonClass;
