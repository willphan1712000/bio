<?php
interface ITemplate {
    public function execute();
}

class Template implements ITemplate {
    private $props;
    private $id;

    // Global template information
    const TOTAL = 10;
    const PRICE = 1000;

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