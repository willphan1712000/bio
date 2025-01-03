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
            "INSERT INTO `StyleDefault` (`template_id`, `name`, `image`, `description`, `font`, `fontSize`, `fontColor`, `background`, `price`) VALUES
(0, 'Template ID 0', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(1, 'Template ID 1', '/controllers/template/1/1.png', NULL, '\'Inter\', sans-serif', '12px', '#fff', '#29b27c', 1000),
(2, 'Template ID 2', '/controllers/template/2/2.png', NULL, '\'400 Lilita One\', sans-serif', '15px', '#9ece00', '#fff', 1000),
(3, 'Template ID 3', '/controllers/template/3/3.png', NULL, '\'400 Barlow Semi    Condensed\', -apple-system, Roboto, Helvetica, sans-serif', '15px', '#c59975', '#fff', 1000),
(4, 'Template ID 4', '/controllers/template/4/4.png', NULL, '\'700 Be Vietnam\', sans-serif', '15px', '#fff', 'linear-gradient(180deg, #7b32f3 22.19%, rgba(197, 171, 245, 0) 99.87%)', 1000),
(5, 'Template ID 5', '/controllers/template/5/5.png', NULL, '\'400 Raleway\', sans-serif', '15px', '#fea3a3', '#fff', 1000),
(6, 'Template ID 6', '/controllers/template/6/6.png', NULL, '\'400 Katibeh\', sans-serif', '15px', '#fff', 'linear-gradient(180deg, #7bffda 0%, #6192fe 100%)', 1000),
(7, 'Template ID 7', '/controllers/template/7/7.png', NULL, '\'900 Inter\', sans-serif', '13px', '#fff', 'linear-gradient(90deg, #bd00ff 0%, #ff1bee 100%)', 1000),
(8, 'Template ID 8', '/controllers/template/8/8.png', NULL, '\'Inter\', sans-serif', '15px', '#0f74f6', '#fff', 1000),
(9, 'Template ID 9', '/controllers/template/9/9.png', NULL, '\'700 Urbanist\', sans-serif', '15px', '#ff8fab', 'linear-gradient(62deg, #ffcad7 0%, #ffffff 54%, #ffcad7 100%)', 1000),
(10, 'Template ID 10', '/controllers/template/10/10.png', NULL, '\'Kulim Park\', sans-serif', '15px', '#000', '#fff', 1000);";
    }
    private function totalView(): string
    {
        return "CREATE VIEW counttemplate AS SELECT COUNT(*) AS total FROM StyleDefault";
    }
}
