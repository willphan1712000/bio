## This project is for people to share their information as bio format

# Below is how it works
- user registers their own accout
- user logs in to their account
- user is able to put their links to boxes in the admin page
- user hits "save" button to save everything on server
- after this, it will go back to user page to view main bio page

# Our mission is to integrate advanced technology to the bio web application to make it more capable of making our customers feel satisfied and safe to use our application

## Components in each web template consists of
- socialNameArr array
- socialIconArr
- style (get from figma code generator)
- html (get from figma code generator)
- javascript (rarely appears)
- userFooter (including Share, Save e-Business card, QR Code, Save Contact, Edit)
- copyright

### Props object consists of
- infoObject (includes all necessary information from individual user)
- props -> username
- props -> url
- props -> imgPath
- props -> g
- props -> themeid

### Props shortcuts for creating a template
- Image : src="<?=$props['imgPath']."?v=".time();?>"

- Name : <?=$infoObject->name()['a'];?>

- Organization: <?=$infoObject->organization()['a'];?>

- Description: <?=$infoObject->description()['a'];?>

- Social Media: <?=$infoObject->social('socialName', 'htmlBlock')['a'];?>

- Below are PHP code to integrate blocks of link that are not parts of a default template

```PHP
<div id="social-media">
    <?php
        $exception = ["Facebook", "Instagram", "Website", "Tiktok", "Youtube"];
        for($i = 0; $i < count($socialNameArr); $i++) {
            if(!in_array($socialNameArr[$i], $exception)) {
            $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
            echo '
                <div class="social '.$socialNameArr[$i].'" style="display: '.$infoObject->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p>'.$infoObject->social($socialNameArr[$i])['a'].'</div></div></div></div>
            ';
            }
        }
    ?>
</div>