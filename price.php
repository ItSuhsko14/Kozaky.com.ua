

        <!-- Include head.php block -->
        <?php 
            include('../head.php');
        ?>

<body>

        <!-- Include menu.php block -->
        <?php 
            include('../menu.php');
        ?>

        <!-- Include menu.php block -->
        <?php 
            include('../contacts.php');
        ?>


<div class="wrapper">

    <header>
        <h1 id="hh1">Послуги і ціни</h1>
    </header>

    <h2 id="hh2">Сценічна програма</h2>
    Показово-інтерактивна програма стандартна - 10 000 грн.
    <div class="text">
        <ul>
            <li>3 козаки, 20 хвилин, 1-2 виходи;</li>
            <li>показовий номер "Козацька звитяга";</li>
            <li>інтерактивний номер "Посвячення в козаки".</li>
        </ul>
    </div>

    <h2 id="hh2">Піротехнічно-вогняна вистава "Лютий вогонь"</h2>
    <div class="text">
        Вистава в жанрі вогняного шоу, яка складається з 4х епізодів. У виставі використовується унікальний вогняний реквізит (вогняні шаблі, шести, булави), в тому чисті вогняні барабани. В завершенні запалюється вогняна інсталяція великий вогняний “Тризуб”. Ефектність виставі додають піротехнічні ефекти, салютні постріли і спеціальні вогняні ефекти.
    </div>

    <h2 id="hh2">Козацькі розваги</h2>
    <div class="text">
        Розважальні атракціони - активності із різними козацькими випробуваннями та майстер-класами.  В більшості випадків вони відбуваються на вулиці. Кожна розвага включає в себе спеціальний реквізит і супроводжується козаком-інструктором, гості свята отримують майстер-клас та пробують свої сили у козацьких розвагах.
    </div>

    <h2 id="hh2">Козацька кухня</h2>
    <div class="text">
        Наше меню - http://kazak.zp.ua/menu/
        Козаки привозять все обладнання, готують національні страви і роздають гостям.


    </div>

    


</div>

        <!-- Вставка footer.php -->
        <?
            include('footer.php')
        ?>


</body>

</html>


<?php
    $file=__DIR__."/price/price-fire.html ";
    $f=fopen($file, "r");
    $content=fread($f, filesize($file));
    fclose($f);
    $stringArray=explode("\n",$content);
    

    foreach ($stringArray as $value) {
        $i=1;
        $priceArray[$i]=explode("-",$value);
        $i++;
    }

    foreach ($priceArray as $value) {
        echo $value;
    }
    
 ?>


</body>
</html>