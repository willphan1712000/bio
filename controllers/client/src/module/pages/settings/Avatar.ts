import UploadFile from "../../Web-Development/components/upload/UploadFile";
import Transform from "../../Web-Development/components/Transform/Transform";
import { $$ } from "../../Web-Development/W";
import EditAvatar from "../components/EditAvatar";
import AvatarButton from "../components/AvatarButton";
import { $$$ } from "../../Web-Development/WW";

export type AvatarOptions = {
    img: string,
    reset: string,
    username: string,
    imgName: string,
}


export class Avatar {
    private avatarButton: AvatarButton;
    private editAvatar: EditAvatar;
    private element!: HTMLImageElement;
    private preview!: HTMLImageElement;
    private options!: AvatarOptions;
    private reset: string;
    private transform!: Transform | null;
    private upload!: UploadFile;
    private src!: string;
    
    constructor(options: AvatarOptions) {
        // Add UI components
        this.avatarButton = new AvatarButton("#avatar__container");
        this.editAvatar = new EditAvatar("#admin");
        this.element = document.querySelector(options.img) as HTMLImageElement;
        this.preview = this.editAvatar.getImg().element as HTMLImageElement;
        this.options = options;
        this.reset = options.reset;
        this.src = this.reset;
        
        const cancel = this.editAvatar.getCancel().element;
        const accept = this.editAvatar.getAccept().element;
        const reset = this.avatarButton.getReset().element;
        const edit = this.avatarButton.getEdit().element;
        const deleteBtn = this.avatarButton.getDelete().element;
        
        this.upload = $$(this.avatarButton.getUpload().class).uploadFile(e => {
            this.editAvatar.show();
            this.preview.src = e; // show on image element
            this.transform = $$(this.editAvatar.getWrapper().class, this.editAvatar.getFrame().class).transform(); // create transform object, the previous object will be removed by garbage colletor
            this.avatarButton.enableEdit();
        })

        cancel.addEventListener('click', e => {
            e.stopPropagation();
            this.editAvatar.hide();
        })
        
        accept.addEventListener("click", e => {
            e.stopPropagation();
            const result = this.apply();
            this.element.src = result.src;
            this.setSrc(result.srcEncoded);
            this.editAvatar.hide();
        })
        
        reset.addEventListener('click', e => {
            e.stopPropagation();
            this.setSrc(this.reset);
            this.element.src = this.reset;
        })
        
        edit.addEventListener('click', e => {
            e.stopPropagation();
            this.editAvatar.show();
        })
        
        if(this.options.imgName === 'unknown.png') {
            this.avatarButton.disableDelete();
        } else {
            this.avatarButton.enableDelete();
            deleteBtn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const r = await $$$('/data/api/removeAvatar.php', {
                    username: this.options.username,
                    img: this.options.imgName
                }).api().post();
                if(r) {
                    this.reset = '/img/unknown.png';
                    this.setSrc(this.reset);
                    this.element.src = this.reset;
                    this.avatarButton.disableDelete();
                }
            })
        }
        
    }

    private setSrc(src:string) {
        this.src = src;
    }

    public getSrc(): string {
        return this.src;
    }

    private apply() {
        const [canvas, ctx] = this.upload.createCanvas(700, 700);
        const $container = $(this.editAvatar.getFrame().class) as JQuery<HTMLElement>;
        const [x, y, angle] = this.transform!.exportData();
        const [,src, srcEncoded] = this.upload.drawImage(this.preview, ctx, x, y, 1, angle, canvas, $container.width()!, $container.height()!);
        
        return {
            src,
            srcEncoded
        }
    }
}