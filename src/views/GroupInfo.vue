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
        <li class="breadcrumb-item active" aria-current="page"> <a href="#">Имя группы</a> </li>
        <li class="breadcrumb-item active" aria-current="page"> <router-link to="/GroupInfo">Информация о группе</router-link> </li>
      </ol>
    </nav>
    <ul class="nav flex-column">
        <div class="container">
            <li class="nav-item">
                <router-link class="nav-link active" to="/GroupInfo">Информация группы</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/GroupEditor">1. Заголовок вопроса</router-link>
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
        <h1>Информация о группе</h1>
        <form action="">
            <div class="container">
              <input type="text" placeholder="название группы">
            </div>
    
            <div class="container"> 
                <input type="text" placeholder="департамент">
            </div>
    
            <div class="container"> 
                <input type="text" placeholder="автор">
            </div>
    
            <div class="container"> 
                <input type="text" placeholder="описание группы">
            </div>
        </form>
            <div class="container">    
                <a href="/GroupEditor.html" type="button" class="button1" id="save">сохранить группу</a>
                <a href="/GroupEditor.html" type="button" class="button1" id="publish">опубликовать</a>
                <a href="/GroupEditor.html" type="button" class="button1" id="delete">удалить группу</a>
            </div>        
    </div>
</template>