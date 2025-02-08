<?php

namespace controllers\template;

use config\SystemConfig;
use controllers\template\ITemplate;

class Template9 extends TemplateStyle implements ITemplate
{
    public function html($props)
    {
        $icon = SystemConfig::socialIconArr();

        $html = $this->commonStyle($props) . '
<div id="template-container">
<style>
#social-media {
padding: 0% 8%;
}
.socialUser {
background-color: #ffe1e1 !important;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.beauty-store {
border-radius: 30px;
display: flex;
max-width: 480px;
width: 100%;
padding: 16px 0 0;
flex-direction: column;
align-items: center;
margin: 0 auto;
}

.logo-container {
border: solid 7px #ff8fab;
border-radius: 50%;
display: flex;
width: 193px;
height: 193px;
align-items: center;
justify-content: center;
}

.logo {
aspect-ratio: 0.97;
object-fit: cover;
object-position: center;
width: 100%;
border-radius: 50%;
}

.store-title {
text-shadow: 0 4px 20px rgba(255, 255, 255, 0.25), 0 0 20px #fff;
text-align: center;
padding-top: 10px;
}

.nav-buttons {
display: flex;
margin-top: 10px;
margin-bottom: 10px;
font-size: 15px;
color: #fff;
font-weight: 600;
justify-content: space-evenly;
width: 100%;
}

.nav-button {
font-family: Urbanist, sans-serif;
border-radius: 30px;
box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.25);
background-color: #ff8fab;
justify-content: center;
padding: 12px 40px;
color: #fff;
}

.footer {
background-color: #ff8fab;
align-self: stretch;
display: flex;
margin-top: 10px;
align-items: start;
gap: 20px;
justify-content: space-between;
align-items: center;
padding: 19px 58px;
position: -webkit-sticky; /* For Safari */
position: sticky;
bottom: 0;
width: 100%;
border-radius: 0px 0px 30px 30px;
}

.footer-icon {
aspect-ratio: 0.55;
object-fit: auto;
object-position: center;
width: 18px;
}

.footer-icon-large {
aspect-ratio: 0.97;
object-fit: auto;
object-position: center;
width: 32px;
align-self: stretch;
}

.footer-icon-medium {
aspect-ratio: 0.82;
object-fit: auto;
object-position: center;
width: 27px;
}

.footer-icon-square {
aspect-ratio: 0.88;
object-fit: auto;
object-position: center;
width: 29px;
}

.footer-icon-wide {
aspect-ratio: 1.47;
object-fit: auto;
object-position: center;
width: 34px;
align-self: stretch;
margin: auto 0;
}

.visually-hidden {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border: 0;
}
.des {
text-align: center;
padding: 1% 5%;
}
</style>

<main class="beauty-store" id="template__background">
<div id="avatar__container--wrapper" style="position: relative;">
    <div class="logo-container" id="avatar__container" style="overflow: hidden;">
        <img id="avatar" draggable=false loading="lazy" src="' . $props['imgPath'] . '" class="logo" alt="Beauty store logo" />
    </div>
</div>
<div id="text">
<h1 class="store-title template__font template_name">' . $props['info']['name']->getHTML() . '</h1>
 <p class="des template__font template_title">
' . $props['info']['position']->getHTML() . '</p>
<p class="des template__font template_org">
' . $props['info']['organization']->getHTML() . '</p>
<textarea class="des template__font template_des" style="border: none;
      resize: none;
      background: transparent;
      width: 80vw;
      text-align: center;
      margin: 0px;
      height: 50px;
      scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
</div>
<nav class="nav-buttons">
' . $props['info']['Website']->getHTML('<div class="nav-button">Shop All</div>') . '
' . $props['info']['Mobile']->getHTML('<div class="nav-button">Contact us</div>') . '
</nav>
<div id="social-media" class="flex flex-col gap-3">
    ' . $props['info']['Mobile']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fee0e0] p-[10px]"><div class="flex justify-center items-center">' . $icon['Mobile'] . '</div><p class="ml-[40px]">Mobile</p></div>') . '
    ' . $props['info']['Work']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fee0e0] p-[10px]"><div class="flex justify-center items-center">' . $icon['Work'] . '</div><p class="ml-[40px]">Work</p></div>') . '
    ' . $props['info']['Email']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fee0e0] p-[10px]"><div class="flex justify-center items-center">' . $icon['Email'] . '</div><p class="ml-[40px]">Email</p></div>') . '
    ' . $props['info']['Website']->getHTML('<div class="flex flex-row w-[60vw] rounded-[30px] bg-[#fee0e0] p-[10px]"><div class="flex justify-center items-center">' . $icon['Website'] . '</div><p class="ml-[40px]">Website</p></div>') . '
  </div>
<footer class="footer">
' . $props['info']['Facebook']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db6fbffb3e2aa916f4f11adeef0e403764cd3857a6f2cd91eb306e6a046e38c5?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon" alt="" />') . '
' . $props['info']['Instagram']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ce9a5b93101496d86b45b2af246ca2036999f090d70d709c4f3ce06bb68ccc?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon-large" alt="" />') . '
' . $props['info']['Website']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/796c2f9a30e5a6a38d1b204f5010bcf5b57685a59af1e250440f37d9ab1f5e43?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon-medium" alt="" />') . '
' . $props['info']['Tiktok']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fda2ccdede6a0ff4d33533a6cf9f7c56a1d7231e1c882e40db336ad8c5a46e5?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon-square" alt="" />') . '
' . $props['info']['Youtube']->getHTML('<img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30497f2e2b486df94a3dcaa71ac790f83870e98917a96a365c60a240226c5a42?apiKey=076e1b6fb9564c54879ab1846aa9f941&" class="footer-icon-wide" alt="" />') . '
</footer>
</main>
</div>
';
        echo $html;
    }
}
