# Jajuwa on GitHub!

<img src="banner.png" alt="jajuwa.xyz" style="width: 100%;"/>

### About

Jajuwa is an open source web application for saving quotes to a database. The project was created in `2019`, initially based on pure `PHP` code, but now it's is based on `JavaScript`!


### Jajuwa - Current

#### NPM dependencies:

* express
* mysql
* canvas
* canvas-constructor


#### How to run:

#### 1. Create database and execute this code

```sql
create table cytaty_tabela
(
	id int auto_increment,
	cytat varchar(255) not null,
	osoba varchar(255) not null,
	date_time datetime default current_timestamp,
	constraint cytaty_tabela_pk
		primary key (id)
);
```


##### 2. Edit database credentials

In file `src\routes\cytaty.js`

```js
const db = mysql.createConnection({
  host: "database_host",
  user: "database_user",
  password: "database_password",
  database: "database_name",
});
```



##### 3. Install dependencies

```console
$ npm install
```

##### 4. Start the web app

```console
$ npm start
```

##### OR

```console
$ npm run dev
```
To make web app refreshing after every change that you make

#### 5. ✨ Cheers! ✨

You can now access jajuwa by typing `http://localhost:5000/` in your browser


### About old Jajuwa

`..jajuwa[PHP][OLD]` is a folder that contains the old version of Jajuwa based on PHP. It works as the other versions

### About Authors

* [Jakub Złotek](https://github.com/JakubZlotek) - JavaScript and Python developer. Opensoftware and coffee lover
* [Daniel Kamiński](https://github.com/EVBlue) - PHP and Frontend developer. Currently interested in Cordova