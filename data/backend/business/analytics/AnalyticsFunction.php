<?php

namespace business\analytics;

use persistence\Database;
use persistence\Entity\UserSocial;

class AnalyticsFunction
{
    /**
     * This function will return total number of Users.
     * The current approach is bad because it constantly retrieves or runs query for total users. Later on, we should implement Table View concept to get total users whenever a new user registers to the app.
     * However, this query is only run by admin, so this is not that bad, still accepted.
     * @return int total number of users
     */
    protected function getTotalUsers(): int
    {
        $sql = Database::SQL("SELECT COUNT(*) FROM User");
        return $sql[0]['COUNT(*)'];
    }

    /**
     * This function return number of social links for each of the social types (Facebook, Instagram,...)
     */
    protected function getSocial(): array
    {
        $social = [];
        $socialEntities = UserSocial::getProperty();
        foreach ($socialEntities as $socialEntity) {
            if ($socialEntity === 'username' || $socialEntity === 'User') continue;

            array_push($social, [
                "name" => $socialEntity,
                "value" => Database::SQL("SELECT COUNT(*) FROM UserSocial WHERE $socialEntity IS NOT null")[0]['COUNT(*)']
            ]);
        }

        return $social;
    }
}
