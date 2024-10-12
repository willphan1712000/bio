type E = {
    class: string,
    element: HTMLElement,
}
export default class EditAvatar {
    private container: string;
    private avaEdit: E;
    private frame: E;
    private wrapper: E;
    private img: E;
    private accept: E;
    private cancel: E;

    constructor(container:string) {
        this.container = container;
        this.render();

        this.avaEdit = {
            class: this.container + " #avaEdit",
            element: document.querySelector("avaEdit") as HTMLElement
        }
        this.frame = {
            class: this.container + " .frame",
            element: document.querySelector(this.container + " .frame") as HTMLElement
        }
        this.wrapper = {
            class: ".img__wrapper",
            element: document.querySelector(this.container + " .img__wrapper") as HTMLElement
        }
        this.img = {
            class: this.container + " .img__wrapper > img",
            element: document.querySelector(this.container + " .img__wrapper > img") as HTMLElement
        }
        this.accept = {
            class: this.container + " .accept",
            element: document.querySelector(this.container + " .accept") as HTMLElement
        }
        this.cancel = {
            class: this.container + " .cancel",
            element: document.querySelector(this.container + " .cancel") as HTMLElement
        }
    }

    public getAvaEdit() : E {
        return this.avaEdit;
    }
    public getFrame() : E {
        return this.frame;
    }
    public getWrapper() : E {
        return this.wrapper;
    }
    public getImg() : E {
        return this.img;
    }
    public getAccept() : E {
        return this.accept;
    }
    public getCancel() : E {
        return this.cancel;
    }
    public show(): void {
        $(this.getAvaEdit().class).css({
            "display": "flex"
        })
    }
    public hide(): void {
        $(this.getAvaEdit().class).css({
            "display": "none"
        })
    }

    private render() {
        const style = document.createElement("style");
        style.textContent = this.css();
        document.head.append(style);

        const $body = $(this.container);
        $body.append(this.html());
    }

    private html(): string {
        return `
            <div id="avaEdit">
                <h1 class="heading">Resize your picture</h1>
                <div class="frame">
                    <div class="img__wrapper">
                        <img src="">
                    </div>
                </div>
                <div class="avaEdit__btn">
                    <div class="avaEdit__btn--btn cancel">Cancel</div>
                    <div class="avaEdit__btn--btn accept">Accept</div>
                </div>
            </div>
        `
    }

    private css(): string {
        return `
            ${this.container} {
                position: relative;
            }
            ${this.container} #avaEdit {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 99;
                width: 100vw;
                height: 100vh;
                height: 100svh;
                height: 100dvh;
                background-color: #00000063;
                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                display: none;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;
                overflow: hidden;
            }
            ${this.container} #avaEdit .heading {
                color: #fff;
            }
            ${this.container} #avaEdit .frame {
                width: 80%;
                aspect-ratio: 1;
                border: dashed 3px #000;
                background-color: #fff;
                border-radius: 50%;
                position: relative;
                overflow: hidden;
            }
            ${this.container} #avaEdit .img__wrapper > img {
                width: 100%;
            }
            ${this.container} #avaEdit .avaEdit__btn {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
            }
            ${this.container} #avaEdit .avaEdit__btn--btn {
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                padding: 20px;
                background: #fff;
                border-radius: 30px;
                cursor: pointer;
            }
        `
    }
}