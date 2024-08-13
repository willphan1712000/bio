<?php
// require_once 'data/template/0/0.php';
// for($i = 0; $i <= 0; $i++) {
//     require_once "../template/$i/$i.php";
// }

interface IShowTemplate {
    public function execute();
}

class ShowTemplate implements IShowTemplate {
    private $props;
    private $id;
    public function __construct($id, $props) {
        $this->id = $id;
        $this->props = $props;
    }

    public function execute() {
        return new Template0($this->props);
    }
}

function showTemplate($id, $props) {
    return new ShowTemplate($id, $props);
}