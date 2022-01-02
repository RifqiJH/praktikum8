function tampilkanSemuaMenu() {
    $.getJSON('data/menu.json', function (data){
        let menu = data.menu;
        $.each(menu, function(i, data){
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><p>Harga : Rp. '+ data.harga +',-</p><p>Estimasi : '+ data.estimasi +' menit</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}

tampilkanSemuaMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if(kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('data/menu.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data){
            if( data.jenis == kategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><p>Harga : Rp. '+ data.harga +',-</p><p>Estimasi : '+ data.estimasi +' menit</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        $('#daftar-menu').html(content);
    });
});