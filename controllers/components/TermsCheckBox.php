<?php
namespace component;
class TermsCheckBox {
    private $props;

    public function __construct($props) {
        $this->props = $props;
    }

    public function render() {
        return '
            <div class="termsandconditions flex justify-center items-center">
                <input type="checkbox" id="terms" name="terms" class="!w-[20px] !mt-0 !mr-[10px] !mb-[5px] !ml-0">
                <label for="terms">I agree to the <a class="shadow rounded-[10px] bg-white p-[6px]" href="/@terms">terms and conditions</a></label>
            </div>
        ';
    }
}

function termsCheckBox($props) {
    return new TermsCheckBox($props);
}