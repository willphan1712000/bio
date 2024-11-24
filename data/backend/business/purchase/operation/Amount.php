<?php
namespace business\purchase\operation;

use persistence\Database;
use persistence\Entity\StyleDefault;
use business\purchase\operation\Operation;

class Amount implements Operation {
    private array $templates;

    function __construct(array $templates) 
    {
        $this->templates = $templates;
    }

    private function getSubtotal() {
        $subtotal = 0;
        foreach($this->templates as $template) {
            $unitPrice = Database::GET(StyleDefault::class, 'price', ['template_id' => $template]);
            $subtotal += $unitPrice;
        }
        return $subtotal;
    }

    public function execute()
    {
        return $this->getSubtotal();
    }
}