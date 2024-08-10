<?php
require_once 'Database.php';

interface IAPI {
    public static function GET($table, $column = null, $unique);
    public static function PUT($table, $column, $value, $unique);
    public static function POST(string $table, array $columns);
    public static function DELETE(string $table, string $unique);
}

class API extends Database implements IAPI {
    // Query function for fast data retrieval
    public static function GET($table, $column = null, $unique) {
        $conn = parent::preparedConnection();
        $stmt = null;

        try {
            if ($column === null) {
                $query = "SELECT * FROM " . $table . " WHERE " . $unique;
                $stmt = $conn->prepare($query);
            } else {
                $query = "SELECT " . $column . " FROM " . $table . " WHERE " . $unique;
                $stmt = $conn->prepare($query);
            }

            if (!$stmt) {
                throw new Exception("Failed to prepare the SQL statement.");
            }

            if (!$stmt->execute()) {
                throw new Exception("Failed to execute the SQL statement.");
            }

            $result = $stmt->get_result();

            if (!$result) {
                throw new Exception("Failed to get the result set.");
            }

            $r = [];
            while ($row = $result->fetch_assoc()) {
                $r[] = $row;
            }

            $stmt->close();

            if ($r === null) {
                throw new Exception("No results found.");
            }

            if ($column !== null) {
                $rrr = [];
                foreach ($r as $rr) {
                    $rrr[] = $rr[$column];
                }
                if(count($rrr) === 1) {
                    return $rrr[0];
                }
                return $rrr;
            }

            if(count($r) === 1) {
                return $r[0];
            }

            return $r;
        } catch (Exception $e) {
            error_log($e->getMessage());
            return null;
        }

    }

    public static function PUT($table, $column, $value, $unique) {
        $conn = parent::preparedConnection();
        $stmt = null;
        try {
            if($value === NULL) {
                $query = "UPDATE ".$table." SET ".$column." = NULL WHERE ".$unique;
            } else {
                $query = "UPDATE ".$table." SET ".$column." = '$value' WHERE ".$unique;
            }
            $stmt = $conn->prepare($query);
            if(!$stmt) {
                throw new Exception("Failed to prepare the SQL statement.");
            }
    
            if(!$stmt->execute()) {
                throw new Exception("Failed to execute the SQL statement.");
            } else {
                return true;
            }
    
            return false;
        } catch (Exception $e) {
            error_log($e->getMessage());
            return false;
        }
    }

    public static function POST(string $table, array $columns) {
        $conn = parent::preparedConnection();
        $stmt = null;

        try {
            $key = "(";
            $value = "(";
            foreach($columns as $col => $val) {
                $key .= $col.",";
                $value .= "'".$val."',";
            }
    
            $key = substr($key, 0, -1).")";
            $value = substr($value, 0, -1).")";
            $query = "INSERT INTO ".$table.$key." VALUES".$value;
    
            // return $query;
            $stmt = $conn->prepare($query);
            if(!$stmt) {
                throw new Exception("Failed to prepare the SQL statement.");
            }
    
            if(!$stmt->execute()) {
                throw new Exception("Failed to execute the SQL statement.");
            } else {
                return true;
            }
    
            return false;
        } catch (Exception $e) {
            error_log($e->getMessage());
            return false;
        }
    }
    public static function DELETE(string $table, string $unique) {
        $conn = parent::preparedConnection();
        $stmt = null;

        try {
            $query = "DELETE FROM ".$table." WHERE ".$unique;
    
            // return $query;
            $stmt = $conn->prepare($query);
            if(!$stmt) {
                throw new Exception("Failed to prepare the SQL statement.");
            }
    
            if(!$stmt->execute()) {
                throw new Exception("Failed to execute the SQL statement.");
            } else {
                return true;
            }
    
            return false;
        } catch (Exception $e) {
            error_log($e->getMessage());
            return false;
        }
    }
}