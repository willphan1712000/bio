<?php
class TermsCheckBox {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public function render() {
        echo '
            <style>
                '.$this->props["container"].' .termsandconditions {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                '.$this->props["container"].' .termsandconditions #terms {
                    width: 20px;
                    margin: 0px 10px 5px 0px !important;
                }
            </style>
            <div class="termsandconditions">
                <input type="checkbox" id="terms" name="terms">
                <label for="terms">I agree to the <a href="/terms">terms and conditions</a></label>
            </div>
        ';
    }
}

function termsCheckBox($props) {
    return new TermsCheckBox($props);
}