<?php
namespace business;
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
        foreach(Database_Schema::get_schema() as $table => $cols) {
            API::DELETE($table, "username = '$username'");
        }
        return true;
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