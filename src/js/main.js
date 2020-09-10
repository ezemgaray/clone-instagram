window.onload = function(){

   elem('#user').oninput = function(){
      
      elem('[for="user"] span').classList.add('up')
      
      if(this.value == ""){
         elem('[for="user"] span').classList.remove('up')
      }

      if((elem('#password')).value.trim().length >= 6 && this.value.trim()){
         elem('#login-btn').style.backgroundColor = 'rgb(0,149,246)'
      }else
         elem('#login-btn').style = ''
   }
   elem('#password').oninput = function(){
      
      elem('[for="password"] span').classList.add('up')

      if((elem('#user')).value.trim() &&this.value.length >= 6){
         elem('#login-btn').style.backgroundColor = 'rgb(0,149,246)'
      }else
         elem('#login-btn').style = ''

      if(this.value == ""){
         elem('[for="password"] span').classList.remove('up')
      }
   }

}

function elem(elem){
   return document.querySelector(elem)
}