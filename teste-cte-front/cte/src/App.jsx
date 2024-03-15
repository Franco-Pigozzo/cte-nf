import { useState } from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/register', {
      email,
      senha
    })
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangeSenha = (e) => {
    setSenha(e.target.value);
  }

  return (
    <div>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="m-48">
            <label class="block text-red-700 text-sm font-bold mb-4" for="username">
              CNPJ
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          </div>
          <div class="mb-10">
            <label class="block text-gray-700 text-sm font-bold mb-4" for="password">
              Senha
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            <p class="text-red-500 text-xs italic">Por favor coloque a senha</p>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          
        </p>
      </div>
    </div>
  )

  
}

export default App