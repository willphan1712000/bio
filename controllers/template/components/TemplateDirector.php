<?php

namespace controllers\template\components;

use component\Component;
use component\signin\SigninTemplate;
use component\button\user\UserTemplate;
use component\button\admin\AdminTemplate;

class TemplateDirector extends Component
{
    public function render()
    {
        $props = $this->props ?? [
            'isSignedIn' => false
        ];
        if ($props['isSignedIn']) {
            return (new UserTemplate($props['username'], $props['img']))->render() . (new AdminTemplate($props['username'], $props['img']))->render();
        }
        return (new SigninTemplate())->render();
    }
}
