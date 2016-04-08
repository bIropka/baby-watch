<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name-1'])) {$name = $_POST['name-1'];}
    if (isset($_POST['phone-1'])) {$phone = $_POST['phone-1'];}
    if (isset($_POST['email-1'])) {$email = $_POST['email-1'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "office@web-365.ru"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom   = "Baby-Watch"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData <br><b>Клиент хочет купить часики :)</b> <br> <b>Имя клиента:</b> $name <br><b>Телефон:</b> $phone <br><b>Email:</b> $email ";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<p class="success">Спасибо за обращение к нам!</p>';
    }
    else 
    {
    echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>