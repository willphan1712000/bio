<?php
namespace component\template;

class Template1 {
    private $props;
    public function __construct($props) {
        $this->props = $props;
    }
    public function html() {
        $props = $this->props;
        
        $html = '
            <div id="template-container">
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
  .div {
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    max-width: 480px;
    width: 100%;
    padding-bottom: 10px;
    flex-direction: column;
    margin: 0 auto;
  }
  .div-2 {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
    border-radius: 20px 20px 0px 0px;
  }
  .div-3 {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    width: 132px;
    align-items: center;
    justify-content: center;
    height: 132px;
    padding: 0 4px;
    margin-top: 20px;
  }
  .img {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    width: 100%;
    border-radius: 50%;
  }
  .div-4 {
    margin-top: 15px;
    text-align: center;
  }
  .div-5 {
    text-align: center;
    margin-top: 10px;
  }
  .div-6 {
    border-radius: 5px;
    background-color: #fff;
    align-self: stretch;
    margin-top: 10px;
    align-items: center;
    color: #29b27c;
    justify-content: center;
    padding: 10px 80px;
    font: 500 20px Inter, sans-serif;
    text-align: center;
  }
  .div-7 {
    display: flex;
    margin-top: 15px;
    align-items: center;
    font-size: 9px;
    color: #e2fff3;
    font-weight: 300;
    text-align: center;
    width: 100%;
    justify-content: center;
  }
  .div-8 {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .img-2 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 45px;
    border-radius: 10px;
    align-self: center;
  }
  .div-9 {
    margin-top: 9px;
    color: #fff;
  }
  .div-10 {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    flex: 1;
  }
  .img-3 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 45px;
    border-radius: 10px;
    align-self: center;
  }
  .div-11 {
    margin-top: 9px;
    color: #fff;
  }
  .div-12 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    flex: 1;
  }
  .img-4 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 45px;
    border-radius: 10px;
    align-self: center;
  }
  .div-13 {
    margin-top: 9px;
    color: #fff;
  }
  .div-14 {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    flex: 1;
  }
  .img-5 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 45px;
    border-radius: 10px;
    align-self: center;
  }
  .div-15 {
    margin-top: 9px;
    color: #fff;
  }
  .div-16 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
  .img-6 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 45px;
    border-radius: 10px;
  }
  .div-17 {
    margin-top: 9px;
    color: #fff;
  }
  .div-18 {
    display: flex;
    margin-top: 15px;
    width: 100%;
    flex-direction: column;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    white-space: nowrap;
    padding: 0 27px;
  }
  .div-19 {
    color: #94bcac;
    font: 500 15px Inter, sans-serif;
  }
  .div-20 {
    border-radius: 5px;
    background-color: #29b27c;
    margin-top: 16px;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 17px 60px;
  }
  .div-21 {
    border-radius: 5px;
    background-color: #29b27c;
    margin-top: 16px;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 18px 60px;
  }
  #template__background {
      background: '.$props['css']['background'].';
  }
  .template__font {
      font-family: '.$props['css']['font'].';
      font-size: '.$props['css']['fontSize'].';
      color: '.$props['css']['fontColor'].';
  }
  .template_name {
    font-size: calc('.$props['css']['fontSize'].' + 15px);
  }
