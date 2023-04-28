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
        <li class="breadcrumb-item active" aria-current="page"> <router-link to="/TestStart">Создание теста</router-link> </li>

      </ol>
    </nav>
    <div class="container">    
      <h1>Запуск теста</h1>
    </div>
    <h5>Введите название теста</h5>
    <form action="">
      <div class="container">
        <input type="text" placeholder="название теста">
      </div>
    </form>
    <h5>Выберите группы вопросов</h5>
     <div class="container">
      <select v-model="selected">
        <option>знание основ законодательства РФ 1</option>
        <option>знание основ законодательства РФ 2</option>
        <option>знание основ законодательства РФ 3</option>
      </select>
    </div>
    
    <button class="AddGroup"><img src="@/assets/AddGroup.png" alt=""></button>

    <h5>Добавьте сотрудников</h5>
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
            <div class="form-check">
              <input class="form-check-input" type="checkbox">
            </div>
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
            <div class="form-check" >
              <input class="form-check-input" type="checkbox" >
            </div>
          </td>     
        </tr>
        <tr>
          <td>Иван</td>
          <td>Иванов</td>
          <td>Иванович</td>
          <td>qwe123</td>
          <td>+7 (xxx)-xxx-xx-xx</td>
          <td>   
            <div class="form-check">
              <input class="form-check-input" type="checkbox" >
            </div>
        </td>     

        </tr>
        <tr>
          <td>Иван</td>
          <td>Иванов</td>
          <td>Иванович</td>
          <td>qwe123</td>
          <td>+7 (xxx)-xxx-xx-xx</td>
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </div>
          </td>     
        </tr>
      </tbody>
    </table>
    </div>

    <div class="container">    
      <button href="/TestStart.html" type="button" class="button1">запустить тест</button>
    </div>
</template>

<script>
export default {
  
  name: 'app',
  components: {
    
  },
  data: () => ({
		selected: [],
		selectAll: false
	}),
	methods: {
		select() {
			this.selected = [];
			if (!this.selectAll) {
				for (let i in this.items) {
					this.selected.push(this.items[i].id);
				}
			}
		}
	}

}

</script>

