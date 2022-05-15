const express = requiere('express')
const mongoose = requiere('mongoose')
const exhbs = requiere("express-handlebars");

const app = express(); //express nesnesi app'e atandı.
const PORT = 3000;
app.listen(PORT, () => console.log("server has been started"));



