<?php
namespace persistence;

require_once __DIR__."/../../../vendor/autoload.php";
class Database_Schema {
    public static function get_schema() {
        return [
            'user' => [
                'username' => 'String @id',
                'email' => 'String?',
                'password' => 'String?',
                'token' => 'String?',
                'deleteToken' => 'String?'
            ],
            'userInfo' => [
                'username' => 'String @id',
                'name' => 'String?',
                'image' => 'String?',
                'description' => 'String?',
                'organization' => 'String?',
                'Email' => 'String?',
                'Address' => 'String?',
            ],
            'userPhone' => [
                'username' => 'String @id',
                'Mobile' => 'String?',
                'MobileCode' => 'String?',
                'MobileFlag' => 'String?',
                'Work' => 'String?',
                'WorkCode' => 'String?',
                'WorkFlag' => 'String?',
            ],
            'userSocial' => [
                'username' => 'String @id',
                'Website' => 'String?',
                'Facebook' => 'String?',
                'Instagram' => 'String?',
                'Messenger' => 'String?',
                'X' => 'String?',
                'Tiktok' => 'String?',
                'Youtube' => 'String?',
                'Threads' => 'String?',
                'Linkedin' => 'String?',
                'Pinterest' => 'String?',
                'Zalo' => 'String?',
                'Booking' => 'String?',
                'OrderOnline' => 'String?',
                'HotSale' => 'String?',
            ],
            'purchase' => [
                'purchase_id' => 'Int @id',
                'username' => 'String?',
                'template_id' => 'Int',
                'purchasedAt' => 'DateTime @default(now())',
            ],
            'template' => [
                'username' => 'String @id',
                'themeid' => 'Int',
                'favorite' => 'String?',
            ],
            'style' => [
                'purchase_id' => 'Int @id',
                'username' => 'String?',
                'template_id' => 'Int?',
                'font' => 'String?',
                'fontSize' => 'String?',
                'fontColor' => 'String?',
                'background' => 'String?',
            ],
        ];
    }

    public static function socialIconArr() {
        return [
            "Mobile" => '<i class="fa-solid fa-phone"></i>',
            "Work" => '<i class="fa-solid fa-phone"></i>',
            "Email" => '<i class="fa-solid fa-envelope"></i>',
            "Website" => '<i class="fa-solid fa-globe"></i>',
            "Booking" => '<img class="icon" src="/controllers/client/img/booking.png">',
            "OrderOnline" => '<img class="icon" src="/controllers/client/img/order.png">',
            "HotSale" => '<img class="icon" src="/controllers/client/img/hotsales.png">',
            "Address" => '<i class="fa-solid fa-location-dot"></i>',
            "Facebook" => '<i class="fa-brands fa-facebook"></i>',
            "Instagram" => '<i class="fa-brands fa-instagram"></i>',
            "Messenger" => '<i class="fa-brands fa-facebook-messenger"></i>',
            "Youtube" => '<i class="fa-brands fa-youtube"></i>',
            "Threads" => '<i class="fa-brands fa-threads"></i>',
            "X" => '<i class="fa-brands fa-x-twitter"></i>',
            "Linkedin" => '<i class="fa-brands fa-linkedin"></i>',
            "Tiktok" => '<i class="fa-brands fa-tiktok"></i>',
            "Pinterest" => '<i class="fa-brands fa-pinterest"></i>',
            "Zalo" => '<i class="fa-brands fa-viber"></i>',
        ];
    }

    public static function get_iData() {
        $PRICE = 1000;
        return [
            "templateInfo" => [
                [
                    'id' => '1',
                    'name' => 'Template ID 1',
                    'price' => $PRICE,
                    'image' => 'template/1/1.png',
                    'description' => '',
                    'font' => "\'Inter\', sans-serif",
                    'fontSize' => '12px',
                    'fontColor' => '#fff',
                    'background' => '#29b27c'
                ], [
                    'id' => '2',
                    'name' => 'Template ID 2',
                    'price' => $PRICE,
                    'image' => 'template/2/2.png',
                    'description' => '',
                    'font' => "\'400 Lilita One\', sans-serif",
                    'fontSize' => '15px',
                    'fontColor' => '#9ece00',
                    'background' => '#fff'
                ], [
                    'id' => '3',
                    'name' => 'Template ID 3',
                    'price' => $PRICE,
                    'image' => 'template/3/3.png',
                    'description' => '',
                    'font' => "\'400 Barlow Semi    Condensed\', -apple-system, Roboto, Helvetica, sans-serif",
                    'fontSize' => '15px',
                    'fontColor' => '#c59975',
                    'background' => '#fff'
                ], [
                    'id' => '4',
                    'name' => 'Template ID 4',
                    'price' => $PRICE,
                    'image' => 'template/4/4.png',
                    'description' => '',
                    'font' => "\'700 Be Vietnam\', sans-serif",
                    'fontSize' => '15px',
                    'fontColor' => '#fff',
                    'background' => 'linear-gradient(180deg, #7b32f3 22.19%, rgba(197, 171, 245, 0) 99.87%)'
                ], 
                [
                    'id' => '5',
                    'name' => 'Template ID 5',
                    'price' => $PRICE,
                    'image' => 'template/5/5.png',
                    'description' => '',
                    'font' => "\'400 Raleway\', sans-serif",
                    'fontSize' => '15px',
                    'fontColor' => '#fea3a3',
                    'background' => '#fff'
                ],
                [
                    'id' => '6',
                    'name' => 'Template ID 6',
                    'price' => $PRICE,
                    'image' => 'template/6/6.png',
                    'description' => '',
                    'font' => "\'400 Katibeh\', sans-serif",
                    'fontSize' => '15px',
                    'fontColor' => '#fff',
                    'background' => 'linear-gradient(180deg, #7bffda 0%, #6192fe 100%)'
                ],
                [
                    'id' => '7',
                    'name' => 'Template ID 7',
                    'price' => $PRICE,
                    'image' => 'template/7/7.png',
                    'description' => '',
                    'font' => "\'900 Inter\', sans-serif",
                    'fontSize' => '13px',
                    'fontColor' => '#fff',
                    'background' => 'linear-gradient(90deg, #bd00ff 0%, #ff1bee 100%)'
                ],
                [
                    'id' => '8',
                    'name' => 'Template ID 8',
                    'price' => $PRICE,
                    'image' => 'template/8/8.png',
                    'description' => '',
                    'font' => "\'Inter\', sans-serif",
                    'fontSize' => '15px',
                    'fontColor' => '#0f74f6',
                    'background' => '#fff'
                ],
                [
                    'id' => '9',
                    'name' => 'Template ID 9',
                    'price' => $PRICE,
                    'image' => 'template/9/9.png',
                    'description' => '',
                    'font' => "\'700 Urbanist\', sans-serif",
                    'fontSize' => '15px',
                    'fontColor' => '#ff8fab',
                    'background' => 'linear-gradient(62deg, #ffcad7 0%, #ffffff 54%, #ffcad7 100%)'
                ],
                [
                    'id' => '10',
                    'name' => 'Template ID 10',
                    'price' => $PRICE,
                    'image' => 'template/10/10.png',
                    'description' => '',
                    'font' => "\'Kulim Park\', sans-serif",
                    'fontSize' => '15px',
                    'fontColor' => '#000',
                    'background' => '#fff'
                ],
            ],
        ];
    }

    public static function total() {
        $templateArr = self::get_iData()['templateInfo'];
        return count($templateArr);
    }
}