<?php
namespace component;
// This is for showing social media item on template
class SocialMediaIcon {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public function render() {
        $props = $this->props;
        $certain = ["Mobile", "Work", "Email", "Website"];
        $socialNameArr = $props["social"];
        $socialIconArr = $props["icon"];
        $icon = "";
        for($i = 0; $i < count($socialNameArr); $i++) {
            if(in_array($socialNameArr[$i], $certain)) {
                $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
                $icon .= $props['info']->social($socialNameArr[$i], '<div class="socialUser '.$socialNameArr[$i].'" style="display: '.$props['info']->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p></div></div></div></div>')[$props['mode']];
            }
        }
        return '
            <style>
                .social__img i {
                    font-size: 20px;
                }
                .social__info span {
                    margin-left: 10px;
                }
                .social__info label {
                    margin-bottom: 5px;
                }
                .info__img {
                    aspect-ratio: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    position: relative;
                    padding-left: 10px;
                }
                .socialUser {
                    height: 35px;
                    width: 40vw;
                    margin: 2% 0%;
                    background-color: var(--main-color);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: row;
                }
            </style>
        '.$icon;
    }
}

function socialMediaIcon($props) {
    return new SocialMediaIcon($props);
}