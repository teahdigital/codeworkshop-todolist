<?php
class BoardsTableSeeder extends Seeder{

    public function run() {
        DB::table('boards')->delete();
        $boards = array(
            array(
                'name'=>'Desarrollo',
                'description'=>'Lorem ipsum dolor sit amet.',
                'slug'=>'desarrollo',
                'color'=>'',
                'icon'=>'code'
            ),
            array(
                'name'=>'Producción',
                'description'=>'Lorem ipsum dolor sit amet.',
                'slug'=>'produccion',
                'color'=>'red',
                'icon'=>'view_list'
            )
        );       
        DB::table('boards')->insert($boards);
    }

}
