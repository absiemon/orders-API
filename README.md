# 🚀 Orders API 🌐

This is a simple Express server to fetch all the orders through REST Api.

## Tech used
- **Nodejs**, **Expressjs**, **MySQL**.

## Features

- **Fetches all the orders palced by users.**
- **Facilitates pagination.**
- **Respond with status code 200 along with an array of orders.**

## Installation 🛠️

Follow these steps to set up the Github User Repo Explorer on your local machine:

- **Clone the repository.**
```bash
git clone https://github.com/absiemon/orders-API.git
```
- **Move to the project directory.**
```bash
cd yourProjectDirName
```
- **Install required packages.**
```bash
npm install
```
- **Add your credentials into .env file**
```bash
DB_HOST=your_host_name ex: localhost
DB_USER=your_username ex: root
DB_PASSWORD=your_password ex:12345
DB_DATABASE=your_db_name ex: test
```
- **Run the server.**
```bash
npm run dev
```
- **Hit the api**
```bash
http://localhost:8080/api/orders?limit=10&offset=4
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

