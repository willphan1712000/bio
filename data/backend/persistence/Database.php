<?php
namespace persistence;

require_once __DIR__."/../../../vendor/autoload.php";
use config\ProductionConfig;
use mysqli;
use Exception;

interface IDatabase {
    // Basic connection (high injection risk)
    public static function connection();
    // Prepared connection (low injection risk) - recommended
    public static function preparedConnection();
    public static function executeQuery(string $query, string $column = null);
}
class Database implements IDatabase {
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

    // Basic connection (high injection risk)
    public static function connection() {
        return mysqli_connect(self::servername(), self::username(), self::password(), self::dbName());
    }

    // Prepared connection (low injection risk) - recommended
    public static function preparedConnection() {
        return new mysqli(self::servername(), self::username(), self::password(), self::dbName());
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