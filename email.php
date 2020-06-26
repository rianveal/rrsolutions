<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="refresh" content="4; url=http://ryrsolutions.co/"/>
  <title>R&RSolutions S.A.S. | Send email</title>
  <style>
    body{
      background-color: #F5F5F5; 
      width: 100%; 
      height: 100%;
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
    }
    .message-sucessfull--content{
      position: absolute; 
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%); 
      padding: 1em; 
      background-color: #FAFAA;
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      width: 60%;
      height: auto;
      text-align: center;
      z-index: 9999999;
    }
  </style>
  <script language="JavaScript">
    javascript:window.history.forward(1); //Esto es para cuando le pulse al botón de Atrás
    // javascript:window.history.back(1); //Esto para cuando le pulse al botón de Adelante
  </script>
</head>
<body>
  <?php
    $desde = 'contactoweb@ryrsolutions.co';

    // Varios destinatarios
    $para  = 'gerencia@ryrsolutions.co' . ', '; // atención a la coma
    $para .= 'gerencia@ryrsolutions.co';

    // título
    $título = 'R&RSolutions S.A.S.';

    // mensaje
    $mensaje .= '
    <html>
    <head>
      <title>Contacto web - R&RSolutions S.A.S.</title>
    </head>
    <body>
      <div style="padding: 1em 0 0 0; text-align: justify;">
        <p>Hola Sres.</p>
        <h2>R&RSolutions S.A.S.</h2>
        <p>Tienes un nuevo mensaje onbtenido a trav&eacute;s del contacto web y estos son los datos de la persona.</p>
        <div>
          <h3 style="margin-bottom: 0px;"><strong>Nombre </strong></h3>
          <p style="margin-top: 3px">'. strip_tags($_POST['names']) .'</p>
          <h3 style="margin-bottom: 0px;"><strong>Correo electrónico </strong></h3>
          <p style="margin-top: 3px">'. strip_tags($_POST['email']) .'</p>
          <h3 style="margin-bottom: 0px;"><strong>Teléfono(s) </strong></h3>
          <p style="margin-top: 3px">'. strip_tags($_POST['phone']) .'</p>
          <h3 style="margin-bottom: 0px;"><strong>Mensaje </strong></h3>
          <p style="margin-top: 3px">'. strip_tags($_POST['message']) .'</p>
        </div>
      </div>
    </body>
    </html>';

    // Para enviar un correo HTML, debe establecerse la cabecera Content-type
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $cabeceras .= 'From: ' . $desde;

    // Cabeceras adicionales
    //$cabeceras .= 'To: rona7ld@gmail.com' . "\r\n";
    //$cabeceras .= 'From: Contacto Web - R&RSolutions contacto@ryrsolutions.co' . "\r\n";
    //$cabeceras .= 'Cc:' . "\r\n";
    //$cabeceras .= 'Bcc:' . "\r\n";

    // Enviarlo
    mail($para, $título, $mensaje, $cabeceras);

  ?>

  <div class="message-sucessfull--content">
     <div>
        <div style="text-align: center;">
            <h3 style="color: #013f42; margin-top: 0;">R&R Solutions S.A.S.</h3>
        </div>
        <h1>Gracias por escribirnos</h1>
        <p>La información ha sido verificada y en poco tiempo le brindaremos respuesta a su mensaje.</p>
     </div>   
  </div>

  <script type="text/javascript">
    WebFontConfig = {
    google: { families: [ 'Roboto:300,400' ] } };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  </script>

</body>
</html>


