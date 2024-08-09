<?php
require_once "Database.php";

interface Migration {
    public static function add();
    public static function drop();
}

class DataMigration extends Database implements Migration {
    public static function add() : bool {
        $dbName = parent::dbName();
        $data_model = parent::$data_model;
        // Data Model
        $model_tables = [];
        $model_table = "";
        $model_cols = [];
        $model_col = "";
        $model_constraints = "";
        // Remote
        $remote_tables = [];
        $remote_table = "";
        $remote_cols = [];
        $remote_col = "";

        // CHECK IF TABLES OR COLUMNS SHOULD BE ADDED
        foreach($data_model as $model_table => $model_cols) {
            $model_tables_check = parent::executeQuery("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '$dbName' AND TABLE_NAME = '$model_table'");
            // if the table does not exist in database, then create the table. Otherwise, go compare the columns
            if(empty($model_tables_check["data"])) {
                $colString = "";
                foreach($model_cols as $model_col => $model_constraints) {
                    $colString .= "`$model_col` $model_constraints,";
                }
                $colString = rtrim($colString, ',');
                $out = parent::executeQuery("CREATE TABLE IF NOT EXISTS `$model_table` ($colString) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci");
                if(!$out["success"]) {
                    return false;
                }
            } else {
                $remote_cols_check = parent::executeQuery("DESCRIBE $model_table");
                $remote_cols = []; // get all columns in the coressponding table
                foreach($remote_cols_check["data"] as $key => $remote_col) {
                    $remote_cols[] = $remote_col["Field"];
                }
                foreach($model_cols as $model_col => $model_constraints) {
                    // check if the the data model column does not exist in database, then add the column. Otherwise, go compare the constraints
                    if(!in_array($model_col, $remote_cols)) {
                        $out = parent::executeQuery("ALTER TABLE $model_table ADD COLUMN $model_col $model_constraints");
                        if(!$out["success"]) {
                            return false;
                        }
                    }
                }
            }

            $model_tables[] = $model_table;
        }
        return true;
    }

    public static function drop() : bool {
        $dbName = parent::dbName();
        $data_model = parent::$data_model;
        // Data Model
        $model_tables = [];
        $model_table = "";
        $model_cols = [];
        $model_col = "";
        $model_constraints = "";
        // Remote
        $remote_tables = [];
        $remote_table = "";
        $remote_cols = [];
        $remote_col = "";

        foreach($data_model as $model_table => $model_cols) {
            $model_tables[] = $model_table;
        }

        // CHECK IF TABLES OR COLUMNS SHOULD BE DROPPED
        $remote_tables_check = parent::executeQuery("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '$dbName'", "TABLE_NAME");
        foreach($remote_tables_check["data"] as $remote_table) {
            // check if a remote table is in the model tables, then drop the table. Otherwise, go compare the columns of the table
            if(!in_array($remote_table, $model_tables)) {
                $out = parent::executeQuery("DROP TABLE $remote_table");
                if(!$out["success"]) {
                    return false;
                }
            } 
            else {
                $remote_cols_check = parent::executeQuery("DESCRIBE $remote_table");
                $model_cols = [];
                foreach($data_model[$remote_table] as $key => $model_col) {
                    $model_cols[] = $model_col;
                }
                foreach($remote_cols_check["data"] as $key => $remote_col) {
                    if(!in_array($remote_col["Field"], $model_cols)) {
                        $outs = parent::executeQuery("ALTER TABLE $remote_table DROP COLUMN ".$remote_col["Field"]);
                        if(!$outs["success"]) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }
}