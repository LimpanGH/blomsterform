<?php

use craft\helpers\App;

$siteUrl = trim(Craft::$app->sites->currentSite->baseUrl, "/");

return [
    'checkDevServer' => true,
    'devServerInternal' => 'http://localhost:3000',
    'devServerPublic' => $siteUrl . ':3000',
    'serverPublic' => $siteUrl . '/dist/',
    // 'useDevServer' => App::env('CRAFT_ENVIRONMENT') === "dev",
    'useDevServer' => App::env('VITE_USE_DEV_SERVER'),
    'manifestPath' => '@webroot/dist/manifest.json',
    'errorEntry' => '',
    'cacheKeySuffix' => '',
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
    'criticalPath' => '@webroot/dist/criticalcss',
    'criticalSuffix' =>'_critical.min.css',
];