<?php
require '../components/Template.php';

$product = [];
$product[] = "basic";
for($i = 1; $i <= Template::TOTAL; $i++) {
    require_once "../template/$i/$i.php";
    $template = "Template".$i;
    $product[] = $template::PROPS;
}