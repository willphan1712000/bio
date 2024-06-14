<?php

class BioTemplateButton {
    private $username;

    public function __construct($username) {
        $this->username = $username;
    }

    public function render($container) {
        $href = $this->username === "" ? "" : "?username=".$this->username;
        echo '
            <style>
                .'.$container.' .templateBtn {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 20px;
                }
                .'.$container.' .templateBtn > a {
                    text-decoration: none;
                    background-color: #4158D0;
                    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
                    border-radius:  25px;
                    color: #fff;
                    padding: 20px;
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                }
            </style>
            <div class="templateBtn">
                <a href="/template'.$href.'">Bio Template</a>
            </div>
        ';
    }
}

function bioTemplateButton($username) {
    return new bioTemplateButton($username);
}