import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  people: Array<any> = []
  constructor() { 
      if (localStorage.getItem("admin")) {
        console.log("Админ уже существует")
      } else {
        let admin = {
          "login": "admin",
          "password": "admin"
        }
        let jsonAdmin = JSON.stringify(admin)
        localStorage.setItem("admin", jsonAdmin)
        console.log("Админ создан")
      }

      if (localStorage.getItem("user")) {
        console.log("Пользователь уже существует")
      } else {
        let user = {
          "login": "user",
          "password": "password"
        }
        let jsonUser = JSON.stringify(user)
        localStorage.setItem("user", jsonUser)
        console.log("Пользователь создан")
      }
      

      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            this.people.push({
                "name": "User" + i.toString(),
                "surname": "UserSurname" + i.toString(),
                "age": 0  + i,
                "petname": "UserPetName" + i.toString()
            })
        }
    }, 3000);
  }

  ngOnInit(): void {
  }

}
