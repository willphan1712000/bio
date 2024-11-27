<?php
namespace persistence\Entity;

class EntityFunction {
    public function get(string $getWhat) {
        return $this->$getWhat;
    }
    public function set(string $setWhat, $value): EntityFunction {
        $this->$setWhat = $value;
        return $this;
    }
    public static function getProperty(): array {
        return array_keys(get_class_vars(get_called_class()));
    }
}