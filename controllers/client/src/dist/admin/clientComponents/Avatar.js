"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const W_1 = require("../../client/src/Web-Development/W");
const WW_1 = require("../../client/src/Web-Development/WW");
const AvatarButton_1 = __importDefault(require("./AvatarButton"));
const EditAvatar_1 = __importDefault(require("./EditAvatar"));
class Avatar {
    constructor(options) {
        this.avatarButton = new AvatarButton_1.default("#avatar__container");
        this.editAvatar = new EditAvatar_1.default("#admin");
        this.element = document.querySelector(options.img);
        this.preview = this.editAvatar.getImg().element;
        this.options = options;
        this.reset = options.reset;
        this.src = this.reset;
        const cancel = this.editAvatar.getCancel().element;
        const accept = this.editAvatar.getAccept().element;
        const reset = this.avatarButton.getReset().element;
        const edit = this.avatarButton.getEdit().element;
        const deleteBtn = this.avatarButton.getDelete().element;
        this.upload = (0, W_1.$$)(this.avatarButton.getUpload().class).uploadFile(e => {
            this.editAvatar.show();
            this.preview.src = e;
            this.transform = (0, W_1.$$)(this.editAvatar.getWrapper().class, this.editAvatar.getFrame().class).transform();
            this.avatarButton.enableEdit();
        });
        cancel.addEventListener('click', e => {
            e.stopPropagation();
            this.editAvatar.hide();
        });
        accept.addEventListener("click", e => {
            e.stopPropagation();
            const result = this.apply();
            this.element.src = result.src;
            this.setSrc(result.srcEncoded);
            this.editAvatar.hide();
        });
        reset.addEventListener('click', e => {
            e.stopPropagation();
            this.setSrc(this.reset);
            this.element.src = this.reset;
        });
        edit.addEventListener('click', e => {
            e.stopPropagation();
            this.editAvatar.show();
        });
        if (this.options.imgName === 'unknown.png') {
            this.avatarButton.disableDelete();
        }
        else {
            this.avatarButton.enableDelete();
            deleteBtn.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {
                e.stopPropagation();
                const r = yield (0, WW_1.$$$)('/data/api/removeAvatar.php', {
                    username: this.options.username,
                    img: this.options.imgName
                }).api().post();
                if (r) {
                    this.reset = '/img/unknown.png';
                    this.setSrc(this.reset);
                    this.element.src = this.reset;
                    this.avatarButton.disableDelete();
                }
            }));
        }
    }
    setSrc(src) {
        this.src = src;
    }
    getSrc() {
        return this.src;
    }
    apply() {
        const [canvas, ctx] = this.upload.createCanvas(700, 700);
        const $container = $(this.editAvatar.getFrame().class);
        const [x, y, angle] = this.transform.exportData();
        const [, src, srcEncoded] = this.upload.drawImage(this.preview, ctx, x, y, 1, angle, canvas, $container.width(), $container.height());
        return {
            src,
            srcEncoded
        };
    }
}
exports.Avatar = Avatar;
