<style>
  #social-media {
    padding: 0% 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
}
.social__img i {
  font-size: 20px;
}
</style>
<div class="adminSection">
    <div id="template-container">
        <div class="info">
            <div class="info__img">
                <div class="info__img--location">
                    <img src=<?=$props['imgPath'];?> alt="" draggable="false">
                </div>
            </div>
            <div class="info__about">
                <div class="info__name">
                    <div>
                        <h1><?=$infoObject->name()['a'];?></h1>
                    </div>
                </div>
                <div class="info__org">
                    <div>
                        <h2><?=$infoObject->organization()['a'];?></h2>
                    </div>
                </div>
                <div class="info__des">
                    <div>
                        <h3><?=$infoObject->description()['a'];?></h3>
                    </div>
                </div>
            </div>
            </div>
            <div id="social-media">
                <?php
                    $certain = ['Mobile', 'Work', 'Email', 'Website'];
                    $socialNameArr = $props['social'];
                    $socialIconArr = $props['icon'];
                    for($i = 0; $i < count($socialNameArr); $i++) {
                        if(in_array($socialNameArr[$i], $certain)) {
                        $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
                        echo $infoObject->social($socialNameArr[$i], '<div class="socialUser '.$socialNameArr[$i].'" style="display: '.$infoObject->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p></div></div></div></div>')['a'];
                        }
                    }
                ?>
            </div>
    </div>
</div>