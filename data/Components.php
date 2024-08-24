<?php
require_once "components/TemplateComponent.php";
require_once "components/BioTemplateButton.php";
require_once "components/UserFooter.php";
require_once "components/Logo.php";
require_once "components/Copyright.php";
require_once "components/Template.php";
require_once "components/TermsCheckBox.php";
require_once "components/Setting.php";
require_once "components/Back.php";
// Templates
for($i = 0; $i <= Template::TOTAL; $i++) {
    require_once "template/$i/$i.php";
}