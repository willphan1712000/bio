<?php

namespace persistence;

interface IDatabase
{
    public static function GET($table, string $column = null, array $unique = null, string $limit = null);
    public static function PUT(string $table, $column, $value, $unique): bool;
    public static function POST(string $table, array $columns): bool;
    public static function DELETE(string $table, array $unique): bool;
    public static function SQL(string $sql): mixed;
}

class Database implements IDatabase
{
    // Query function for fast data retrieval
    public static function GET($table, string $column = null, array $unique = null, string $limit = null)
    {
        $entityManager = EntityManager::getEntityManager(); // get entity manager instance

        $r = $entityManager->getRepository($table); // get entity repository
        $out = [];
        if ($unique === null) {
            $o = $r->findAll();
            if ($column === null) {
                return $o;
            }
            foreach ($o as $e) {
                array_push($out, $e->get($column));
            }
            return $out;
        }
        $o = $r->findOneBy($unique);
        if ($column === null) {
            return $o;
        }
        return $o->get($column);
    }

    public static function PUT($table, $column, $value, $unique): bool
    {
        $entityManager = EntityManager::getEntityManager(); // get entity manager instance

        $row = $entityManager->getRepository($table)->findOneBy($unique);
        if ($row === NULL) {
            throw new \Exception("Can not update the data, abort the PUT operation");
        }
        $row->set($column, $value);
        $entityManager->flush();
        return true;
    }

    public static function POST(string $table, array $columns): bool
    {
        $entityManager = EntityManager::getEntityManager(); // get entity manager instance

        $table = new $table();
        foreach ($columns as $columnName => $columnValue) {
            $table->set($columnName, $columnValue);
        }

        $entityManager->persist($table);
        $entityManager->flush();
        return true;
    }
    public static function DELETE(string $table, array $unique): bool
    {
        $entityManager = EntityManager::getEntityManager(); // get entity manager instance

        $row = $entityManager->getRepository($table)->findOneBy($unique);
        if ($row === NULL) {
            throw new \Exception("Can not delete the data, abort the DELETE operation\n");
        }
        $entityManager->remove($row);
        $entityManager->flush();
        return true;
    }

    public static function SQL(string $sql): mixed
    {
        $conn = EntityManager::getConnection();
        $stmt = $conn->prepare($sql);
        $result = $stmt->executeQuery();
        return $result->fetchAllAssociative();
    }
}
