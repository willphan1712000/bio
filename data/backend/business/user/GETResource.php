<?php
// 
namespace business\user;

use business\IAPI;
use config\SystemConfig;

class GETResource implements IAPI
{

    function __construct() {}

    private function getResource()
    {
        try {
            return [
                'success' => true,
                'data' => [
                    'regexMap' => SystemConfig::regexMap(),
                    'labelMap' => SystemConfig::labelMap(),
                    'defaultImg' => SystemConfig::globalVariables()['img']['unknown'],
                    'deleteWarning' => SystemConfig::globalVariables()['deleteWarningMsg'],
                    'iconMap' => SystemConfig::socialIconArr()
                ]
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'error' => $e->getMessage()
            ];
        }
    }

    public function execute()
    {
        return $this->getResource();
    }
}
