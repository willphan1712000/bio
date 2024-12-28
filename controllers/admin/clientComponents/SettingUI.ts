import Background from "./Background";
import Font from "./Font";
import FontColor from "./FontColor";
import FontSize from "./FontSize";
import Info from "./Info";

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
    private info: Info;

    constructor(params: Params) {
        this.params = params;

        this.background = new Background(".setting_bar .background", params.css.background, "#template__background");
        this.fontSize = new FontSize(".setting_bar .fontSize", parseInt(params.css.fontSize), ".template__font");
        this.font = new Font(".setting_bar .font", params.css.font, ".template__font");
        this.fontColor = new FontColor(".setting_bar .fontColor", params.css.fontColor, ".template__font")
        // this.avatar = new AvatarClass({
        //     reset: params.imgPath,
        //     img: "#avatar",
        //     username: params.username,
        //     imgName: params.imgName,
        // })
        this.info = new Info({name: ".template_name", target: ".card-back-container .name"}, {name: ".template_org", target: ".card-back-container .organization"}, {name: ".template_des", target: ""});
    }
}