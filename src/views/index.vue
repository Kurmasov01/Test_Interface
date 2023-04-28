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
      </ol>
    </nav>
    <div class="container">    
      <h1>Список тестов</h1>
    </div>
  <div class="container">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Название теста</th>
          <th scope="col">Департамент</th>
          <th scope="col">кол-во вопросов</th>
          <th scope="col">Дата создания</th>
          <th scope="col">Автор</th>
          <th scope="col">Статус</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>name</td>
          <td>30</td>
          <td>ДД.ММ.ГГГГ</td>
          <td>name</td>
          <td>в процессе</td>
          <td><button><router-link to="/DeleteWorker"><img src="@/assets/RedactIcon.png" alt=""></router-link></button></td>
          <td><button><img src="@/assets/stopIcon.png" alt=""></button></td>

        </tr>
        <tr>
          <td scope="row">name</td>
          <td>name</td>
          <td>30</td>
          <td>ДД.ММ.ГГГГ</td>
          <td>name</td>
          <td>завершен</td>
          <td></td>
          <td></td>

        </tr>
        <tr>
          <td>name</td>
          <td>name</td>
          <td>30</td>
          <td>ДД.ММ.ГГГГ</td>
          <td>name</td>
          <td>завершен оператором</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
    <div class="container">    
      <router-link to="/TestStart" type="button" class="button1">создать тест</router-link>
    </div>
    
    <router-view />


</template>