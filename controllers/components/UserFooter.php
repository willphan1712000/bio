<?php

namespace component;

use config\SystemConfig;
use component\BioTemplateButton;

class UserFooter
{
    private $username;

    public function __construct()
    {
        $this->username = SystemConfig::URLExtraction();
    }

    public function render($container)
    {
        echo '
            <style>
                ' . $container . ' {
                    width: 100%;
                }
                ' . $container . ' #share {
                    border-top: solid 2px #000;
                    width: 100%;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                ' . $container . ' #share .options {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    overflow-y: hidden;
                    overflow-x: auto;
                    padding: 0px 10px;
                    scrollbar-width: none;
                }
                ' . $container . ' #share .options::-webkit-scrollbar {
                    display: none;
                }
                ' . $container . ' .share__btn {
                    height: 50px;
                    width: auto;
                    margin: 10px;
                    background-color: #fff;
                    border-radius: 15px;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    color: #000;
                    flex-shrink: 0;
                    padding: 20px;
                    position: relative;
                    display: flex;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                }
                ' . $container . ' .share__btn i {
                    margin-right: 5px;
                }
                ' . $container . ' .shareWindow_parent {
                    background-color: #0000002b;
                    width: 100vw;
                    height: 100vh;
                    height: 100svh;
                    height: 100dvh;
                    backdrop-filter: blur(6px);
                    position: fixed;
                    display: flex;
                    z-index: 99;
                    justify-content: center;
                    align-items: center;
                    top: 0;
                    left: 0;
                    visibility: hidden;
                    opacity: 0;
                    transition: all .2s cubic-bezier(0.4, 0, 0.58, 1.4)
                }
                ' . $container . ' .shareWindow_parent.active {
                    visibility: visible;
                    opacity: 1;
                }
                ' . $container . ' .shareWindow_child {
                    border-radius: 20px;
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    padding: 20px;
                    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                    width: 600px;
                    margin: 0px 10px;
                }
                ' . $container . ' .shareWindow_child > i {
                    padding: 10px;
                    margin-left: auto;
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                ' . $container . ' .shareWindow_child > i:hover {
                    background-color: #f0f0f0;
                    border-radius: 50%;
                }
                ' . $container . ' .shareWindow_child .shareWindow__qr {
                    width: 100%;
                    object-fit: cover;
                }
                ' . $container . ' .shareWindow__btn {
                    width: 100%;
                    height: 50px;
                    border-radius: 10px;
                    background-color: var(--main-color);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    margin: 5px 0px;
                    padding: 10px;
                    text-align: center;
                }
                ' . $container . ' .shareWindow__btn.shareWindow__download i {
                    margin-right: 5px;
                }
                ' . $container . ' .shareWindow__btn.shareWindow__link input {
                    background-color: var(--main-color);
                    border: none;
                    border-radius: 10px;
                    padding: 10px;
                }
                ' . $container . ' .shareWindow__btn.shareWindow__link i {
                    margin-left: 5px;
                }
                ' . $container . ' .shareWindow__btn.shareWindow__link i.check {
                    display: none;
                }
                ' . $container . ' .shareWindow_parent.image {
                    padding: 50px;
                }
                ' . $container . ' .shareWindow_parent.image .shareWindow_child {
                    aspect-ratio: 9/16;
                }
                @media screen and (max-width: 600px) {
                    ' . $container . ' #share .options {
                        justify-content: start;
                    }
                }
            </style>
            <div class="shareWindow_parent qrcode">
                <div class="shareWindow_child">
                    <i class="fa-solid fa-x"></i>
                    <div class="shareWindow__close"></div>
                    <img draggable=false class="shareWindow__qr" src="/user/' . $this->username . '/qr-code.png" alt=""><a class="shareWindow__btn shareWindow__download" download href="/user/' . $this->username . '/qr-code.png" style="text-decoration: none; color: #000;"><i class="fa-solid fa-arrow-down"></i>Download</a>
                    <div class="shareWindow__btn shareWindow__link">Copy Link<i class="fa-regular fa-copy copy"></i><i class="fa-solid fa-check check"></i></div>
                </div>
            </div>
            <div id="share">
                <p>Drag to see more options</p>
                <div class="options">
                    <div class="bioBtn share__btn">' . (new BioTemplateButton($this->username))->render(".bioBtn") . '</div>
                    <div class="share__btn share"><i class="fa-solid fa-share"></i>Share</div>
                    <div class="share__btn save"><a style="text-decoration: none; color: #000;" href="/user/' . $this->username . '/vcard.php"><i class="fa-solid fa-download"></i> Save Contact</a></div>
                    <div class="share__btn qr"><i class="fa-solid fa-share"></i>QR Code</div>
                    <div class="share__btn edit" style="display: ' . (SystemConfig::URLExtraction(queryStr: 'share') ? "none" : "flex") . '"><a style="text-decoration: none; color: #000;" href="/' . $this->username . '/admin"><i class="fa-solid fa-pen-to-square"></i> Bio</a></div>
                </div>
            </div>
        ';
    }
}

function userFooter($props)
{
    return new UserFooter($props);
}
