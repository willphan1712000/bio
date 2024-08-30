<?php
class Database_Schema {
    public static function get_schema() {
        return [
            "user" => [
                "username" => "varchar(200) DEFAULT NULL", // primary
                "email" => "varchar(50) DEFAULT NULL",
                "password" => "varchar(200) DEFAULT NULL",
                "token" => "varchar(200) DEFAULT NULL",
                "deleteToken" => "varchar(200) DEFAULT NULL"
            ],
            "info" => [
                "username" => "varchar(200) DEFAULT NULL", // primary
                "image" => "varchar(200) DEFAULT NULL",
                "name" => "varchar(100) DEFAULT NULL",
                "description" => "varchar(200) DEFAULT NULL",
                "Website" => "varchar(200) DEFAULT NULL",
                "Email" => "varchar(100) DEFAULT NULL",
                "Facebook" => "varchar(200) DEFAULT NULL",
                "Instagram" => "varchar(200) DEFAULT NULL",
                "Messenger" => "varchar(200) DEFAULT NULL",
                "X" => "varchar(200) DEFAULT NULL",
                "Tiktok" => "varchar(200) DEFAULT NULL",
                "Mobile" => "varchar(200) DEFAULT NULL",
                "Work" => "varchar(200) DEFAULT NULL",
                "Address" => "varchar(200) DEFAULT NULL",
                "Youtube" => "varchar(200) DEFAULT NULL",
                "Threads" => "varchar(200) DEFAULT NULL",
                "Linkedin" => "varchar(200) DEFAULT NULL",
                "Pinterest" => "varchar(200) DEFAULT NULL",
                "Zalo" => "varchar(200) DEFAULT NULL",
                "Booking" => "varchar(200) DEFAULT NULL",
                "OrderOnline" => "varchar(200) DEFAULT NULL",
                "HotSale" => "varchar(200) DEFAULT NULL",
                "organization" => "varchar(200) DEFAULT NULL"
            ],
            "purchase" => [
                "purchase_id" => "int(255) NOT NULL PRIMARY KEY", // primary
                "username" => "varchar(200) DEFAULT NULL", // foreign
                "template_id" => "int(255) DEFAULT NULL",
                "purchasedAt" => "datetime(3) NOT NULL DEFAULT current_timestamp(3)"
            ],
            "template" => [
                "username" => "varchar(200) DEFAULT NULL", // primary
                "themeid" => "int(255) DEFAULT NULL",
                "favorite" => "varchar(1000) DEFAULT NULL"
            ],
            "style" => [
                "purchase_id" => "int(255) NOT NULL PRIMARY KEY", // primary
                "username" => "varchar(200) DEFAULT NULL", // foreign
                "template_id" => "int(255) DEFAULT NULL",
                "font" => "varchar(200) DEFAULT NULL",
                "fontSize" => "varchar(200) DEFAULT NULL",
                "fontColor" => "varchar(10) DEFAULT NULL",
                "background" => "varchar(200) DEFAULT NULL"
            ],
            "templateInfo" => [
                "id" => "int(255) NOT NULL PRIMARY KEY",
                "name" => "varchar(200) DEFAULT NULL",
                "price" => "int(255) DEFAULT NULL",
                "image" => "varchar(200) DEFAULT NULL",
                "description" => "varchar(200) DEFAULT NULL",
                "font" => "varchar(200) DEFAULT NULL",
                "fontSize" => "varchar(200) DEFAULT NULL",
                "fontColor" => "varchar(10) DEFAULT NULL",
                "background" => "varchar(200) DEFAULT NULL"
            ]
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
                    'description' => 'Hello World',
                    'font' => 'Inter, sans-serif',
                    'fontSize' => '12px',
                    'fontColor' => '#fff',
                    'background' => '#29b27c'
                ], [
                    'id' => '2',
                    'name' => 'Template ID 2',
                    'price' => $PRICE,
                    'image' => 'template/2/2.png',
                    'description' => 'Hi guys, This is Will from UITS',
                    'font' => '',
                    'fontSize' => '',
                    'fontColor' => '',
                    'background' => ''
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
                    'background' => ''
                ], 
                [
                    'id' => '5',
                    'name' => 'Template ID 5',
                    'price' => $PRICE,
                    'image' => 'template/5/5.png',
                    'description' => '',
                    'font' => '',
                    'fontSize' => '',
                    'fontColor' => '',
                    'background' => ''
                ],
                [
                    'id' => '6',
                    'name' => 'Template ID 6',
                    'price' => $PRICE,
                    'image' => 'template/6/6.png',
                    'description' => '',
                    'font' => '',
                    'fontSize' => '',
                    'fontColor' => '',
                    'background' => ''
                ],
                [
                    'id' => '7',
                    'name' => 'Template ID 7',
                    'price' => $PRICE,
                    'image' => 'template/7/7.png',
                    'description' => '',
                    'font' => '',
                    'fontSize' => '',
                    'fontColor' => '',
                    'background' => ''
                ],
                [
                    'id' => '8',
                    'name' => 'Template ID 8',
                    'price' => $PRICE,
                    'image' => 'template/8/8.png',
                    'description' => '',
                    'font' => '',
                    'fontSize' => '',
                    'fontColor' => '',
                    'background' => ''
                ],
                [
                    'id' => '9',
                    'name' => 'Template ID 9',
                    'price' => $PRICE,
                    'image' => 'template/9/9.png',
                    'description' => '',
                    'font' => '',
                    'fontSize' => '',
                    'fontColor' => '',
                    'background' => ''
                ],
                [
                    'id' => '10',
                    'name' => 'Template ID 10',
                    'price' => $PRICE,
                    'image' => 'template/10/10.png',
                    'description' => '',
                    'font' => '',
                    'fontSize' => '',
                    'fontColor' => '',
                    'background' => ''
                ],
            ],
        ];
    }
}