<?php
interface IDeleteAccount {
    public static function folder($path) : bool;
    public static function data($username): bool;
    public static function delete($username) : bool; 
}
class DeleteAccount implements IDeleteAccount {
    public static function folder($path) : bool {
        if(!is_dir($path)) {
            return false;
        }
        $files = array_diff(scandir($path), array('.', '..'));
        foreach($files as $file) {
            $filePath = $path.'/'.$file;
            if(is_dir($filePath)) {
                folder($filePath);
            } else {
                unlink($filePath);
            }
        }
        return rmdir($path);
    }

    public static function data($username) : bool {
        $dbDeleted = false;
        foreach(Database::get_data_model() as $table => $cols) {
            if(API::DELETE($table, "username = '$username'")) {
                $dbDeleted = true;
            } else {
                $dbDeleted = false;
                break;
            }
        }
        return $dbDeleted;
    }

    public static function delete($username) : bool {
        $path = "../".SystemConfig::globalVariables()['user_folder'].$username;
        if(Database::isUserExist($username)) {
            $folder = self::folder($path);
            $data = self::data($username);
        } else {
            return false;
        }

        return $folder && $data;
    }
}