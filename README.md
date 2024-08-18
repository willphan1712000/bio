## This project is for people to share their information as bio format

# Below is how it works
- user registers their own accout
- user logs in to their account
- user is able to put their links to boxes in the admin page
- user hits "save" button to save everything on server
- after this, it will go back to user page to view main bio page

# Our mission is to integrate advanced technology to the bio web application to make it more capable of making our customers feel satisfied and safe to use our application

## Components in each web template consists of
- style (get from figma code generator)
- html (get from figma code generator)
- javascript (rarely appears)

### Props shortcuts for creating a template
- Image
```PHP
draggable="false" src=<?=$props['imgPath'];?>
```
- Name
```PHP
<?=$infoObject->name()['a'];?>
```
- Organization
```PHP
<?=$infoObject->organization()['a'];?>
```
- Description
```PHP
<?=$infoObject->description()['a'];?>
```
- Social Media
```PHP
<?=$infoObject->social('socialName', 'htmlBlock')['a'];?>
```
- Below are PHP code to integrate blocks of link that are not parts of a default template

```PHP
<div id="social-media">
    <?php
        $certain = ['Mobile', 'Work', 'Email', 'Website'];
        for($i = 0; $i < count($socialNameArr); $i++) {
            if(in_array($socialNameArr[$i], $certain)) {
            $displayString = SystemConfig::makeSpaceBetweenCharacters($socialNameArr[$i]);
            echo $infoObject->social($socialNameArr[$i], '<div class="socialUser '.$socialNameArr[$i].'" style="display: '.$infoObject->social($socialNameArr[$i])['display'].';"><div class="social__img info__img">'.$socialIconArr[$i].'</div><div class="social__info info__about"><div class="info__name"><div><p>'.$displayString.'</p></div></div></div></div>')['a'];
            }
        }
    ?>
</div>
```