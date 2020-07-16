<!-- inclusione file database.php -->
<?php include __DIR__ . '/database.php' ?>

<!DOCTYPE html>
<html lang="it" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- links -->
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="dist/app.css">
    <!-- title -->
    <title>php-ajax-dischi</title>
  </head>

  <body>
    <!-- header -->
    <header>

      <div class="container">
        <img src="img/logo.png" alt="image-logo">
      </div>

    </header>

    <!-- main -->
    <main>
      <div class="container">

        <!-- ciclo che prende i dati dal file database.php -->
        <?php foreach($database as $album){ ?>

          <!-- struttura album con stampa di ogni valore -->
          <div class="album">

            <img src="<?php echo $album['poster'] ?>" alt="copertina">
            <h2><?php echo $album['title'] ?></h2>
            <p class="autore"><?php echo $album['author'] ?></p>
            <p class="anno"><?php echo $album['year'] ?></p>

          </div>

        <?php } ?>

      </div>
    </main>

  </body>
</html>
