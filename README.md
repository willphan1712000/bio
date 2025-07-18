# This project is for people to share their information as bio format

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

### Template ratio

- Web Browser: 1.7
- Card ratio: 1.6
- App: 16/9

### Template Style Contribution

- props gets passed down to template php file

```php
$props = [
    'username' => $username,
    'imgPath' => $imgPath,
    'info' => infoProcess($infoArray),
    'css' => $css
];
```

- For each contributed template style, we are going to add some special ids and classes to be modified by admin

| Where                             | id or class                                             | css                                                                                                                                                                                                                | php                                 |
| :-------------------------------- | :------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- |
| template background               | `id="template__background"`                             | `background: '.$props['css']['background'].';`                                                                                                                                                                     | none                                |
| template avatar container wrapper | `id="avatar__container--wrapper"`                       | `style="position: relative;" `                                                                                                                                                                                     | none                                |
| template avatar container         | `id="avatar__container"` `class="defaultTemplateClass"` | `style="overflow: hidden;" `                                                                                                                                                                                       | none                                |
| template avatar                   | `id="avatar"`                                           | none                                                                                                                                                                                                               | none                                |
| template text wrapper             | `id="text"`                                             | none                                                                                                                                                                                                               | none                                |
| template heading                  | `class="template__font template_name"`                  | `.template__font {font-family: '.$props['css']['font'].';font-size: '.$props['css']['fontSize'].';color: '.$props['css']['fontColor'].';} .template_name {font-size: calc('.$props['css']['fontSize'].' + 15px);}` | none                                |
| template organization             | `class="template__font template_org"`                   | `.template__font {font-family: '.$props['css']['font'].';font-size: '.$props['css']['fontSize'].';color: '.$props['css']['fontColor'].';}`                                                                         | none                                |
| template description              | `class="template__font template_des"`                   | `.template__font {font-family: '.$props['css']['font'].';font-size: '.$props['css']['fontSize'].';color: '.$props['css']['fontColor'].';}`                                                                         | none                                |
| social                            | none                                                    | none                                                                                                                                                                                                               | `socialMediaIcon($props)->render()` |

- CSS

```css
#template__background {
  background: ".$props[" css "][" background "].";
}
.template__font {
  font-family: ".$props[" css "][" font "].";
  font-size: ".$props[" css "][" fontSize "].";
  color: ".$props[" css "][" fontColor "].";
}
.template_name {
  font-size: calc(".$props[" css "][" fontSize "]." + 15px);
}
```

- HTML

```html
<div id="text">
  <h1 class="template__font template_name"></h1>
  <p class="des template__font template_title"></p>
  <p class="des template__font template_org"></p>
  <textarea
    class="des template__font template_des"
    style="border: none;
        resize: none;
        background: transparent;
        width: 80vw;
        height: 70px;
        text-align: center;
        margin: 0px;
        scrollbar-width: none;"
  ></textarea>
</div>
```

```html
<div id="avatar__container--wrapper" style="position: relative;">
  <div id="avatar__container" style="overflow: hidden;">
    <img id="avatar" draggable=false loading="lazy" src=' . $props['imgPath'] .
    ' class="img" />
  </div>
</div>
```

- Model Migration

```linux
./vendor/bin/doctrine-migrations diff && ./vendor/bin/doctrine-migrations migrate
```
