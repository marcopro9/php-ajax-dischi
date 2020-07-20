<?php
include __DIR__ . '/database.php';
header('Content-Type: application/json');

if (!empty($_GET['author-list'])) {
  //array solo di autori
  $array_autori = [];

  foreach ($database as $album) {
    if (!inArray($album['author'], $array_autori)) {
      $array_autori[] = $album['author'];
    }
  }

  echo json_encode($array_autori);

} //filtro per elencare gli album per autore
  elseif ( !empty($_GET['author'])){
    $array_filtrato = [];

    foreach ($database as $album) {
      // se l'autore dell'album è lo stesso del $_GET lo aggiungo all'array da stampare
      if ($album['author'] === $_GET['author']) {
        $array_filtrato[] = $album;
      }
    }
    echo json_encode($array_filtrato);
  } else {
      echo json_encode($database);
    }

?>
