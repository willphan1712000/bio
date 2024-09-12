import AvatarButton from "../components/AvatarButton";
import EditAvatar from "../components/EditAvatar";
import { Avatar } from "./Avatar";
import Background from "./Background";
import Font from "./Font";
import FontColor from "./FontColor";
import FontSize from "./FontSize";

export type Params = {
    css: any,
    imgPath: string,
    username: string,
    imgName: string,
}

export class SettingUI {
    private params: Params;
    private background : Background;
    private fontSize : FontSize;
    private font : Font;
    private fontColor: FontColor;
    private avatar: Avatar;

    constructor(params: Params) {
        this.params = params;

        this.background = new Background(".setting_bar .background", params.css.background, "#template__background");
        this.fontSize = new FontSize(".setting_bar .fontSize", parseInt(params.css.fontSize), ".template__font");
        this.font = new Font(".setting_bar .font", params.css.font, ".template__font");
        this.fontColor = new FontColor(".setting_bar .fontColor", params.css.fontColor, ".template__font")
        this.avatar = new Avatar({
            reset: params.imgPath,
            img: "#avatar",
            username: params.username,
            imgName: params.imgName,
        })
    }
}