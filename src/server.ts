import express from "express"; //npm i --save-dev @types/express
import RotasAluno from './routes/RotasAluno';
import RotaPrincipal from "./routes/RotaPrincipal";
import RotasProfessor from "./routes/RotasProfessor";
import RotasEstande from "./routes/RotasEstande"
import RotasAvaliacao from "./routes/RotasAvaliacao"
import RotasGrupo from "./routes/RotasGrupo"

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(RotasAluno);
app.use(RotaPrincipal);
app.use(RotasProfessor);
app.use(RotasAvaliacao);
app.use(RotasEstande);
app.use(RotasGrupo)
app.listen(port, function (){

console.log(`Server Running on port ${port}`);

})