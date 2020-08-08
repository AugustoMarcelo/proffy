<h1 align="center">
  <img width="182" alt="Proffy" src="https://user-images.githubusercontent.com/11545976/89233363-d22f3380-d5bf-11ea-8ece-a7feefc33bc4.png">
</h1>

## 👨‍🏫 Proffy | Next Level Week - 2nd Edition

The purpose of the application is to propose an environment where people can register to teach classes or look for teachers. The teacher will inform the content of your specialty, the available times and the value of your hour / class.

## 🚀 Index
- ⚙ [Tecnologies](#-tecnologies)
- 💻 [How to run](#-how-to-run)
- 📷 [Previews](#-previews)
- 🚧 [Proffy 2.0](#-proffy-2.0)

---

## ⚙ Technologies
  - **Back end**
    - NodeJS
    - Typescript
    - express
    - sqlite3
    - knex
    - cors
    - ts-node-dev
  
  - **Front end**
    - ReactJS
    - Typescript
    - react-router-dom
    - axios
  
  - **Mobile**
    - Expo
    - Typescript
    - AsyncStorage
    - axios
    - [react-native-swiper](https://github.com/leecade/react-native-swiper) (to create onboarding page)
    - [react-native-dropdown-picker](https://github.com/hossein-zare/react-native-dropdown-picker) (to make customizable dropdowns)

---

## 💻 How to run

  > Cloning the repository
  ```bash
    # Cloning repository
    git clone https://github.com/AugustoMarcelo/proffy.git
  ```

  > Running web project
  ```bash
    # Accessing web project
    cd web

    # Download dependencies
    yarn
    
    # Running web project
    yarn start
  ```

  > Running server
  ```bash
    # Accessing server project
    cd server

    # Download dependencies
    yarn

    # Run migrations to create the tables
    yarn knex:migrate

    # Run server
    yarn start
  ```

  > Running mobile project
  > You will need to download the Expo app. When the application starts, scan the qrcode with the Expo you installed.
  ```bash
    # Accessing mobile project
    cd mobile

    # Download dependencies
    yarn

    # Change the IP in services/api.ts to connect with the back end
    cd services
    
    # Running
    yarn start
  ```
---

## 📷 Previews

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/11545976/89472198-3edc3680-d756-11ea-8d46-52db44c754a6.gif" />

  ---

  <img src="https://user-images.githubusercontent.com/11545976/89721743-a8a74b00-d9b7-11ea-9e44-7a053345f68c.gif" width="200" />
</h1>

---

## 🚧 Proffy 2.0

<<<<<<< HEAD
 - [x] Onboarding
=======
>>>>>>> fe3a255... :construction: described next features to be implemented
 - [ ] Authentication
   - [ ] Login/Logout
 - [ ] Password recovery
 - [ ] Profile management
<<<<<<< HEAD
 - [x] Splash Screen (Mobile)
=======
 - [ ] Splash Screen (Mobile)
>>>>>>> fe3a255... :construction: described next features to be implemented
 - [ ] Pagination in the list of Proffys
 - [ ] Display of available times in the list of Proffys
 - [ ] Save favorite Proffys on the database
 - [ ] Deploy