Persiapan untuk menjalankan project nya

1. download Xampp,node Js, composer (jika belum punya) , pastikan install xampp yang mempunya php versi>=8

2. jika sudah mendownload xampp , start apache dan mysql

3. Lalu ketikan link ini "http://localhost:8080/phpmyadmin/" pada URL bar

4. buat database yang bernama laravel-vue, atau bisa di lihat di bagian file .env.example pada DB_DATABASE

5. Lalu buka terminal pada direktori project, lalu ketikan "php artisan migrate:fresh --seed"

6. jalankan project nya dengan mengetikan di terminal "php artisan serve"

7. buka google Browser, lalu ketikan "http://localhost:8000/" pada URL bar
