<?php

use craft\helpers\App;

return [
    'checkDevServer' => true,
	'devServerInternal' => 'http://localhost:3000',
    'devServerPublic' =>  Craft::getAlias('@web') . ':3000',
    'useDevServer' => App::env('ENVIRONMENT') === 'dev',
    'serverPublic' => Craft::getAlias('@web') . '/dist/',
    'manifestPath' => '@webroot/dist/manifest.json',
    'errorEntry' => 'src/js/site.js',
    'cacheKeySuffix' => '',
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
    'criticalPath' => '@webroot/dist/criticalcss',
    'criticalSuffix' => '_critical.min.css',
];