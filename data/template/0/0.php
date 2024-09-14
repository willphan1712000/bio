
<?php
class Template0 extends Template {
    private $props;
    public function __construct($props) {
        $this->props = $props;
    }
    public function html() {
        $props = $this->props;
        $certain = ["Mobile", "Work", "Email", "Website"];
        $socialNameArr = $props["social"];
        $socialIconArr = $props["icon"];
        $html1 = "";
        for($i = 0; $i < count($socialNameArr); $i++) {
            if(in_array($socialNameArr[$i], $certain)) {
                $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
                $html1 .= $props['info']->social($socialNameArr[$i], '<div class="socialUser '.$socialNameArr[$i].'" style="display: '.$props['info']->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p></div></div></div></div>')[$props['mode']];
            }
        }
        
        $html = '
            <style>
            .social__img i {
                font-size: 20px;
            }
            </style>
            <div class="adminSection">
                <div id="template-container">
                    <div class="info">
                        <div class="info__img">
                            <div class="info__img--location">
                                <img draggable=false src='.$props['imgPath'].' alt="" draggable="false">
                            </div>
                        </div>
                        <div class="info__about">
                            <div class="info__name">
                                <div>
                                    <h1>'.$props['info']->name()[$props['mode']].'</h1>
                                </div>
                            </div>
                            <div class="info__org">
                                <div>
                                    <h2>'.$props['info']->organization()[$props['mode']].'</h2>
                                </div>
                            </div>
                            <div class="info__des">
                                <div>
                                    <h3>'.$props['info']->description()[$props['mode']].'</h3>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div id="social-media" style="padding: 0% 8%;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                margin-top: 5%;">
                                '.$html1.'
                        </div>
                </div>
            </div>';
            echo $html;
        }
}