</style>
<div class="div">
  <div class="div-2" id="template__background">
    <div id="avatar__container" class="div-3">
      <img id="avatar" draggable=false
        loading="lazy"
        src='.$props['imgPath'].'
        class="img"
      />
    </div>
    <div id="text">
      <h1 class="div-4 template__font template_name">'.$props['info']->name()[$props['mode']].'</h1>
      <p class="div-5 template__font template_org">
      '.$props['info']->organization()[$props['mode']].'</p>
        <p class="div-5 template__font template_des">'.$props['info']->description()[$props['mode']].'
      </p>
    </div>
    '.$props['info']->mobile('<div class="div-6">Contact us</div>')[$props['mode']].'
    <div class="div-7">
      
      '.$props['info']->social('Website', '<div class="div-8">
        <img
          loading="lazy"
          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/c710ffbff614f648caeb0c27694b4bbbb4ecf6bd8f4b08f0ba4a02287c7ed502?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c710ffbff614f648caeb0c27694b4bbbb4ecf6bd8f4b08f0ba4a02287c7ed502?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c710ffbff614f648caeb0c27694b4bbbb4ecf6bd8f4b08f0ba4a02287c7ed502?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c710ffbff614f648caeb0c27694b4bbbb4ecf6bd8f4b08f0ba4a02287c7ed502?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c710ffbff614f648caeb0c27694b4bbbb4ecf6bd8f4b08f0ba4a02287c7ed502?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c710ffbff614f648caeb0c27694b4bbbb4ecf6bd8f4b08f0ba4a02287c7ed502?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c710ffbff614f648caeb0c27694b4bbbb4ecf6bd8f4b08f0ba4a02287c7ed502?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c710ffbff614f648caeb0c27694b4bbbb4ecf6bd8f4b08f0ba4a02287c7ed502?apiKey=076e1b6fb9564c54879ab1846aa9f941&"
          class="img-2"
        />
        <div class="div-9">About us</div>
      </div>')[$props['mode']].'
      
      '.$props['info']->social('Facebook', '<div class="div-10">
        <img
          loading="lazy"
          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/80762aba79ce7dd31ac3f0008b48c3be758aad2361b212b59e1409f47b10fcf5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/80762aba79ce7dd31ac3f0008b48c3be758aad2361b212b59e1409f47b10fcf5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80762aba79ce7dd31ac3f0008b48c3be758aad2361b212b59e1409f47b10fcf5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/80762aba79ce7dd31ac3f0008b48c3be758aad2361b212b59e1409f47b10fcf5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/80762aba79ce7dd31ac3f0008b48c3be758aad2361b212b59e1409f47b10fcf5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80762aba79ce7dd31ac3f0008b48c3be758aad2361b212b59e1409f47b10fcf5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/80762aba79ce7dd31ac3f0008b48c3be758aad2361b212b59e1409f47b10fcf5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/80762aba79ce7dd31ac3f0008b48c3be758aad2361b212b59e1409f47b10fcf5?apiKey=076e1b6fb9564c54879ab1846aa9f941&"
          class="img-3"
        />
        <div class="div-11">Facebook</div>
      </div>')[$props['mode']].'
      
      '.$props['info']->social('Instagram', '<div class="div-12">
        <img
          loading="lazy"
          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/c542f1f96154579420d94989554b5ba7ff48f5eb8c106707b52c4daac764c249?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c542f1f96154579420d94989554b5ba7ff48f5eb8c106707b52c4daac764c249?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c542f1f96154579420d94989554b5ba7ff48f5eb8c106707b52c4daac764c249?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c542f1f96154579420d94989554b5ba7ff48f5eb8c106707b52c4daac764c249?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c542f1f96154579420d94989554b5ba7ff48f5eb8c106707b52c4daac764c249?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c542f1f96154579420d94989554b5ba7ff48f5eb8c106707b52c4daac764c249?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c542f1f96154579420d94989554b5ba7ff48f5eb8c106707b52c4daac764c249?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c542f1f96154579420d94989554b5ba7ff48f5eb8c106707b52c4daac764c249?apiKey=076e1b6fb9564c54879ab1846aa9f941&"
          class="img-4"
        />
        <div class="div-13">Instagram.</div>
      </div>')[$props['mode']].'
      
      '.$props['info']->social('Youtube', '<div class="div-14">
        <img
          loading="lazy"
          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/cdc52d9b192622532a05c2fd54ed1952554289ba262d9741ccb6701add723c7c?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdc52d9b192622532a05c2fd54ed1952554289ba262d9741ccb6701add723c7c?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdc52d9b192622532a05c2fd54ed1952554289ba262d9741ccb6701add723c7c?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdc52d9b192622532a05c2fd54ed1952554289ba262d9741ccb6701add723c7c?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdc52d9b192622532a05c2fd54ed1952554289ba262d9741ccb6701add723c7c?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdc52d9b192622532a05c2fd54ed1952554289ba262d9741ccb6701add723c7c?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdc52d9b192622532a05c2fd54ed1952554289ba262d9741ccb6701add723c7c?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cdc52d9b192622532a05c2fd54ed1952554289ba262d9741ccb6701add723c7c?apiKey=076e1b6fb9564c54879ab1846aa9f941&"
          class="img-5"
        />
        <div class="div-15">Youtube</div>
      </div>')[$props['mode']].'
      
      '.$props['info']->social('Tiktok', '<div class="div-16">
        <img
          loading="lazy"
          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/facfb97eaa39399f145bec839cec7dfbd9dcf4fc47980e44d691ff08a33406b5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/facfb97eaa39399f145bec839cec7dfbd9dcf4fc47980e44d691ff08a33406b5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/facfb97eaa39399f145bec839cec7dfbd9dcf4fc47980e44d691ff08a33406b5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/facfb97eaa39399f145bec839cec7dfbd9dcf4fc47980e44d691ff08a33406b5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/facfb97eaa39399f145bec839cec7dfbd9dcf4fc47980e44d691ff08a33406b5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/facfb97eaa39399f145bec839cec7dfbd9dcf4fc47980e44d691ff08a33406b5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/facfb97eaa39399f145bec839cec7dfbd9dcf4fc47980e44d691ff08a33406b5?apiKey=076e1b6fb9564c54879ab1846aa9f941&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/facfb97eaa39399f145bec839cec7dfbd9dcf4fc47980e44d691ff08a33406b5?apiKey=076e1b6fb9564c54879ab1846aa9f941&"
          class="img-6"
        />
        <div class="div-17">Tiktok</div>
      </div>')[$props['mode']].'
    </div>
  </div>
  <div id="social-media">
    '.socialMediaIcon($props)->render().'
</div>
</div>
</div>
            ';
            echo $html;
        }
}