<?php

class Database {
    protected static function servername() {
        return ProductionConfig::database()['servername'];
    }
    protected static function username() {
        return ProductionConfig::database()['username'];
    }
    protected static function password() {
        return ProductionConfig::database()['password'];
    }
    protected static function dbName() {
        return ProductionConfig::database()['dbName'];
    }
    protected static $data_model = [
        "user" => [
            "username" => "varchar(200) DEFAULT NULL",
            "email" => "varchar(50) DEFAULT NULL",
            "password" => "varchar(200) DEFAULT NULL",
            "token" => "varchar(200) DEFAULT NULL",
            "deleteToken" => "varchar(200) DEFAULT NULL"
        ],
        "info" => [
            "username" => "varchar(200) DEFAULT NULL",
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
            "username" => "varchar(200) DEFAULT NULL",
            "template_id" => "int(255) DEFAULT NULL",
            "purchasedAt" => "datetime(3) NOT NULL DEFAULT current_timestamp(3)"
        ],
        "template" => [
            "username" => "varchar(200) DEFAULT NULL",
            "themeid" => "int(255) DEFAULT NULL",
            "favorite" => "varchar(1000) DEFAULT NULL"
        ],
        "unitedstates" => [
            "username" => "varchar(200) DEFAULT NULL",
            "themeid" => "int(255) DEFAULT NULL",
            "favorite" => "varchar(1000) DEFAULT NULL",
            "amendment" => "varchar(1000) DEFAULT NULL",
            "constitution_version" => "varchar(1000) DEFAULT NULL",
            "constitution_date" => "varchar(1000) DEFAULT NULL",
            "constitution_election" => "varchar(1000) DEFAULT NULL",
            "presidential_election" => "varchar(1000) DEFAULT NULL",
            "vice_presidential_election" => "varchar(1000) DEFAULT NULL",
            "biden" => "varchar(1000) DEFAULT NULL",
            "donald_trump" => "varchar(1000) DEFAULT NULL",
        ]
    ];

    public static function table() {
        $sql = file_get_contents(SystemConfig::globalVariables()['data_model']);
        preg_match_all('/`(\w+)`\s+\(/', $sql, $matches);
        return $matches[1];
    }

    // Basic connection (high injection risk)
    public static function connection() {
        return mysqli_connect(self::servername(), self::username(), self::password(), self::dbName());
    }

    // Prepared connection (low injection risk) - recommended
    public static function preparedConnection() {
        return new mysqli(self::servername(), self::username(), self::password(), self::dbName());
    }

    public static function isUserExist($username) {
        $result = API::GET("user", "username", "username='$username'");
        if(empty($result)) {
            return false;
        }
        return true;
    }

    public static function executeQuery(string $query, string $column = null) {
        try {
            $conn = self::preparedConnection();
            $stmt = $conn->prepare($query);
            if(!$stmt->execute()) {
                return $out = [
                    "success" => false
                ];
            }
            $r = $stmt->get_result();
            if(!$r) {
                return $out = [
                    "success" => true
                ];
            }
    
            $result = [];
            while($row = $r->fetch_assoc()) {
                if($column === null) {
                    $result[] = $row;
                } else {
                    $result[] = $row[$column];
                }
            }
            $stmt->close();
            $out = [
                "success" => true,
                "data" => $result,
            ];
            return $out;
        } catch (Exception $e) {
            error_log($e->getMessage());
            return null;
        }
    }
}