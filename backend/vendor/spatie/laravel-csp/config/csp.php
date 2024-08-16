<?php

return [
    'policy' => Spatie\Csp\Policies\Basic::class,
    'script-src' => [
        "'self'",
        'https://www.googleapis.com',
        'https://*.firebaseapp.com',
        'https://*.firebaseio.com',
    ],
    'connect-src' => [
        "'self'",
        'https://*.firebaseapp.com',
        'https://*.firebaseio.com',
    ],
    'style-src' => [
        "'self'",
        'https://fonts.googleapis.com',
    ],
    'img-src' => [
        "'self'",
        'data:',
    ],
    'report_uri' => env('CSP_REPORT_URI', ''),
    'enabled' => env('CSP_ENABLED', true),
    'nonce_generator' => Spatie\Csp\Nonce\RandomString::class,
];
