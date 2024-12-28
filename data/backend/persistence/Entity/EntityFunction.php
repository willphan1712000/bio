<?php

namespace persistence\Entity;

class EntityFunction
{
    public function get(string $getWhat)
    {
        return $this->$getWhat;
    }
    public function set(string $setWhat, $value): EntityFunction
    {
        $this->$setWhat = $value;
        return $this;
    }
    public static function getProperty(): array
    {
        return array_keys(get_class_vars(get_called_class()));
    }
    private function templateData(): string
    {
        return
            "INSERT INTO StyleDefault (template_id, name, price, image, description, font, fontSize, fontColor, background) 
        VALUES
            (1, 'Template ID 1', 10, 'template/1/1.png', '', '\'Inter\', sans-serif', '12px', '#fff', '#29b27c'),
            (2, 'Template ID 2', 10, 'template/2/2.png', '', '\'400 Lilita One\', sans-serif', '15px', '#9ece00', '#fff'),
            (3, 'Template ID 3', 10, 'template/3/3.png', '', '\'400 Barlow Semi    Condensed\', -apple-system, Roboto, Helvetica, sans-serif', '15px', '#c59975', '#fff'),
            (4, 'Template ID 4', 10, 'template/4/4.png', '', '\'700 Be Vietnam\', sans-serif', '15px', '#fff', 'linear-gradient(180deg, #7b32f3 22.19%, rgba(197, 171, 245, 0) 99.87%)'),
            (5, 'Template ID 5', 10, 'template/5/5.png', '', '\'400 Raleway\', sans-serif', '15px', '#fea3a3', '#fff'),
            (6, 'Template ID 6', 10, 'template/6/6.png', '', '\'400 Katibeh\', sans-serif', '15px', '#fff', 'linear-gradient(180deg, #7bffda 0%, #6192fe 100%)'),
            (7, 'Template ID 7', 10, 'template/7/7.png', '', '\'900 Inter\', sans-serif', '13px', '#fff', 'linear-gradient(90deg, #bd00ff 0%, #ff1bee 100%)'),
            (8, 'Template ID 8', 10, 'template/8/8.png', '', '\'Inter\', sans-serif', '15px', '#0f74f6', '#fff'),
            (9, 'Template ID 9', 10, 'template/9/9.png', '', '\'700 Urbanist\', sans-serif', '15px', '#ff8fab', 'linear-gradient(62deg, #ffcad7 0%, #ffffff 54%, #ffcad7 100%)'),
            (10, 'Template ID 10', 10, 'template/10/10.png', '', '\'Kulim Park\', sans-serif', '15px', '#000', '#fff');";
    }
    private function totalView(): string
    {
        return "CREATE VIEW counttemplate AS SELECT COUNT(*) AS total FROM StyleDefault";
    }
}
