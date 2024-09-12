<?php
class Setting {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public function render() {
        echo '
            <style>
                '.$this->props["container"].' {
                    display: flex;
                }
                '.$this->props["container"].' .setting_bar {
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    overflow: auto;
                    padding: 10px;
                    align-items: center;
                }
                '.$this->props["container"].' .setting_bar::-webkit-scrollbar {
                    display: none;
                }
                    
                '.$this->props["container"].' .setting_bar .ele {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    cursor: pointer;
                    height: fit-content;
                }
                '.$this->props["container"].' .setting_bar i {
                    margin-right: 5px;
                }
                '.$this->props["container"].' .setting_bar .signout button {
                    color: #000;
                }
                '.$this->props["container"].' .setting_bar .delete {
                    color: #fff;
                    background-color: red;
                    height: 50%;
                    font-size: 12px;
                }
            </style>
            <div class="setting_bar">
                <div class="ele background typebox"><i class="fa-solid fa-image"></i> Background Color</div>
                <div class="ele font typebox"><i class="fa-solid fa-font"></i> Font</div>
                <div class="ele fontSize typebox"><i class="fa-solid fa-expand"></i> Font Size</div>
                <div class="ele fontColor typebox"><i class="fa-solid fa-droplet"></i> Font Color</div>
                <div class="ele image typebox"><i class="fa-solid fa-image"></i>Save PDF</div>
                <div class="ele bioBtn typebox">'.bioTemplateButton($this->props['username'])->render("bioBtn").'</div>
                <div class="ele signout">
                <form action="" method="POST">
                <button name="signout" class="ele logout typebox"><i class="fa-solid fa-right-from-bracket"></i> Log Out</button>
                </form>
                </div>
                <div class="ele delete typebox"><i class="fa-solid fa-trash"></i> Delete Account</div>
            </div>
        ';
    }
}

function setting($props) {
    return new Setting($props);
}