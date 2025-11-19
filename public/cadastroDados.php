<?php 
include 'conexao.php';

$nome = $_POST['name'];
$email = $_POST['email'];
$telefone = $_POST['tel'];
$senha = $_POST['senhaUser'];
$senhaCript=password_hash($senha,PASSWORD_DEFAULT);

if (($nome == "") || ($email == "") || ($telefone == "") || ($senha == "")) {
    echo "<script>alert('Preencha todos os campos para realizar o cadastro!!'); history.go(-1);</script>";
}

else {
    try {
        $cadastro_aluno = $verify->prepare ('INSERT INTO cadastro_aluno (nome, email, telefone, senha) VALUES (:nome, :email, :telefone, :senha)');
        $cadastro_aluno -> execute (array(
            ':nome' => $nome,
            ':email' => $email,
            ':telefone' => $telefone,
            ':senha' => $senhaCript
        ));
        
        if ($cadastro_aluno -> rowCount()==1) {
        echo "<script>alert('Cadastro realizado com sucesso!!'); history.go(-1);</script>";
        }
        else {
        echo "<script>alert('Erro ao cadastrar!!'); history.go(-1);</script>";
        }
    }

    catch (PDOException $erro) {
       if ($erro->getCode() == 23000) {
        
       $email_check = $verify->prepare("SELECT * from cadastro_aluno WHERE email = :email");
       $email_check->execute([':email' => $email]);
        if ($email_check->fetchColumn()) {
            echo "<script>alert('Esse e-mail já está cadastrado. Tente outro.'); history.go(-1);</script>";
        }
          else {
        $tel_check = $verify->prepare("SELECT * from cadastro_aluno WHERE telefone = :telefone");
        $tel_check->execute([':telefone' => $telefone]);

        if ($tel_check->fetchColumn()) {
            echo "<script>alert('Esse telefone já está cadastrado. Tente outro.'); history.go(-1);</script>";
        }
      }
    }

    else {
        echo "<script>alert('Houve um erro ao realizar o cadastro, tente novamente'); history.go(-1);</script>";
    }
}
}
?>
