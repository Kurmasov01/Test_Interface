<template>
    <header class="a">    
      <ul class="nav nav-tabs">
        <li class="nav-item">      
          <router-link class="nav-link" aria-current="page" to="/"><img src="@/assets/TestActive.svg"  alt=""> Тесты</router-link>
        </li>
        <li class="nav-item">      
          <router-link class="nav-link active" aria-current="page" to="/AskGroup"><img src="@/assets/GroupIcon.png"  alt=""> Группы вопросов</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#"><img  src="@/assets/Reports.png" alt=""> Отчеты</router-link>
        </li>
      </ul>
    </header>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page"> <router-link to="/AskGroup">/Группы вопросов</router-link> </li>
        <li class="breadcrumb-item active" aria-current="page"> <router-link to="#">Имя группы</router-link> </li>
        <li class="breadcrumb-item active" aria-current="page"> <router-link to="/GroupInfo">Информация о группе</router-link> </li>
      </ol>
    </nav>
          <ul class="nav flex-column">
        <div class="container">
            <li class="nav-item">
                <router-link class="nav-link" to="/GroupInfo">Информация группы</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">1. Заголовок вопроса</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">2. Заголовок вопроса</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">3. Заголовок вопроса</a>
              </li>
           
              <button class="AddGroup"><img src="@/assets/AddGroup.png" alt=""></button>
        </div>
    </ul>
    <div class="container" id="info">
        <h1>Введите информацию о вопросе</h1>
        <form action="">
            <div class="container">
              <input type="text" placeholder="заголовок вопроса">
            </div>
    
            <div class="container"> 
                <input type="text" placeholder="текст вопроса" id="description">
            </div>
            <div class="container">
                <h4>Изображение не обязательно</h4>
                <a href="" type="button" class="button1" id="publish">выбрать файл</a>             
            </div>
            <img src="@/assets/imgExample.png" alt="">
            <div class="container">
                <a href="" type="button" class="button1" id="delete">удалить изображение</a>
            </div>
            <div class="container">
                <h4>Варианты ответа</h4>
            </div>
            <div class="answer"> 
                <input type="text" placeholder="вариант ответа №1">            
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">         
            </div>
            <div class="answer"> 
                <input type="text" placeholder="вариант ответа №2">            
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">         
            </div>
            <div class="answer"> 
                <input type="text" placeholder="вариант ответа №3">            
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">         
            </div>
            <div class="answer"> 
                <input type="text" placeholder="вариант ответа №4">            
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">         
            </div>
        </form>
            <div class="container">    
                <a href="" type="button" class="button1" id="save">сохранить группу</a>
                <a href="" type="button" class="button1" id="delete">удалить вопрос</a>
            </div>        
    </div>

</template>