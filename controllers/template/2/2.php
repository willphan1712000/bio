<?php

namespace controllers\template;

use controllers\template\ITemplate;

class Template2 extends TemplateStyle implements ITemplate
{
  public function html($props)
  {
    $html = $this->commonStyle($props) . '
            <div id="template-container">
<style>
  .element {
    padding: 0px 10px 0px 10px;
  }
  .div {
    border-radius: 20px;
    display: flex;
    max-width: 480px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 10%;
  }
  .img {
    aspect-ratio: 1.25;
    object-fit: cover;
    object-position: center;
    width: 100%;
    align-self: stretch;
    border-radius: 20px 20px 0px 0px;
  }
  .div-2 {
    margin-top: 15px;
    text-align: center;
  }
  .div-3 {
    margin-top: 10px;
    text-align: center;
    padding: 0px 20px;
  }
  .div-4 {
    border-color: rgba(165, 165, 165, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #a5a5a5;
    align-self: stretch;
    min-height: 1px;
    margin-top: 21px;
    width: 100%;
  }
  .div-element {
    display: flex;
    margin-top: 4%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .div-element-btn {
    border-radius: 5px;
    border-color: rgba(158, 206, 0, 1);
    border-style: solid;
    border-width: 1px;
    align-self: start;
    color: #9ece00;
    text-align: center;
    justify-content: center;
    padding: 8% 10%;
    font: 600 13px Inter, sans-serif;
    width: 30vw;
  }
  .div-6 {
    display: flex;
    gap: 14px;
    font-size: 18px;
    color: #a5a5a5;
    font-weight: 400;
  }
  .img-2 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 35px;
  }
  .div-7 {
    font-family: Mate, sans-serif;
    margin: auto 0;
  }
  .div-9 {
    border-color: rgba(165, 165, 165, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #a5a5a5;
    align-self: stretch;
    min-height: 1px;
    margin-top: 21px;
    width: 100%;
  }
  .div-10 {
    display: flex;
    margin-top: 15px;
    width: 100%;
    max-width: 388px;
    gap: 20px;
    white-space: nowrap;
    justify-content: space-between;
  }
  .div-11 {
    display: flex;
    gap: 14px;
    font-size: 18px;
    color: #a5a5a5;
    font-weight: 400;
  }
  .img-3 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 35px;
  }
  .div-12 {
    font-family: Mate, sans-serif;
    margin: auto 0;
  }
  .div-13 {
    border-radius: 5px;
    border-color: rgba(158, 206, 0, 1);
    border-style: solid;
    border-width: 1px;
    align-self: start;
    color: #9ece00;
    text-align: center;
    justify-content: center;
    padding: 12px 37px;
    font: 600 13px Inter, sans-serif;
  }
  .div-14 {
    border-color: rgba(165, 165, 165, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #a5a5a5;
    align-self: stretch;
    min-height: 1px;
    margin-top: 21px;
    width: 100%;
  }
  .div-15 {
    display: flex;
    margin-top: 15px;
    width: 100%;
    max-width: 388px;
    gap: 20px;
    white-space: nowrap;
    justify-content: space-between;
  }
  .div-16 {
    display: flex;
    gap: 14px;
    font-size: 18px;
    color: #a5a5a5;
    font-weight: 400;
  }
  .img-4 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 35px;
  }
  .div-17 {
    font-family: Mate, sans-serif;
    margin: auto 0;
  }
  .div-18 {
    border-radius: 5px;
    border-color: rgba(158, 206, 0, 1);
    border-style: solid;
    border-width: 1px;
    align-self: start;
    color: #9ece00;
    text-align: center;
    justify-content: center;
    padding: 12px 37px;
    font: 600 13px Inter, sans-serif;
  }
  .div-19 {
    border-color: rgba(165, 165, 165, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #a5a5a5;
    align-self: stretch;
    min-height: 1px;
    margin-top: 21px;
    width: 100%;
  }
  .div-20 {
    display: flex;
    margin-top: 15px;
    width: 100%;
    max-width: 388px;
    gap: 20px;
    white-space: nowrap;
    justify-content: space-between;
  }
  .div-21 {
    display: flex;
    gap: 14px;
    font-size: 18px;
    color: #a5a5a5;
    font-weight: 400;
  }
  .img-5 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 35px;
  }
  .div-22 {
    font-family: Mate, sans-serif;
    margin: auto 0;
  }
  .div-23 {
    border-radius: 5px;
    border-color: rgba(158, 206, 0, 1);
    border-style: solid;
    border-width: 1px;
    align-self: start;
    color: #9ece00;
    text-align: center;
    justify-content: center;
    padding: 12px 37px;
    font: 600 13px Inter, sans-serif;
  }
  .div-24 {
    border-color: rgba(165, 165, 165, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #a5a5a5;
    align-self: stretch;
    min-height: 1px;
    margin-top: 21px;
    width: 100%;
  }
  .div-25 {
    color: #fff;
    margin-top: 48px;
    font: 400 25px Lilita One, sans-serif;
  }
  .div-26 {
    color: #fff;
    margin-top: 56px;
    font: 400 25px Lilita One, sans-serif;
  }
</style>
<div class="div bg-white" id="template__background">
  <div id="avatar__container--wrapper" style="position: relative;">
    <div id="avatar__container" style="overflow: hidden;">
      <div>
        <img draggable=false
          loading="lazy"
          src="' . $props['imgPath'] . '"
          class="img" id="avatar"
        />
      </div>
    </div>
  </div>
  <div id="text">
  <h1 class="div-2 template__font template_name">' . $props['info']['name']->getHTML() . '</h1>
   <p class="div-3 template__font template_title">
      ' . $props['info']['position']->getHTML() . '</p>
      <p class="div-3 template__font template_org">
      ' . $props['info']['organization']->getHTML() . '</p>
  <textarea class="des template__font template_des" style="border: none;
      resize: none;
      background: transparent;
      width: 80vw;
      text-align: center;
      margin: 0px;
      height: 70px;
      scrollbar-width: none;">' . $props['info']['description']->getHTML() . '</textarea>
  <div class="div-4"></div>

  <div class="element div-5 div-element">
    <div class="div-6">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28bd83e2e7a73498ef67b3c607acc6ceadd675877e2aecfec365f247d45fa1d0?apiKey=076e1b6fb9564c54879ab1846aa9f941&"
        class="img-2"
      />
      <div class="div-7">Facebook</div>
    </div>
    ' . $props['info']['Facebook']->getHTML('<div class="div-element-btn">View</div>') . '
  </div>
  <div class="div-9"></div>
  <div class="element div-element">
    <div class="div-11">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9eaf3b7553e0a8f0e0adf9bc9f13b0ccfc92aa86614d60a3d03732fa196b5fe?apiKey=076e1b6fb9564c54879ab1846aa9f941&"
        class="img-3"
      />
      <div class="div-12">Youtube</div>
    </div>
    ' . $props['info']['Youtube']->getHTML('<div class="div-element-btn">View</div>') . '
    
  </div>
  <div class="div-14"></div>
  <div class="element div-element">
    <div class="div-16">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b14d33a339f2682c4c1ddc1f827bf69d8192f581ac440f31aafb3898666bbfc7?apiKey=076e1b6fb9564c54879ab1846aa9f941&"
        class="img-4"
      />
      <div class="div-17">Instagram</div>
    </div>
    ' . $props['info']['Instagram']->getHTML('<div class="div-element-btn">View</div>') . '
  </div>
</div>
</div>
</div>
            ';
    echo $html;
  }
}
