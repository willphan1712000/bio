<?php

class Database {
    public static function servername() {
        return ProductionConfig::database()['servername'];
    }
    public static function username() {
        return ProductionConfig::database()['username'];
    }
    public static function password() {
        return ProductionConfig::database()['password'];
    }
    public static function dbName() {
        return ProductionConfig::database()['dbName'];
    }
    private static $data_model = [
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
        ]
    ];

    public static function table() {
        $sql = file_get_contents(SystemConfig::globalVariables()['data_model']);
        preg_match_all('/`(\w+)`\s+\(/', $sql, $matches);
        return $matches[1];
    }

    public static function migration() {
        // check if tables exist
        foreach(self::$data_model as $table) {
            $q = "SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'allincli_bio' AND TABLE_NAME = '$table'";
            if(mysqli_fetch_assoc($q) === NULL) {
                // mysqli_query
            }
        }
        $tableQuery = "SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'allincli_bio'";

        $userColumnQuery = mysqli_query($conn, "DESCRIBE user");
        $columns = [];
        while($col = mysqli_fetch_assoc($userColumnQuery)) {
            $columns[] = $col['Field'];
        }
        foreach(SystemConfig::account() as $ele) {
            if(!in_array($ele, $columns)) {
                mysqli_query($conn, "ALTER TABLE user ADD COLUMN ".$ele." varchar(200) NOT NULL");
            }
        }
        foreach($columns as $column) {
            if(!in_array($column, SystemConfig::account())) {
                mysqli_query($conn, "ALTER TABLE user DROP COLUMN ".$column);
            }
        }

        function checkColumn() {
            return null;
        }
    }

    // Basic connection (high injection risk)
    public static function connection() {
        return mysqli_connect(self::servername(), self::username(), self::password(), self::dbName());
    }

    // Prepared connection (low injection risk)
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
}