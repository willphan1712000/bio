<?php
namespace persistence;

use persistence\Entity\Purchase;
use persistence\Entity\Style;
use persistence\Entity\StyleDefault;
use persistence\Entity\Template;
use persistence\Entity\User;
use persistence\Entity\UserInfo;
use persistence\Entity\UserPhone;
use persistence\Entity\UserSocial;

interface IDatabase {
    public static function GET(string $table, string $column = null, array $unique = null, string $limit = null);
    public static function PUT(string $table, $column, $value, $unique): bool;
    public static function POST(string $table, array $columns): bool;
    public static function DELETE(string $table, array $unique): bool;
}

class Database implements IDatabase {
    // Query function for fast data retrieval
    public static function GET(string $table, string $column = null, array $unique = null, string $limit = null) {
        $entityManager = EntityManager::getEntityManager(); // get entity manager instance

        $r = $entityManager->getRepository($table); // get entity repository
        if($unique === null) {
            $o = $r->findAll();
            if($column === null) {
                return $o;
            }
            
            $out = [];
            foreach($o as $e) {
                array_push($out, $e->get($column));
            }
            return $out;
        }
        $o = $r->findOneBy($unique);
        if($column === null) {
            return $o;
        }
        return $o->get($column);
    }

    public static function PUT($table, $column, $value, $unique): bool {
        try {
            $entityManager = EntityManager::getEntityManager(); // get entity manager instance

            $row = $entityManager->getRepository($table)->findOneBy($unique);
            $row->set($column, $value);
            $entityManager->flush();
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }

    public static function POST(string $table, array $columns): bool {
        try {
            $entityManager = EntityManager::getEntityManager(); // get entity manager instance
    
            $table = new $table();
            foreach($columns as $columnName => $columnValue) {
                $table->set($columnName, $columnValue);
            }
    
            $entityManager->persist($table);
            $entityManager->flush();
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }
    public static function DELETE(string $table, array $unique): bool {
        try {
            $entityManager = EntityManager::getEntityManager(); // get entity manager instance
    
            $row = $entityManager->getRepository($table)->findOneBy($unique);
            $entityManager->remove($row);
            $entityManager->flush();
            return true;
        } catch(\Exception $e) {
            return false;
        }
    }
}