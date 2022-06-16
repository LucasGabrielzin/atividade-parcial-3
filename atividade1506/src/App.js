import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  Name: yup.string().required("O Primeiro nome é Obrigatório!"),
  email: yup.string().required("O email é Obrigatório!"),
  telefone: yup.string().required("O telefone é Obrigatório!"),
  comentario: yup.string().required("Não esqueça de informar aqui!"),
  observacao: yup.string().required("Não esqueça de informar aqui!"),
  data: yup.string().required("Não esqueça de informar a Data aqui!"),
}).required();

function App (){

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver (schema)
  });

  const onSubmit = data => console.log(data);


  return (
    <div className='container'>
      <form onSubmit = {handleSubmit(onSubmit)}>

        <div class="form-group">
        <label>Primeiro Nome</label>
          <input type="text" class="form-control" name="Name" {...register("Name")}/>
          <p>{errors.Name?.message}</p>
        </div>

        <div class="form-group">
        <label>Email Pessoal</label>
          <input type="text" class="form-control" name="email" {...register("email")}/>
          <p>{errors.email?.message}</p>
        </div>

        <div class="form-group">
          <label>Telefone</label>
          <input type="tel" class="form-control" name="telefone" {...register("telefone")}/>
          <p>{errors.telefone?.message}</p>
        </div>

        <div>
          <h4>Qual área deseja consultar?</h4>
        <select>
          <option value="Clínico geral">Clínico geral</option>
          <option value="Ortopedista">Ortopedista</option>
          <option selected value="Dentista">Dentista</option>
          <option value="Cardiologista">Cardiologista</option>
        </select>
        </div>

        <div class="form-group">
          <h5>Comentario</h5>
          <textarea type="text" class="form-control" name="content" {...register("comentario")}></textarea>
          <p>{errors.comentario?.message}</p>
        </div>

        <div class="form-group">
        <label>Observação</label>
          <input type="text" class="form-control" name="comment" {...register("observacao")}/>
          <p>{errors.observacao?.message}</p>
        </div>

        <div class="form-group">
          <label>Data de registro</label>
          <input type="datetime" class="form-control" name="data" {...register("data")}/>
          <p>{errors.data?.message}</p>
        </div>


        <input type="submit" value="submit" className="btn btn-primary"/>
      </form>
     
    </div>
  );
}

export default App;