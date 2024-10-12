<?php
namespace component;
require_once __DIR__."/../../data/backend/business/TemplateManagement.php";
use business\TemplateManagement;

for($i = 1; $i <= TemplateManagement::getTotal(); $i++) {
    require_once __DIR__."/../template/".$i."/".$i.".php";
}
use component\template\Template1;
use component\template\Template2;
use component\template\Template3;
use component\template\Template4;
use component\template\Template5;
use component\template\Template6;
use component\template\Template7;
use component\template\Template8;
use component\template\Template9;
use component\template\Template10;

interface ITemplate {
    public function execute();
}

class Template implements ITemplate {
    private $props;
    private $id;

    public function __construct($id, $props) {
        $this->id = $id;
        $this->props = $props;
    }

    public function execute() {
        $template = "Template".$this->id;
        return new $template($this->props);
    }
}

function template($id, $props) {
    return new Template($id, $props);
}