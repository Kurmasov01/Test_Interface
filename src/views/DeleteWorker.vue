<template>
    <header class="a">    
      <ul class="nav nav-tabs">
        <li class="nav-item">      
          <router-link class="nav-link active" aria-current="page" to="/"><img src="@/assets/TestActive.svg"  alt=""> Тесты</router-link>
        </li>
        <li class="nav-item">      
          <router-link class="nav-link" aria-current="page" to="/AskGroup"><img src="@/assets/GroupIcon.png"  alt=""> Группы вопросов</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#"><img  src="@/assets/Reports.png" alt=""> Отчеты</router-link>
        </li>
      </ul>
    </header>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page"> <router-link to="/">/Тесты</router-link> </li>
        <li class="breadcrumb-item active" aria-current="page"> <a href="/index.html">Название теста</a> </li>
        <li class="breadcrumb-item active" aria-current="page"> <a href="">Удаление сотрудников</a> </li>
      </ol>
    </nav>
    <div class="container">
        <h1>Выберите сотрудников для удаления</h1>
    </div>
   
    <div class="container">
      
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Фамилия</th>
          <th scope="col">Имя</th>
          <th scope="col">Отчество</th>
          <th scope="col">Логин</th>
          <th scope="col">Телефон</th>
          <th scope="col">   
        </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Иван</td>
          <td>Иванов</td>
          <td>Иванович</td>
          <td>qwe123</td>
          <td>+7 (xxx)-xxx-xx-xx</td>
          <td>   
            <button><img src="@/assets/DeleteIcon.png" alt=""></button>
          </td>     
        </tr>
        <tr>
          <td>Иван</td>
          <td>Иванов</td>
          <td>Иванович</td>
          <td>qwe123</td>
          <td>+7 (xxx)-xxx-xx-xx</td>
          <td>   
            <button><img src="@/assets/DeleteIcon.png" alt=""></button>
        </td>     

        </tr>
        <tr>
          <td>Иван</td>
          <td>Иванов</td>
          <td>Иванович</td>
          <td>qwe123</td>
          <td>+7 (xxx)-xxx-xx-xx</td>
          <td>
            <button><img src="@/assets/DeleteIcon.png" alt=""></button>
          </td>     
        </tr>
      </tbody>
    </table>
    </div>
</template>