<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User; // Alteração aqui

class CadastroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([ // Alteração aqui
            'name' => 'Seu Nome',
            'email' => 'seu1@email.com',
            'password' => Hash::make('sua_senha'),
        ]);
    }
}
