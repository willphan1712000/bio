<?php

namespace component;

use config\Bio;
use config\SystemConfig;
use config\ProductionConfig;

class BioTemplateButton
{
    private $username;

    public function __construct($username)
    {
        $this->username = $username;
    }

    public function render($container)
    {
        $href = $this->username === "" ? "" : "?username=" . $this->username;
        if (ProductionConfig::$bio === Bio::BASIC) {
            $display = 'none';
        } elseif (ProductionConfig::$bio === Bio::PRO) {
            $display = SystemConfig::URLExtraction(queryStr: 'share') ? "none" : "flex";
        }

        return '
            <style>
                ' . $container . ' {
                    display: ' . $display . ';
                    padding: 0 !important;
                    margin: 0 !important;
                    box-sizing: border-box !important;
                    border-radius: 25px !important;
                    border: none !important;
                }
                ' . $container . ' .templateBtn {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                ' . $container . ' .templateBtn > a {
                    text-decoration: none;
                    background-color: #4158D0;
                    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
                    border-radius:  25px;
                    color: #fff;
                    padding: 20px;
                }
            </style>
            <div class="templateBtn">
                <a href="/@template' . $href . '">Bio Template</a>
            </div>
        ';
    }
}

function bioTemplateButton($username)
{
    return new bioTemplateButton($username);
}
